import { buscaDatahoraAtual } from "../../../utils/datetime/buscarDatahoraAtual/buscaDatahoraAtual";

import { FluxocaixaDto } from "../../fluxocaixa.dto/fluxocaixa.dto";
import { IFluxocaixaRepository } from "../../fluxocaixa.repository/fluxocaixa.repository";

import { CalculoFluxocaixaServiceInteface } from "../CalculoFluxocaixaService/CalculoFluxocaixaInterface";

export class CriacaoFluxocaixaService {
  private fluxoCaixaRepository: IFluxocaixaRepository;
  private calculoFluxocaixaService: CalculoFluxocaixaServiceInteface;

  constructor(
    fluxoCaixaRepository: IFluxocaixaRepository,
    calculoFluxocaixaService: CalculoFluxocaixaServiceInteface
  ) {
    this.fluxoCaixaRepository = fluxoCaixaRepository;
    this.calculoFluxocaixaService = calculoFluxocaixaService;
  }

  public async criar(dados: FluxocaixaDto) {
    const valorExtraido = dados?.valor;

    const dataAgora = buscaDatahoraAtual();

    const ultimoItemAdicionado =
      await this.fluxoCaixaRepository.findLastItemByUsuariosId(
        dados.usuariosId
      );

    const saldoFinal =
      Number(ultimoItemAdicionado?.saldo) + Number(valorExtraido);
    const data = {
      data_insersao: dataAgora,
      saldo: saldoFinal,
      ...dados,
    };

    const fluxocaixa = await this.fluxoCaixaRepository.save(data);
    return fluxocaixa;
  }

  public async criarVarios(itemsFluxocaixa: FluxocaixaDto[]) {
    for (const item of itemsFluxocaixa) {
      const valorExtraido = item?.valor;

      const dataAgora = buscaDatahoraAtual();

      const saldoFinal =
        (await this.calculoFluxocaixaService.calcularSaldoAtual(
          item?.usuariosId
        )) + Number(valorExtraido);

      const itemSalvo = {
        data_insersao: dataAgora,
        saldo: saldoFinal,
        ...item,
      };

      await this.fluxoCaixaRepository.save(itemSalvo);
    }

    return `${itemsFluxocaixa?.length} itens foram cadastrados com sucesso`;
  }
}
