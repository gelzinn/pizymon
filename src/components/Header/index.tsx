import { Heartbeat, Question } from "phosphor-react";
import { useEffect, useState } from "react";
import { HeaderContainer } from "./styles";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const body = document.querySelector("body") as HTMLElement;

  const handleToggleMenu = () => setOpenMenu(!openMenu);

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
          <a id="trainer">
            Quero ser um treinador
          </a>

          <div className="help">
            <div id="help">
              <Question />
            </div>
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
