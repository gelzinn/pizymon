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

        position: relative;

        @media (min-width: 900px) {
          &:not(:last-child) {
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

        &:last-child {
          padding: 1rem 1.5rem;
          background: var(--english-violet-50);

          transition: 0.25s all ease;

          &:hover {
            background: var(--english-violet);
          }
        }
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

        &.menu-opened {
          transform: translateY(0);
        }
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
