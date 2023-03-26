import styled from "styled-components";

type CardContainerProps = {
  tipoLayout?: any;
};

export const CardContainer = styled.div`
  box-shadow: 2px 2px 5px #1ed49d33;
  border-radius: 10px;
  gap: 0.3em;

  display: flex;
  justify-content: ${(props: CardContainerProps) =>
    props.tipoLayout || "space-between"};

  font-weight: 400;

  align-items: center;
  padding: 0.5em;
  background-color: #f7fffa;
  color: #f0821a;
  animation: entradaSuave 0.6s ease-out;

  :hover {
    transition: 1s;
    padding: 0.6em;
  }

  div {
    margin: 1em;
    justify-content: center;
    flex-direction: column;
    display: flex;
    gap: 0.3em;
  }

  a {
    color: #fff;
  }

  @media screen and (max-width: 769px) {
    display: block;
  }

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

  @media screen and (max-width: 320px) {
    font-size: medium;
    border-radius: 1.5em;

    div {
      flex-direction: column;
      gap: 0.2em;
    }
    section {
      flex-direction: column;
      gap: 0.2em;
    }
  }
`;
