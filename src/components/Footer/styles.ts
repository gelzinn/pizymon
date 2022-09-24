import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  padding: 2rem 1rem;
  margin: 0 auto;

  gap: 4rem;

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
      max-width: 80px;
      height: 100%;
      max-height: 80px;

      padding: 1rem;

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

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;

    width: 100%;
    gap: 1rem;

    a {
      color: var(--primary);

      &:hover {
        color: var(--english-violet);
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    > div {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 0.5rem;
    }
  }
`;
