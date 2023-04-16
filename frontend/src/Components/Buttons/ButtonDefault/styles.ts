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

  font-weight: 500;
  padding: 0.5em;
  background-size: 200% 200%;

  box-shadow: 0 0 3px  #717f953a;

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
