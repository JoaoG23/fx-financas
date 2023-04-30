import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { buscarItemPorId, editarItemPorId } from "../../api";
import { ItemFluxoCaixaCriado } from "../../../../../types/ItemFluxoCaixa";
import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";



export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
    mutate,
    isLoading: isCarregandoSalvacaoitemFluxoCaixa,
    isSuccess,
  } = useMutation(
    async (itemFluxoCaixa: ItemFluxoCaixaCriado) => await editarItemPorId(id!, itemFluxoCaixa),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-item-fluxocaixa");
        queryClient.invalidateQueries("listar-item-fluxocaixa-por-pagina");
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset({ ...itemFluxoCaixa , valor:parseFloat(itemFluxoCaixa?.valor!) });
  }, [itemFluxoCaixa]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((itemFluxoCaixa: ItemFluxoCaixaCriado) => {
          mutate(itemFluxoCaixa);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isCarregandoSalvacaoitemFluxoCaixa && <ModalCarregando />}
      {isCarregandoitemFluxoCaixaAnterior && <ModalCarregando />}
    </>
  );
};


