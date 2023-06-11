import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 1.4em;
  gap: 0.4em;
  box-shadow: 1px 1px 5px #717f953a;

  font-weight: 400;
  padding: 0.5em;
  background-color: #ffffff77;
  color: #717f95;
  animation: entradaSuave 0.6s ease-out;

  :hover {
    transition: 1s;
    padding: 0.6em;
  }

  @media screen and (max-width: 769px) {
    display: block;
  }

  @media screen and (max-width: 320px) {
    font-size: medium;
    border-radius: 1.5em;

    div {
      flex-direction: column;
      gap: 0.2em;
    }
    section {
      flex-direction: column;
      gap: 0.2em;
    }
  }
`;
