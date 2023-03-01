export interface ITiposBuscas {
    buscarPorId(id: string): unknown;
    listarTodos();
    contarTotalRegistros();
    listarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);
    listarPorSubelementosPorPagina(numeroPagina: number, quantidadeItemPagina: number, subelementosId:any);
}