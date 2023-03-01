import styled from "styled-components";

export const NoBorders = styled.input`
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

export const SecondaryInputStyle = styled(NoBorders)`
`;
