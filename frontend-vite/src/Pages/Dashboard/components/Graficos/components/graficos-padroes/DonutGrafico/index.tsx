import React from "react";
import ReactApexChart from "react-apexcharts";

type Props = {
  titulo: string;
  series: number[];
  labels: string[];
};

export const DonutGrafico: React.FC<Props> = ({ titulo, series, labels }) => {
  const configuracoes = {
    series,
    options: {
      chart: {
        width: 380,
        type: "donut",
      },

      legend: {
        position: "bottom",
      },
      colors: [
        "#0acc8e",
        "#FFA26B",
        "#4F63F7",
        "#F78187",
        "#6979F8",
        "#F7D14F",
        "#5CF783",
        "#5159FC",
        "#FA342F",
        "#1721FA",
        "#FAD12F",
      ],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "75%",
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                formatter: function (w: any) {
                  const totals = w.globals.seriesTotals;

                  const result = totals.reduce((a: any, b: any) => a + b, 0);

                  return (result / 1).toFixed(2);
                },
              },
            },
          },
        },
      },
      labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
              position: "center",
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
        type="donut"
        height={330}
      />
    </>
  );
};
