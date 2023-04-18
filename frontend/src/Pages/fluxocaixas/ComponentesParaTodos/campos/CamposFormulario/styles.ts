import styled from "styled-components";

export const Campos = styled.section`
  display: grid;
  gap: 1em;

  /* grid-template-columns: 20% auto; */
`;

export const PrimeiraLinha = styled.section`
  display: grid;
  gap: 1em;

  grid-template-columns: 3fr 1fr;
`;

export const SegundaLinha = styled.section`
  display: grid;
  gap: 1em;

  grid-template-columns: auto auto;
`;
export const TeceiraLinha = styled.section`
  display: grid;
  gap: 1em;

  grid-template-columns: auto auto auto;
`;



export const Container = styled.form`
  display: grid;
  gap: 0.5em;

  animation: entradaSuave 0.5s ease alternate both;
`;
