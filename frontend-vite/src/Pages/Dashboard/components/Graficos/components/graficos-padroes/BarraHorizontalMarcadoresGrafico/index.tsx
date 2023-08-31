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
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ["#6979F8"],
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
          fillColors: ["#6979F8", "#FFAB7A"],
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