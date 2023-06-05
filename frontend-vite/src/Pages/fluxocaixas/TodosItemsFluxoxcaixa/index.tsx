import * as Fluxo from "./styles";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { buscarFluxoCaixaPorUsuario } from "./api";

import { toast } from "react-toastify";

import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../Components/tables/TableComum";

import { CabecalhoTabela } from "../ComponentesParaTodos/tabela/CabecalhoTabela";
import { LinhaItemFluxocaixa } from "../ComponentesParaTodos/tabela/Linha";
import { ItemFluxoCaixa } from "../../../types/ItemFluxoCaixa";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";

import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";

export const TodosItemsFluxoCaixa: React.FC = () => {
  const navigate = useNavigate();

  const { idConvertido } = buscaDadoUsuarioNaSessao();
  const [pagina, setPagina] = useState(1);

  const { isLoading, data } = useQuery(
    ["todos-fluxocaixa-usuario", pagina],
    () =>
      buscarFluxoCaixaPorUsuario({
        usuariosId: idConvertido!,
        numero_pagina: pagina,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const itemsFluxoCaixa = data?.data[1];
  console.log("🚀 ~ file: index.tsx:42 ~ itemsFluxoCaixa:", itemsFluxoCaixa)
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}
      <Fluxo.Header>
        <h2>Fluxo de caixa</h2>
        <ButtonDefault onClick={() => navigate("adicionar")}>
          Adicionar +
        </ButtonDefault>
      </Fluxo.Header>
      <TableComum>
        <CabecalhoTabela />
        {itemsFluxoCaixa?.map((item: ItemFluxoCaixa) => (
          <LinhaItemFluxocaixa key={item?.id} item={item} />
        ))}
      </TableComum>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={itemsFluxoCaixa}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </Fluxo.Container>
  );
};
