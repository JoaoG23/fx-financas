import React from "react";

import * as Grafico from "./styles";

import { GraficoDozeMeses } from "./components/GraficoDozeMeses";

import { useMesStore } from "../../../../stores/useMesStore/useMesStore";

import { DespesasElementosMesGrafico } from "./components/despesas/DespesasElementosMesGrafico";
import { DespesasTiposMesGrafico } from "./components/despesas/DespesasTiposMesGraficos";
import { DespesasSubelementosMesGrafico } from "./components/despesas/DespesasSubelementosMesGrafico";
import { DespesasTiposDespesasMesGrafico } from "./components/despesas/DespesasTipoDespesaGrafico";
import { Card } from "../../../../Components/Card";

export const Graficos: React.FC = () => {
  const mes = useMesStore((state) => state?.mes!);

  return (
    <Grafico.Container>
      <Grafico.PrimeiraLinha>
        <Card light>
          <GraficoDozeMeses />
        </Card>
        <Card light>
          <DespesasTiposDespesasMesGrafico mesSelecionado={mes} />
        </Card>
      </Grafico.PrimeiraLinha>
      <Grafico.SegundaLinha>
        <Card light>
          <DespesasElementosMesGrafico mesSelecionado={mes} />
        </Card>
        <Card light>
          <DespesasSubelementosMesGrafico mesSelecionado={mes} />
        </Card>
        <Card light>
          <DespesasTiposMesGrafico mesSelecionado={mes} />
        </Card>
      </Grafico.SegundaLinha>
    </Grafico.Container>
  );
};
