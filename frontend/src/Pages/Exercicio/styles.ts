import styled from "styled-components";

export const Container = styled.main`
  color:#F5F5F5;
  padding: 10px;
  display: grid;

  width: 100%;
  grid-auto-rows: max-content;
  grid-template-columns: auto;
  gap: 10px;
  animation: entradaSuave 0.8s;
  
  
  
  @media screen and (max-width: 800px ) {
    grid-template-columns:  auto;
  }
  @media screen and (max-width: 426px ) {
    grid-template-columns: 90vw;
  }

`;
export const CardAzul = styled.div`

  background-color: #20e5e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5em;
  border-radius: 2em;
  animation: entradaSuave 0.8s ease-out;

  @media screen and (max-width: 800px ) {
    grid-template-columns: auto ;
  }
`;
export const ContainerGrafico = styled.div`
  
  border:none;

  padding: 1.5em;
  border-radius: 2em;
  background-color: #636573;


  @media screen and (max-width: 800px ) {
  }
`;




