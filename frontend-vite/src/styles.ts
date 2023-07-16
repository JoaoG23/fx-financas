import styled from "styled-components";

export const BotaoPorCima = styled.div`

  @media screen and (max-width: 769px) {
    z-index: 2;
    position: fixed;
    top: 2vh;
    left: 2vw;
   
  }
`
export const Body = styled.div`
  position: absolute;

  height: 80vh;
  justify-content: center;
  overflow: auto;

  top: 15vh;
  width: 77vw;
  left: 20vw;
  @media screen and (max-width: 769px) {
    left: 0vw;
    right: 0vw;
    width: 95vw;
    margin: auto;
    justify-content: center;
  }
`;

export const IconFundo1Flutuante = styled.img`
  z-index: -2;
  position: fixed;
  top: 20vh;
  right: 0vw;
  animation: elevations 6s ease-in infinite alternate forwards;

  @media screen and (max-width: 769px) {
    left: 0vw;
    width: 50vw;
  }

  @keyframes elevations {
    0% {
      transform: translateY(0vh);
    }
    100% {
      transform: translateY(15vh);
    }
  }
`;
export const ImagePesos2Flutuante = styled(IconFundo1Flutuante)`
  animation: elevations 8s 1s ease-in infinite alternate forwards;

  top: 10vh;
  right: 40vw;
  @media screen and (max-width: 769px) {
    left: 0vw;
    right: 0vw;
    width: 20vw;
    margin: auto;
    justify-content: center;
  }
`;
