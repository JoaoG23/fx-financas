import { useQuery } from "react-query";
import React from "react";

import { Perfil } from "./styles";

import { buscarImagemPerfilPorCaminho } from "./api";

type Props = {
  caminho_imagem: string;
};

export const ImagemPerfil: React.FC<Props> = ({ caminho_imagem }) => {
  const { data: caminhoLogomarca, isLoading } = useQuery(
    ["imagem-perfil", caminho_imagem],
    () => buscarImagemPerfilPorCaminho(caminho_imagem),
    {
      retry: false,
    }
  );

  return (
    <div>
      <Perfil>
        {isLoading && <div>Carregando...</div>}
        <img src={caminhoLogomarca || ""} alt="Profile" />
      </Perfil>
    </div>
  );
};
