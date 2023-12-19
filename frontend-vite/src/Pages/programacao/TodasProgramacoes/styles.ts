import styled from "styled-components";

export const Container = styled.main`
  display: block;
  color: #424651;
  @media screen and (max-width: 769px) {
    overflow-x: auto;
    justify-content: center;
  }
`;
export const TotalReceitas = styled.h3`
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  color: #0acc8e;
`;
export const Formulario = styled.div`
  margin-bottom: 1.5em;
  position: sticky;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.3em;
`;
export const ContainerButtons = styled.header`
  display: flex;
  gap: 6px;
`;
