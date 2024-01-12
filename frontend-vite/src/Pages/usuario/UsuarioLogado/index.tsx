import { Link } from "react-router-dom";
import { IoPersonRemoveSharp } from "react-icons/io5";
import React from "react";


import { Container, Header, Titulo, UsuarioText } from "./styles";

import { Formulario } from "./components/Formulario";
import { SecondaryButton } from "../../../Components/Buttons/SecondaryButton/ButtonDark";

import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { ImagemPerfil } from "./components/ImagePerfil";
import { MundacaImagemPerfil } from "./components/MudancaImagemPerfil";

export const VisualizarUsuarioLogado: React.FC = () => {
  const { nomeUsuario, idUsuario, imagePerfil } = buscaDadoUsuarioNaSessao();
  return (
    <Container>
      <Header>
        <ImagemPerfil caminho_image={imagePerfil!} />
        <Titulo>
          Seja bem-vindo a sua área <UsuarioText>{nomeUsuario}</UsuarioText>
        </Titulo>
        <Link to={`deletar/${idUsuario}`}>
          <SecondaryButton>
            <IoPersonRemoveSharp size={30} />
            <p>Apagar Conta</p>
          </SecondaryButton>
        </Link>
      </Header>
      <MundacaImagemPerfil />
      <Formulario />
    </Container>
  );
};
