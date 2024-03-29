import styled from "styled-components";

export const ModalBackgroundStyle = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000098;

  align-items: center;
  justify-content: center;

  animation: entradaSuaveModal 0.5s forwards;

  @keyframes entradaSuaveModal {
    0% {
      transform: translateY(100vh);
      opacity: 0;
    }
    100% {
      transform: translateY(0vh);
      opacity: 1;
    }
  }
`;

export const ModalStyle = styled.div`
  width:40vw;
  height: auto;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  padding: 1em;

  background-color: #DCFC34;

  border: none;
  border-radius: 25px;
  box-shadow: 2px 2px 5px #00000050;

  @media screen and (max-width:769px) {
    width:90vw;
  }
`;

export const AnimationErro = styled.img`

animation: aparecendoErro 1s ease-out alternate forwards;
@keyframes aparecendoErro {
    0% {
      transform: rotate(0deg) scale(0);
    }
    50% {
      transform: rotate(-90deg) scale(1);
    }
    100% {
      transform: rotate(0deg) scale(0.8);
    }
  }
`;
