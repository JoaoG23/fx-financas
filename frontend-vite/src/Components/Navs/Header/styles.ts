import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 4vh;

  border-radius: 10px;
  display: flex;
  align-items: center;

  font-weight: 600;
  position: absolute;
  gap: 1em;
  top: 1em;
  right: 1em;

  padding: 16px;

  justify-content: space-between;

  background-color: #0acc8e;
  box-shadow: 2px 2px 1px rgb(130, 130, 130,0.2);
  color: #fff;
  a {
    color: #fff;
  }
  @media only screen and (max-width: 768px) {
    height: 40px;
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

  gap: 0.3em;
  padding: 3px;

  align-items: center;
  /* :hover {
    transition: 0.3s;
    background-color: #fff;
    color: #0acc8e;
  } */
`;
export const VoltarContainer = styled.div`
  border-radius: 2em;
  display: flex;

  gap: 0.3em;
  padding: 3px;

  align-items: center;
  :hover {
    transition: 0.3s;
    background-color: #fff;
    color: #0acc8e;
  }
`;
export const VoltarText = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
