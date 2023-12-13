import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { buscarUsuarioPorId, editarUsuarioPorId } from "../../api";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";

import { buscaDadoUsuarioNaSessao } from "../../../../../utils/buscaDadoUsuarioNaSessao";
import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { Usuario } from "../../../../../types/usuario/Usuario";

export const Formulario: React.FC = () => {
  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const navigate = useNavigate();

  const { isLoading, data: usuarioData } = useQuery(
    ["usuario-logado-por-id", idUsuario],
    () => buscarUsuarioPorId(idUsuario!),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const { mutate, isLoading: isLoadingEditar } = useMutation(
    (usuario: Usuario) => editarUsuarioPorId(idUsuario!, usuario),
    {
      onSuccess: () => {
        toast.success(`Usuário editado com sucesso`);
        navegarAtePaginaDepoisTempo(navigate, "/dashboard");
      },
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Usuario>({});

  const usuario: Usuario = usuarioData?.data;

  useEffect(() => {
    reset(usuario);
  }, [usuario]);
  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((usuario: Usuario) => {
          const { id, createdAt, updateAt, ...dadosImportanteUsuario } =
            usuario;
          mutate(dadosImportanteUsuario);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isLoading && <ModalCarregando />}
      {isLoadingEditar && <ModalCarregando />}
    </>
  );
};
