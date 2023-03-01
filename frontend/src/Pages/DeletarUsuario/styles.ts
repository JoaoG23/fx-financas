import styled from "styled-components";

export const Container = styled.main`
  padding: 10px;
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: auto auto auto;
  gap: 10px;
  animation: entradaSuave 0.8s;

  @media screen and (max-width: 800px ) {
    grid-template-columns: auto ;
  }
`;


