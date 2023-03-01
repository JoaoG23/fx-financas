import { compareSync } from "bcryptjs";
import { Request, Response } from "express";
import { AuthenticacaoService } from "../autenticacao.service/autenticacao.service";

const autenticacaoService = new AuthenticacaoService();
class AutenticacaoController {
  async criar(req: Request, res: Response) {
    try {
      const criar = await autenticacaoService.registar(req.body);
      res.status(201).json(criar);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async logar(req: Request, res: Response) {
    try {
      const logar = await autenticacaoService.logar(req.body);
      res.json(logar);
    } catch (error) {
      res.status(409).json(error.message);
    }
  }

  async recuperaSenha(req: Request, res: Response) {
    try {
      const recuperar = await autenticacaoService.esqueciSenha(req.body);
      res.json(recuperar);
    } catch (error) {
      console.log(error)
      res.status(409).json(error.message);
    }
  }
}

export default new AutenticacaoController();
