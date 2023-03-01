import styled from "styled-components";


export const Form = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 17em;
  max-width: 17em;
  height: 50vh;
  padding: 20px;
  gap: 10px;


  text-align: center;

  border-radius: 15px;

  a{
    text-decoration: none;
  }
  animation: entradaSuave 1s alternate forwards;
  @media only screen and (max-width: 768px) {
    padding: 0px;
    margin: 0px;
  }
`;

export const LoginContainer = styled.main`

width: auto;
display: grid;
grid-template-columns: auto;
justify-items: center;
align-items: flex-end;
height: 100vh;
background-color: #dcfc34;

@media only screen and (max-width: 768px)  {
  
}
`;



export const FormContainer = styled.form`


display: grid;
grid-template-columns: auto;
justify-items: center;
background-color: #dcfc34;
`;
export const RegisterContainer = styled.div`
height: 70px;

gap: 10px;
display: flex;
flex-direction: column;
`;

export const ContainerMain = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  flex-wrap: wrap;
  background-image: url('./assets/img-login.jpg');
  background-repeat: no-repeat;
  background-attachment:fixed;
  background-position: center;
  background-size: cover;
  overflow-y: auto;


  position: fixed;
  top: 0;
  z-index: 2;
  align-items: center;
  @media only screen and (max-width: 768px) {
    background-image: none;
    display: block;
    background-color:#DCFC34;
  }
  
`;

export const Input = styled.input`
  border: none;
  padding: 4px;

  background-color: transparent;
  border-bottom: 1px solid var(--dark);


  :focus{
    
    animation-name: toRight;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-direction: alternate;
    animation-fill-mode: both;
  }

  @keyframes toRight {
  0%   {
    transform: translateX(0vw);
  }
  
  100% {
    transform: translateX(1vw);
  }
}

`;
