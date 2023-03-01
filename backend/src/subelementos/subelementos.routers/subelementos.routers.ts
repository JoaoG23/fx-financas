
  
  import { Router } from "express";
const routers = Router();
import subelementoController from '../subelementos.controller/subelementos.controller';


routers.get("/", subelementoController.listarTodos);
routers.get("/paginas", subelementoController.listarTodosPorPagina);
routers.get("/elementos/paginas", subelementoController.listarPorElementosPorPagina);
routers.get("/:id", subelementoController.listaPorId);

routers.post("/", subelementoController.criar);

routers.put("/:id", subelementoController.atualizarPorId);

routers.delete("/:id", subelementoController.deletarPorId);

export default routers;
  
  