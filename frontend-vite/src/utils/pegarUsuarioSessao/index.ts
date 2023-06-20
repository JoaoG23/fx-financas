export async function pegarUsuarioSessao(usuario: any) {
  const { id, nome, token } = usuario;
  const idUsuario = localStorage.setItem("id", id);
  const nomeUsuario = localStorage.setItem("nome", nome);
  const tokenSessao = localStorage.setItem("token", token);

  return { idUsuario, nomeUsuario, tokenSessao };
}
