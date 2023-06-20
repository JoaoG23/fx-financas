import { Router } from "express";
const routers = Router();

import tiposController from "../tipos.controller/tipos.controller";

routers.get("/", tiposController.listarTodos);
routers.get("/paginas", tiposController.listarTodosPorPagina);
routers.get("/usuario/:usuariosId", tiposController.listarTodosPorUsuariosId);
routers.get(
  "/subelementos/paginas",
  tiposController.listarPorSubelementosPorPagina
);
routers.get("/:id", tiposController.listaPorId);

routers.post("/", tiposController.criar);

routers.put("/:id", tiposController.atualizarPorId);

routers.delete("/:id", tiposController.deletarPorId);

export default routers;
