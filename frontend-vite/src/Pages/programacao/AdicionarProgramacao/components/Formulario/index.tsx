import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormularioAdicionarEditar";

import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { buscaDadoUsuarioNaSessao } from "../../../../../utils/buscaDadoUsuarioNaSessao";
import {
  ItemFluxoCaixa,
  ItemFluxoCaixaCriado,
} from "../../../../../types/ItemFluxoCaixa";
import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { adicionarProgramacao } from "../../api";
import { converterValoresItemFluxocaixa } from "../../../ComponentesParaTodos/utils/converterValoresItem/converterValoresItemFluxocaixa";

export const Formulario: React.FC = () => {
  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess } = useMutation(
    async (itemFluxocaixa: ItemFluxoCaixa) =>
      await adicionarProgramacao(itemFluxocaixa),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-itemfluxocaixa");
        queryClient.invalidateQueries("listar-itemfluxocaixa-por-pagina");
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((itemFluxocaixa: ItemFluxoCaixaCriado) => {
          const novoItemFluxocaixa = converterValoresItemFluxocaixa(
            idUsuario!,
            itemFluxocaixa as any
          );
          mutate(novoItemFluxocaixa as any);
        })}
        setValue={setValue}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
    </>
  );
};
