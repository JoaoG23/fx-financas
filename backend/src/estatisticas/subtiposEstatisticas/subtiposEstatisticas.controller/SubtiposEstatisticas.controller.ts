import { Request, Response } from "express";
import subtiposEstatisticasService from "../subtiposEstatisticas.service/SubtiposEstatisticas.service";

class SubtiposEstatisticasController {
  async despesasTotalPorSubtipoEUsuarioMes(req: Request, res: Response) {
    try {
      const { usuariosId, mes } = req.query;
      const totalDespesa =
        await subtiposEstatisticasService.despesasTotalPorSubtipoEUsuarioMes(
          usuariosId,
          mes
        );

      res.json(totalDespesa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new SubtiposEstatisticasController();
