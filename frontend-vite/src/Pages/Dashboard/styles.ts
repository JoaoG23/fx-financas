import styled from "styled-components";

export const Container = styled.main`
  width: 60vw;
  margin: auto;
  animation: entradaSuave 0.8s;
`;

export const ConteinerAumentoPeso = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 0.2em;
  div {
    display: block;
  }

  @media screen and (max-width: 320px) {
  }
`;

export const Cabecalho = styled.div`
  padding: 10px;
  justify-content: space-around;
  display: flex;
  gap: 10px;
`;

export const Caixa = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em;
  text-align: center;
`;
