import React from "react";
import ReactApexChart from "react-apexcharts";

type Props = {
  titulo: string;
  despesasData: any[];
  saldoAtualData: any[];
};

export const MultiplasBarrasGrafico: React.FC<Props> = ({
  titulo,
  despesasData,
  saldoAtualData,
}) => {
  const dados = {
    series: [
      {
        name: "Despesas",
        data: despesasData, 
      },
      {
        name: "Saldo Atual",
        data: saldoAtualData, 
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true, // this makes the chart stacked
      },
      plotOptions: {
        bar: {
          horizontal: false, // this makes the chart vertical
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
      colors: ["#0acc8e", "#FFA26B"],

      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Despesas", "Saldo Atual"],
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
