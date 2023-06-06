import { EstatisticaRepositoryInterface } from "../estatisticas.repository/EstatisticaRepositoryInterface";
import { EstatisticaRepository } from "../estatisticas.repository/estatisticas.repository";

export class EstatisticasService {
  private estatisticasRepository: EstatisticaRepositoryInterface;

  constructor(estatisticasRepository: EstatisticaRepositoryInterface) {
    this.estatisticasRepository = estatisticasRepository;
  }

  async buscarSomaTotalGastosMesPorUsuario(usuariosId: string) {
    return await this.estatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioId(
      usuariosId
    );
  }
}

export default new EstatisticasService(new EstatisticaRepository())