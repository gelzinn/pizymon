import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "~/components/Header";
import PokeballLoading from "~/components/Loadings/PokeballLoading";
import { PokedexCards, PokedexContainer } from "~/styles/pages/pokedex";

const Pokedex: NextPage = () => {
  const [pokelist, setPokelist] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=500`)
      .then((response) => response.json())
      .then(function (pokemons) {
        pokemons.results.forEach(async function (pokemon) {
          await fetch(pokemon.url)
            .then((response) => response.json())
            .then((singleData) => setPokelist((prev) => [...prev, singleData]));
        });
      });
  }, []);

  return (
    <>
      <Head>
        <title>PIZYMON · Pokedéx - Conheça todos os pokémons!</title>
      </Head>

      <Header />
      <main>
        <PokedexContainer>
          <h1 className="title-kanit">Pokédex</h1>
          <PokedexCards>
            {pokelist ? (
              pokelist
                .sort(function (a, b) {
                  return a - b;
                })
                .map((pokemon) => {
                  return (
                    <Link
                      key={pokemon.id}
                      href={`/pokemon/${pokemon.name}`}
                      // href={`/pokemon/${pokemon.id}`}
                    >
                      <li id={pokemon.name}>
                        {pokemon.sprites && (
                          <>
                            <img
                              src={pokemon.sprites.front_default}
                              alt={pokemon.name}
                            />
                            {/* <img
                            id="animated"
                            src={
                              pokemon.sprites.pokemon?.versions.generation-v.black-white.animated
                            }
                            alt={pokemon.name}
                          /> */}
                          </>
                        )}

                        <div>
                          <span>{pokemon.name}</span>
                          <p>
                            {pokemon.types.map((singleType) => {
                              return <li>{singleType.type.name}</li>;
                            })}
                          </p>
                        </div>
                        <i>{pokemon.id}</i>
                      </li>
                    </Link>
                  );
                })
            ) : (
              <PokeballLoading />
            )}
          </PokedexCards>
        </PokedexContainer>
      </main>
    </>
  );
};

export default Pokedex;
