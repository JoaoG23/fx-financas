import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 6vh;

  border-radius: 2em;
  display: flex;
  align-items: center;

  font-weight: 300;
  position: absolute;
  gap: 1em;
  top: 1em;
  right: 1em;

  padding: 1em;

  justify-content: space-between;

  background-color: #636573cc;
  box-shadow: 2px 2px 4px #00000027;
  color: #fff;
  a {
    color: #fff;
  }
`;

export const TextLimited = styled.p`
  width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media only screen and (max-width: 768px) {
    width: 50px;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 2em;
  display: flex;

  gap: 0.2em;

  align-items: center;
  :hover {
    border-radius: 1em;
    animation: toRightButtons 0.2s forwards ease-in;
  }
  @keyframes toRightButtons {
    0% {
      transform: translateX(0vw);
    }
    100% {
      background-color: #0000003f;
      transform: translateX(1vw);
    }
  }
`;
export const VoltarText = styled.p`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
