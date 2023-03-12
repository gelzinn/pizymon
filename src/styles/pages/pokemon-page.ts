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

      gap: 2rem;
      width: 100%;

      &.pokemon {
        padding: 2rem 0;
        position: relative;

        > i {
          position: absolute;

          font-size: 18rem;
          font-weight: 800;

          width: 100%;
          text-align: center;

          line-height: 80%;

          color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--english-violet);

          mask-image: linear-gradient(to top, transparent, black, transparent);

          @media (min-width: calc(978px + 1)) {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          @media (max-width: 978px) {
            line-height: 100%;

            top: 0;

            font-size: 50vw;
            mask-image: linear-gradient(to bottom, black, transparent);
          }
        }

        @media (max-width: 978px) {
          padding: 1rem;
        }
      }

      > img {
        width: 100%;

        object-fit: contain;

        filter: saturate(200%);
        padding: 0 4rem;

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

        z-index: 2;

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

          &:not(#not-captalize) {
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

          &#base-stats {
            @media (min-width: 978px) {
              flex-wrap: wrap;

              > div {
                flex: 1 1 180px;
              }
            }

            @media (max-width: 978px) {
              flex-direction: column;
            }
          }

          /* &#with-separator {
            > div:not(:first-child) {
              border-left: 0.15rem solid var(--dark-purple);
              padding-left: 1rem;
            }
          } */

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

        .pokemon-stats {
          display: flex;
          flex-direction: column;

          width: 100%;
          height: 100%;

          .stats-container {
            display: grid;
            grid-template-columns: 30fr 10fr 40fr 10fr;
            justify-content: center;
            align-items: center;

            gap: 0;

            > span {
              font-size: 1rem;
              text-transform: uppercase;

              list-style: none;
            }

            > p {
              align-items: center;

              &:first-child {
                justify-content: flex-start;
                margin-right: 0.5rem;
              }

              &:last-child {
                margin-left: 0.5rem;
                justify-content: flex-end;
              }
            }

            &:not(:first-child) {
              margin-top: 1rem;
            }
          }

          .bar-quantity {
            display: flex;
            width: 100%;
            height: 100%;

            border-radius: 1rem;
            box-shadow: 0 1px 0 0.5px inset var(--dark-purple),
              0 -1px 0 0.5px inset var(--dark-purple);

            > div {
              /* background: linear-gradient(
                to right,
                transparent,
                var(--english-violet)
              ); */
              background: var(--english-violet);
              border-radius: 0.25rem;
            }
          }
        }
      }

      @media (min-width: 978px) {
        border-left: 0.15rem solid var(--dark-purple);
        border-top-right-radius: 1rem;
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

  .pokemon-evolutions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    gap: .5rem;

    > a {
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: .5rem;

      width: 100%;
      /* max-width: 200px; */
      height: 100%;

      border: 0.15rem solid var(--dark-purple);
      border-radius: 1rem;

      transition: 0.25s all ease;

      overflow: hidden;

      > img {
        width: 100%;
        max-width: 175px;
        padding: .25rem;

        z-index: 1;
        filter: saturate(200%);

        transition: 0.25s all ease;
      }

      > i {
        font-size: 10rem;
        font-weight: 800;

        text-align: center;
        line-height: 80%;

        min-width: 100%;

        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--english-violet);

        mask-image: linear-gradient(to top, transparent, black, transparent);

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%,-50%);

        @media (max-width: 978px) {
          line-height: 100%;
          mask-image: linear-gradient(to bottom, black, transparent);
        }
      }

      &:hover {
        background: var(--english-violet-50);

        > img {
          transform: scale(.95);
        }
      }
    }

    @media (max-width: 978px) {
      flex-direction: column;
      justify-content: space-between;

      > a {
        padding: .5rem;
        max-width: unset;

        > img {
          max-width: 150px;
        }
      }
    }

    @media (max-width: 450px) {
      > a {
        > img {
          max-width: 120px;
        }
      }
    }
  }
`;
