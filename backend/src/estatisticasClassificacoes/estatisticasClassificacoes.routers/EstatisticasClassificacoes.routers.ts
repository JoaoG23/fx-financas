import { Router } from "express";

const routers = Router();

import estatisticasClassificacoesController from "../estatisticasClassificacoes.controller/EstatisticasClassificacoes.controller";

routers.get(
  "/elementos",
  estatisticasClassificacoesController.buscarDespesasPorUsuarioEElementosEsteMes
);

export default routers;
