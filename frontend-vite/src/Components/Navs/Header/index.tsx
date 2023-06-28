import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { FaUser } from 'react-icons/fa'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { Container, ImageContainer, VoltarText, TextLimited } from "./styles";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

const Header: React.FC = () => {
  const { nomeUsuario } = buscaDadoUsuarioNaSessao();

  const navigate = useNavigate();
  function voltarPaginaAnterior() {
    navigate(-1);
  }
  return (
    <Container>
      <Link to={"/usuario_logado"}>
        <ImageContainer>
        <FaUser/>
          <TextLimited>{nomeUsuario}</TextLimited>
        </ImageContainer>
      </Link>
      <p>Fluxos</p>
      <ImageContainer
        role={"button"}
        onClick={() => {
          voltarPaginaAnterior();
        }}
      >
        <VoltarText>Voltar</VoltarText>
        <BsFillArrowRightCircleFill/>
      </ImageContainer>
    </Container>
  );
};
export default Header;
