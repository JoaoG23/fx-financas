import * as Fluxo from "./styles";
import { useQuery } from "react-query";

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

export const TodosItemsFluxoCaixa: React.FC = () => {
  const { idConvertido } = buscaDadoUsuarioNaSessao();
  const [pagina, setPagina] = useState(1);

  const { isLoading, data } = useQuery(
    ["todos-fluxocaixas-usuario", pagina],
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
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}
      <header>
        <h2>Fluxo de caixa</h2>
      </header>
      <TableComum>
        <CabecalhoTabela />
        {itemsFluxoCaixa?.map((item: ItemFluxoCaixa) => (
          <LinhaItemFluxocaixa item={item} />
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
