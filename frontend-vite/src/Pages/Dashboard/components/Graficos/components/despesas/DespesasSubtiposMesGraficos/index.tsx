import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarDespesaMesPorSubtiposUsuarios } from "./api";

import { TipoDespesa } from "./types/TipoDespesa";

import { SeriesLabel } from "../../graficos-padroes/BarraHorizontalMarcadoresGrafico/types/SeriesLabel";

import { converteValorNegativoParaAbsoluto } from "../../../../../../../utils/conversao/converteValorNegativoParaAbsoluto/converteValorNegativoParaAbsoluto";

import { SpinnerCarregamento } from "../../../../../../../Components/spinners/SpinnerCarregamento";
import { Container } from "./styles";
import { MultiplasBarrasGrafico } from "../../graficos-padroes/MultiplasBarrasGrafico";

import { extrairSaldoAtual } from "../../../utils/extrairSaldoAtual/extrairSaldoAtual";
import { extrairDespesas } from "../../../utils/extrairDespesas/extrairDespesas";

type Props = {
  mesSelecionado: number;
};
export const DespesasSubtiposMesGrafico: React.FC<Props> = ({
  mesSelecionado,
}) => {
  const mes = mesSelecionado;
  const { data, isLoading } = useQuery(
    ["despesas-subtipos-mes", mes],
    () => buscarDespesaMesPorSubtiposUsuarios(mes),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );
  const despesasData: TipoDespesa[] = data?.data! || [];

  const extrairLabels = (despesa: TipoDespesa) => despesa.subtipo;
  const despesas: number[] = despesasData.map(extrairDespesas);
  const saldoAtual: number[] = despesasData.map(extrairSaldoAtual);
  const categories: string[] = despesasData.map(extrairLabels);

  return (
    <Container>
      {isLoading && <SpinnerCarregamento />}
      <MultiplasBarrasGrafico
        categories={categories}
        titulo={"Subtipos despesas por mês"}
        series={[
          {
            name: "Gastos Mês",
            data: despesas,
          },
          {
            name: "Saldo Atual",
            data: saldoAtual,
          },
        ]}
      />
    </Container>
  );
};
