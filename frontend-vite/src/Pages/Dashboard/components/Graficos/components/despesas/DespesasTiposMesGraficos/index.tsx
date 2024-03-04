import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarDespesaMesPorTiposUsuarios } from "./api";

import { TipoDespesa } from "./types/TipoDespesa";

import { SpinnerCarregamento } from "../../../../../../../Components/spinners/SpinnerCarregamento";
import { Container } from "./styles";
import { MultiplasBarrasGrafico } from "../../graficos-padroes/MultiplasBarrasGrafico";

import { extrairDespesas } from "../../../utils/extrairDespesas/extrairDespesas";
import { extrairSaldoAtual } from "../../../utils/extrairSaldoAtual/extrairSaldoAtual";

type Props = {
  mesSelecionado: number;
};
export const DespesasTiposMesGrafico: React.FC<Props> = ({
  mesSelecionado,
}) => {
  const mes = mesSelecionado;
  const { data, isLoading } = useQuery(
    ["despesas-tipos-mes", mes],
    () => buscarDespesaMesPorTiposUsuarios(mes),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const extrairLabels = (despesa: TipoDespesa) => despesa.tipo;

  const despesasData: TipoDespesa[] = data?.data! || [];
  const despesas: number[] = despesasData.map(extrairDespesas);
  const saldoAtual: number[] = despesasData.map(extrairSaldoAtual);
  const categories: string[] = despesasData.map(extrairLabels);

  return (
    <Container>
      {isLoading && <SpinnerCarregamento />}
      <MultiplasBarrasGrafico
        titulo={"Tipos despesas por mês"}
        series={[
          {
            name: "Despesas",
            data: despesas,
          },
          {
            name: "Saldo Atual",
            data: saldoAtual,
          },
        ]}
        categories={categories}
      />
    </Container>
  );
};
