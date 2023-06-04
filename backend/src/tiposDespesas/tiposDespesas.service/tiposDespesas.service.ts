import { ConflictError, NotFoundError } from "rest-api-errors";

import { TipoDespesaDto } from "../tiposDespesas.dto/tiposDespesas.dto";
import { validarSeCamposCorretos } from "../tiposDespesas.dto/validador.dto";

import { TiposDespesasRepositoryInteface } from "../tiposDespesas.repository/tiposDespesas.repositoryInterface";

export class TipoDespesasServices {
  private tiposDespesaRepository: TiposDespesasRepositoryInteface;

  constructor(tiposDespesaRepository: TiposDespesasRepositoryInteface) {
    this.tiposDespesaRepository = tiposDespesaRepository;
  }

  validarTodosCampos(local: TipoDespesaDto) {
    const { error } = validarSeCamposCorretos(local);
    if (error) {
      throw new ConflictError(null, error.message);
    }
  }

  async validarNaoExisteId(id: string) {
    const existeIdLocal = await this.tiposDespesaRepository.findById(id);
    if (!existeIdLocal) {
      throw new NotFoundError(null, "Não existe esse Id para operação");
    }
  }

  async listaUmPorId(id: string) {
    return await this.tiposDespesaRepository.findById(id);
  }

  async listarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number
  ) {
    return await this.tiposDespesaRepository.findAllByPage(
      numeroPagina,
      quantidadeItemPagina
    );
  }

  async criarUm(tipoDespesa: TipoDespesaDto) {
    await this.validarTodosCampos(tipoDespesa);

    return this.tiposDespesaRepository.save(tipoDespesa);
  }

  async atualizarUmPorId(id: string, tipoDespesa: TipoDespesaDto) {
    await this.validarNaoExisteId(id);

    return await this.tiposDespesaRepository.updateById(id, tipoDespesa);
  }

  async deletarUmPorId(id: string) {
    await this.validarNaoExisteId(id);

    return await this.tiposDespesaRepository.deleteById(id);
  }
}
