import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarDespesaMesPorElementoUsuarios } from "./api";

import { ElementosDespesas } from "./types/ElementosDespesas";

import { PizzaGrafico } from "../../graficos-padroes/PizzaGrafico";
import { SpinnerCarregamento } from "../../../../../../../Components/spinners/SpinnerCarregamento";

import { converteValorNegativoParaAbsoluto } from "../../../../../../../utils/conversao/converteValorNegativoParaAbsoluto/converteValorNegativoParaAbsoluto";
import { Container } from "./styles";
import { DonutGrafico } from "../../graficos-padroes/DonutGrafico";

type Props = {
  mesSelecionado: number;
};

export const DespesasElementosMesGrafico: React.FC<Props> = ({
  mesSelecionado,
}) => {
  const mes = mesSelecionado;

  const { data, isLoading } = useQuery(
    ["despesas-elemento-mes", mes],
    () => buscarDespesaMesPorElementoUsuarios(mes),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const despesasData: ElementosDespesas[] = data?.data;

  const elementos: any[] =
    despesasData?.map((despesa: ElementosDespesas) => despesa.elemento) || [];

  const despesas: number[] =
    despesasData?.map((despesa: ElementosDespesas) => {
      const valorString = parseFloat(despesa.despesas!);
      return converteValorNegativoParaAbsoluto(valorString);
    }) || [];
  return (
    <Container>
      {isLoading && <SpinnerCarregamento />}
      <DonutGrafico
        titulo="Total Despesas por elemento mês"
        labels={elementos}
        series={despesas}
      />
    </Container>
  );
};
