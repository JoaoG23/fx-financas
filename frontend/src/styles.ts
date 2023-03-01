import styled from "styled-components";

export const Body = styled.div`
  position: absolute;
  display: flex;

  overflow-x: hidden;

  height: 80vh;
  overflow-y: scroll;
  justify-content: center;

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
export const ImagePesos1Flutuante = styled.img`
  z-index: -2;
  position: fixed;
  right: 10vw;
  animation: elevations 6s ease-in infinite alternate forwards;

  @media screen and (max-width: 769px) {
    left: 0vw;
    right: 0vw;
    width: 80vw;
    margin: auto;
    justify-content: center;
  }

  @keyframes elevations {
    0% {
      transform: translateY(0vh);
    }
    100% {
      transform: translateY(20vh);
    }
  }
`;
export const ImagePesos2Flutuante = styled(ImagePesos1Flutuante)`
  animation: elevations 8s 1s ease-in infinite alternate forwards;

  top:10vh;
  right: 40vw;
  @media screen and (max-width: 769px) {
    left: 0vw;
    right: 0vw;
    width: 20vw;
    margin: auto;
    justify-content: center;
  }
`;
