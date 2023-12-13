export interface UsuariosValidacoesServiceInterface {
  verificarSeExisteEmail(email: string);
  verificarSeNaoExisteId(id: string);
  verificarSeExisteUsername(username: string);
}
