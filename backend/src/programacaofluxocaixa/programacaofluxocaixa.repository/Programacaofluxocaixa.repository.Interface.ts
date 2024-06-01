import {
  ProgramacaoFluxocaixaCriadoDto,
  ProgramacaoFluxocaixaVisualizarDto,
} from "../programacaofluxocaixa.dto/Programacaofluxocaixa.dto";

export interface ProgramacaoFluxocaixaRepositoryInterface {
  sumBiggerThanZeroByUsuariosId(usuariosId: string);

  save(programacao: ProgramacaoFluxocaixaCriadoDto);

  updateById(id: string, programacao: ProgramacaoFluxocaixaCriadoDto);

  deleteById(id: string);
  deleteAllByUsuariosId(usuariosId: string);

  countAllByCriterios(criterios: object);

  findAllByCriterios(criterios: ProgramacaoFluxocaixaVisualizarDto);
  findById(id: string);
  findAll();
  findAllByUsuariosId(usuariosId: string);
  findAllByUsuariosIdAtivo(usuariosId: string, ativo: boolean);
  findAllByUsuariosIdAndDescription(usuariosId: string);
  findAllByPage(numeroPagina: number, quantidadeItemPagina: number);
}
