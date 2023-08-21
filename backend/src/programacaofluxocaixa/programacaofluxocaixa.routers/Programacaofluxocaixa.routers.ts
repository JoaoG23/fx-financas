import { Router } from "express";
const routers = Router();
import programacaofluxocaixaController from "../programacaofluxocaixa.controller/Programacaofluxocaixa.controller";

routers.get(
  "/usuario/descricao/:usuariosId",
  programacaofluxocaixaController.listarTodosPorUsuarioIdComDescricao
);
routers.get(
  "/usuario/:usuariosId",
  programacaofluxocaixaController.listarTodosPorUsuarioId
);
routers.get("/paginas", programacaofluxocaixaController.listarTodosPorPagina);
routers.get("/pesquisa", programacaofluxocaixaController.pesquisarPorCriterio);
routers.get("/:id", programacaofluxocaixaController.listaPorId);

routers.post("/", programacaofluxocaixaController.criar);
routers.post(
  "/capturar/:usuariosId",
  programacaofluxocaixaController.capturarEInserirEmFluxoCaixa
);

routers.put("/:id", programacaofluxocaixaController.atualizarPorId);

routers.delete("/:id", programacaofluxocaixaController.deletarPorId);

export default routers;
