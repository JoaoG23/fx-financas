import styled from "styled-components";

export const Container = styled.main`
  padding: 10px;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  animation: entradaSuave 0.8s;

  @media screen and (max-width: 1300px ) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 1024px ) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 800px ) {
    grid-template-columns:  auto;
  }
  @media screen and (max-width: 426px ) {
    grid-template-columns: 90vw;
  }
`;

export const AzulFont = styled.b`
  color: #20e5e0;
`;




