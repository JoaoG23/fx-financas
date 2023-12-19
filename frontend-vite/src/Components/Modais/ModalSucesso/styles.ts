import styled from "styled-components";

export const BackGround = styled.section`
  display: flex;
  position: fixed;
  z-index: 12;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  width: 100vw;
  height: 100vh;
  background-color: #0acc8e;

  align-items: center;
  justify-content: center;

  animation: aparecendoModalCarregando 0.2s forwards;

  @keyframes aparecendoModalCarregando {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const Title = styled.span`
  font-size: x-large;
  color: #faf5ff;
  font-weight: 800;
  animation: novoAparecer 0.5s forwards;
`;

export const Body = styled.div`
  width: 38vw;
  height: auto;

  text-align: center;

  display: grid;
  justify-content: center;
  align-content: center;
  @media screen and (max-width: 769px) {
    width: 90vw;
  }
`;

export const AnimationSucesso = styled.img`
margin: auto;
  opacity: 0.6;
  animation: aparecendoSucesso 1s ease-out alternate forwards;
  @keyframes aparecendoSucesso {
    0% {
      transform: rotate(0deg) scale(0);
    }
    50% {
      transform: rotate(-60deg) scale(1);
    }
    100% {
      transform: rotate(0deg) scale(0.8);
    }
  }
  @keyframes novoAparecer {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
