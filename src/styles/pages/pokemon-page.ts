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
    align-items: stretch;

    width: 100%;

    border: 0.15rem solid var(--dark-purple);
    border-radius: 1rem;
    background: var(--english-violet-50);

    overflow: hidden;

    > div {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      /* gap: 5rem; */
      width: 100%;

      &.pokemon {
        padding: 2rem 0;

        @media (max-width: 978px) {
          padding: 1rem;
        }
      }

      > img {
        width: 100%;

        object-fit: contain;

        filter: saturate(200%);
        padding: 4rem;

        pointer-events: none;
        user-select: none;

        @media (max-width: 978px) {
          padding: 2rem 0 0;
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

          @media (max-width: 978px) {
            font-size: 2rem;
          }
        }
      }
    }

    .details {
      width: 100%;
      max-width: 50%;

      flex: 1;

      border-left: 0.15rem solid var(--dark-purple);
      border-top-right-radius: 1rem;

      gap: unset;
      overflow: hidden;

      > .titles {
        display: flex;
        justify-content: space-between;
        align-items: center;

        text-transform: uppercase;

        box-shadow: inset 0 -0.15rem 0 var(--dark-purple);

        width: 100%;
        height: 50px;
        overflow: hidden;

        > span {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          height: 100%;

          text-align: center;
          cursor: pointer;
          transition: 0.25s all ease;

          &:nth-child(1) {
            border-color: var(--dark-purple);
            border-style: solid;
            border-width: 0 0.15rem 0 0;
          }

          &:nth-child(2) {
            border-color: var(--dark-purple);
            border-style: solid;
            border-width: 0 0.15rem 0 0;
          }

          &:not(.selected):hover {
            background: var(--english-violet-50);
          }

          &.selected {
            font-weight: bold;
            background: var(--english-violet-50);
          }

          @media (max-width: 978px) {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 978px) {
          box-shadow: inset 0 -0.15rem 0 var(--dark-purple),
            inset 0 0.15rem 0 var(--dark-purple);
        }
      }

      .page {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;

        padding: 1rem;

        > span {
          font-size: 1rem;
          text-transform: uppercase;

          list-style: none;

          &:not(:first-child) {
            margin: 1rem 0;
          }

          &:first-child {
            margin-bottom: 1rem;
          }
        }

        > p {
          color: var(--support);

          &:not(#biography) {
            text-transform: capitalize;
          }
        }

        > ul {
          list-style: disc;
          padding-left: 1.25rem;

          > li {
            text-transform: capitalize;
            color: var(--support);
          }
        }

        > div {
          display: flex;

          > div {
            display: flex;
            flex-direction: column;

            width: 100%;
            margin-top: 1rem;

            gap: 0.5rem;

            > span {
              font-size: 1rem;
              text-transform: uppercase;

              list-style: none;
            }

            > p {
              display: flex;
              align-items: center;

              gap: 0.5rem;

              color: var(--support);

              > span {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                > svg {
                  &#genderMale {
                    color: #3153ff;
                  }

                  &#genderFemale {
                    color: #ff69d7;
                  }
                }
              }
            }
          }
        }
      }

      @media (max-width: 978px) {
        border-top-right-radius: unset;
      }

      @media (max-width: 1112px) {
        max-width: unset;
      }
    }

    @media (max-width: 978px) {
      flex-wrap: unset;

      flex-direction: column;
    }
  }
`;
