import styled from "styled-components";

export const DefaultStyle = styled.button`
  border: none;

  background-image: linear-gradient(
    to right,
    #1ed49d 0%,
    #1bc390 50%,
    #17a97d 80%,
    #128864 100%
  );
  border-radius: 20px;
  color: #fff;
  padding: 0.3em;
  background-size: 200% 200%;

  box-shadow: 0 0 2px   #1ed49d33;

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
