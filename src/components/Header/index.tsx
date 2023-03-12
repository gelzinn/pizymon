import { Heartbeat, Question } from "phosphor-react";
import { useEffect, useState } from "react";
import { HeaderContainer } from "./styles";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [login, setLogin] = useState(false);
  const body = document.querySelector("body") as HTMLElement;

  const handleToggleMenu = () => setOpenMenu(!openMenu);

  const handleToggleLoggin = () => setLogin(!login);

  // https://static.pokemonpets.com/images/avatars/114-Mew_2.webp

  useEffect(() => {
    if (openMenu) {
      body.classList.add("open");
    } else {
      body.classList.remove("open");
      body.removeAttribute("class");
    }
  }, [openMenu]);

  return (
    <HeaderContainer>
      <nav>
        <a id="logo" href="/">
          <img src="../pizymon.svg" alt="PIZYMON logo" />
          <span>PIZYMON</span>
        </a>
        <ul className={openMenu ? "menu-opened" : null}>
          <a href="/">Início</a>
          <a href="/pokedex">Pokédex</a>
          {/* {login && (
            <>
              <a href="/">Centro Pokémon</a>
              <a onClick={handleToggleLoggin} className="user">
                <img
                  src="https://static.pokemonpets.com/images/avatars/113-Lugia.webp"
                  alt="User avatar"
                />
              </a>
            </>
          )} */}

          {!login && (
            <a id="trainer" onClick={handleToggleLoggin}>
              Quero ser um treinador
            </a>
          )}

          <div className="help">
            <div id="help">
              <Question />
            </div>

            {/* {login && (
              <div id="health">
                <Heartbeat />
              </div>
            )} */}
          </div>
        </ul>
        <button
          className={
            openMenu ? "burger-container menu-opened" : "burger-container"
          }
          onClick={handleToggleMenu}
        >
          <div className="burger">
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </button>
      </nav>
    </HeaderContainer>
  );
}
