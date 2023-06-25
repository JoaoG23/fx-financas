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
export const Header = styled.header`

  display: flex;
  justify-content: space-between;
  margin: .3em;
`;
