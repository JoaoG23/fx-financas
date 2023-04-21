import styled from "styled-components";

export const Container = styled.main`
  padding: 10px;
  display: grid;
  gap: 10px;
  animation: entradaSuave 0.8s;
`;
export const ConteinerAumentoPeso = styled.section`
  display: flex;
  flex-direction: row;
  justify-content:stretch;
  gap: 0.2em;
  div{
    display: block;
  }

  @media screen and (max-width: 320px) {
    
  }
`;
