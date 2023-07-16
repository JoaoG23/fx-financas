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
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ["#1CAF82"],
      dataLabels: {
        formatter: function (val: any, opt: any) {
          const goals =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          }
          return val;
        },
      },

      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Despesa atual", "Limite Gastos"],
        markers: {
          fillColors: ["#1CAF82", "#FFAB7A"],
        },
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
        width={450}
        height={360}
      />
    </div>
  );
};
