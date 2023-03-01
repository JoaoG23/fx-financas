export interface IElementoBuscas {
  buscarPorId(id: string): unknown;
  listarTodos();
  listaPorId(id: string);
  contarTotalRegistros();
  listarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);
}
