export interface ISubtiposBuscas {
    buscarPorId(id: string): unknown;
    listarTodos();
    contarTotalRegistros();
    listarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);
    listarPorTiposPorPagina(numeroPagina: number, quantidadeItemPagina: number, tiposId:any);
}