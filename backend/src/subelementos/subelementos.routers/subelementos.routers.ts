import { Router } from "express";
const routers = Router();
import subelementoController from "../subelementos.controller/subelementos.controller";

routers.get(
  "/elemento/:elementosId",
  subelementoController.listarTodosPorElementosId
);

routers.get(
  "/elementos/paginas",
  subelementoController.listarPorElementosPorPagina
);
routers.get("/:id", subelementoController.listaPorId);

routers.post("/", subelementoController.criar);

routers.put("/:id", subelementoController.atualizarPorId);

routers.delete("/:id", subelementoController.deletarPorId);

export default routers;
