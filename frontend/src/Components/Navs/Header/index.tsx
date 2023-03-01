import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { Container, ImageContainer, VoltarText, TextLimited } from "./styles";
import { buscaDadoUsuarioNaSessao } from "../../../services/buscaDadoUsuarioNaSessao";

const Header: React.FC = () => {
  const { nomeUsuario } = buscaDadoUsuarioNaSessao();

  const navigate = useNavigate();
  function voltarPaginaAnterior() {
    navigate(-1);
  }
  return (
    <Container>
      <Link to={"/usuario-logado"}>
        <ImageContainer>
          <img src="./assets/icons/header-icons/person.svg" alt="perfil"></img>
          <TextLimited>{nomeUsuario}</TextLimited>
        </ImageContainer>
      </Link>
      <p>Wow</p>
      <ImageContainer
        role={"button"}
        onClick={() => {
          voltarPaginaAnterior();
        }}
      >
        <VoltarText>Voltar</VoltarText>
        <img src="./assets/icons/header-icons/voltar.svg" alt="voltar"></img>
      </ImageContainer>
    </Container>
  );
};
export default Header;
