import { useQuery } from "react-query";
import React from "react";

import { Perfil } from "./styles";

import { buscarImagemPerfilPorCaminho } from "./api";


type Props = {
  caminho_imagem: string;
};

export const ImagemPerfil: React.FC<Props> = ({ caminho_imagem }) => {
  const { data: caminhoLogomarca } = useQuery(["imagem-perfil", caminho_imagem], () =>
  buscarImagemPerfilPorCaminho(caminho_imagem)
  );

  return (
    <div>
      <Perfil>
        <img src={caminhoLogomarca} alt="Profile" />
      </Perfil>
    </div>
  );
};
