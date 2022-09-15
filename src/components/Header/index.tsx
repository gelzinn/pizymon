import { useEffect, useState } from "react";
import { HeaderContainer } from "./styles";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const body = document.querySelector("body");

  const handleToggleMenu = () => setOpenMenu(!openMenu);

  useEffect(() => {
    if (openMenu) {
      body.classList.add("open");
    } else {
      body.classList.remove("open");
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
          <a href="/">Centro Pokémon</a>
          <a href="/">Quero ser um treinador</a>
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
