import { Request, Response } from "express";
import estatisticasService from "../estatisticas.service/estatisticas.service";
import { tratarErroSemStatus } from "../../utils/tratarErroSemStatus/tratarErroSemStatus";

class EstatisticasController {
  async buscarGastosMesPorUsuario(req: Request, res: Response) {
    try {
      const { usuariosId } = req.params;
      const despesas = await estatisticasService.buscarGastosTotalMesPorUsuario(
        usuariosId
      );
      res.status(200).json(despesas);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }
  async buscarGanhosMesPorUsuario(req: Request, res: Response) {
    try {
      const { usuariosId } = req.params;
      const receitas = await estatisticasService.buscarGanhosTotalMesPorUsuario(
        usuariosId
      );
      res.status(200).json(receitas);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }
  async buscarDespesas12MesesAnoPorUsuario(req: Request, res: Response) {
    try {
      const { usuariosId, ano } = req.query;
      const despesa =
        await estatisticasService.buscarDespesas12MesesAnoPorUsuario(
          usuariosId,
          ano
        );
        
      res.status(200).json(despesa);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }

  async buscarSaldoAtualPorUsuario(req: Request, res: Response) {
    try {
      const { usuariosId } = req.params;
      const saldoAtual = await estatisticasService.buscarSaldoAtualPorUsuario(
        usuariosId
      );
      res.status(200).json(saldoAtual);
    } catch (error) {
      res.status(tratarErroSemStatus(error.status)).json(error.message);
    }
  }
}

export default new EstatisticasController();
