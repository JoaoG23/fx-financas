import { Router } from "express";
const routers = Router();
import locaisController from "../locais.controller/locais.controller";

routers.get("/paginas", locaisController.listarTodosPorPaginaUsuariosId);
routers.get("/:id", locaisController.listaPorId);

routers.post("/", locaisController.criar);

routers.put("/:id", locaisController.atualizarPorId);

routers.delete("/:id", locaisController.deletarPorId);

export default routers;
