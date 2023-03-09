import { Router } from "express";
const routers = Router();

import { FluxoCaixaController } from "../fluxocaixa.controller/fluxocaixa.controller";
import { FluxoCaixaServices } from "../fluxocaixa.service/fluxocaixa.service";

const fluxocaixaController = new FluxoCaixaController();

routers.get("/", fluxocaixaController.listarTodos);
routers.get("/paginas", fluxocaixaController.listarTodosPorPaginaUsuario);
routers.get("/:id", fluxocaixaController.listaPorId);

routers.post("/", fluxocaixaController.criar);

routers.put("/:id", fluxocaixaController.atualizarPorId);

routers.delete("/:id", fluxocaixaController.deletarPorId);

export default routers;
