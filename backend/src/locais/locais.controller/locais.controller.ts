import { Request, Response } from "express";
import { ITodosControllers } from "../../interfaces/ITodosControllers";
import locaisService from "../locais.service/locais.service";

class LocaisController implements ITodosControllers {
  async listarTodosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina } = req.query;
      const pagina = await locaisService.listarTodosPorPagina(
        numero_pagina,
        quantidade_items_pagina
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const todos = await locaisService.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const locais = await locaisService.listaPorId(id);
      res.status(200).json(locais);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const locais = await locaisService.deletarUmPorId(id);
      res.status(200).json(locais);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const locais = await locaisService.criar(req.body);
      res.status(200).json(locais);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const locais = await locaisService.atualizarUmPorId(id, req.body);
      res.status(200).json(locais);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new LocaisController();
