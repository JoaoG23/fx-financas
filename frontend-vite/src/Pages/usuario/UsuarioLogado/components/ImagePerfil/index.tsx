import { useQuery } from "react-query";
import React from "react";

import { Perfil } from "./styles";

import { buscarImagemPerfilPorCaminho } from "./api";

type Props = {
  caminho_image: string;
};

export const ImagemPerfil: React.FC<Props> = ({ caminho_image }) => {
  const { data: caminhoLogomarca } = useQuery(
    ["magem-perfil", caminho_image],
    () => buscarImagemPerfilPorCaminho(caminho_image)
  );

  return (
    <Perfil>
      <img alt="image_perfil_usuario" src={caminhoLogomarca} />
    </Perfil>
  );
};
