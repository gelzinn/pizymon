import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "~/components/Header";
import PokeballLoading from "~/components/Loadings/PokeballLoading";
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

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
          {pokemon && pokemon.sprites ? (
            <>
              <div className="info">
                <h1 className="title-kanit">{pokemon.name}</h1>
                <p>
                  {pokemon.types &&
                    pokemon.types.map((singleType) => {
                      return <li>{singleType.type.name}</li>;
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
