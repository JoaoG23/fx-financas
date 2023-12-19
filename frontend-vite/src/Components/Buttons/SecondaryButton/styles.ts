import styled from "styled-components";

export const DefaultStyle = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background-image: linear-gradient(
    to right,
    #ef5d28 0%,
    #f28043 50%,
    #f9792f 80%,
    #ea5a20 100%
  );
  border-radius: 1.2em;

  color: #fff;
  padding: 0.5em;
  background-size: 200% 200%;

  box-shadow: 0 0 2px #fbae82;

  font-weight: 500;
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
      background-position: 100% 200%;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: large;
  }
`;
