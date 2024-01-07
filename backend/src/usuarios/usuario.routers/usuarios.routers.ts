import { Router } from "express";
const routers = Router();

import usuariosController from "../usuarios.controller/Usuarios.controller";

import { uploads } from "../../utils/uploads/uploads";

routers.get("/", usuariosController.listarTodos);
routers.get("/usuario_imagem/:id", usuariosController.buscarImagemPerfilPorId);
routers.get("/:id", usuariosController.listaPorId);

routers.patch(
  "/upload_image/:id",
  uploads.single("usuario_image"),
  usuariosController.uploadImagemPerfilPorId
);
routers.put("/:id", usuariosController.atualizarPorId);

routers.delete("/:id", usuariosController.deletarPorId);

export default routers;
