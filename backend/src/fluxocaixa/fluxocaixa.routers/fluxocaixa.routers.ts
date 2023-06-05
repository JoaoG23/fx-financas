import { Router } from "express";
const routers = Router();

import { FluxoCaixaController } from "../fluxocaixa.controller/fluxocaixa.controller";

const fluxocaixaController = new FluxoCaixaController();

routers.get("/", fluxocaixaController.listarTodos);
routers.get("/paginas", fluxocaixaController.listarTodosPorPaginaUsuario);
routers.get("/:id", fluxocaixaController.listaPorId);

routers.post("/", fluxocaixaController.criar);

routers.put("/:id", fluxocaixaController.atualizarPorId);

routers.delete("/:id", fluxocaixaController.deletarPorId);

export default routers;
