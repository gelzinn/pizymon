import styled from "styled-components";

export const PokedexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3rem;
`;

export const PokedexSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: calc(1200px - 2rem);

  border: 0.15rem solid var(--dark-purple);
  border-radius: 1rem;
  padding: 0.75rem 1rem;

  gap: 0.5rem;

  color: var(--brand-red);
  cursor: text;

  > svg {
    width: 100%;
    max-width: 1.25rem;
    height: 100%;

    cursor: pointer;
  }

  > input {
    width: 100%;
    background: unset;
    border: unset;
    outline: none;
    font-size: 1rem;

    color: var(--white);
  }
`;

export const PokedexCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  list-style: none;
  width: 100%;

  gap: 1rem;

  > li {
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 350px;

    width: 100%;
    height: 100px;

    border: 0.15rem solid var(--dark-purple);
    border-radius: 1rem;

    gap: 1rem;
    overflow: hidden;

    cursor: pointer;
    transition: 0.25s all ease;

    > img {
      flex: 1;
      flex-basis: 100px;
      width: 100px;
      height: 100%;

      border-right: 0.15rem solid var(--dark-purple);
      background: var(--english-violet-50);

      object-fit: cover;
      padding: 0.5rem;

      pointer-events: none;
      user-select: none;

      &#animated {
        position: absolute;
        top: 0;
        left: 0;

        display: none;

        width: 98px;
        height: 100%;

        padding: 1.45rem;

        filter: saturate(175%);
        object-fit: contain;
      }
    }

    > div {
      width: 100%;

      > span {
        font-size: 1.25rem;
        font-weight: bold;
        text-transform: capitalize;
      }

      > ul {
        display: flex;

        font-size: 0.75rem;
        text-transform: uppercase;

        gap: 0.5rem;
        list-style: none;
      }
    }

    > i {
      text-align: center;

      width: 100%;
      max-width: 50px;

      font-weight: normal;
      font-style: normal;
      font-size: 0.85rem;
    }

    &:not(.loading) {
      &:hover {
        background: var(--english-violet-50);

        > img {
          &:not(#animated) {
            visibility: hidden;
          }

          &#animated {
            display: block;
          }
        }

        @media (min-width: 748px) {
          flex: 1 1 400px;
        }
      }
    }

    &.loading {
      #pokeballLoading {
        width: 100%;
        max-width: 100px;

        padding: 1.75rem;

        border-right: 0.15rem solid var(--dark-purple);
        background: var(--english-violet-50);
      }

      > div:not(#pokeballLoading) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        gap: 0.5rem;

        width: 100%;
        height: 75%;

        margin-right: 1rem;

        > div {
          width: 100%;
          height: 20px;

          border-radius: 1rem;
          background: var(--english-violet-50);
        }

        > ul {
          width: 50%;
          height: 20px;

          > div {
            width: 100%;
            height: 20px;

            border-radius: 1rem;
            background: var(--english-violet-50);
          }
        }
      }
    }
  }
`;
