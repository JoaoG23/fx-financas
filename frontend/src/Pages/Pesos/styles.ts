import styled from "styled-components";

export const Container = styled.main`
  padding: 10px;
  
  display: grid;
  grid-auto-rows: 50px;
  gap:1.5em;
  animation: entradaSuave 0.8s;
  
  
  
  @media screen and (max-width: 800px ) {
    grid-auto-rows: 130px;
    grid-template-columns: auto  ;
  }
  @media screen and (max-width: 426px ) {
    grid-template-columns: 90vw;
  }
`;



