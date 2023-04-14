import styled from "styled-components";

export const Tabela = styled.table`
  padding: 1em;
  width: 100%;

  overflow-x: scroll;

  border-radius: 1em;

  border-collapse: collapse;
  th {
    border: none;
    color: gray;
    padding: 0.5em;
    text-align: center;
  }
  tr {
    width: 100%;
  }

  tr:nth-child(even) {
    border-radius: 10px;
    background-color: gray;
  }

  td {
    padding: 4px;
    font-weight: 400;
    text-align: center;
  }

  text-align: left;
  border-radius: 1em;
  box-shadow: 1px 1px 10px rgba(28, 175, 131, 0.174);
`;

export const Container = styled.main`
  display: block;
  justify-content: center;

  header {
    margin-bottom: 1em;
  }
`;
