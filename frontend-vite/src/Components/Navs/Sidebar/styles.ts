import styled from "styled-components";
export const PerfilImagem = styled.div`
  /* background-color: #fff; */
  border-radius: 4em;

  display: flex;
  padding: 5px;

  align-items: center;
  gap: 1em;

  a {
    color: white;
    font-weight: 700;
  }
`;

export const Container = styled.div`
  width: 15vw;
  height: 100vh;

  *::-webkit-scrollbar {
    width: 9px;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-track {
    background-color: #66738729;
    border: none;
    border-radius: 1em;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #6673875e;
    border: none;
  }

  position: absolute;
  left: 0px;
  padding-top: 7em;
  padding-left: 1em;
  padding-right: 1em;

  display: flex;
  flex-direction: column;
  gap: 0.5em;

  background-color: #0acc8e;

  box-shadow: 3px 2px 2px #7e7e7e14;

  @media only screen and (max-width: 840px) {
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
    color: white;
  }
  :hover {
    transition: 0.3s;
    animation: balancar 2s linear infinite;
    background-color: #fff;
    color: #0acc8e;
    a {
      color: #0acc8e;
    }
  }
`;

export const Elementos = styled.ul`
  border-radius: 8px;
  padding: 3px;

  li {
    margin-left: 1em;
    color: #fff;
    padding: 5px;
    display: flex;
    gap: 1em;
    border-radius: 0.7em;
    align-items: center;
  }
  a {
    color: #fff;
  }

  li:hover {
    transition: 0.3s;
    animation: balancar 2s linear infinite;
    background-color: #fff;
    color: #0acc8e;
    a {
      color: #0acc8e;
    }
  }
`;

export const ColecaoElementos = styled.summary`
  display: flex;
  border-radius: 12px;

  align-items: center;
  gap: 0.9em;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  :hover {
    transition: 0.3s;
    background-color: #fff;
    color: #0acc8e;
  }
`;
