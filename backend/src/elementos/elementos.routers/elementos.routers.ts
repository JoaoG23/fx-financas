import { Router } from "express";
const routers = Router();
import elementosController from "../elementos.controller/Elementos.controller";

routers.get("/", elementosController.listarTodos);
routers.get("/usuarios/paginas", elementosController.listarPorUsuarioPorPagina);
routers.get("/:id", elementosController.listaPorId);

routers.post("/", elementosController.criar);

routers.put("/:id", elementosController.atualizarPorId);

routers.delete("/:id", elementosController.deletarPorId);

export default routers;
