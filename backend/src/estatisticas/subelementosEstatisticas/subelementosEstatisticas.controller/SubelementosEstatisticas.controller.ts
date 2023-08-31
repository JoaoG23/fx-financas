import { Request, Response } from "express";

import subelementosEstatisticasService from "../subelementosEstatisticas.service/SubelementosEstatisticas.service";
class SubelementosEstatisticasController {
  async despesasTotalPorTipoEUsuarioMes(req: Request, res: Response) {
    try {
      const { usuariosId, mes } = req.query;
      const totalDespesa =
        await subelementosEstatisticasService.despesasTotalPorsubelementoEUsuarioMes(
          usuariosId,
          mes
        );

      res.status(200).json(totalDespesa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new SubelementosEstatisticasController();
