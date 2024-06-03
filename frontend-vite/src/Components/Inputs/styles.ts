import styled from "styled-components";

export const NoBorders = styled.input`
  padding: 8px;
  font-weight: 700;

  border: none;
  box-shadow: 1px 1px 5px #717f953a;
  color:#5c6677;

  border-radius: 1em;

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

  @media only screen and (max-width: 768px) {
    font-size: large;
  }
`;
export const ContainerInput = styled.div`
  display: grid;
  gap: .3em;
`;



export const SecondaryInputStyle = styled(NoBorders);
