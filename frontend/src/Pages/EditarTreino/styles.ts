import styled from "styled-components";

export const Container = styled.main`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: block;
  }
  @media screen and (max-width: 330px) {
    display: block;
  }
  `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #dcfc34;
  
  font-size: small;
  width: 23em;
  max-width: 25em;
  height: 50vh;
  padding: 20px;
  gap: 10px;


  text-align: center;

  border-radius: 15px;

  a{
    text-decoration: none;
  }
  
  a:hover{
    text-decoration: none;
  }

  animation: entradaSuave 1s alternate forwards;

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
