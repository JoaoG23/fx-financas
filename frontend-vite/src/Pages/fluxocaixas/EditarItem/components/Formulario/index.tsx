import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { buscarItemPorId, editarItemPorId } from "../../api";

import { ItemFluxoCaixaCriado } from "../../../../../types/ItemFluxoCaixa";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormularioAdicionarEditar";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";

import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { converterValoresItemFluxocaixa } from "../../../ComponentesParaTodos/utils/converterValoresItem/converterValoresItemFluxocaixa";
import { buscaDadoUsuarioNaSessao } from "../../../../../utils/buscaDadoUsuarioNaSessao";

import { useSubelementoStore } from "../../../../../stores/useSubelementoStore/useSubelementoStore";
import { useElementoStore } from "../../../../../stores/useElementoStore/useElementoStore";
import { useTiposStore } from "../../../../../stores/useTiposStore/useTiposStore";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const selecionarElemento = useElementoStore(
    (state) => state.adicionarElemento
  );
  const selecionarSubElemento = useSubelementoStore(
    (state) => state.adicionarSubelemento
  );
  const selecionarTipo = useTiposStore((state) => state.adicionarTipos);

  const { idUsuario } = buscaDadoUsuarioNaSessao();

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
    async (itemFluxoCaixa: ItemFluxoCaixaCriado) =>
      await editarItemPorId(id!, itemFluxoCaixa),
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
    formState: { errors },
  } = useForm();

  const dadosCarregados = {
    ...itemFluxoCaixa,
    valor: parseFloat(itemFluxoCaixa?.valor!),
  };

  useEffect(() => {
    selecionarElemento(itemFluxoCaixa?.elementosId!);
    selecionarSubElemento(itemFluxoCaixa?.subelementosId!);
    selecionarTipo(itemFluxoCaixa?.tiposId!);
    reset(dadosCarregados);
  }, [data]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((itemFluxoCaixa: ItemFluxoCaixaCriado) => {
          const novoItemFluxocaixa = converterValoresItemFluxocaixa(
            idUsuario!,
            itemFluxoCaixa as any
          );
          mutate(novoItemFluxocaixa as object);
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
