import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { useFetch } from "../../../services/api";

import ModalCarregando from "../../../Components/Modais/ModalCarregando";
import ModalErro from "../../../Components/Modais/ModalErro";
import { HistoricoExercicio } from "../../../types/HistoricoExercicio";

type Props = {
  userId?: number | string;
  exerciceId?: number | string;
};
const AreaGrafico: React.FC<Props> = ({ userId, exerciceId }) => {
  const {
    dados: exercicios,
    isCarregando,
    error,
    setError,
  } = useFetch<HistoricoExercicio[] | any>(`/api/statistics/lastthree`, {
    method: "get",
    params: {
      userId: userId,
      exerciceId: exerciceId,
    },
  });

  if (error) {
    setError(null);
  }

  return (
    <>
      {error && (
        <ModalErro>
          <p> Ou não tem dados a ser apresentado ou houve outro erro</p>
        </ModalErro>
      )}
      {isCarregando && <ModalCarregando />}
      <ResponsiveContainer width="80%" aspect={2}>
        <AreaChart
          width={500}
          height={400}
          data={exercicios}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dateInsert" stroke="white" angle={20} />
          <YAxis stroke="white">
            <Label
              value="Kilos"
              angle={-90}
              fill="white"
              offset={0}
              position="center"
            />
          </YAxis>
          <Tooltip />
          <Area
            dataKey="pound"
            stroke="#20e5e0"
            fill="#20e5e0"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaGrafico;
