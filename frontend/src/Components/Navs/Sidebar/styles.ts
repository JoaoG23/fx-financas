import styled from "styled-components";

export const Container = styled.div`
 width: 80px;
 height: 100vh;
 
 position: absolute;
 left: 0px;
 
 display: flex;
 flex-direction: column;
 gap:1em;
 justify-content: center;

 background-color: #dcfc34;
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
        color:#000;
    }
    :hover{
        border-radius: 1em;
        animation: toRightButtons 0.2s forwards ease-in;
    }


@keyframes toRightButtons {
  0%   {
    border-radius: .2em;
    background-color: #636573;
    transform: translateX(0vw);
  }
  
  100% {
    border-radius: 1em;
    background-color: #0000003f;
    transform: translateX(1vw);
  }
}
`