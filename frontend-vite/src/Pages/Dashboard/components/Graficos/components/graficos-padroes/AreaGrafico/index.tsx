import ReactApexChart from "react-apexcharts";

type Props = {
  titulo?: string;
  firstSerie: number[];
  firstLabel: string;
  secondSerie: number[];
  secondLabel: string;
  labels: string[];
};

export const AreaGrafico: React.FC<Props> = ({
  firstSerie,
  firstLabel,
  secondSerie,
  secondLabel,
  labels,
}) => {
  const options = {
    chart: {
      type: "area",
    },
    xaxis: {
      categories: labels,
    },
    stroke: {
      curve: "straight",
    },

    fill: {
      type: "solid",
      opacity: 0.8,
    },
    colors: [ "#6979F8", "#0acc8e"],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "13px",
      }
    },
  };

  const series = [
    {
      name: firstLabel,
      data: firstSerie,
    },
    {
      name: secondLabel,
      data: secondSerie,
    },
  ];

  return (
    <div id="area-chart">
      <ReactApexChart
        options={options as any}
        series={series}
        type="area"
        height={330}
      />
    </div>
  );
};
