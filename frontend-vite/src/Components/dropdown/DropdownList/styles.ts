import styled from "styled-components";

type AjustadorTamanho = {
  abrir: boolean;
};
export const Container = styled.div`
  color: white;

  display: flex;
`;
export const BoxDropdown = styled.div`
  display: block;
  overflow: hidden;
  height: ${(props: AjustadorTamanho) => (props.abrir ? "10em" : "0px")};
  transition: 1s ease-in;
`;

export const IconAbrir = styled.div`
  :hover {
    animation: rodandoPesos 0.5s forwards;
    @keyframes rodandoPesos {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(90deg);
      }
    }
  }
`;
