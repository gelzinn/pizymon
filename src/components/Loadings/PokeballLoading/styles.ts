import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% { transform: translate(0, 0) rotate(0) }
  25% { transform: translate(-8px, 0) rotate(-18deg) }
  33% { transform: translate(8px, 0) rotate(18deg) }
  50% { transform: translate(-8px, 0) rotate(-12deg) }
  60% { transform: translate(8px, 0) rotate(18deg) }
  100% { transform: translate(0, 0) rotate(0) }
`;

export const PokeballLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 200px;

  margin: 0 auto;

  overflow: hidden;

  > svg {
    animation: ${loading} 2s infinite;
  }
`;
