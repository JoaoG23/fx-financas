import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/CamposFormulario";
import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";

import { Elemento } from "../../../../../../types/Elemento";
import { editarElementoPorId, buscarUmElementoPorId } from "../../api";
import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { id } = useParams();

  const { isLoading: isCarregandoElementoAnterior, data } = useQuery(
    ["ver-um-elemento", id],
    () => buscarUmElementoPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const elemento = data?.data;

  const {
    mutate,
    isLoading: isCarregandoSalvacaoElemento,
    isSuccess,
  } = useMutation(
    async (elemento: Elemento) => await editarElementoPorId(id!, elemento),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-elemento");
        queryClient.invalidateQueries("listar-elementos-por-pagina");
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
    reset(elemento);
  }, [elemento, reset]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((elemento: Elemento) => {
          mutate(elemento);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isCarregandoSalvacaoElemento && <ModalCarregando />}
      {isCarregandoElementoAnterior && <ModalCarregando />}
    </>
  );
};
