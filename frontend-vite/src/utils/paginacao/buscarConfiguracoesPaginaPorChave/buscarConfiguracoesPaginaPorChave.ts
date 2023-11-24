export function buscarConfiguracoesPaginaPorChave(chave: string) {
  const configuracaoesString: string = sessionStorage.getItem(chave)!;
  const configuracoesJSON = JSON.parse(configuracaoesString!);
  return configuracoesJSON;
}
