import React from "react";
import { Calendario } from "./Calendario";

import * as Calendarios from './styles'

export const Agenda: React.FC = () => {
  return (
    <Calendarios.Container>
      <Calendario />
    </Calendarios.Container>
  );
};
