import {
  ProgramacaoFluxocaixaCriadoDto,
  ProgramacaoFluxocaixaVisualizarDto,
} from "../programacaofluxocaixa.dto/Programacaofluxocaixa.dto";

export interface IProgramacaoFluxocaixaRepository {
  pesquisarPorCriterios(
    criterios: Omit<ProgramacaoFluxocaixaVisualizarDto, "ativo">
  );
  salvar(data: ProgramacaoFluxocaixaCriadoDto);
  atualizarPorId(id: string, newData: ProgramacaoFluxocaixaCriadoDto);
  deletarPorId(id: string);
  buscarPorId(iddepartamento: string);
  buscarTodos();
  contarTodosPorCriterio(criterios: object);
  buscarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);
}
