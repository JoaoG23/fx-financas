import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { buscarUsuarioPorId } from "../../api";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";

import { buscaDadoUsuarioNaSessao } from "../../../../../utils/buscaDadoUsuarioNaSessao";

import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";

import { Usuario } from "../../../../../types/usuario/Usuario";

export const Formulario: React.FC = () => {
  const { idUsuario } = buscaDadoUsuarioNaSessao();

  const {
    isLoading,
    data: usuarioData,
  } = useQuery(
    ["usuario-logado-por-id", idUsuario],
    () => buscarUsuarioPorId(idUsuario!),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const {
    register,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const usuario: Usuario = usuarioData?.data;

  useEffect(() => {
    reset(usuario);
  }, [usuario]);
  return (
    <>
      <CamposFormulario register={register} control={control} errors={errors} />
      {isLoading && <ModalCarregando />}
    </>
  );
};
