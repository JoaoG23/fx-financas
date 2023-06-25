import React from "react";
import { Formulario } from "./components/Formulario";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";


export const VisualizarUsuarioLogado: React.FC = () => {

  const { nomeUsuario } = buscaDadoUsuarioNaSessao();
  return (
    <main>
        <h3>Seja bem vindo a sua área {nomeUsuario} </h3>
        <Formulario />
    </main>
  );
};
