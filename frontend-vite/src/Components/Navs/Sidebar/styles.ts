import styled from "styled-components";

export const Container = styled.div`
  width: 13vw;
  height: 100vh;
  padding-left: 5px;

  position: absolute;
  left: 0px;

  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;

  background-color: #1caf82;

  box-shadow: 2px 2px 4px #00000027;

  @media only screen and (max-width: 768px) {
    display: none;
    flex-direction: row;
  }
`;

export const Image = styled.img`
  @media only screen and (max-width: 768px) {
    width: 40px;
  }
`;

export const Item = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 2px;

  align-items: center;
  gap: 1em;

  a {
    text-decoration: none;
    color: #fff;
  }
  :hover {
    transition: 0.3s;
    animation: balancar 2s linear infinite;

    background-color: #0000003f;
  }
`;

export const Elementos = styled.ul`
  border-radius: 8px;

  li {
    padding: 3px;
    display: flex;
    gap: 1em;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  :hover {
    transition: 0.3s;
    animation: balancar 2s linear infinite;

    background-color: #0000003f;
  }
`;

export const ColecaoElementos = styled.summary`
  display: flex;
  border-radius: 12px;

  align-items: center;
  gap: 0.9em;
  color: #fff;
  text-decoration: none;

  :hover {
    transition: 0.3s;
    background-color: #0000003f;
  }
`;
