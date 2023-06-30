import styled from "styled-components";

export const ContainerPesquisa = styled.section`
  width: 40%;

  display: grid;
  gap: 10px;
  grid-template-columns: 4fr 1fr;
  align-items: end;
`;

export const Container = styled.form`
  gap: 0.5em;

  animation: entradaSuave 0.5s ease alternate both;
`;
