import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";

import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { buscaDadoUsuarioNaSessao } from "../../../../../utils/buscaDadoUsuarioNaSessao";
import { ItemFluxoCaixa } from "../../../../../types/ItemFluxoCaixa";
import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { adicionarItem } from "../../api";
import { converterVazioParaNull } from "../../../../../utils/conversao/converterVazioParaNull/converterVazioParaNull";

export const Formulario: React.FC = () => {
  const { idConvertido } = buscaDadoUsuarioNaSessao();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess } = useMutation(
    async (itemFluxocaixa: ItemFluxoCaixa) =>
      await adicionarItem(itemFluxocaixa),
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
    formState: { errors },
  } = useForm();

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((itemFluxocaixa: ItemFluxoCaixa) => {


          function retornarSeValorPositivoNegativo(entradaSaida:boolean, valorDebitado: string ) {
            return entradaSaida ? parseFloat(valorDebitado) : parseFloat('-' + valorDebitado) 
          }
          
          const novoItemFluxocaixa = {
            ...itemFluxocaixa,
            usuariosId: idConvertido,
            elementosId: converterVazioParaNull(itemFluxocaixa?.elementosId),
            subelementosId:  converterVazioParaNull(itemFluxocaixa?.subelementosId),
            tiposId:converterVazioParaNull(itemFluxocaixa?.tiposId),
            subtiposId:converterVazioParaNull(itemFluxocaixa?.subtiposId),
            locaisId:converterVazioParaNull(itemFluxocaixa?.locaisId),
            valor: retornarSeValorPositivoNegativo(itemFluxocaixa?.entradaSaida!,itemFluxocaixa.valor!),
          };
          delete novoItemFluxocaixa.entradaSaida 
          mutate(novoItemFluxocaixa as any);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
    </>
  );
};
