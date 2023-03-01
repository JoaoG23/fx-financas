import styled from "styled-components";

export const CardContainer = styled.div`
  box-shadow: 1px 1px 3px #636573;
  border-radius: 2em;
  gap: 1em;

  display: flex;
  justify-content: space-between;
  font-weight: 500;

  align-items: center;
  padding: 2em;
 background-color: #636573cc;
  color: #fff;
  animation: entradaSuave 0.6s ease-out;
  
  :hover{
    
    transition: 1s;
    padding: 1.5em;
  }

  div{
    margin: 1em;
    justify-content: center;
    flex-direction: column;
    display: flex;
    gap: 0.3em;
  }  


  a{
    color: #fff;
  }

  @media screen and (max-width: 769px) {
    display: block;
  }

  @keyframes entradaSuave {
    0% {
      transform: translateY(100vh);
      opacity: 0;
    }
    100% {
      transform: translateY(0vh);
      opacity: 1;
    }
  }


  @media screen and (max-width: 320px) {
    font-size: medium;
    border-radius: 1.5em;
  
    div{
      flex-direction: column;
      gap: 0.2em;
    }
    section {
      flex-direction: column;
      gap: 0.2em;
    }
  }
  `;
