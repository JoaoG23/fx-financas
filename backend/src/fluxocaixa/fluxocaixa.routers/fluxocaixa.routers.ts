import { Router } from "express";
const routers = Router();

import { FluxoCaixaController } from "../fluxocaixa.controller/fluxocaixa.controller";

const fluxocaixaController = new FluxoCaixaController();

routers.get("/usuario/pesquisar", fluxocaixaController.pesquisarPorCriterios);
routers.get(
  "/usuario/:usuariosId",
  fluxocaixaController.listarTodosPorUsuariosId
);
routers.get("/paginas", fluxocaixaController.listarTodosPorPaginaUsuario);
routers.get(
  "/paginas/mes",
  fluxocaixaController.listarTodosPorPaginaMesUsuario
);
routers.get("/:id", fluxocaixaController.listaPorId);

routers.post("/massa", fluxocaixaController.criarVarios);
routers.post("/", fluxocaixaController.criar);

routers.put("/:id", fluxocaixaController.atualizarPorId);

routers.patch("/:id", fluxocaixaController.atualizarDataInsersaoPorId);

routers.delete("/:id", fluxocaixaController.deletarPorId);

export default routers;
