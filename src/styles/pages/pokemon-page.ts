import styled from "styled-components";

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  .pokemon-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;

    gap: 5rem;
    width: 100%;

    > div {
      display: flex;
      flex: 1 1 500px;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 5rem;
      width: 100%;

      > img {
        width: 100%;
        max-width: 400px;
        height: 100%;

        object-fit: cover;

        filter: saturate(200%);

        pointer-events: none;
        user-select: none;

        @media (max-width: 500px) {
          max-width: 75%;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        list-style: none;

        > p {
          display: flex;

          font-size: 1rem;
          text-transform: uppercase;

          gap: 0.5rem;
        }

        > h1 {
          font-size: 4rem;
          text-transform: capitalize;
        }
      }
    }

    .details {
      width: 100%;
      max-width: 50%;

      border: 0.15rem solid var(--dark-purple);
      border-radius: 1rem;
      background: var(--english-violet-50);

      gap: unset;
      overflow: hidden;

      > span {
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: bold;
        text-transform: uppercase;

        width: 100%;
        height: 50px;

        background: var(--english-violet-50);
      }

      > p {
        display: flex;
        flex-wrap: wrap;

        width: 100%;

        font-size: 1rem;
        text-transform: uppercase;

        padding: 1rem;

        gap: 1rem;
        list-style: none;
      }

      @media (max-width: 1112px) {
        max-width: unset;
      }
    }
  }
`;
