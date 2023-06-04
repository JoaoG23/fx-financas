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

  /* background-color: #f8f8f9; */
  /* background-color:#FFA26B; */
  /* background-color:#6979F8; */
  /* background-color:#FF65A4; */
  /* background-image:url('./assets/login-fundo.jpg'); */
  /* background-color: #dcfc34; */
  box-shadow: 2px 2px 4px #00000027;

  @media only screen and (max-width: 768px) {
    padding: 0px;

    position: fixed;
    margin: 0px;
    width: 100vw;
    bottom: 0;
    height: 70px;
    z-index: 1;
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

  align-items: center;
  gap: 1em;

  a {
    text-decoration: none;
    color: #fff;
  }
  :hover {
    transition: 0.3s;
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
