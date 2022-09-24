import styled from "styled-components";

export const LinkHistory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  > a {
    text-decoration: none;
    color: var(--white);

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.25rem;
    }
  }
`;

export const Presentation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: calc(100vh - 80px);
  padding-bottom: 80px;

  gap: 3rem;

  .slogan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 2rem;

    .pokeball {
      position: absolute;
      width: 150px;
      height: 150px;

      bottom: 12.5%;

      background: #fff;
      border: 10px solid #000;
      border-radius: 50%;

      overflow: hidden;
      box-shadow: inset -10px 10px 0 10px #ccc;

      animation: fall 0.5s ease-in-out,
        shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;

      &:before,
      &:after {
        content: "";
        position: absolute;
      }

      &:before {
        background: var(--english-violet);
        width: 100%;
        height: 50%;
      }

      &:after {
        top: calc(50% - 10px);
        width: 100%;
        height: 20px;
        background: #000;
      }

      .pokeball__button {
        position: absolute;
        top: calc(50% - 15px);
        left: calc(50% - 15px);
        width: 30px;
        height: 30px;

        background: #7f8c8d;
        border: 5px solid #fff;
        border-radius: 50%;

        z-index: 10;
        box-shadow: 0 0 0 10px black;

        animation: blink 0.5s alternate 7;
      }

      @keyframes blink {
        from {
          background: #eee;
        }
        to {
          background: #e74c3c;
        }
      }

      @keyframes shake {
        0% {
          transform: translate(0, 0) rotate(0);
        }
        20% {
          transform: translate(-10px, 0) rotate(-20deg);
        }
        30% {
          transform: translate(10px, 0) rotate(20deg);
        }
        50% {
          transform: translate(-10px, 0) rotate(-10deg);
        }
        60% {
          transform: translate(10px, 0) rotate(10deg);
        }
        100% {
          transform: translate(0, 0) rotate(0);
        }
      }

      @keyframes fall {
        0% {
          bottom: 100vh;
        }
        60% {
          bottom: 12.5%;
        }
        80% {
          bottom: 14%;
        }
        100% {
          bottom: 12.5%;
        }
      }
    }

    > h1 {
      font-size: 4rem;

      @media (max-width: 978px) {
        font-size: 3rem;
      }
    }

    > a {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 1rem;

      position: relative;

      text-decoration: none;
      color: var(--white);
      border-radius: 0.5rem;

      padding: 1rem 1.5rem;
      background: var(--english-violet-50);

      transition: 0.25s all ease;

      &:hover {
        background: var(--english-violet);
      }
    }

    @media (max-width: 978px) {
      gap: 1rem;
      align-items: center;

      text-align: center;
    }
  }

  > img {
    width: 100%;
    max-width: 50%;
    height: 100%;

    object-fit: contain;

    filter: drop-shadow(10px 10px 150px var(--english-violet));

    pointer-events: none;
    user-select: none;

    @media (max-width: 978px) {
      max-width: 550px;
    }
  }

  @media (max-width: 978px) {
    flex-direction: column;

    height: auto;
  }
`;

export const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  gap: 1rem;

  > div {
    display: flex;
    flex: 1 1 500px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    width: 100%;

    border: 0.15rem solid var(--dark-purple);
    border-radius: 1rem;

    padding: 1rem;
    gap: 2rem;

    margin-top: 5rem;

    transition: 0.25s all ease;
    cursor: pointer;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > p {
        font-size: 0.85rem;
      }
    }

    > img {
      width: 100%;
      max-width: 400px;
      height: 100%;
      max-height: 250px;

      object-fit: contain;
      margin-top: -5rem;

      filter: grayscale(1);
      transition: 0.25s all ease;

      pointer-events: none;
      user-select: none;

      @media (min-width: 1048px) {
        &#bigger {
          max-width: 600px;
          max-height: 350px;
        }
      }

      @media (max-width: 1048px) {
        max-width: 200px;
        max-height: 200px;
      }
    }

    > a {
      position: relative;

      text-decoration: none;
      color: var(--white);
      border-radius: 0.5rem;

      padding: 1rem 1.5rem;
      background: var(--english-violet-50);

      transition: 0.25s all ease;

      &:hover {
        background: var(--english-violet);
      }
    }

    &:hover {
      background: var(--english-violet-50);

      > img {
        filter: unset;
        padding: 0.5rem;
      }
    }
  }
`;
