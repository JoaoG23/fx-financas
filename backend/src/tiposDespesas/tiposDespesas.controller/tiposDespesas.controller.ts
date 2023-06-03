import { Request, Response } from "express";
import { TiposDespesasRepository } from "../tiposDespesas.repository/tiposDespesas.repository";
import { TipoDespesasServices } from "../tiposDespesas.service/tiposDespesas.service";
import { tratarErroSemStatus } from "../../utils/tratarErroSemStatus/tratarErroSemStatus";

const TipoDespesaRepository = new TiposDespesasRepository();
const tipoDespesaService = new TipoDespesasServices(TipoDespesaRepository);

class TipoDespesaController {
  async listarTodosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina, usuariosId } = req.query;
      const pagina = await tipoDespesaService.listarTodosPorPagina(
        numero_pagina,
        quantidade_items_pagina
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const TipoDespesa = await tipoDespesaService.listaUmPorId(id);
      res.status(200).json(TipoDespesa);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const TipoDespesa = await tipoDespesaService.deletarUmPorId(id);
      res.status(200).json(TipoDespesa);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const TipoDespesa = await tipoDespesaService.criarUm(req.body);
      res.status(200).json(TipoDespesa);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const TipoDespesa = await tipoDespesaService.atualizarUmPorId(
        id,
        req.body
      );
      res.status(200).json(TipoDespesa);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }
}

export default new TipoDespesaController();
