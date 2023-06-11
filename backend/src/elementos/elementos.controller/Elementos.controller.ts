import { Request, Response } from "express";
import { ElementosServices } from "../elementos.services/ElementosServices";
import { IElementosServices } from "../elementos.services/IElementoServices";

const elementosService: IElementosServices = new ElementosServices();
class ElementosController {
  async listarPorUsuarioPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina, usuariosId } = req.query;
      const pagina = await elementosService.listarPorUsuarioPorPagina(
        numero_pagina,
        quantidade_items_pagina,
        usuariosId
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const todos = await elementosService.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const usuario = await elementosService.buscarPorId(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const usuario = await elementosService.deletarUmPorId(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const usuario = await elementosService.criar(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const usuario = await elementosService.atualizarUmPorId(id, req.body);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}
export default new ElementosController();
