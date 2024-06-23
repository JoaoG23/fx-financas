import styled from "styled-components";
export type BotaoAtivo = {
  ativo?: boolean;
};

export const Button = styled.button<BotaoAtivo>`
  display: flex;
  align-items: center;
  border: 0.6px solid #fbfbfb;
  background-color: #fff;
  color: #717f95;
  border-radius: 0.7em;
  padding: 0.5em;

  :hover {
    animation: mudancaCorBackground 0.4s ease alternate both;
  }

  ${(props) =>
    props.ativo
      ? `
        background-color: #f37f40;
        color: white;
        border: none;
        font-weight: 500;
      `
      : `
      background-color: #fbfbfb;
      color: #717f95;
  `}

  box-shadow: 0 0 2px gray;
`;
export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  border: 0.6px solid #fbfbfb;
  background-color: #fff;
  border-radius: 0.7em;
  color: #717f95;
  padding: 0.5em;

  box-shadow: 0 0 2px gray;

  :hover {
    animation: mudancaCorBackground 0.4s ease alternate both;
  }

  @keyframes mudancaCorBackground {
    from {
      background-color: #fff;

      color: #717f95;
    }

    to {
      color: #fff;
      background-color: #f37f40;
      border: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  gap: 0.5em;
  border-radius: 0.7em;
  color: #717f95;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

export const NumeroPaginas = styled.div`
  display: flex;
  gap: 0.1em;
`;
