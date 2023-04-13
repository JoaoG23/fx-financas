import * as Fluxo from "./styles";
import { useQuery } from "react-query";

import { buscaDadoUsuarioNaSessao } from "../../utils/buscaDadoUsuarioNaSessao";
import { useState } from "react";
import { buscarFluxoCaixaPorUsuario } from "./api";

import { toast } from "react-toastify";
import { PaginacaoComum } from "../../Components/paginacoes/Paginacao";
import { SpinnerCarregamento } from "../../Components/spinners/SpinnerCarregamento";

export const FluxoCaixa: React.FC = () => {
  const { idConvertido } = buscaDadoUsuarioNaSessao();
  const [pagina, setPagina] = useState(1);

  const { isLoading, data } = useQuery(
    ["elemento-usuario", pagina],
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
        <h3>Fluxo de caixa</h3>
      </header>
      <Fluxo.Tabela>
        <thead>
          <tr>
            <th>Id</th>
            <th>Data Insersão</th>
            <th>Hora Insersão</th>
            <th>Descrição Gasto</th>
            <th>Valor Gasto</th>
            <th>Saldo Atual</th>
            <th>Elemento</th>
          </tr>
        </thead>
        <tbody>
          {itemsFluxoCaixa?.map((item: any) => {
            return (
              <tr>
                <td>{item.orderador}</td>
                <td>{item.data_insersao}</td>
                <td>{item.hora_insersao}</td>
                <td>{item.descricao}</td>
                <td>{item.valor}</td>
                <td>{item.saldo}</td>
                <td>{item.elementos.descricao}</td>
              </tr>
            );
          })}
        </tbody>
      </Fluxo.Tabela>

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
