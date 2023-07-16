import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 15px;

  

  box-shadow: 2px 2px 5px #b2b2b240;
`;
export const Linha = styled.div`
  display: flex;
  gap: 1em;
  text-align: center;
  margin: 1em;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0.5em;
  }
  @media (max-width: 764px) {
    flex-direction: column;
    gap: 0.5em;
  }
`;
