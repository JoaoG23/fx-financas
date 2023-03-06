import styled from "styled-components";

export const Container = styled.div`
 width: 13vw;
 height: 100vh;
 
 position: absolute;
 left: 0px;
 
 display: flex;
 flex-direction: column;
 gap:1em;
 justify-content: center;

 background-color:#1CAF82;

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
  `

export const Image = styled.img`
 @media only screen and (max-width: 768px) {
   
   width: 40px
  }
`;


export const Item = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        text-decoration: none;
        color:#fff;
    }
    :hover{
        border-radius: 1em;
        animation: toRightButtons 0.2s forwards ease-in;
    }


@keyframes toRightButtons {
  0%   {
    border-radius: .1m;
    background-color: #636573;
    transform: translateX(0vw);
  }
  
  100% {
    border-radius: 1em;
    background-color: #0000003f;
    transform: translateX(0.1vw);
  }
}
`