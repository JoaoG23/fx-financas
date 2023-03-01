export interface ISubelementoBuscas {
    buscarPorId(id: string): unknown;
    buscarPorTipoId(id: string);
    listarTodos();
    contarTotalRegistros();
    listarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);
    listarPorElementosPorPagina(numeroPagina: number, quantidadeItemPagina: number, elementosId:any);
}