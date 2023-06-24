import { Router } from "express";
const routers = Router();

import tiposController from "../tipos.controller/tipos.controller";

routers.get(
  "/subelementos/:usuariosId",
  tiposController.listarTodosPorSubelementosId
);
routers.get(
  "/subelementos/paginas",
  tiposController.listarPorSubelementosPorPagina
);
routers.get("/", tiposController.listarTodos);
routers.get("/:id", tiposController.listaPorId);

routers.post("/", tiposController.criar);

routers.put("/:id", tiposController.atualizarPorId);

routers.delete("/:id", tiposController.deletarPorId);

export default routers;
