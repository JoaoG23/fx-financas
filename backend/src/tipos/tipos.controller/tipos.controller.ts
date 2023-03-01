import { Request, Response } from "express";
import { ITodosControllers } from "../../interfaces/ITodosControllers";
import tiposService from "../tipos.service/tipos.service";

class TiposController implements ITodosControllers {
  async listarTodosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina } = req.query;
      const pagina = await tiposService.listarTodosPorPagina(
        numero_pagina,
        quantidade_items_pagina
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listarPorSubelementosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina, subelementosId } = req.query;
      const pagina = await tiposService.listarPorSubelementosPorPagina(
        numero_pagina,
        quantidade_items_pagina,
        subelementosId
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const todos = await tiposService.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const tipos = await tiposService.listaPorId(id);
      res.status(200).json(tipos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const tipos = await tiposService.deletarUmPorId(id);
      res.status(200).json(tipos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const tipos = await tiposService.criar(req.body);
      res.status(200).json(tipos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const tipos = await tiposService.atualizarUmPorId(id, req.body);
      res.status(200).json(tipos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new TiposController();
