import * as Fluxo from "./styles";
import { useQuery } from "react-query";

import { buscaDadoUsuarioNaSessao } from "../../utils/buscaDadoUsuarioNaSessao";
import { useState } from "react";
import { buscarFluxoCaixaPorUsuario } from "./api";

import { toast } from "react-toastify";
import { PaginacaoComum } from "../../Components/paginacoes/Paginacao";
import { SpinnerCarregamento } from "../../Components/spinners/SpinnerCarregamento";
import { ItemFluxoCaixa } from "../../types/ItemFluxoCaixa";
import { formataDataPadraoBR } from "../../utils/formatadoresDatahora/formatarDataPadraoBR";
import { formataHoraPadraoBR } from "../../utils/formatadoresDatahora/formatarHoraPadraoBR";
import { AcoesItems } from "../../Components/acoes/AcoesItems";
import { CabecalhoTabela } from "./Components/CabecalhoTabela";

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
    <div>
      {isLoading && <SpinnerCarregamento />}
      <header>
        <h3>Fluxo de caixa</h3>
      </header>
      <Fluxo.Container>
        <Fluxo.Tabela>
          <CabecalhoTabela />
          <tbody>
            {itemsFluxoCaixa?.map((item: ItemFluxoCaixa) => {
              return (
                <tr>
                  <td>{item?.orderador}</td>
                  <td>
                    {formataDataPadraoBR(item?.data_insersao?.toString()!)}
                  </td>
                  <td>
                    {formataHoraPadraoBR(item?.data_insersao?.toString()!)}
                  </td>
                  <td>{item?.elementos?.descricao}</td>
                  <td>{item?.subelementos?.descricao}</td>
                  <td>{item?.tipos?.descricao}</td>
                  <td>{item?.subtipos?.descricao}</td>
                  <td>{item?.descricao}</td>
                  <td>{item?.valor}</td>
                  <td>{item?.saldo}</td>
                  <td>
                    <AcoesItems id={item?.id} caminhoPrincipal="/fluxocaixa" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Fluxo.Tabela>
      </Fluxo.Container>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={itemsFluxoCaixa}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </div>
  );
};
