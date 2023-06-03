import { Router } from "express";
const routers = Router();

import tiposDespesaController from '../tiposDespesas.controller/tiposDespesas.controller'

routers.get("/paginas", tiposDespesaController.listarTodosPorPagina);
routers.get("/:id", tiposDespesaController.listaPorId);

routers.post("/", tiposDespesaController.criar);

routers.put("/:id", tiposDespesaController.atualizarPorId);

routers.delete("/:id", tiposDespesaController.deletarPorId);

export default routers;
