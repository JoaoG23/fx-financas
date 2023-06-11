import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { buscarReceitasEDespesas12MesesAno } from "./api";

// import { Container } from './styles';

export const GraficoDozeMeses: React.FC = () => {
  const { data: dataReceitasDespesa, isLoading: isLoadingCabecalho } = useQuery(
    "ultimo-doze-despesas-receita",
    buscarReceitasEDespesas12MesesAno,
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const receitasDespesas = dataReceitasDespesa?.data;
  // const data = [
  //   {
  //     mes: "Page A",
  //     despesasValor: 4000,
  //     receitasValor: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     mes: "Page B",
  //     despesasValor: 3000,
  //     receitasValor: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     mes: "Page C",
  //     despesasValor: 2000,
  //     receitasValor: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     mes: "Page D",
  //     despesasValor: 2780,
  //     receitasValor: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     mes: "Page E",
  //     despesasValor: 1890,
  //     receitasValor: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     mes: "Page F",
  //     despesasValor: 2390,
  //     receitasValor: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     mes: "Page G",
  //     despesasValor: 3490,
  //     receitasValor: 4300,
  //     amt: 2100,
  //   },
  // ];
  return (
    <div>
      <AreaChart
        width={900}
        height={250}
        data={receitasDespesas}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="mes" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="despesa"
          stroke="#1CAF82"
          fillOpacity={0.9}
          fill="#1CAF82"
        />
        <Area
          type="monotone"
          dataKey="receita"
          stroke="#FFA26B"
          fillOpacity={0.9}
          fill="#FFA26B"
        />
      </AreaChart>
    </div>
  );
};
