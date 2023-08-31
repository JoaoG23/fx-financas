import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 15px;

  box-shadow: 2px 2px 5px #b2b2b240;

  aside {
    background-color: #1caf82;
    border-radius: 20px;
    padding: 15px;
    color: #fff;

    box-shadow: 2px 2px 5px #4444444f;

    display: flex;
    position: absolute;
    right: 12%;
    z-index: 5;
    flex-direction: row-reverse;
  }

  
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0.5em;
  }
`;
export const Titulo = styled.h2`
  margin-top: 1em;
  margin-bottom: 1em;
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
