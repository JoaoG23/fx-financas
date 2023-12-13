export async function pegarUsuarioSessao(usuario: any) {
  const { id, nome, token } = usuario;
  const idUsuario = sessionStorage.setItem("id", id);
  const nomeUsuario = sessionStorage.setItem("nome", nome);
  const tokenSessao = sessionStorage.setItem("token", token);

  return { idUsuario, nomeUsuario, tokenSessao };
}
