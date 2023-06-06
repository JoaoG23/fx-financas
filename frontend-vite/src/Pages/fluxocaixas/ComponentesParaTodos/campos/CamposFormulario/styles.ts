import styled from "styled-components";

export const Campos = styled.section`
  display: grid;

`;

export const UmaColuna = styled.section`
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const ObservacoesLinha = styled.section`
  display: grid;
  gap: 1em;

  grid-template-columns: 1fr 2fr;
`;

export const Container = styled.form`
  display: grid;
  gap: 0.5em;

  animation: entradaSuave 0.5s ease alternate both;
`;
