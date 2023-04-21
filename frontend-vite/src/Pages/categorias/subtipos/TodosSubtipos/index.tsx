import { useQuery } from "react-query";
import { toast } from "react-toastify";
import * as subtiposStyle from "./styles";

import { useState } from "react";
import { buscarTodosSubtiposPorPagina } from "./api";

import { SpinnerCarregamento } from "../../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../../Components/tables/TableComum";

import { PaginacaoComum } from "../../../../Components/paginacoes/Paginacao";
import ButtonDefault from "../../../../Components/Buttons/ButtonDefault/ButtonDark";

import { useNavigate, useParams } from "react-router-dom";
import { CabecalhoTabela } from "../ComponentesParaTodos/tabela/CabecalhoTabela";
import { useBuscaTituloPagina } from "../../../../hooks/useBuscaTituloPagina";
import { LinhaSubtipo } from "../ComponentesParaTodos/tabela/Linha";
import { Subtipo } from "../../../../types/Subtipo";

export const TodosSubtipos: React.FC = () => {
  const navigate = useNavigate();

  const { tituloPagina } = useBuscaTituloPagina();

  const { id } = useParams();
  const [pagina, setPagina] = useState(1);

  const { isLoading, data } = useQuery(
    ["subtipos-pagina", pagina],
    () =>
      buscarTodosSubtiposPorPagina({
        tiposId: id!,
        numero_pagina: pagina,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const subtipos = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  const caminhoAdicionar = `/categorias/elementos/subelementos/tipos/subtipos/adicionar/${id}`;
  return (
    <subtiposStyle.Container>
      {isLoading && <SpinnerCarregamento />}
      <subtiposStyle.Header>
        <h3>{tituloPagina}</h3>
        <ButtonDefault onClick={() => navigate(caminhoAdicionar)}>
          Adicionar +
        </ButtonDefault>
      </subtiposStyle.Header>

      <TableComum>
        <CabecalhoTabela />
        {subtipos?.map((subtipo: Subtipo) => (
          <LinhaSubtipo key={subtipo?.id} subtipo={subtipo!} />
        ))}
      </TableComum>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={subtipos}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </subtiposStyle.Container>
  );
};
