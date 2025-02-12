import styled from "styled-components";
import IntlCurrencyInput from "react-intl-currency-input";

export const Campo = styled(IntlCurrencyInput as any)`
  padding: 8px;
  font-weight: 700;

  background-color: white;
  border: none;
  box-shadow: 1px 1px 5px #717f953a;
  border-radius: 1em;
  color: #4e5868;
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
  gap: .3em;
`;
