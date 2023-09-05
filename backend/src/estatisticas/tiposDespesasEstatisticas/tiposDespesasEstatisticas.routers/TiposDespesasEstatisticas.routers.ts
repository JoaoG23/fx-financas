import { Router } from "express";
const routers = Router();

import tiposDespesasEstatisticasController from "../tiposDespesasEstatisticas.controller/TiposDespesasEstatisticas.controller";

routers.get(
  "/despesas_tipos_despesas",
  tiposDespesasEstatisticasController.despesasTotalPorTipoEUsuarioMes
);

export default routers;
