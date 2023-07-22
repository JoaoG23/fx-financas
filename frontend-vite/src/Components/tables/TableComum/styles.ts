import styled from "styled-components";

type Colors = {
  shadowColor?: string;
  textColor?: string;
  headerColor?: string;
  bodyColor?: string;
};


export const Tabela = styled.table`
  width: 100%;
  font-size: small;

  overflow-x: scroll;

  color: ${(props: Colors) => props.headerColor || "#717f95"};

  text-align: left;

  th {
    
    border-radius: 1em;
    color: #9ca7b7;
    background-color: ${(props: Colors) => props.headerColor || "#F8FAFC"};
  }
  
  th, td {
    padding: 0.4em;
    text-align: center;
    
    animation: entradaSuave 0.5s ease alternate both;
  }
  tr {
    
    border: none;
    width: 100%;
    background-color: ${(props: Colors) => props.bodyColor || "#f8f8f9d5"};
  }
  
  td {
    border-radius: 10px;
    border-bottom: 1px solid #f8fafc7e;
    font-weight: 500;
  }

`;

export const Container = styled.main`
  display: block;
  color: #424651;
  justify-content: center;

  header {
    margin-bottom: 1em;
  }
`;
