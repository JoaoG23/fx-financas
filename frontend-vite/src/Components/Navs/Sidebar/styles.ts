import styled from "styled-components";

export const Container = styled.div`
  width: 13vw;
  height: 100vh;

  position: absolute;
  left: 0px;
  padding-top: 7em;
  padding-left: 1em;
  padding-right: 1em;

  display: flex;
  flex-direction: column;
  gap: 0.5em;

  background-color: #1caf82;

  box-shadow: 2px 2px 2px #00000027;

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

export const Item = styled.li`
  display: flex;
  border-radius: 8px;
  padding: 5px;

  align-items: center;
  gap: 1em;
  color: #fff;

  a {

    color: #fff;
  }
  a :hover {
    transition: 0.3s;
    background-color: #fff;
    color: #1caf82;
  }
  :hover {
    transition: 0.3s;
    animation: balancar 2s linear infinite;
    background-color: #fff;
    color: #1caf82;
  }
`;

export const Elementos = styled.ul`
  border-radius: 8px;

  li {
    padding: 5px;
    display: flex;
    gap: 1em;
    border-radius: 0.7em;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  li:hover {
    transition: 0.3s;
    animation: balancar 2s linear infinite;
    background-color: #fff;
    color: #1caf82;
  }
  a:hover {
    background-color: #fff;
    color: #1caf82;
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
    background-color: #fff;
    color: #1caf82;
  }
`;
