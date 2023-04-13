import { Request, Response } from "express";
import { IFluxoCaixaService } from "../fluxocaixa.service/fluxocaixa.interface.service";
import fluxocaixaService from "../fluxocaixa.service/fluxocaixa.service";
export class FluxoCaixaController {

  async listarTodosPorPaginaUsuario(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina, usuariosId } = req.query;
      const pagina = await fluxocaixaService.listarTodosPorPaginaUsuario(
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
      const todos = await fluxocaixaService.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const fluxocaixa = await fluxocaixaService.buscarPorId(id);
      res.status(200).json(fluxocaixa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const fluxocaixa = await fluxocaixaService.deletarUmPorId(id);
      res.status(200).json(fluxocaixa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const fluxocaixa = await fluxocaixaService.criar(req.body);
      res.status(200).json(fluxocaixa);
    } catch (error) {
      console.log("🚀 ~ file: fluxocaixa.controller.ts:54 ~ FluxoCaixaController ~ criar ~ error:", error)
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const fluxocaixa = await fluxocaixaService.atualizarUmPorId(id, req.body);
      res.status(200).json(fluxocaixa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}
