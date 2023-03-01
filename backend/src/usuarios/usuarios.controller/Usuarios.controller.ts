import { Request, Response } from "express";
import usuarioService from "../usuarios.services/UsuariosServices";

class UsuarioController {

  async listarTodosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina } = req.query;
      const pagina = await usuarioService.listarTodosPorPagina(
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
      const todos = await usuarioService.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const usuario = await usuarioService.listaPorId(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const usuario = await usuarioService.deletarUmPeloIdusuarios(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const usuario = await usuarioService.atualizarPeloIdusuarios(
        id,
        req.body
      );
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new UsuarioController();
