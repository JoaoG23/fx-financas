
  
  import { Router } from "express";
const routers = Router();
import programacaofluxocaixaController from '../programacaofluxocaixa.controller/{Classe}.controller';


routers.get("/", programacaofluxocaixaController.listarTodos);
routers.get("/paginas", programacaofluxocaixaController.listarTodosPorPagina);
routers.get("/pesquisa", programacaofluxocaixaController.pesquisarPorCriterio);
routers.get("/:id", programacaofluxocaixaController.listaPorId);

routers.post("/", programacaofluxocaixaController.criar);

routers.put("/:id", programacaofluxocaixaController.atualizarPorId);

routers.delete("/:id", programacaofluxocaixaController.deletarPorId);

export default routers;
  
  