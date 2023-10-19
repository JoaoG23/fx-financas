import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { buscarProgramacaoPorId, editarProgramacaoPorId } from "../../api";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormularioAdicionarEditar";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";

import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { buscaDadoUsuarioNaSessao } from "../../../../../utils/buscaDadoUsuarioNaSessao";

import { useSubelementoStore } from "../../../../../stores/useSubelementoStore/useSubelementoStore";
import { useElementoStore } from "../../../../../stores/useElementoStore/useElementoStore";
import { useTiposStore } from "../../../../../stores/useTiposStore/useTiposStore";
import { ItemFluxoCaixa } from "../../../../../types/ItemFluxoCaixa";
import { converterValoresItemFluxocaixa } from "../../../ComponentesParaTodos/utils/converterValoresItem/converterValoresItemFluxocaixa";

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

  const { isLoading: isCarregandoitemProgramacaoAnterior, data } = useQuery(
    ["ver-um-item-programacao", id],
    () => buscarProgramacaoPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const itemProgramacao = data?.data;

  const {
    mutate,
    isLoading: isCarregandoSalvacaoitemProgramacao,
    isSuccess,
  } = useMutation(
    async (itemProgramacao: ItemFluxoCaixa) =>
      await editarProgramacaoPorId(id!, itemProgramacao),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-item-programacao");
        queryClient.invalidateQueries("listar-item-programacao-por-pagina");
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
    ...itemProgramacao,
    valor: parseFloat(itemProgramacao?.valor!),
  };

  useEffect(() => {
    selecionarElemento(itemProgramacao?.elementosId!);
    selecionarSubElemento(itemProgramacao?.subelementosId!);
    selecionarTipo(itemProgramacao?.tiposId!);
    reset(dadosCarregados);
  }, [data]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((itemProgramacao: ItemFluxoCaixa) => {
          const novoItemProgramacao = converterValoresItemFluxocaixa(
            idUsuario!,
            itemProgramacao as any
          );
          mutate(novoItemProgramacao as object);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isCarregandoSalvacaoitemProgramacao && <ModalCarregando />}
      {isCarregandoitemProgramacaoAnterior && <ModalCarregando />}
    </>
  );
};
