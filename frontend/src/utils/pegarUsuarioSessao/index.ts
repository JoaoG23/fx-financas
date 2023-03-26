export function pegarUsuarioSessao(usuario: any) {
  const { id, nome, token } = usuario;
  const idConvertido = localStorage.setItem("id", id);
  const nomeUsuario = localStorage.setItem("nome", nome);
  const tokenSessao = localStorage.setItem("token", token);

  return { idConvertido, nomeUsuario, tokenSessao };
}
