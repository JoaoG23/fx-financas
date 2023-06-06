import { Request, Response } from "express";
import estatisticasService from "../estatisticas.service/estatisticas.service";

class EstatisticasController {
  async buscarSomaTotalGastosMesPorUsuario(req: Request, res: Response) {
    try {
      const { usuariosId } = req.params;
      const soma =
        await estatisticasService.buscarSomaTotalGastosMesPorUsuario(
          usuariosId
        );
      res.status(200).json(soma);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new EstatisticasController()