import { Request, Response } from "express";
import { TiposServices } from "../tipos.service/tipos.service";
import { TiposRepository } from "../tipos.repository/tipos.repository";

const tiposService = new TiposServices(new TiposRepository());

class TiposController {
  async listarPorSubelementosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina, subelementosId } =
        req.query;
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

  async listarTodosPorUsuariosId(req: Request, res: Response) {
    try {
      const usuariosId = req.params.usuariosId
      const todos = await tiposService.listarTodosPorUsuariosId(usuariosId);
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }


  async listarTodosPorSubelementosId(req: Request, res: Response) {
    try {
      const subelementosId = req.params.subelementosId
      const todos = await tiposService.listarTodosPorSubelementosId(subelementosId);
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const tipos = await tiposService.buscarPorId(id);
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
