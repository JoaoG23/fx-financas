import { IFluxocaixaRepository } from "../../fluxocaixa.repository/fluxocaixa.repository";

export class CalculoFluxocaixaService {
  private fluxoCaixaRepository: IFluxocaixaRepository;

  constructor(fluxoCaixaRepository) {
    this.fluxoCaixaRepository = fluxoCaixaRepository;
  }

  async calcularSaldoAtual(usuariosId: string) {
    const lucroRetornoDb = await this.fluxoCaixaRepository.sumBiggerThanZero(
      usuariosId
    );
    const gastoRetornoDb = await this.fluxoCaixaRepository.sumLessThanZero(
      usuariosId
    );

    const {
      _sum: { valor: lucrosSomaTotal },
    } = lucroRetornoDb;
    const {
      _sum: { valor: gastosSomaTotal },
    } = gastoRetornoDb;

    return Number(lucrosSomaTotal) + Number(gastosSomaTotal);
  }
}
