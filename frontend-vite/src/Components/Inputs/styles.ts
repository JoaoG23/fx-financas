import styled from "styled-components";

export const NoBorders = styled.input`
  padding: 6px;

  border: none;
  box-shadow: 1px 1px 5px #717f953a;

  border-radius: 0.8em;

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
      transform: translateX(0.3vw);
    }
  }
`;
export const ContainerInput = styled.div`
  display: grid;
  gap: 10px;
`;

export const SecondaryInputStyle = styled(NoBorders);
