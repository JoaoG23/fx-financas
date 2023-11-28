import { buscarTodasChavesPaginacao } from "./buscarTodasChavesPaginacao/buscarTodasChavesPaginacao";
import { limparCachePaginacao } from "./limparCachePaginacao/limparCachePaginacao";

export const limparConfiguracoesPaginaPorChave = () => {
  const sessionStorageChaves = buscarTodasChavesPaginacao();

  limparCachePaginacao(sessionStorageChaves);
};
