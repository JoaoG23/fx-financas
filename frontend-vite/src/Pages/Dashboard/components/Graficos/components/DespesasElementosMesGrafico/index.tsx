import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarDespesaMesPorElementoUsuarios } from "./api";

import { ElementosDespesas } from "./types/ElementosDespesas";

import { converteValorNegativoParaAbsoluto } from "../../../../../../utils/conversao/converteValorNegativoParaAbsoluto/converteValorNegativoParaAbsoluto";

import { SpinnerCarregamento } from "../../../../../../Components/spinners/SpinnerCarregamento";
import { PizzaGrafico } from "../graficos-padroes/PizzaGrafico";
import { useMesStore } from "../../../../../../stores/useMesStore/useMesStore";

export const DespesasElementosMesGrafico: React.FC = () => {
  const mes = useMesStore((state) => state?.mes!);
  const { data, isLoading } = useQuery(
    ["despesas-elemento-mes", mes],
    () => buscarDespesaMesPorElementoUsuarios(mes),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const despesasData: ElementosDespesas[] = data?.data;

  const elementos: any[] =
    despesasData?.map((despesa: ElementosDespesas) => despesa.elemento) || [];

  const despesas: number[] =
    despesasData?.map((despesa: ElementosDespesas) => {
      const valorString = parseFloat(despesa.despesas!);
      return converteValorNegativoParaAbsoluto(valorString);
    }) || [];
  return (
    <div>
      {isLoading && <SpinnerCarregamento />}
      <PizzaGrafico
        titulo="Total Receitas por elemento mês"
        labels={elementos}
        series={despesas}
      />
    </div>
  );
};