import { BsCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { buscaDadoUsuarioNaSessao } from "../../../../../utils/buscaDadoUsuarioNaSessao";
import { ItemFluxoCaixa } from "../../../../../types/ItemFluxoCaixa";

import { adicionarItemEmMassa } from "../../api";

import * as Form from "./styles";

import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { ElementoSelect } from "../../../../../Components/selects/ElementoSelect";
import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import { AlertCampoVazio } from "../../../../../Components/alerts/AlertCampoVazio";

import ButtonDefault from "../../../../../Components/Buttons/ButtonDefault/ButtonDark";
import { TableComum } from "../../../../../Components/tables/TableComum";
import { CabecalhoTabela } from "../CabecalhoTabela";
import { LinhaItemFluxocaixa } from "../Linha";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";

export const Formulario: React.FC = () => {
  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [items, setItems] = useState<ItemFluxoCaixa[]>([]);
  console.log(items);

  function adicionarItemLista(item: ItemFluxoCaixa) {
    setItems([...items, item]);
  }
  const {
    mutate: salvarTodosMutate,
    isLoading,
    isSuccess,
  } = useMutation(
    async (itemFluxocaixas: ItemFluxoCaixa[]) =>
      await adicionarItemEmMassa(itemFluxocaixas!),
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
    formState: { errors },
  } = useForm();

  return (
    <Form.Container>
      <Form.Form
        onSubmit={handleSubmit((item: ItemFluxoCaixa) =>
          adicionarItemLista({
            ...item,
            subelementosId: null!,
            elementosId: null!,
            tiposId: null!,
            subtiposId: null!,
            locaisId: null!,
            usuariosId: idUsuario!,
          })
        )}
      >
        <div>
          <InputDefault
            name="descricao"
            placeholder="Digite uma descrição"
            register={register}
            label="Descrição"
          />
          {errors?.descricao?.type === "required" && (
            <AlertCampoVazio mensagem="Campo valor vazio! Por gentileza preencher-o!" />
          )}
        </div>
        <div>
          <InputDefault
            name="valor"
            type="number"
            placeholder="Digite o valor do item"
            register={register}
            label="Valor"
          />
          {errors?.valor?.type === "required" && (
            <AlertCampoVazio mensagem="Campo valor vazio! Por gentileza preencher-o!" />
          )}
        </div>
        <ButtonDefault>Adicionar</ButtonDefault>
      </Form.Form>
      <Form.Tabela>
        <TableComum>
          <CabecalhoTabela />
          <tbody>
            {items?.map((item: ItemFluxoCaixa, index: number) => (
              <LinhaItemFluxocaixa key={index} item={item} />
            ))}
          </tbody>
        </TableComum>
      </Form.Tabela>
      <SecondaryButton onClick={() => salvarTodosMutate(items!)}>
        <>Salvar todos Items</>
        <BsCartCheckFill />
      </SecondaryButton>
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
    </Form.Container>
  );
};
