import styled from "styled-components";

export const Container = styled.main`
  width: 60vw;
  margin: auto;
  animation: entradaSuave 0.8s;
`;



export const Cabecalho = styled.div`
  padding: 10px;
  justify-content: space-around;
  display: flex;
  gap: 10px;

  @media screen and (max-width: 764px) {
    padding:20px;
    display: block;
  }
`;

export const Caixa = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em;
  text-align: center;
`;
