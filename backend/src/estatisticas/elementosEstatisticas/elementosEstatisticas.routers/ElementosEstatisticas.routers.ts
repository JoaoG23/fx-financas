import { Router } from "express";
const routers = Router();
import elementosEstatisticasController from "../elementosEstatisticas.controller/ElementosEstatisticas.controller";

routers.get(
  "/despesas_elemento/:usuariosId",
  elementosEstatisticasController.despesasTotalPorElementoEUsuarioMes
);

export default routers;
