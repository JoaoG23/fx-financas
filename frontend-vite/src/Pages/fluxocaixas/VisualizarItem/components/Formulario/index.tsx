import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { buscarItemPorId } from "../../api";

import { ItemFluxoCaixaCriado } from "../../../../../types/ItemFluxoCaixa";

import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { VisualizarCamposFormulario } from "../../../ComponentesParaTodos/campos/VisualizarCamposFormulario";

export const Formulario: React.FC = () => {
  const { id } = useParams();

  const { isLoading: isCarregandoitemFluxoCaixaAnterior, data } = useQuery(
    ["ver-um-item-fluxocaixa", id],
    () => buscarItemPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const itemFluxoCaixa = data?.data;

  const {
    register,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const defaultValues = {
    ...itemFluxoCaixa,
    valor: parseFloat(itemFluxoCaixa?.valor!),
  };

  useEffect(() => {
    reset(defaultValues);
  }, [reset, data]);

  return (
    <>
      <VisualizarCamposFormulario
        register={register}
        control={control}
        errors={errors}
      />
      {isCarregandoitemFluxoCaixaAnterior && <ModalCarregando />}
    </>
  );
};
