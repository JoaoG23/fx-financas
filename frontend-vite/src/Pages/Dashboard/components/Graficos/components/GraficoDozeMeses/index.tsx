import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarReceitasEDespesas12MesesAno } from "./api";

import { SpinnerCarregamento } from "../../../../../../Components/spinners/SpinnerCarregamento";
import { AreaGrafico } from "../graficos-padroes/AreaGrafico";

export const GraficoDozeMeses: React.FC = () => {
  const { data: dataReceitasDespesa, isLoading: isLoadingCabecalho } = useQuery(
    "ultimo-doze-despesas-receita",
    buscarReceitasEDespesas12MesesAno,
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const receitasDespesas = dataReceitasDespesa?.data;

  const receitas = receitasDespesas?.map((element: any) => {
    return parseFloat(element.receita);
  });
  const despesas = receitasDespesas?.map((element: any) => {
    return Math.abs(parseFloat(element.despesa));
  });
  const mes = receitasDespesas?.map((element: any) => {
    return element.mes;
  });

  return (
    <div>
      <h5>Despesas e Receitas do 12 meses do ano</h5>
      {isLoadingCabecalho && <SpinnerCarregamento />}
      <AreaGrafico
        labels={mes}
        secondLabel="Receitas"
        firstLabel="Despesas"
        firstSerie={despesas}
        secondSerie={receitas}
      />
    </div>
  );
};
