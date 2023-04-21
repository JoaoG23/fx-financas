import styled from "styled-components";

export const Light = styled.button`
  display: flex;
  align-items: center;
  border: 0.6px solid #FBFBFB;
  background-color: #fff;
  border-radius: .7em;
  color: #717F95;
  padding: 0.5em;

  box-shadow: 0 0 2px gray;

  :hover{

      animation: changeColor 0.5s ease alternate both;
  }

  @keyframes changeColor {
    from {
    transform: translateY(0vh);
      /* background-position: 200 0; */
    }

    to {
    transform: translateY(-4px);
      /* background-position: 200% 100%; */
    }
  }
`;
