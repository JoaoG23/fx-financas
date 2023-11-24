import * as Fluxo from "./styles";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { buscarFluxoCaixaMesPorUsuario } from "./api";

import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { buscarConfiguracoesPaginaPorChave } from "../../../utils/paginacao/buscarConfiguracoesPaginaPorChave/buscarConfiguracoesPaginaPorChave";
import { guardarConfiguracoesPaginaPorChave } from "../../../utils/paginacao/guardarConfiguracoesPaginaPorChave/guardarConfiguracoesPaginaPorChave";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../Components/tables/TableComum";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import { CabecalhoTabela } from "../ComponentesParaTodos/tabela/CabecalhoTabela";
import { LinhaItemFluxocaixa } from "../ComponentesParaTodos/tabela/Linha";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";

import { ItemFluxoCaixa } from "../../../types/ItemFluxoCaixa";
import { PaginacaoFluxoCaixaCache } from "../../../types/fluxocaixa/PaginacaoFluxoCaixaCache";

export const TodosItemsMesFluxoCaixa: React.FC = () => {
  const navigate = useNavigate();

  const { idUsuario } = buscaDadoUsuarioNaSessao();

  const chaveFluxoCaixa: string = "fluxocaixa-mes";

  const configuracaoPagina: PaginacaoFluxoCaixaCache =
    buscarConfiguracoesPaginaPorChave(chaveFluxoCaixa) || {};

  const [pagina, setPagina] = useState(configuracaoPagina?.pagina! || 1);

  const { isLoading, data } = useQuery(
    ["todos-fluxocaixa-usuario-mes", pagina],
    () =>
      buscarFluxoCaixaMesPorUsuario({
        usuariosId: idUsuario!,
        numero_pagina: pagina,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  useEffect(() => {
    guardarConfiguracoesPaginaPorChave(chaveFluxoCaixa, {
      criteriosBusca: {},
      pagina,
    });
  }, [pagina]);

  const itemsFluxoCaixa = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}
      <Fluxo.Header>
        <h2>Fluxo de caixa deste mês</h2>
        <Fluxo.ContainerButtons>
          <ButtonDefault onClick={() => navigate("/fluxocaixa/adicionar")}>
            <>Adicionar</>
            <IoMdAddCircle />
          </ButtonDefault>
        </Fluxo.ContainerButtons>
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
