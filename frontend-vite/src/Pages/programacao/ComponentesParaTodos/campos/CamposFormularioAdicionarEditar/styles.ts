import styled from "styled-components";

export const QuatroColunas = styled.section`
  display: grid;
  gap: 0.5em;

  div {
    margin: 0.2em;
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Espacador = styled.div`
  display: grid;
  gap: 0.3em;
`;
export const DuasColunas = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
export const UmaColuna = styled.section`
  display: flex;
  align-items: center;
  flex-direction: start;
  padding: 0.4em;
  gap: 0.2em;
`;

export const ContainerRadios = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.form`
  animation: entradaSuave 0.5s ease alternate both;
`;
