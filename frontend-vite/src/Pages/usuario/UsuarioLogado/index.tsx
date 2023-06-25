import React from "react";
import { Formulario } from "./components/Formulario";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";


export const VisualizarUsuarioLogado: React.FC = () => {

  const { nomeUsuario } = buscaDadoUsuarioNaSessao();
  return (
    <main>
        <h2>Seja bem vindo a sua área {nomeUsuario} </h2>
        <Formulario />
    </main>
  );
};
