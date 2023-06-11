import React from "react";

import * as Grafico from "./styles";
import { GraficoDozeMeses } from "./components/GraficoDozeMeses";
import { Card } from "../../../../Components/Card";

export const Graficos: React.FC = () => {
  return (
    <Grafico.Container>
        <h3>Grafico do 12 meses</h3>
        <GraficoDozeMeses />
    </Grafico.Container>
  );
};
