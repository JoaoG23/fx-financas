export interface ISubelementoBuscas {
    buscarPorId(id: string): unknown;
    buscarPorTipoId(id: string);
    listarTodosPorElementosId(elementosId:string)
    contarTotalRegistros();
    listarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);
    listarPorElementosPorPagina(numeroPagina: number, quantidadeItemPagina: number, elementosId:any);
}