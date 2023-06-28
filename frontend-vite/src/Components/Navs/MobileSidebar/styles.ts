import styled from "styled-components";



export const Container = styled.div`
  padding-left: 5px;

  left: 0px;

  display: none;
  gap: 1em;
  justify-content: center;

  
  
  @media only screen and (max-width: 768px) {
    font-size: large;
    
    box-shadow: 2px 2px 4px #00000027;
    background-color: #1caf82;
    
    display: flex;
    position: fixed;
    
    padding: 10px;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    flex-direction: column;
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

  align-items: center;
  gap: 1em;

  a {
    text-decoration: none;
    color: #fff;
  }
  :hover {
    padding: 5px;
    transition: 0.3s;
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
  gap: 1em;
  color: #fff;
  text-decoration: none;

  :hover {
    transition: 0.3s;
    background-color: #0000003f;
  }
`;
