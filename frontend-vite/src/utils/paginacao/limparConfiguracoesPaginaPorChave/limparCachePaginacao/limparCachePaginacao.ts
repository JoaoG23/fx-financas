export const limparCachePaginacao = (chavePaginacao: string[]) => {
    chavePaginacao?.forEach((chaveARemover) => {
        sessionStorage.removeItem(chaveARemover);
    });
};
