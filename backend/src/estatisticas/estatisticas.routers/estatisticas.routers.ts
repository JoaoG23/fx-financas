import { Router } from "express";
const routers = Router();

import estatisticasController from "../estatisticas.controller/estatisticas.controller";

routers.get("/total_gasto_mes/:usuariosId", estatisticasController.buscarSomaTotalGastosMesPorUsuario);


export default routers;
