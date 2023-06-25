import styled from "styled-components";

export const Container = styled.select`
  padding: 5px;

  border: none;
  box-shadow: 1px 1px 5px #717f953a;

  border-radius:.8em;

  :focus {
    animation-name: toRight;
    animation-duration: 1s;
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
      transform: translateX(.2vw);
    }
  }
`;
export const ContainerInput = styled.div`
  display: grid;
  gap: .5em;
  margin-bottom:.5em
  
  `;

