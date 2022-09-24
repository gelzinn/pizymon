import type { NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";
import { Presentation, Services } from "~/styles/pages/home";
import { Play } from "phosphor-react";
import Link from "next/link";
import Footer from "~/components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          PIZYMON · Uma plataforma de estatísticas, trocas e muito mais sobre o
          mundo Pokémon.
        </title>
      </Head>

      <Header />
      <main>
        <Presentation>
          <div className="slogan">
            <h1 className="title-kanit">Capture essa chance, treinador!</h1>
            <p>
              Pare apenas quando suas pokebolas acabarem, porque seus pokémons
              não vão!
            </p>
            <a href="/">
              Começar minha jornada <Play weight="fill" />
            </a>
          </div>
          <img
            src="../pokemon-assets/mewtwo-pokemon-clipart.png"
            alt="Mewtwo victory pose"
          />
        </Presentation>

        <h1 className="title-kanit">Mais do mundo Pokémon</h1>

        <Services>
          <Link href="/">
            <div>
              <img
                src="../pokemon-assets/single_pokemon_center.png"
                alt="Centro Pokémon"
              />

              <div>
                <h1 className="title-kanit">Centro Pokémon</h1>
                <p>
                  Estruturas onde os Pokémons são cuidados para voltarem à
                  batalha.
                </p>
              </div>

              <a href="/">Dar uma olhada</a>
            </div>
          </Link>

          <Link href="/pokedex">
            <div>
              <img src="../pokemon-assets/pokedex.webp" alt="Pokédex" />

              <div>
                <h1 className="title-kanit">Pokédex</h1>
                <p>Você pode conhecer cada uma das criaturinhas em detalhes.</p>
              </div>

              <a>Dar uma olhada</a>
            </div>
          </Link>

          <Link href="/">
            <div>
              <img
                id="bigger"
                src="../eevee_evolutions.png"
                alt="Eevee Evolutions"
              />

              <div>
                <h1 className="title-kanit">Monte seu time</h1>
                <p>
                  Que tal novos companheiros para sua nova jornada como
                  treinador?
                </p>
              </div>

              <a>Dar uma olhada</a>
            </div>
          </Link>
        </Services>
      </main>

      <Footer />
    </>
  );
};

export default Home;
