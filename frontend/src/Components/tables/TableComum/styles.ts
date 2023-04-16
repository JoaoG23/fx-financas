import styled from "styled-components";

type Colors = {
  shadowColor?: string;
  textColor?: string;
  headerColor?: string;
  bodyColor?: string;
};


export const Tabela = styled.table`
  width: 100%;

  overflow-x: scroll;

  color: ${(props: Colors) => props.headerColor || "#717f95"};

  border-radius: 1em;
  border-collapse: collapse;

  text-align: left;
  box-shadow: 1px 1px 3px ${(props: Colors) => props.shadowColor || "#717f953a"};

  th {
    color: #9ca7b7;
    background-color: ${(props: Colors) => props.headerColor || "#F8FAFC"};
  }

  th, td {
    padding: 0.4em;
    text-align: center;

    animation: entradaSuave 0.5s ease alternate both;
  }
  tr {

    border-bottom: 1px solid #eff3f7;

    width: 100%;
    background-color: ${(props: Colors) => props.bodyColor || "#fff"};
  }

  td {
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
