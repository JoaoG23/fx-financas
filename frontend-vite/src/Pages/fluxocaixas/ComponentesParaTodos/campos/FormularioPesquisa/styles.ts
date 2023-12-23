import styled from "styled-components";

export const ContainerPesquisa = styled.section`
  width: 40%;

  display: grid;
  gap: 10px;
  grid-template-columns: 4fr 1fr;
  align-items: end;

  @media screen and (max-width: 769px) {
    grid-template-columns: 4fr
  }
`;

export const ContainerEntradaSaida = styled.section`
  display: flex;
  gap: 0.5em;
  align-items: center;

  
  @media only screen and (max-width: 768px) {
    justify-content: center;
    display: grid;

  }
  
`;
export const ContainerRadios = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;


  label {
    display: flex;
    gap: 1px;
    align-items: center;
    font-weight: 600;
  }



`;



export const Container = styled.form`
  gap: 0.5em;

  animation: entradaSuave 0.5s ease alternate both;
`;
