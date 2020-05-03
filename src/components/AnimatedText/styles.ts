import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;

  p {
    font-size: 25px;
    font-weight: 500;
  }
`;

const flashing = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FlashingAnchor = styled.b`
  animation-name: ${flashing};
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  font-weight: 300;
`;
