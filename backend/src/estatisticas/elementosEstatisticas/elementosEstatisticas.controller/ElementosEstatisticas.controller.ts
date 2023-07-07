import { Request, Response } from "express";

import elementosEstatisticasService from "../elementosEstatisticas.service/ElementosEstatisticas.service";

class ElementosEstatisticasController {
  async despesasTotalPorElementoEUsuarioMes(req: Request, res: Response) {
    try {
      const { usuariosId, elementosId } = req.query;
      const totalDespesa =
        await elementosEstatisticasService.despesasTotalPorElementoEUsuarioMes(
          usuariosId,
          elementosId
        );

      res.status(200).json(totalDespesa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new ElementosEstatisticasController();
