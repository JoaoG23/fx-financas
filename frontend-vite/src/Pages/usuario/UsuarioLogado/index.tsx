import { Link } from "react-router-dom";
import { IoPersonRemoveSharp } from "react-icons/io5";
import React from "react";

import { Header, Titulo, UsuarioText } from "./styles";

import { Formulario } from "./components/Formulario";
import { SecondaryButton } from "../../../Components/Buttons/SecondaryButton/ButtonDark";

import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

export const VisualizarUsuarioLogado: React.FC = () => {
  const { nomeUsuario, idUsuario } = buscaDadoUsuarioNaSessao();
  return (
    <main>
      <Header>
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
      <Formulario />
    </main>
  );
};
