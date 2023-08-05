import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarDespesaMesPorTiposUsuarios } from "./api";

import { SpinnerCarregamento } from "../../../../../../Components/spinners/SpinnerCarregamento";
import { converteValorNegativoParaAbsoluto } from "../../../../../../utils/conversao/converteValorNegativoParaAbsoluto/converteValorNegativoParaAbsoluto";
import { BarraHorizontalMarcadoresGrafico } from "../graficos-padroes/BarraHorizontalMarcadoresGrafico";

import { TipoDespesa } from "./types/TipoDespesa";
import { SeriesLabel } from "../graficos-padroes/BarraHorizontalMarcadoresGrafico/types/SeriesLabel";

export const DespesasTiposMesGrafico: React.FC = () => {
  const { data, isLoading } = useQuery(
    "despesas-tipos-mes",
    buscarDespesaMesPorTiposUsuarios,
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const despesasData: TipoDespesa[] = data?.data;
  const despesas: SeriesLabel[] | any =
    despesasData?.map((despesa: TipoDespesa) => {
      const valorInteiro = parseFloat(despesa.despesas!);

      const gastoMes = converteValorNegativoParaAbsoluto(valorInteiro);
      const serieDespesa = {
        x: despesa?.tipo, // Label
        y: gastoMes, // valor
        goals: [
          {
            name: "Limite Gastos",
            value: despesa?.limiteGasto || 0,
            strokeWidth: 8,
            strokeHeight: 15,
            strokeColor: "#FFAB7A",
          },
        ],
      };
      return serieDespesa;
    }) || [];

  return (
    <div>
      {isLoading && <SpinnerCarregamento />}
      <BarraHorizontalMarcadoresGrafico
        titulo={"Despesas por tipos mês"}
        data={despesas}
      />
    </div>
  );
};
