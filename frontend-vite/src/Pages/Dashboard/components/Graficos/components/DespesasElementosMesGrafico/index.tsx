import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarDespesaMesPorElementoUsuarios } from "./api";

import { ElementosDespesas } from "./types/ElementosDespesas";

import { converteValorNegativoParaAbsoluto } from "../../../../../../utils/conversao/converteValorNegativoParaAbsoluto/converteValorNegativoParaAbsoluto";

export const DespesasElementosMesGrafico: React.FC = () => {
  const { data, isLoading } = useQuery(
    "despesas-elemento-mes",
    buscarDespesaMesPorElementoUsuarios,
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const despesasData: ElementosDespesas[] = data?.data;

  const elementos: any[] =
    despesasData?.map((despesa: ElementosDespesas) => despesa?.elemento) || [];

  const despesas: number[] =
    despesasData?.map((despesa: ElementosDespesas) => {
      const valorString = parseFloat(despesa.despesas!);
      return converteValorNegativoParaAbsoluto(valorString);
    }) || [];

  const dados = {
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      legend: {
        colors: ["#1CAF82", "#6575F1"],
      },
      fill: {
        colors: ["#1CAF82", "#6575F1"],
      },
      labels: elementos,
      title: {
        text: "Total despesas por elemento mês",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <ReactApexChart
        options={dados.options as object}
        series={despesas}
        type="pie"
        width={380}
      />
    </div>
  );
};
