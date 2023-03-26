import styled from "styled-components";


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
