import styled from "styled-components";


import imageLogin from "../../assets/login-image.png";
export const RegistarContainer = styled.main`
  padding: 2em;
  width: auto;
  display: grid;

  margin: 20px;

  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  
  height: auto;
  background-color: #f8f8f9;
  border-radius: 1.5em;

  animation: entradaSuave 1s ease alternate both;
  box-shadow: 2px 2px 10px #1ed49d33;
`;



export const ContainerMain = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: end;
  flex-wrap: wrap;

 

  background-image: url(${imageLogin});

  
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  
  position: fixed;
  top: 0;
  z-index: 2;
  align-items: center;

  @media only screen and (max-width: 768px) {
    background-image: none;
    display: block;
    background-color: #f8f8f9;
  }
`;
