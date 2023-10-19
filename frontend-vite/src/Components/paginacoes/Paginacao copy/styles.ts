import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
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

export const Container = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  gap: 0.5em;
  border: 0.6px solid #fbfbfb;
  background-color: #fff;
  border-radius: 0.7em;
  color: #717f95;
`;


export const NumeroPaginas = styled.div`
  display: flex;
  gap: 0.1em;

`;
