import { Router } from "express";
const routers = Router();

import subtiposEstatisticasController from "../subtiposEstatisticas.controller/SubtiposEstatisticas.controller";

routers.get(
  "/despesas_subtipos",
  subtiposEstatisticasController.despesasTotalPorSubtipoEUsuarioMes
);

export default routers;
