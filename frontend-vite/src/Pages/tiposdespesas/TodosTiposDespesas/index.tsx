import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import * as TiposDespesaStyle from "./styles";

import { buscarTodosTiposDespesas } from "./api";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../Components/tables/TableComum";
import { CabecalhoTabela } from "./components/tabela/CabecalhoTabela";
import { LinhaTipoDespesas } from "./components/tabela/Linha";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";

import { TipoDespesa } from "../../../types/TipoDespesa";

export const TodosTiposDespesa: React.FC = () => {
  const navigate = useNavigate();

  const [pagina, setPagina] = useState(1);

  const { isLoading, data } = useQuery(
    ["tipo-despesa-usuario", pagina],
    () =>
      buscarTodosTiposDespesas({
        numero_pagina: pagina,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const tipoDespesas = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <TiposDespesaStyle.Container>
      {isLoading && <SpinnerCarregamento />}
      <TiposDespesaStyle.Header>
        <h3>Tipo Despesa</h3>
      </TiposDespesaStyle.Header>

      <TableComum>
        <CabecalhoTabela />
        {tipoDespesas?.map((tipoDespesa: TipoDespesa) => (
          <LinhaTipoDespesas key={tipoDespesa?.id} tipoDespesa={tipoDespesa!} />
        ))}
      </TableComum>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        quantidadeTotalItems={quantidadeTotalRegistros}
        arrayElementos={tipoDespesas}
      />
    </TiposDespesaStyle.Container>
  );
};
