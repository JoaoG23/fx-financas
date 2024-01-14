import styled from "styled-components";

export const Container = styled.div`
  gap: 0.5em;
  display: grid;

  @media (max-width: 1000px) {
    gap: 0.5em;
  }
`;

export const PrimeiraLinha = styled.div`
  display: grid;
  text-align: center;
  gap: 1em;
  grid-template-columns: 3fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    gap: 0.5em;
  }
  @media (max-width: 764px) {
    grid-template-columns: auto;
    gap: 0.5em;
  }
`;

export const SegundaLinha = styled.div`
  display: grid;
  text-align: center;
  gap: 1em;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    gap: 0.5em;
  }
  @media (max-width: 764px) {
    grid-template-columns: auto;
    gap: 0.5em;
  }
`;
