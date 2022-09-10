import type { NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";
import { Presentation, Services } from "~/styles/pages/home";
import { Play } from "phosphor-react";
import Link from "next/link";

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
            {/* <div className="pokeball">
              <div className="pokeball__button"></div>
            </div> */}
            <h1 className="title-kanit">Capture essa chance, treinador!</h1>
            <p>O seu limite é definido apenas à sua quantidade de pokebolas.</p>
            <a href="/">
              Começar minha jornada <Play weight="fill" />
            </a>
          </div>
          <img
            src="../pokemon-assets/mewtwo-pokemon-clipart.png"
            alt="Mewtwo victory pose"
          />
        </Presentation>

        <h1 className="title-kanit">Outros serviços</h1>

        <Services>
          <div>
            <div>
              <h1 className="title-kanit">Centro Pokémon</h1>
              <p>
                Estruturas onde os Pokémons são cuidados para voltarem à
                batalha.
              </p>
            </div>

            <img
              src="../pokemon-assets/single_pokemon_center.png"
              alt="Centro Pokémon"
            />

            <a href="/">Dar uma olhada</a>
          </div>

          <div>
            <div>
              <h1 className="title-kanit">Pokédex</h1>
              <p>Você pode conhecer cada criaturinha em detalhes.</p>
            </div>

            <img src="../pokemon-assets/pokedex.webp" alt="Pokédex" />

            <Link href="/pokedex">Dar uma olhada</Link>
          </div>
        </Services>
      </main>
    </>
  );
};

export default Home;
