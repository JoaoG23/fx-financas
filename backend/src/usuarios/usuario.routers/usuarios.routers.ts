import { Router } from "express";
const routers = Router();
import usuariosController from "../usuarios.controller/Usuarios.controller";


routers.get("/", usuariosController.listarTodos);
routers.get("/:id", usuariosController.listaPorId);

routers.put("/:id", usuariosController.atualizarPorId);

routers.delete("/:id", usuariosController.deletarPorId);

export default routers;
