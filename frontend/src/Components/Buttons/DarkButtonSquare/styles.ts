import styled from "styled-components";

export const DarkSquare = styled.button`
  border: none;

  background-image: linear-gradient(
    to right,
    #323240 0%,
    #3e3e4f 50%,
    #4a4a5e 80%,
    #4a4a5e 100%
  );
  border-radius: .6em;
  color: #DCFC34;
  padding: 0.5em;
  background-size: 200% 200%;

  box-shadow: 1px 1px 2px #323240;

  :hover{

      animation: changeColor 0.5s ease alternate both;
  }

  @keyframes changeColor {
    from {
    transform: translateY(0vh);
      background-position: 200 0;
    }

    to {
    transform: translateY(-4px);
      background-position: 200% 100%;
    }
  }
`;
