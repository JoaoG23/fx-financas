import { Router } from "express";
const routers = Router();

import { FluxoCaixaController } from "../fluxocaixa.controller/fluxocaixa.controller";

const fluxocaixaController = new FluxoCaixaController();

routers.get("/usuario/:id", fluxocaixaController.listarTodosPorUsuariosId);
routers.get("/paginas", fluxocaixaController.listarTodosPorPaginaUsuario);
routers.get("/:id", fluxocaixaController.listaPorId);

routers.post("/", fluxocaixaController.criar);

routers.put("/:id", fluxocaixaController.atualizarPorId);

routers.delete("/:id", fluxocaixaController.deletarPorId);

export default routers;
