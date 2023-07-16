import React from "react";
import ReactApexChart from "react-apexcharts";

type Props = {
  titulo: string;
  series: number[];
  labels: string[];
};

export const PizzaGrafico: React.FC<Props> = ({ titulo, series, labels }) => {
  const configuracoes = {
    series,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      colors: ["#FFA26B", "#1CAF82"],
      legend: {
        position: "bottom",
      },
      labels,
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
    <>
      <h5>{titulo}</h5>
      <ReactApexChart
        options={configuracoes.options as object}
        series={configuracoes.series}
        type="pie"
        width={360}
        height={360}
      />
    </>
  );
};
