import styled from "styled-components";

export const PokedexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3rem;
`;

export const PokedexCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  list-style: none;

  gap: 1rem;

  > li {
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
      width: 100px;
      height: 100%;

      border-right: 0.15rem solid var(--dark-purple);
      background: var(--english-violet-50);

      object-fit: cover;

      pointer-events: none;
      user-select: none;

      &#animated {
        display: none;

        width: 100px;
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

      > p {
        display: flex;

        font-size: 0.75rem;
        text-transform: uppercase;

        gap: 0.5rem;
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

    &:hover {
      background: var(--english-violet-50);

      > img {
        &:not(#animated) {
          display: none;
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
`;
