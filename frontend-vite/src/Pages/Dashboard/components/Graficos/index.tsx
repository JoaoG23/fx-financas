import React from "react";

import * as Grafico from "./styles";
import { GraficoDozeMeses } from "./components/GraficoDozeMeses";
import { DespesasElementosMesGrafico } from "./components/DespesasElementosMesGrafico";
import { DespesasTiposMesGrafico } from "./components/DespesasTiposMesGraficos";

import { MesSelect } from "../../../../Components/selects/MesSelect";
import { DespesasSubelementosMesGrafico } from "./components/DespesasSubelementosMesGrafico";

export const Graficos: React.FC = () => {
  return (
    <Grafico.Container>
      <Grafico.Titulo>Gráficos referente aos meses</Grafico.Titulo>
      <aside>
        <div>
          <p>Selecione um mês</p>
          <MesSelect />
        </div>
      </aside>
      <div>
        <h5>Ganho e gastos dos ultimos 12 meses</h5>
        <GraficoDozeMeses />
      </div>

      <Grafico.Titulo>Despesas</Grafico.Titulo>
      <Grafico.Linha>
        <DespesasElementosMesGrafico />
        <DespesasTiposMesGrafico />
      </Grafico.Linha>
      <Grafico.Linha>
        <DespesasSubelementosMesGrafico />
      </Grafico.Linha>
    </Grafico.Container>
  );
};
