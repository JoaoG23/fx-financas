import { useQuery } from "react-query";
import React from "react";

import * as ImagemPerfilSt from "./styles";

import { buscarImagemPerfilPorCaminho } from "./api";

import semImage from "./icon_sem_image.svg";

type Props = {
  srcImage: string;
};
export const ImagemPerfil: React.FC<Props> = ({ srcImage }) => {
  const { data: caminhoLogomarca } = useQuery(["magem-perfil", srcImage], () =>
    buscarImagemPerfilPorCaminho(srcImage || "")
  );

  return (
    <div>
      <ImagemPerfilSt.Perfil alt="logo" src={caminhoLogomarca || semImage} />
    </div>
  );
};
