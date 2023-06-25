import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

import { buscarTodosPorPaginaLocais } from "./api";

import { Local } from "../../../types/Local";

import * as LocaisStyle from "./styles";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";
import { CabecalhoTabela } from "./components/tabela/CabecalhoTabela";
import { TableComum } from "../../../Components/tables/TableComum";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import { LinhaLocal } from "../ComponentesParaTodos/tabela/Linha";

export const TodosLocais: React.FC = () => {
  const navigate = useNavigate();

  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const [pagina, setPagina] = useState(1);

  const { isLoading, data } = useQuery(
    ["local-usuario", pagina],
    () =>
      buscarTodosPorPaginaLocais({
        usuariosId: idUsuario!,
        numero_pagina: pagina,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const locais = data?.data[1] || [];
  const totalQuantidadePaginas = data?.data[0]?.totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0]?.quantidadeTotalRegistros;

  return (
    <LocaisStyle.Container>
      {isLoading && <SpinnerCarregamento />}
      <LocaisStyle.Header>
        <h3>Locais</h3>
        <ButtonDefault onClick={() => navigate("adicionar")}>
          Adicionar +
        </ButtonDefault>
      </LocaisStyle.Header>

      <TableComum>
        <CabecalhoTabela />
        {locais?.map((local: Local) => (
          <LinhaLocal key={local?.id} local={local!} />
        ))}
      </TableComum>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={locais!}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </LocaisStyle.Container>
  );
};
