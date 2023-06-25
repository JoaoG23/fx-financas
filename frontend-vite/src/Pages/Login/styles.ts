import styled from "styled-components";


import imageLogin from "../../assets/login-image.png";

export const LoginContainer = styled.main`
  padding: 2em;
  margin: 10px;
  width: auto;
  display: grid;

  gap: 10px;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  height: auto;
  background-color: #f8f8f9;
  border-radius: 1.5em;

  animation: entradaSuave 1s ease alternate both;
  box-shadow: 2px 2px 10px #1ed49d33;
`;
export const ImageLateral = styled.img`

    width: 70vw;
`;


export const ContainerMain = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: end;
  flex-wrap: wrap;
  background-image: url(${imageLogin});
  background-repeat: no-repeat;
  background-attachment:fixed;
  background-size: cover;

  background-color:#1CAF82;

  /* background-color: #f8f8f9; */
  /* background-color:#FFA26B; */
  /* background-color:#6979F8; */
  /* background-color:#FF65A4; */
  
  position: fixed;
  top: 0;
  z-index: 2;
  align-items: center;

  @media only screen and (max-width: 768px) {
    background-image: none;
    display: block;
    background-color:#1CAF82;
  }
`;
