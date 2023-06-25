import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { buscarLocalPorId, editarLocalPorId } from "../../api";

import { Local } from "../../../../../types/Local";

import { buscaDadoUsuarioNaSessao } from "../../../../../utils/buscaDadoUsuarioNaSessao";
import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";

export const Formulario: React.FC = () => {
  const { id } = useParams();
  const { idUsuario } = buscaDadoUsuarioNaSessao();

  const { data: localData, isLoading: isLoadingBuscar } = useQuery(
    ["listar-um-local", id],
    () => buscarLocalPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: editarMutate,
    isSuccess: isSuccessEditacao,
    isLoading: isLoadingEditar,
  } = useMutation(async (local: Local) => await editarLocalPorId(id!, local), {
    onError: (error: any) => {
      toast.error(`Ops! Houve um error: ${error.response.data}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("listar-um-local");
      queryClient.invalidateQueries("listar-locais-por-pagina");
      navegarAtePaginaDepoisTempo(navigate, -1);
    },
  });

  const localAnterior: Local = localData?.data;
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(localAnterior);
  }, [localAnterior]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((local: Local) => {
          const localEditado = {
            ...local,
            usuariosId: idUsuario,
          };
          editarMutate(localEditado as Local);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isLoadingEditar && <ModalCarregando />}
      {isLoadingBuscar && <ModalCarregando />}
      {isSuccessEditacao && <ModalSucesso />}
    </>
  );
};
