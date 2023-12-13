import {
  ProgramacaoFluxocaixaCriadoDto,
  ProgramacaoFluxocaixaVisualizarDto,
} from "../programacaofluxocaixa.dto/Programacaofluxocaixa.dto";

export interface ProgramacaoFluxocaixaRepositoryInterface {
  pesquisarPorCriterios(
    criterios: ProgramacaoFluxocaixaVisualizarDto
  );
  salvar(data: ProgramacaoFluxocaixaCriadoDto);
  atualizarPorId(id: string, newData: ProgramacaoFluxocaixaCriadoDto);
  deletarPorId(id: string);
  deleteAllByUsuariosId(usuariosId: string);
  buscarPorId(id: string);
  buscarTodosPorUsuarioId(usuariosId:string);
  buscarTodosPorUsuarioIdComDescricao(usuariosId:string);
  contarTodosPorCriterio(criterios: object);
  buscarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);
}
