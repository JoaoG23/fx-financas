import styled from "styled-components";

export const NoBorders = styled.input`
  padding: 4px;

  background-color: transparent;
  border: none;
  box-shadow: 1px 1px 5px #1ed49d33;

  border-radius: 0.5em;


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

export const SecondaryInputStyle = styled(NoBorders)`
`;
