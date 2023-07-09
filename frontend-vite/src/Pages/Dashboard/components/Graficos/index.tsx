import React from "react";

import * as Grafico from "./styles";
import { GraficoDozeMeses } from "./components/GraficoDozeMeses";
import { DespesasElementosMesGrafico } from "./components/DespesasElementosMesGrafico";

export const Graficos: React.FC = () => {
  return (
    <Grafico.Container>
      <>
        <h4>Ganho e gastos dos ultimos 12 meses</h4>
        <GraficoDozeMeses />
      </>
      <Grafico.Linha>
        <DespesasElementosMesGrafico />
        <DespesasElementosMesGrafico />
        <DespesasElementosMesGrafico />
        {/* <DespesasElementosMesGrafico /> */}
      </Grafico.Linha>
    </Grafico.Container>
  );
};
