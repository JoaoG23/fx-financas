import { Request, Response } from "express";
import estatisticasClassificacoesService from "../estatisticasClassificacoes.service/EstatisticasClassificacoes.service";

class ElementosClassificacoesController {
  async buscarDespesasPorUsuarioEElementosEsteMes(req: Request, res: Response) {
    try {
      const { usuariosId, elementosId } = req.query;
      const resultado =
        await estatisticasClassificacoesService.buscarDespesasPorUsuarioEElementosEsteMes(
          usuariosId,
          elementosId
        );
      res.status(200).json(resultado);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new ElementosClassificacoesController();
