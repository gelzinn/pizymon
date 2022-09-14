import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "~/components/Header";
import PokeballLoading from "~/components/Loadings/PokeballLoading";
import { PokedexCards, PokedexContainer } from "~/styles/pages/pokedex";

const Pokedex: NextPage = () => {
  const [pokelist, setPokelist] = useState([]);

  useEffect(() => {
    console.log("http://play.pokemonshowdown.com/sprites/trainers/");

    // fetch(`http://play.pokemonshowdown.com/sprites/trainers/`)
    //   .then((response) => response.json())
    //   .then(function (pokemons) {
    //     pokemons.results.forEach(async function (pokemon) {
    //       await fetch(pokemon.url)
    //         .then((response) => response.json())
    //         .then((singleData) => setPokelist((prev) => [...prev, singleData]));
    //     });
    //   });
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
                    <li id={pokemon.name}>
                      <span>{pokemon.name}</span>
                    </li>
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
