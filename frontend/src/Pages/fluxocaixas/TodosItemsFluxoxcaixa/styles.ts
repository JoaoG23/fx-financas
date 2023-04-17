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

  header {
    margin-bottom: 1em;
  }
`;
