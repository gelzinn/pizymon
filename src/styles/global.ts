import { createGlobalStyle } from "styled-components";

import { Variables } from "./variables";

export const GlobalStyles = createGlobalStyle`
  ${Variables}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Work Sans", system-ui;
  }
  body {
    background: var(--background);
    color: var(--white);
    background-position: center;
    background-image: radial-gradient(circle at 1px 1px, var(--english-violet) 1px, transparent 0);
    background-size: 3.125rem 1.875rem;
    overflow-x: hidden;

    .title-kanit {
      font-family: "Kanit";
      font-weight: normal;
      font-size: 2.5rem;
      line-height: 100%;

      @media (max-width: 978px) {
        font-size: 1.5rem;
      }
    }
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    min-height: calc(100vh - 80px);

    margin: 0 auto;

    > div {
        width: 100%;
        padding: 3rem 1rem;
    }
  }
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100vw;
    height: max-content;
    overflow-x: hidden;
    background: var(--background);
    color: var(--white);
    &::-webkit-scrollbar {
      width: .5rem;
    }
    &::-webkit-scrollbar-track {
      background: var(--raisin-black);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--english-violet);
      border-radius: 9999px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--english-violet-50);
    }
  }
  button {
    border: unset;
  }
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;
