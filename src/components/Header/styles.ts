import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;

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
    }

    > ul {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 1rem;
      list-style: none;

      > a {
        text-decoration: none;
        color: var(--white);

        padding: 1rem;
        border-radius: 0.5rem;

        position: relative;

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
        display: none;
      }
    }
  }
`;
