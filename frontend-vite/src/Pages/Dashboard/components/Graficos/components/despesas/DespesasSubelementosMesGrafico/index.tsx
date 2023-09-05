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

  const despesasData: SubelementosDespesa[] = data?.data;
  const despesas: SeriesLabel[] | any =
    despesasData?.map((despesa: SubelementosDespesa) => {
      const valorInteiro = parseFloat(despesa.despesas!);

      const gastoMes = converteValorNegativoParaAbsoluto(valorInteiro);
      const serieDespesa = {
        x: despesa?.subelemento, // Label
        y: gastoMes, // valor
        goals: [
          {
            name: "Limite Gastos",
            value: despesa?.limiteGasto || 0,
            strokeWidth: 6,
            strokeHeight: 19,
            strokeColor: "#FFAB7A",
          },
        ],
      };
      return serieDespesa;
    }) || [];

  return (
    <Container>
      {isLoading && <SpinnerCarregamento />}
      <BarraHorizontalMarcadoresGrafico
        titulo={"Despesas por subelementos mês"}
        data={despesas}
      />
    </Container>
  );
};
