import styled from "styled-components";

export const Campos = styled.section`
  display: grid;
  gap: 1em;

  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 1064px) {
    grid-template-columns: auto;
  }
  @media screen and (max-width: 764px) {
    grid-template-columns: auto;
  }
`;

export const Container = styled.form`
  display: grid;
  gap: 0.5em;
  animation: entradaSuave 0.5s ease alternate both;
`;
