import { Request, Response } from "express";
import subtiposService from "../subtipos.service/subtipos.service";

class SubtiposController {
  async listarPorTiposPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina, tiposId } = req.query;
      const pagina = await subtiposService.listarPorTiposPorPagina(
        numero_pagina,
        quantidade_items_pagina,
        tiposId
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const todos = await subtiposService.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const subtipos = await subtiposService.listaPorId(id);
      res.status(200).json(subtipos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorUsuariosId(req: Request, res: Response) {
    try {
      const { usuariosId } = req.params;
      const subtipos = await subtiposService.listaPorTodosUsuariosId(usuariosId);
      res.status(200).json(subtipos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const subtipos = await subtiposService.deletarUmPorId(id);
      res.status(200).json(subtipos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const subtipos = await subtiposService.criar(req.body);
      res.status(200).json(subtipos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const subtipos = await subtiposService.atualizarUmPorId(id, req.body);
      res.status(200).json(subtipos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new SubtiposController();
