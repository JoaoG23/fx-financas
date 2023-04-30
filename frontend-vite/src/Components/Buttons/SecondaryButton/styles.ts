import styled from "styled-components";

export const DefaultStyle = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(
    to right,
    #fe9a60 0%,
    #ffa26b 50%,
    #feaa7a 80%,
    #fbae82 100%
  );
  border-radius: 1em;

  color: #fff;
  padding: 0.5em;
  background-size: 200% 200%;

  box-shadow: 0 0 2px #fbae82;

  :hover {
    animation: changeColor 0.5s ease alternate both;
  }

  @keyframes changeColor {
    from {
      transform: translateY(0vh);
      background-position: 200 0;
    }

    to {
      transform: translateY(-5px);
      background-position: 200% 100%;
    }
  }
`;
