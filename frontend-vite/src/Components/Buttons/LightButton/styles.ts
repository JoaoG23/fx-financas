import styled from "styled-components";

export const Light = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  border: 0.6px solid #fbfbfb;
  background-color: #fff;
  border-radius: 0.7em;
  color: #717f95;
  padding: 0.5em;

  box-shadow: 0 0 2px gray;

  :hover {
    animation: changeColor 0.5s ease alternate both;
  }

  
  @keyframes changeColor {
    from {
      transform: translateY(0vh);
    }

    to {
      transform: translateY(-4px);
    }
  }
`;

