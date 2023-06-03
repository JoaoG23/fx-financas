import { Request, Response } from "express";
import { ITodosControllers } from "../../interfaces/ITodosControllers";
import { LocaisServices } from "../locais.service/locais.service";
import { LocaisRepository } from "../locais.repository/locais.repository";
import { tratarErroSemStatus } from "../../utils/tratarErroSemStatus/tratarErroSemStatus";

const locaisRepository = new LocaisRepository();
const locaisService = new LocaisServices(locaisRepository);
class LocaisController  {
  async listarTodosPorPaginaUsuariosId(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina, usuariosId } = req.query;
      const pagina = await locaisService.listarTodosPorPaginaUsuariosId(
        numero_pagina,
        quantidade_items_pagina,
        usuariosId
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const todos = await locaisService.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const locais = await locaisService.listaPorId(id);
      res.status(200).json(locais);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const locais = await locaisService.deletarUmPorId(id);
      res.status(200).json(locais);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const locais = await locaisService.criarUm(req.body);
      res.status(200).json(locais);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const locais = await locaisService.atualizarUmPorId(id, req.body);
      res.status(200).json(locais);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }
}

export default new LocaisController();
