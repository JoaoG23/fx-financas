import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import {
  Container,
  ImageContainer,
  VoltarText,
  TextLimited,
  VoltarContainer,
} from "./styles";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { ImagemPerfil } from "./components/ImagePerfil";

const Header: React.FC = () => {
  const { nomeUsuario, imagePerfil } = buscaDadoUsuarioNaSessao();
  const [perfil, serPerfil] = useState<string>(imagePerfil || "");

  const navigate = useNavigate();
  function voltarPaginaAnterior() {
    navigate(-1);
  }
  return (
    <Container>
      <Link to={"/usuario_logado"}>
        <ImageContainer>
          <ImagemPerfil caminho_imagem={perfil} />
          <TextLimited>{nomeUsuario}</TextLimited>
        </ImageContainer>
      </Link>
      <p>Fluxos</p>
      <VoltarContainer
        role={"button"}
        onClick={() => {
          voltarPaginaAnterior();
        }}
      >
        <VoltarText>Voltar</VoltarText>
        <BsFillArrowRightCircleFill />
      </VoltarContainer>
    </Container>
  );
};
export default Header;
