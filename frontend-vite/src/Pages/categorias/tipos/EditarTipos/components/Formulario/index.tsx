import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";

import { buscarUmTipoPorId, editarTipoPorId } from "../../api";
import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { Tipo } from "../../../../../../types/Tipo";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { id } = useParams();

  const { isLoading: isCarregandotipoAnterior, data } = useQuery(
    ["ver-um-tipo", id],
    () => buscarUmTipoPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const tipo = data?.data;

  const {
    mutate,
    isLoading: isCarregandoSalvacaotipo,
    isSuccess,
  } = useMutation(
    async (tipo: Tipo) => await editarTipoPorId(id!, tipo),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-tipo");
        queryClient.invalidateQueries("listar-tipos-por-pagina");
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
    reset(tipo);
  }, [tipo, reset]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((tipo: Tipo) => {
          mutate(tipo);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isCarregandoSalvacaotipo && <ModalCarregando />}
      {isCarregandotipoAnterior && <ModalCarregando />}
    </>
  );
};
