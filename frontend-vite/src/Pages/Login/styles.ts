import styled from "styled-components";

import imageLogin from "../../assets/login-image.png";

export const LoginContainer = styled.main`
  padding: 2em;
  margin: 10px;
  width: auto;
  display: grid;

  grid-template-columns: auto;
  justify-items: center;
  align-content: center;
  height: auto;
  background-color: #f8f8f9;
  border-radius: 1.5em;

  animation: entradaSuave 1s ease alternate both;
  box-shadow: 2px 2px 10px #1ed49d33;

  @media only screen and (max-width: 768px) {
    background-image: none;
    justify-items: stretch;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 4em;
    padding-bottom: 4em;

    width: 100%;

    h3 {
      font-size: x-large;
    }
    h5 {
      font-size: large;
    }
  }
`;
export const ImageLateral = styled.img`
  width: 70vw;
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
  background-size: cover;

  background-color: #0acc8e;

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
    background-color: #0acc8e;
  }
`;
