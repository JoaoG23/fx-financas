import styled from "styled-components";

export const Titulo = styled.h2`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;
export const Container = styled.main`
  width: 70%;
  display: grid;

  align-content: center;
  justify-content: center;

  @media screen and (max-width: 1064px) {
    grid-template-columns: 100%;
  }
`;

export const Header = styled.section`
  display: flex;
  gap: 1em;
  /* justify-content: space-between; */
  align-items: center;
  @media screen and (max-width: 1064px) {
    flex-direction: column;
    padding-top: 2em;
    padding-bottom: 2em;
    align-items: start;
  }
`;
export const UsuarioText = styled.h2`
  color: #5968dc;
`;
