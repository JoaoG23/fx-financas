import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;

  display: grid;
  gap: 0.5em;
  justify-content: center;
  align-content: center;
`;
export const AnimationLoading = styled.img`
  animation: rodandoPesos 0.5s infinite;
  @keyframes rodandoPesos {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;
