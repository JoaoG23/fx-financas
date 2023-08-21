import styled from "styled-components";

type Colors = {
  shadowColor?: string;
  textColor?: string;
  headerColor?: string;
  bodyColor?: string;
};

export const Container = styled.main`
  display: block;
  color: #424651;
  @media screen and (max-width: 769px) {
    overflow-x: auto;
    justify-content: center;
  }
`;
export const Formulario = styled.div`
  margin-bottom: 1.5em;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0.3em;
`;
export const ContainerButtons = styled.header`
  display: flex;
  gap: 6px;
`;
