import * as Fluxo from "./styles";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { toast } from "react-toastify";
import { useState } from "react";

import { buscarFluxoCaixaMesPorUsuario } from "./api";

import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../Components/tables/TableComum";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import { CabecalhoTabela } from "../ComponentesParaTodos/tabela/CabecalhoTabela";
import { LinhaItemFluxocaixa } from "../ComponentesParaTodos/tabela/Linha";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";

import { ItemFluxoCaixa } from "../../../types/ItemFluxoCaixa";

export const TodosItemsMesFluxoCaixa: React.FC = () => {
  const navigate = useNavigate();

  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const [pagina, setPagina] = useState(1);

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
          <ButtonDefault onClick={() => navigate("/fluxocaixa/adicionar/massa")}>
            <> Adicionar em massa </>
            <BsDatabaseFillAdd />
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
