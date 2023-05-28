import { compareSync } from "bcryptjs";
import { Request, Response } from "express";
import { AuthenticacaoService } from "../autenticacao.service/autenticacao.service";
import { TratadorErros } from "../../utils/TratadorErros/TratadorErros";

const autenticacaoService = new AuthenticacaoService();
const tratadorErros = new TratadorErros();
class AutenticacaoController {
  async criar(req: Request, res: Response) {
    try {
      const criar = await autenticacaoService.registar(req.body);
      res.status(201).json(criar);
    } catch (error) {
      res
        .status(tratadorErros.tratarErroSemStatus(error.status))
        .json(error.message);
    }
  }

  async logar(req: Request, res: Response) {
    try {
      const logar = await autenticacaoService.logar(req.body);
      res.json(logar);
    } catch (error) {
      res.status(tratadorErros.tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async recuperaSenha(req: Request, res: Response) {
    try {
      const recuperar = await autenticacaoService.esqueciSenha(req.body);
      res.json(recuperar);
    } catch (error) {
      console.log(error);
      res.status(tratadorErros.tratarErroSemStatus(error.status)).json(error.message);
    }
  }
}

export default new AutenticacaoController();
