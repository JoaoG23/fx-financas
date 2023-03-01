import { Router } from "express";

import autenticacaoController from "../autenticacao.controller/autenticacao.controller";
const routers = Router();

routers.post("/registrar", autenticacaoController.criar);

routers.post("/logar", autenticacaoController.logar);

routers.patch("/esquecisenha", autenticacaoController.recuperaSenha);

export default routers;
