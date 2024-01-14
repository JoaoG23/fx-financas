import styled from "styled-components";

export const Container = styled.main`
  width: auto;
  max-width: 85%;
  margin: auto;
  animation: entradaSuave 0.8s;
  align-items: center;

  @media screen and (max-width: 764px) {
    width: 95%;
  }
`;

export const Titulo = styled.h2`
  margin-top: 0.1em;
  margin-bottom: 0.6em;
`;

export const Cabecalho = styled.div`
  padding: 10px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;

  @media screen and (max-width: 1274px) {
    padding: 7px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 764px) {
    padding: 7px;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Caixa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1em;
  text-align: center;
`;
