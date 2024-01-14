import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";

import { buscarUmSubtipoPorId, editarSubtipoPorId } from "../../api";
import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { Subtipo } from "../../../../../../types/Subtipo";
import { buscaDadoUsuarioNaSessao } from "../../../../../../utils/buscaDadoUsuarioNaSessao";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { id } = useParams();

  const { idUsuario } = buscaDadoUsuarioNaSessao();

  const { isLoading: isCarregandosubtipoAnterior, data } = useQuery(
    ["ver-um-subtipo", id],
    () => buscarUmSubtipoPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const subtipo = data?.data;

  const {
    mutate,
    isLoading: isCarregandoSalvacaosubtipo,
    isSuccess,
  } = useMutation(
    async (subtipo: Subtipo) => await editarSubtipoPorId(id!, subtipo),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-subtipo");
        queryClient.invalidateQueries("listar-subtipos-por-pagina");
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(subtipo);
  }, [subtipo, reset]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((subtipo: Subtipo) => {
          mutate({ ...subtipo, usuariosId: idUsuario! });
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isCarregandoSalvacaosubtipo && <ModalCarregando />}
      {isCarregandosubtipoAnterior && <ModalCarregando />}
    </>
  );
};
