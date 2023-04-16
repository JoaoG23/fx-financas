import { useQuery } from "react-query";
import { toast } from "react-toastify";
import * as tiposStyle from "./styles";

import { useState } from "react";
import { buscarTodosTiposPorPagina } from "./api";

import { SpinnerCarregamento } from "../../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../../Components/tables/TableComum";

import { PaginacaoComum } from "../../../../Components/paginacoes/Paginacao";
import ButtonDefault from "../../../../Components/Buttons/ButtonDefault/ButtonDark";

import { useNavigate, useParams } from "react-router-dom";
import { Tipo } from "../../../../types/Tipo";
import { CabecalhoTabela } from "../ComponentesParaTodos/tabela/CabecalhoTabela";
import { LinhaTipo } from "../ComponentesParaTodos/tabela/Linha";

export const TodosTipos: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [pagina, setPagina] = useState(1);

  const { isLoading, data } = useQuery(
    ["tipos-pagina", pagina],
    () =>
      buscarTodosTiposPorPagina({
        subelementosId: id!,
        numero_pagina: pagina,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const tipos = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <tiposStyle.Container>
      {isLoading && <SpinnerCarregamento />}
      <tiposStyle.Header>
        <h3>Todos Tipo</h3>
        <ButtonDefault
          onClick={() =>
            navigate(`/categorias/elementos/subelementos/tipos/adicionar/${id}`)
          }
        >
          Adicionar +
        </ButtonDefault>
      </tiposStyle.Header>

      <TableComum>
        <CabecalhoTabela />
        {tipos?.map((tipo: Tipo) => (
          <LinhaTipo key={tipo?.id} tipo={tipo!} />
        ))}
      </TableComum>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={tipos}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </tiposStyle.Container>
  );
};
