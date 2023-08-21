import { Request, Response } from "express";

import programacaofluxocaixaService from "../programacaofluxocaixa.service/Programacaofluxocaixa.service";
import { ProgramacaoFluxocaixaVisualizarDto } from "../programacaofluxocaixa.dto/Programacaofluxocaixa.dto";
class ProgramacaoFluxocaixaController {
  async listarTodosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina } = req.query;
      const pagina = await programacaofluxocaixaService.listarTodosPorPagina(
        numero_pagina,
        quantidade_items_pagina
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listarTodosPorUsuarioId(req: Request, res: Response) {
    try {
      const { usuariosId } = req.params;
      const idUsuario = usuariosId;
      const todos = await programacaofluxocaixaService.listarTodosPorUsuarioId(
        idUsuario
      );
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listarTodosPorUsuarioIdComDescricao(req: Request, res: Response) {
    try {
      const { usuariosId } = req.params;
      const idUsuario = usuariosId;
      const todos =
        await programacaofluxocaixaService.buscarTodosPorUsuarioIdComDescricao(
          idUsuario
        );
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const programacaofluxocaixa =
        await programacaofluxocaixaService.buscarPorId(id);
      res.status(200).json(programacaofluxocaixa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async pesquisarPorCriterio(req: Request, res: Response) {
    try {
      const criterios: Omit<ProgramacaoFluxocaixaVisualizarDto, "ativo"> =
        req.query;

      const todos = await programacaofluxocaixaService.pesquisarPorCriterio(
        criterios
      );
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const programacaofluxocaixa =
        await programacaofluxocaixaService.deletarUmPorId(id);
      res.status(200).json(programacaofluxocaixa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const programacaofluxocaixa = await programacaofluxocaixaService.criar(
        req.body
      );
      res.status(200).json(programacaofluxocaixa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async capturarEInserirEmFluxoCaixa(req: Request, res: Response) {
    const { usuariosId } = req.params;
    const idUsuario = usuariosId;
    try {
      const programacaofluxocaixa =
        await programacaofluxocaixaService.capturarProgramacaoEInserirEmFluxoCaixa(
          idUsuario
        );
      res.status(200).json(programacaofluxocaixa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const programacaofluxocaixa =
        await programacaofluxocaixaService.atualizarUmPorId(id, req.body);
      res.status(200).json(programacaofluxocaixa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new ProgramacaoFluxocaixaController();
