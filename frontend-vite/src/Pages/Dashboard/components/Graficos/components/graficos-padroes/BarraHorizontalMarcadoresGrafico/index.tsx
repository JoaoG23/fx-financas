import React from "react";
import ReactApexChart from "react-apexcharts";

import { SeriesLabel } from "./types/SeriesLabel";

type Props = {
  titulo: string;
  data: SeriesLabel[];
};

export const BarraHorizontalMarcadoresGrafico: React.FC<Props> = ({
  titulo,
  data,
}) => {
  const dados = {
    series: [
      {
        name: "Despesa atual",
        data,
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: false

      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          // horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
          colors: ['#ffffffdc'],
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
        },
      },
      colors: ["#0acc8e", "#FFA26B"],

      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Gasto Mês", "Saldo Atual"],
      },
    },
  };

  return (
    <div id="chart">
      <h5>{titulo}</h5>
      <ReactApexChart
        options={dados.options as any}
        series={dados.series}
        type="bar"
        height={380}
      />
    </div>
  );
};
