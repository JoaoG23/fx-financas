import { Router } from "express";
const routers = Router();

import estatisticasController from "../estatisticas.controller/estatisticas.controller";

routers.get(
  "/total_gasto_mes/:usuariosId",
  estatisticasController.buscarGastosMesPorUsuario
);
routers.get(
  "/total_ganhos_mes/:usuariosId",
  estatisticasController.buscarGanhosMesPorUsuario
);
routers.get(
  "/saldo_atual/:usuariosId",
  estatisticasController.buscarSaldoAtualPorUsuario
);

export default routers;
