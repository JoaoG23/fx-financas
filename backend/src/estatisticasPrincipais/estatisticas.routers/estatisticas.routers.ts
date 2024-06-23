import { Router } from "express";
const routers = Router();

import estatisticasController from "../estatisticas.controller/estatisticas.controller";


routers.get(
  "/despesas_receitas_dozes_meses",
  estatisticasController.buscarDespesasReceitas12MesesAnoPorUsuario
);

routers.get(
  "/detalhes-finaceiros-mes/:usuariosId",
  estatisticasController.obterDetalhesFinanceirosMesPorUsuario
);

export default routers;
