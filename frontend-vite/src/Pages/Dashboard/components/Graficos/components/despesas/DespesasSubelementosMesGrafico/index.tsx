import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarDespesaMesPorSubelementosUsuarios } from "./api";

import { SubelementosDespesa } from "./types/TipoDespesa";
import { SeriesLabel } from "../../graficos-padroes/BarraHorizontalMarcadoresGrafico/types/SeriesLabel";
import { BarraHorizontalMarcadoresGrafico } from "../../graficos-padroes/BarraHorizontalMarcadoresGrafico";

import { converteValorNegativoParaAbsoluto } from "../../../../../../../utils/conversao/converteValorNegativoParaAbsoluto/converteValorNegativoParaAbsoluto";

import { SpinnerCarregamento } from "../../../../../../../Components/spinners/SpinnerCarregamento";
import { Container } from "./styles";
import { extrairSaldoAtual } from "../../../utils/extrairSaldoAtual/extrairSaldoAtual";
import { extrairDespesas } from "../../../utils/extrairDespesas/extrairDespesas";
import { MultiplasBarrasGrafico } from "../../graficos-padroes/MultiplasBarrasGrafico";

type Props = {
  mesSelecionado: number;
};

export const DespesasSubelementosMesGrafico: React.FC<Props> = ({
  mesSelecionado,
}) => {
  const mes = mesSelecionado;
  const { data, isLoading } = useQuery(
    ["despesas-subelementos-mes", mes],
    () => buscarDespesaMesPorSubelementosUsuarios(mes),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );
  const despesasData: SubelementosDespesa[] = data?.data || [];

  const extrairLabels = (despesa: SubelementosDespesa) => despesa.subelemento;
  const despesas: number[] = despesasData.map(extrairDespesas);
  const saldoAtual: number[] = despesasData.map(extrairSaldoAtual);
  const categories: string[] = despesasData.map(extrairLabels);

  return (
    <Container>
      {isLoading && <SpinnerCarregamento />}
      <MultiplasBarrasGrafico
        titulo={"Subelementos despesas por mês"}
        series={[
          {
            name: "Gasto Mês",
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
