import styled from "styled-components";

export const Container = styled.select`
  padding: 8px;
  font-weight: 700;

  border: none;
  box-shadow: 1px 1px 5px #717f953a;
  color:#566070 ;
  border-radius: 1em;
  :hover {
    animation-name: toRight;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-direction: alternate;
    animation-fill-mode: both;
  }

  @keyframes toRight {
    0% {
      transform: translateX(0vw);
    }

    100% {
      transform: translateX(0.3vw);
    }
  }
`;
export const ContainerInput = styled.label`
  display: grid;
  gap: 0.3em;
`;
