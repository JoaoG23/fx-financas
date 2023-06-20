import { useQuery } from "react-query";
import { toast } from "react-toastify";
import * as ElementosStyle from "./styles";

import { useState } from "react";
import { buscarTodosElementos } from "./api";

import { CabecalhoTabela } from "./components/tabela/CabecalhoTabela";
import { LinhaElementos } from "./components/tabela/Linha";
import { buscaDadoUsuarioNaSessao } from "../../../../utils/buscaDadoUsuarioNaSessao";
import { SpinnerCarregamento } from "../../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../../Components/tables/TableComum";

import { Elemento } from "../../../../types/Elemento";
import { PaginacaoComum } from "../../../../Components/paginacoes/Paginacao";
import ButtonDefault from "../../../../Components/Buttons/ButtonDefault/ButtonDark";

import { useNavigate } from "react-router-dom";

export const TodosElementos: React.FC = () => {
  const navigate = useNavigate();

  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const [pagina, setPagina] = useState(1);

  const { isLoading, data } = useQuery(
    ["elemento-usuario", pagina],
    () =>
      buscarTodosElementos({
        usuariosId: idUsuario!,
        numero_pagina: pagina,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const elementos = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <ElementosStyle.Container>
      {isLoading && <SpinnerCarregamento />}
      <ElementosStyle.Header>
        <h3>Elementos</h3>
        <ButtonDefault onClick={() => navigate("adicionar")}>
          Adicionar +
        </ButtonDefault>
      </ElementosStyle.Header>

      <TableComum>
        <CabecalhoTabela />
        {elementos?.map((elemento: Elemento) => (
          <LinhaElementos key={elemento?.id} elemento={elemento!} />
        ))}
      </TableComum>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={elementos}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </ElementosStyle.Container>
  );
};
