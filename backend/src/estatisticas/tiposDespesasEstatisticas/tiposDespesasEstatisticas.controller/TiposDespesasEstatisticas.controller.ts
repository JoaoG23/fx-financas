import { Request, Response } from "express";

import tiposDespesasEstatisticasService from '../tiposDespesasEstatisticas.service/tiposDespesasEstatisticas.service'

class TiposDespesasEstatisticasController {
  async despesasTotalPorTipoEUsuarioMes(req: Request, res: Response) {
    try {
      const { usuariosId, mes } = req.query;
      const totalDespesa =
        await tiposDespesasEstatisticasService.despesasTotalPorTipoEUsuarioMes(
          usuariosId,
          mes
        );

      res.status(200).json(totalDespesa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new TiposDespesasEstatisticasController();
