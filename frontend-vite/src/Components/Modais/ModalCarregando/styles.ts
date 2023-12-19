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
  font-size: large;
  color: #faf5ff;
  font-weight: 700;
`;

export const Body = styled.div`
  width: 38vw;
  height: auto;

  text-align: center;

  display: grid;
  gap: 1em;
  justify-content: center;
  align-content: center;
  @media screen and (max-width: 769px) {
    width: 90vw;
  }
`;

export const AnimationSucesso = styled.img`
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
`;
