import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { CaretRight, GenderFemale, GenderMale } from "phosphor-react";
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

  const pokemonDataResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`
  );
  const pokemonData = await pokemonDataResponse.json();

  const pokemonStatsSpeciesResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id.toLowerCase()}`
  );

  const pokemonStatsSpeciesData = await pokemonStatsSpeciesResponse.json();

  return {
    props: {
      pokemonData,
      pokemonStatsSpeciesData,
    },
    revalidate: 3600,
  };
};

type PokemonTabs = "biography" | "stats" | "evolutions";

const PokemonPage: NextPage = ({
  pokemonData,
  pokemonStatsSpeciesData,
}: any) => {
  const [pokemon, setPokemon] = useState<any>([]);
  const [pokemonSpecies, setPokemonSpecies] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<PokemonTabs>("biography");

  const [pokemonBiography, setPokemonBiography] = useState("");
  const [genderPercentage, setGenderPercentage] = useState(0);

  useEffect(() => {
    if (pokemonData) {
      setPokemon(pokemonData);
    }
  }, [pokemonData]);

  useEffect(() => {
    if (pokemonStatsSpeciesData) {
      setPokemonSpecies(pokemonStatsSpeciesData);
    }
  }, [pokemonStatsSpeciesData]);

  useEffect(() => {
    if (pokemonSpecies) {
      if (isNaN(pokemonSpecies.gender_rate)) {
        setGenderPercentage(
          Number(
            Number(pokemonSpecies.gender_rate) !== -1
              ? (Number(pokemonSpecies.gender_rate) / 8) * 100
              : -1
          )
        );
      } else {
        setGenderPercentage(
          pokemonSpecies.gender_rate !== -1
            ? (pokemonSpecies.gender_rate / 8) * 100
            : -1
        );
      }
    }
  }, [pokemonSpecies]);

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
                <div className="pokemon">
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
                  <div className="titles">
                    <span
                      className={activeTab === "biography" ? "selected" : null}
                      onClick={() => setActiveTab("biography")}
                    >
                      Biografia
                    </span>
                    <span
                      className={activeTab === "stats" ? "selected" : null}
                      onClick={() => setActiveTab("stats")}
                    >
                      Estatísticas
                    </span>
                    <span
                      className={activeTab === "evolutions" ? "selected" : null}
                      onClick={() => setActiveTab("evolutions")}
                    >
                      Evoluções
                    </span>
                  </div>
                  <div className="page">
                    <>
                      {pokemonSpecies ? (
                        <>
                          {(() => {
                            switch (activeTab) {
                              case "biography":
                                return (
                                  <>
                                    <span>Sobre</span>
                                    <p id="biography">
                                      {
                                        pokemonSpecies?.flavor_text_entries?.find(
                                          (text) => text.language.name === "en"
                                        )?.flavor_text
                                      }
                                    </p>
                                    <span>Espécies</span>
                                    <p>
                                      {
                                        pokemonSpecies.genera.find(
                                          (gen) => gen.language.name === "en"
                                        )?.genus
                                      }
                                    </p>
                                    <div>
                                      {" "}
                                      <div>
                                        <span>Altura</span>
                                        <p>{pokemon.height / 10} metros</p>
                                      </div>
                                      <div>
                                        <span>Peso</span>
                                        <p>
                                          {(pokemon.weight / 10).toFixed(1)} kg
                                        </p>
                                      </div>
                                    </div>
                                    <span>Habilidades</span>
                                    <ul>
                                      {pokemon.abilities.map(
                                        (ability, index) => (
                                          <li
                                            key={`ability=${ability.ability.name}`}
                                            className="capitalize"
                                          >
                                            {ability.ability.name}{" "}
                                            {ability.isHidden &&
                                              "(Hidden Ability)"}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                    <div>
                                      {genderPercentage === -1 ? (
                                        <>
                                          <div>
                                            <span>Gênero</span>
                                            <p>Sem gênero</p>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          <div>
                                            <span>Macho</span>
                                            <p>
                                              <span>
                                                <GenderMale id="genderMale" />
                                              </span>
                                              {Math.floor(
                                                100 - genderPercentage
                                              )}
                                              %
                                            </p>
                                          </div>
                                          <div>
                                            <span>Fêmea</span>
                                            <p>
                                              <span>
                                                <GenderFemale id="genderFemale" />
                                              </span>
                                              {Math.round(genderPercentage)}%
                                            </p>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                    <div>
                                      <div>
                                        <span>Porcentagem de Captura</span>
                                        <p>
                                          {Math.round(
                                            (pokemonSpecies.capture_rate /
                                              255) *
                                              100
                                          )}
                                          %
                                        </p>
                                      </div>
                                      <div>
                                        <span>Experiência Base</span>
                                        <p>{pokemon.base_experience || 0}</p>
                                      </div>
                                      <div>
                                        {" "}
                                        <span>Felicidade Base</span>
                                        <p>
                                          {pokemonSpecies.base_happiness || 0}
                                        </p>
                                      </div>
                                    </div>
                                    <span>Velocidade de Crescimento</span>
                                    <p>{pokemonSpecies.growth_rate.name}</p>
                                  </>
                                );

                              case "stats":
                                return <p>Em breve</p>;

                              case "evolutions":
                                return <p>Em breve</p>;

                              default:
                                setActiveTab("biography");
                            }
                          })()}
                        </>
                      ) : (
                        <PokeballLoading />
                      )}
                    </>
                  </div>
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
