import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <nav>
        <a id="logo" href="/">
          <img src="../pizymon.svg" alt="PIZYMON logo" />
          <span>PIZYMON</span>
        </a>
        <ul>
          <a href="/">Início</a>
          <a href="/pokedex">Pokédex</a>
          <a href="/">Centro Pokémon</a>
          <a href="/">Quero ser um treinador</a>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
