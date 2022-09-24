import { FooterContainer } from "./styles";

export default function Footer() {
  const actual = new Date();
  const actualYear = actual.getFullYear();

  return (
    <FooterContainer>
      <a id="logo" href="/">
        <img src="../pizymon.svg" alt="PIZYMON logo" />
        <span>PIZYMON</span>
      </a>
      <div>
        <p>
          {actualYear} <a href="https://pizygroup.vercel.app">PIZY Group</a> ©
          Todos os direitos reservados.
        </p>
        <p>
          PIZY e PIZYMON são marcas reservadas à{" "}
          <a href="https://pizygroup.vercel.app">PIZY Group</a>.
        </p>
      </div>
    </FooterContainer>
  );
}
