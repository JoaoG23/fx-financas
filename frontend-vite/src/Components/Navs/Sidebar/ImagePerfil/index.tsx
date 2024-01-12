import { useQuery } from "react-query";
import React from "react";

import { Perfil } from "./styles";

import { buscarImagemPerfilPorCaminho } from "./api";

import semImage from "./icon_sem_image.svg";

type Props = {
  srcImage: string;
};

export const ImagemPerfil: React.FC<Props> = ({ srcImage }) => {
  const { data: caminhoLogomarca } = useQuery(
    ["magem-perfil", srcImage],
    () => buscarImagemPerfilPorCaminho(srcImage || ""),
    {
      enabled: false,
      staleTime: Infinity,
    }
  );

  return (
    <div>
      <Perfil>
        <img src={caminhoLogomarca || semImage} alt="Profile" />
      </Perfil>
    </div>
  );
};
