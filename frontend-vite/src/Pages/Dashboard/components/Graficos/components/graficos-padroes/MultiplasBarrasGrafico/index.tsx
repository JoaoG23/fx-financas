import React from "react";
import ReactApexChart from "react-apexcharts";

import { Series } from "./types/Series";

type Props = {
  titulo: string;
  series: Series[];
  categories: string[];
};

export const MultiplasBarrasGrafico: React.FC<Props> = ({
  titulo,
  series,
  categories,
}) => {
  const dados = {
    series,
    options: {
      chart: {
        type: "bar",
        stacked: false,
        zoom: {
          enabled: true,
          type: "x",
          autoScaleYaxis: true,
          zoomedArea: {
            fill: {
              color: "#90CAF9",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
              opacity: 0.4,
              width: 1,
            },
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
          borderRadius: 1,
        },
      },
      xaxis: {
        categories: categories,
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "Reais $",
        },
      },
      tooltip: {
        y: {
          formatter: function (valor: any) {
            return `R$ ${valor}`;
          },
        },
      },

      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
          colors: ["#ffffffd0"],
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
        },
      },

      colors: ["#F77B36", "#0ACC8E"],
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
