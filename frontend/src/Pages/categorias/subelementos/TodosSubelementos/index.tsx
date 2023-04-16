import { useQuery } from "react-query";
import { toast } from "react-toastify";
import * as SubElementosStyle from "./styles";

import { useState } from "react";
import { buscarTodosSubelementosPorPagina } from "./api";



import { SpinnerCarregamento } from "../../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../../Components/tables/TableComum";

import { PaginacaoComum } from "../../../../Components/paginacoes/Paginacao";
import ButtonDefault from "../../../../Components/Buttons/ButtonDefault/ButtonDark";

import { useNavigate, useParams } from "react-router-dom";
import { LinhaSubelementos } from "../ComponentesParaTodos/tabela/Linha";
import { CabecalhoTabela } from "../ComponentesParaTodos/tabela/CabecalhoTabela";
import { Subelemento } from "../../../../types/Subelemento";

export const TodosSubElementos: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams()
  const [pagina, setPagina] = useState(1);

  const { isLoading, data } = useQuery(
    ["subelemento-por-id-subelemento", pagina],
    () =>
      buscarTodosSubelementosPorPagina({
        elementosId: id!,
        numero_pagina: pagina,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const subelementos = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <SubElementosStyle.Container>
      {isLoading && <SpinnerCarregamento />}
      <SubElementosStyle.Header>
        <h3>Todos Subelementos</h3>
        <ButtonDefault onClick={() => navigate(`/categorias/elementos/subelementos/adicionar/${id}`)}>
          Adicionar +
        </ButtonDefault>
      </SubElementosStyle.Header>

      <TableComum>
        <CabecalhoTabela />
        {subelementos?.map((subelemento: Subelemento) => (
          <LinhaSubelementos key={subelemento?.id} subelemento={subelemento!} />
        ))}
      </TableComum>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={subelementos}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </SubElementosStyle.Container>
  );
};
