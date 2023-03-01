import styled from "styled-components";

export const Light = styled.button`
  border: none;

  background-image: linear-gradient(
    to right,
      #dcfc3f 0%,
      #cced27 50%,
      #c7e91d 80%,
      #a5c311 100%
  );
  border-radius: .4em;
  color: #000;
  padding: 0.5em;
  background-size: 200% 200%;

  box-shadow: 0 0 2px gray;

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
