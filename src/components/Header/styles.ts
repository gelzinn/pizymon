import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  z-index: 10;

  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    #logo {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      text-decoration: none;
      color: var(--white);

      z-index: 11;

      > img {
        width: 100%;
        padding: 1rem;
        height: 100%;

        filter: grayscale(1) brightness(1000%);

        pointer-events: none;
        user-select: none;
      }

      > span {
        font-weight: 700;
        font-size: 1.35rem;
        font-style: italic;

        @media (max-width: 550px) {
          display: none;
        }
      }

      @media (max-width: 900px) {
        min-width: 80px;
      }
    }

    > ul {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 1rem;
      list-style: none;

      z-index: 10;

      > a {
        text-decoration: none;
        color: var(--white);

        padding: 1rem;
        border-radius: 0.5rem;

        cursor: pointer;
        position: relative;

        &#trainer {
          padding: 1rem 1.5rem;
          background: var(--english-violet-50);

          transition: 0.25s all ease;

          &:hover {
            background: var(--english-violet);
          }
        }

        @media (min-width: 900px) {
          &:not(#trainer):not(.user) {
            &:before {
              content: "";
              display: block;
              position: absolute;
              background: var(--dark-purple);
              height: 0.1rem;
              width: 0;
              bottom: 0;
              right: 0;
              z-index: -1;

              background-position: 50% 100%;

              transition: 0.35s all ease;
            }

            &:hover {
              &:before {
                width: 100%;
              }
            }
          }
        }

        @media (max-width: 900px) {
          text-align: center;
          width: 100%;

          opacity: 0;
          transform: translateY(100%);

          &#trainer {
            max-width: 80%;
          }
        }
      }

      .user {
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
          width: 100%;
          max-width: 5rem;
          height: 100%;
          max-height: 5rem;

          object-fit: cover;

          pointer-events: none;
          user-select: none;

          @media (min-width: 900px) {
            max-width: 3rem;
            max-height: 3rem;
          }
        }
      }

      .help {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        max-height: 80px;

        gap: 1rem;
        cursor: help;

        transition: 0.25s all ease;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 0.5rem;
        }

        &:hover {
          transform: translateY(-0.15rem);
        }

        @media (max-width: 900px) {
          position: absolute;

          bottom: 0;

          width: 100%;
          max-height: 80px;

          background: var(--english-violet-50);

          svg {
            width: 1.5rem;
            height: 1.5rem;
          }

          #help:after {
            content: "Ajuda";
          }

          /* #health:after {
            content: "Pokémons";
          } */
        }
      }

      @media (min-width: 900px) {
      }

      @media (max-width: 900px) {
        position: absolute;
        top: 0;
        left: 0;

        flex-direction: column;
        transform: translateY(-100%);

        background: var(--dark-purple);
        transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);

        height: 100vh;
        width: 100%;

        &:after {
          position: absolute;
          top: 0;

          opacity: 0;

          content: "";
          background: var(--english-violet-50);
          width: 100%;
          height: 0;
        }

        &.menu-opened {
          transform: translateY(0);

          > a {
            opacity: 1;
            transform: translateY(0);

            transition: 0.75s all ease-out;
          }

          &:after {
            opacity: 1;
            height: 80px;
            transition: 0.5s all ease-out;
          }
        }
      }

      @media (max-height: 500px) {
        padding-top: 80px;
      }
    }

    > .burger-container {
      position: relative;
      display: flex;
      height: 80px;
      width: 80px;

      background: unset;
      border: unset;

      cursor: pointer;
      z-index: 11;

      transform: rotate(0deg);
      transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);

      user-select: none;
      -webkit-tap-highlight-color: #0000;

      @media (min-width: 900px) {
        display: none;
      }

      .burger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        > .bar {
          width: 100%;
          max-width: 2rem;
          height: 1px;

          background: #fff;
          transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
          transition-delay: 0s;

          &:first-child {
            transform: translateY(-3px) rotate(0deg);
          }

          &:last-child {
            transform: translateY(3px) rotate(0deg);
          }
        }
      }

      &.menu-opened {
        transform: rotate(-90deg);

        .burger {
          > .bar {
            transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
            /* transition-delay: 0.2s; */

            &:first-child {
              transform: translateY(0) rotate(45deg);
            }

            &:last-child {
              transform: translateY(0) rotate(-45deg);
            }
          }
        }
      }
    }
  }
`;
