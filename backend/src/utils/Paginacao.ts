export class Paginacao {

    retornaQuantidadePaginas(quantidadeTotalItems,itemsPorPagina) {
        return Math.ceil(quantidadeTotalItems / itemsPorPagina);
    }
}

