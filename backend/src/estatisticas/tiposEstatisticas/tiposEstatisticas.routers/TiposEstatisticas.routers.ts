import { Router } from "express";
const routers = Router();

import tiposEstatisticasController from "../tiposEstatisticas.controller/TiposEstatisticas.controller";

routers.get(
  "/despesas_tipos",
  tiposEstatisticasController.despesasTotalPorTipoEUsuarioMes
);

export default routers;
