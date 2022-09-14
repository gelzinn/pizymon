import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { MagnifyingGlass, X } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "~/components/Header";
import PokeballLoading from "~/components/Loadings/PokeballLoading";
import {
  PokedexCards,
  PokedexContainer,
  PokedexSearch,
} from "~/styles/pages/pokedex";

const Pokedex: NextPage = () => {
  const { ref: loadMorePokemons, inView } = useInView();
  const SearchBarRef = useRef(null);

  const [pokelist, setPokelist] = useState([]);
  const [pokeLength, setPokeLength] = useState(50);
  const [pokeSearched, setPokeSearched] = useState<any>([]);
  const [pokeSearchedError, setPokeSearchedError] = useState(false);
  const [pokeNextPage, setPokeNextPage] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50`)
      .then((response) => response.json())
      .then(function (pokemons) {
        setPokeNextPage(pokemons.next);
        pokemons.results.forEach(async function (pokemon) {
          await fetch(pokemon.url)
            .then((response) => response.json())
            .then((singleData) => setPokelist((prev) => [...prev, singleData]));
        });
      });
  }, []);

  useEffect(() => {
    if (inView && pokeNextPage) {
      fetch(pokeNextPage)
        .then((response) => response.json())
        .then(function (pokemons) {
          setPokeNextPage(pokemons.next);
          pokemons.results.forEach(async function (pokemon) {
            await fetch(pokemon.url)
              .then((response) => response.json())
              .then((singleData) =>
                setPokelist((prev) => [...prev, singleData])
              );
          });
        });
    }
  }, [inView, pokeLength]);

  useEffect(() => {
    if (search && search.length > 0) {
      setPokeSearched(null);

      const delayDebounce = setTimeout(() => {
        const searchPokemon = async () => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then(
            async (response) => {
              if (response.status === 200) {
                const res = await response.json();
                setPokeSearched(res);
              } else {
                setPokeSearchedError(true);
                setPokeSearched(null);
                setSearch(null);
              }
            }
          );
        };

        searchPokemon();
      }, 3000);

      return () => clearTimeout(delayDebounce);
    }
  }, [search]);

  return (
    <>
      <Head>
        <title>PIZYMON · Pokedéx - Conheça todos os pokémons!</title>
      </Head>

      <Header />
      <main>
        <PokedexContainer>
          <h1 className="title-kanit">Pokédex</h1>
          <PokedexSearch
            onClick={() => {
              SearchBarRef.current.focus();
            }}
          >
            <MagnifyingGlass />
            <input
              type="text"
              ref={SearchBarRef}
              placeholder="Encontre seu pokémon..."
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <X
                onClick={() => {
                  SearchBarRef.current.value = "";
                  setSearch("");
                  setPokeSearched(null);
                }}
              />
            )}
          </PokedexSearch>
          {search && (
            <>
              {pokeSearched ? (
                <>
                  {pokeSearchedError ? (
                    <h3 className="subtitle-kanit">Sem resultados.</h3>
                  ) : (
                    <>
                      <h3 className="subtitle-kanit">
                        Resultados para "{search}"
                      </h3>
                      <PokedexCards>
                        <Link href={`/pokedex/${pokeSearched.name}`}>
                          <li id={pokeSearched.name} style={{ width: "100%" }}>
                            {pokeSearched.sprites && (
                              <>
                                <img
                                  src={pokeSearched.sprites.front_default}
                                  alt={pokeSearched.name}
                                />
                                {(() => {
                                  switch (pokeSearched.name) {
                                    case pokeSearched.name.includes("mega"):
                                      return (
                                        <img
                                          id="animated"
                                          src={`http://play.pokemonshowdown.com/sprites/xyani/${
                                            pokeSearched.name.split("-")[0] +
                                            "-" +
                                            pokeSearched.name
                                              .toString()
                                              .split("-")
                                              .slice(1, 3)
                                              .join("")
                                          }.gif`}
                                          alt={pokeSearched.name}
                                        />
                                      );

                                    case pokeSearched.name.includes("normal"):
                                      return (
                                        <img
                                          id="animated"
                                          src={`http://play.pokemonshowdown.com/sprites/xyani/${pokeSearched.name.replace(
                                            "normal",
                                            ""
                                          )}.gif`}
                                          alt={pokeSearched.name}
                                        />
                                      );

                                    case pokeSearched.name.includes(
                                      "rock-star"
                                    ):
                                      return (
                                        <img
                                          id="animated"
                                          src={`http://play.pokemonshowdown.com/sprites/xyani/${pokeSearched.name.replace(
                                            "rock-star",
                                            "rockstar"
                                          )}.gif`}
                                          alt={pokeSearched.name}
                                        />
                                      );

                                    default:
                                      return (
                                        <img
                                          id="animated"
                                          src={`http://play.pokemonshowdown.com/sprites/xyani/${pokeSearched.name.replace(
                                            /-/g,
                                            ""
                                          )}.gif`}
                                          alt={pokeSearched.name}
                                        />
                                      );
                                  }
                                })()}
                              </>
                            )}

                            {pokeSearched && pokeSearched.name && (
                              <>
                                <div>
                                  <span>
                                    {pokeSearched.name.replace(/-/g, " ")}
                                  </span>
                                  <ul>
                                    {pokeSearched.types.map((singleType) => {
                                      return (
                                        <li key={singleType.type.name}>
                                          {singleType.type.name}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                <i>{pokeSearched.id}</i>
                              </>
                            )}
                          </li>
                        </Link>
                      </PokedexCards>
                    </>
                  )}
                </>
              ) : (
                <>
                  {" "}
                  <h3 className="subtitle-kanit">Estamos procurando...</h3>
                  <PokeballLoading />
                </>
              )}
            </>
          )}
          {pokelist ? (
            <>
              <PokedexCards>
                {pokelist.sort().map((pokemon) => {
                  return (
                    <Link key={pokemon.id} href={`/pokedex/${pokemon.name}`}>
                      <li id={pokemon.name}>
                        {pokemon.sprites && (
                          <>
                            <img
                              src={pokemon.sprites.front_default}
                              alt={pokemon.name}
                            />
                            {(() => {
                              switch (pokemon.name) {
                                case pokemon.name.includes("mega"):
                                  return (
                                    <img
                                      id="animated"
                                      src={`http://play.pokemonshowdown.com/sprites/xyani/${
                                        pokemon.name.split("-")[0] +
                                        "-" +
                                        pokemon.name
                                          .toString()
                                          .split("-")
                                          .slice(1, 3)
                                          .join("")
                                      }.gif`}
                                      alt={pokemon.name}
                                    />
                                  );

                                case pokemon.name.includes("normal"):
                                  return (
                                    <img
                                      id="animated"
                                      src={`http://play.pokemonshowdown.com/sprites/xyani/${pokemon.name.replace(
                                        "normal",
                                        ""
                                      )}.gif`}
                                      alt={pokemon.name}
                                    />
                                  );

                                case pokemon.name.includes("rock-star"):
                                  return (
                                    <img
                                      id="animated"
                                      src={`http://play.pokemonshowdown.com/sprites/xyani/${pokemon.name.replace(
                                        "rock-star",
                                        "rockstar"
                                      )}.gif`}
                                      alt={pokemon.name}
                                    />
                                  );

                                default:
                                  return (
                                    <img
                                      id="animated"
                                      src={`http://play.pokemonshowdown.com/sprites/xyani/${pokemon.name.replace(
                                        /-/g,
                                        ""
                                      )}.gif`}
                                      alt={pokemon.name}
                                    />
                                  );
                              }
                            })()}
                          </>
                        )}

                        <div>
                          <span>{pokemon.name.replace(/-/g, " ")}</span>
                          <ul>
                            {pokemon.types.map((singleType) => {
                              return (
                                <li key={singleType.type.name}>
                                  {singleType.type.name}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <i>{pokemon.id}</i>
                      </li>
                    </Link>
                  );
                })}
              </PokedexCards>
              <div
                style={{ visibility: "hidden" }}
                ref={loadMorePokemons}
              ></div>
            </>
          ) : (
            <PokeballLoading />
          )}
        </PokedexContainer>
      </main>
    </>
  );
};

export default Pokedex;
