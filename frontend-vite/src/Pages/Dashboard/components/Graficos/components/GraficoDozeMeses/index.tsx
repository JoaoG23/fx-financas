import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { buscarReceitasEDespesas12MesesAno } from "./api";

import { SpinnerCarregamento } from "../../../../../../Components/spinners/SpinnerCarregamento";

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

  return (
    <>
      {isLoadingCabecalho && <SpinnerCarregamento />}
      <ResponsiveContainer width="100%" height={300}>
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
      </ResponsiveContainer>
    </>
  );
};
