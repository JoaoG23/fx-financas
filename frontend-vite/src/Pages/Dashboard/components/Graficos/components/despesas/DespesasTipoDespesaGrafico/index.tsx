import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarDespesaMesPorTiposDespesasUsuarios } from "./api";

import { TiposDespesasEstatistica } from "./types/TiposDespesasEstatistica";

import { PizzaGrafico } from "../../graficos-padroes/PizzaGrafico";
import { SpinnerCarregamento } from "../../../../../../../Components/spinners/SpinnerCarregamento";

import { converteValorNegativoParaAbsoluto } from "../../../../../../../utils/conversao/converteValorNegativoParaAbsoluto/converteValorNegativoParaAbsoluto";
import { DonutGrafico } from "../../graficos-padroes/DonutGrafico";
import { Container } from "./styles";

type Props = {
  mesSelecionado: number;
};

export const DespesasTiposDespesasMesGrafico: React.FC<Props> = ({
  mesSelecionado,
}) => {
  const mes = mesSelecionado;

  const { data, isLoading } = useQuery(
    ["despesas-tipos-despesas-mes", mes],
    () => buscarDespesaMesPorTiposDespesasUsuarios(mes),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const despesasData: TiposDespesasEstatistica[] = data?.data;

  const tiposDespesas: any[] =
    despesasData?.map(
      (despesa: TiposDespesasEstatistica) => despesa.tipo
    ) || [];

  const despesas: number[] =
    despesasData?.map((despesa: TiposDespesasEstatistica) => {
      const valorString = parseFloat(despesa.despesas!);
      return converteValorNegativoParaAbsoluto(valorString);
    }) || [];
  return (
    <Container>
      {isLoading && <SpinnerCarregamento />}
      <DonutGrafico
        titulo="Tipos despesas por mês"
        labels={tiposDespesas}
        series={despesas}
      />
    </Container>
  );
};
