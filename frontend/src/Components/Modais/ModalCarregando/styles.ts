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

  animation: entradaSuave 0.5s forwards;

  @keyframes entradaSuave {
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
  color:#000;

  border: none;
  border-radius: 25px;
  box-shadow: 2px 2px 5px #00000050;

  @media screen and (max-width:769px) {
    width:90vw;
  }
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
