import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import Header from "~/components/Header";
import PokeballLoading from "~/components/Loadings/PokeballLoading";
import { LinkHistory } from "~/styles/pages/home";
import { PokemonContainer } from "~/styles/pages/pokemon-page";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const data = await response.json();

  const paths = data.results.map((pokemon: any) => {
    return { params: { id: pokemon.name } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id }: any = context.params;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`
  );
  const data = await response.json();

  return {
    props: {
      pokemonData: data,
    },
    revalidate: 3600,
  };
};

const PokemonPage: NextPage = ({ pokemonData }: any) => {
  const [pokemon, setPokemon] = useState<any>([]);

  useEffect(() => {
    if (pokemonData) {
      setPokemon(pokemonData);
      console.log(pokemon);
    }
  }, [pokemonData]);

  return (
    <>
      <Head>
        <title>
          PIZYMON ·{" "}
          {pokemon && pokemon.name
            ? `Pokémon: ${
                pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
              }`
            : "Carregando..."}
        </title>
      </Head>

      <Header />
      <main>
        <PokemonContainer>
          {pokemon && pokemon.name && (
            <LinkHistory>
              <a href="/pokedex">Pokédex</a> <CaretRight />{" "}
              {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
            </LinkHistory>
          )}

          {pokemon && pokemon.sprites ? (
            <>
              <div className="pokemon-info">
                <div>
                  <div className="info">
                    <h1 className="title-kanit">{pokemon.name}</h1>
                    <p>
                      {pokemon.types &&
                        pokemon.types.map((singleType) => {
                          return (
                            <li key={singleType.type.name}>
                              {singleType.type.name}
                            </li>
                          );
                        })}
                    </p>
                  </div>
                  <img
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.id.toLocaleString(
                      "en",
                      {
                        minimumIntegerDigits: 3,
                      }
                    )}.png`}
                    alt={pokemon.name}
                  />
                </div>
                <div className="details">
                  <span>Ataques</span>
                  <p>
                    {pokemon.moves &&
                      pokemon.moves.map((singleMove) => {
                        return <li>{singleMove.move.name}</li>;
                      })}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <PokeballLoading />
          )}
        </PokemonContainer>
      </main>
    </>
  );
};

export default PokemonPage;
