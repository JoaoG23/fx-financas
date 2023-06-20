import { Router } from "express";
const routers = Router();

import subtiposController from "../subtipos.controller/subtipos.controller";

routers.get("/", subtiposController.listarTodos);
routers.get("/usuario/:usuariosId", subtiposController.listaPorUsuariosId);
routers.get("/tipos/paginas", subtiposController.listarPorTiposPorPagina);
routers.get("/:id", subtiposController.listaPorId);

routers.post("/", subtiposController.criar);

routers.put("/:id", subtiposController.atualizarPorId);

routers.delete("/:id", subtiposController.deletarPorId);

export default routers;
