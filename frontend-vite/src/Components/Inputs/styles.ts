import styled from "styled-components";

export const NoBorders = styled.input`
  padding: 8px;
  font-weight: 700;

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
      transform: translateY(0vh);
    }

    100% {
      transform: translateY(0.3vh);
    }
  }
`;
export const ContainerInput = styled.div`
  display: grid;
  gap: 10px;
`;

export const SecondaryInputStyle = styled(NoBorders);
