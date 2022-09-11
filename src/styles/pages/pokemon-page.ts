import styled from "styled-components";

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5rem;

  > img {
    width: 100%;
    max-width: 500px;
    height: 100%;

    object-fit: cover;

    filter: saturate(200%);

    pointer-events: none;
    user-select: none;
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
`;
