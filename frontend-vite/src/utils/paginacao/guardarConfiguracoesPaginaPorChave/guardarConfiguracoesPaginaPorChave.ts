export function guardarConfiguracoesPaginaPorChave(
  chave: string,
  paginacaoConfiguracao: any
): void {
  sessionStorage.setItem(chave, JSON.stringify(paginacaoConfiguracao));
}
