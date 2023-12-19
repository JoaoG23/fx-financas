import styled from "styled-components";

export const Campos = styled.section`
  width: 40%;
`;

export const UmaColuna = styled.section`
  padding: 1em;
  display: grid;
`;
export const ContainerEntradaSaida = styled.section`
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;

  
  @media only screen and (max-width: 768px) {
    justify-content: start;

  }
  
`;
export const ContainerRadios = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;

  label {
    display: flex;
    gap: 2px;
    align-items: center;
    font-weight: 600;
  }

`;

export const ObservacoesLinha = styled.section`
  display: grid;
  gap: 1em;

  grid-template-columns: 1fr 3fr;
`;

export const Container = styled.form`
  display: grid;
  gap: 0.5em;

  animation: entradaSuave 0.5s ease alternate both;
`;
