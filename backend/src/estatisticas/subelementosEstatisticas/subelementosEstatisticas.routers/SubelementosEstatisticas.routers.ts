import { Router } from "express";
const routers = Router();

import subelementosEstatisticasController from "../subelementosEstatisticas.controller/SubelementosEstatisticas.controller";

routers.get(
  "/despesas_subelementos",
  subelementosEstatisticasController.despesasTotalPorTipoEUsuarioMes
);

export default routers;
