import { Request, Response } from "express";
import { ElementosServices } from "../elementos.services/ElementosServices";
import { IElementosServices } from "../elementos.services/IElementoServices";
import { ElementosRepository } from "../elementos.repository/elementos.repository";
import { ElementoDto } from "../elementos.dto/Elementos.dto";

const elementosRepository = new ElementosRepository();

const elementosService: IElementosServices = new ElementosServices(
  elementosRepository
);
class ElementosController {
  async listarPorUsuarioPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina, usuariosId } = req.query;

      const numeroPagina: number = Number(numero_pagina);
      const quantidadeItemsPagina: number = Number(quantidade_items_pagina);
      const idUsuario: string = String(usuariosId);

      const pagina = await elementosService.listarPorUsuarioPorPagina(
        numeroPagina,
        quantidadeItemsPagina,
        idUsuario
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

  async listarTodosPorUsuario(req: Request, res: Response) {
    try {
      const { usuariosId } = req.params;
      const idUsuario: string = String(usuariosId);

      const todos = await elementosService.listarTodosPorUsuario(idUsuario);
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const idString: string = String(id);

      const usuario = await elementosService.buscarPorId(idString);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    const idString: string = String(id);

    try {
      const usuario = await elementosService.deletarUmPorId(idString);
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
    const idString: string = String(id);

    try {
      const usuario = await elementosService.atualizarUmPorId(
        idString,
        req.body
      );
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}
export default new ElementosController();
