import styled from "styled-components";
import Select from 'react-select';

export const Container = styled.select`
  padding: 5px;

  border: none;
  box-shadow: 1px 1px 5px #717f953a;

  border-radius:.8em;

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
      transform: translateX(.3vw);
    }
  }
`;
export const ContainerInput = styled.label`
  display: grid;
  gap: .5em;
  margin-bottom:.5em;
`;



