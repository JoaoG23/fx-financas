import styled from "styled-components";

export const BackGround = styled.div`
  display: flex;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000cc;

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

export const Body = styled.div`
  width:38vw;
  height: auto;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  padding: 1em;

  background-color: #fff;

  border: none;
  border-radius: 1em;
  box-shadow: 2px 2px 5px #00000050;

  @media screen and (max-width:769px) {
    width:90vw;
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