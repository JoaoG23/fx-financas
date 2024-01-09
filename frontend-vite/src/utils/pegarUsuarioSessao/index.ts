export async function pegarUsuarioSessao(usuario: any) {
  const { id, nome, token , caminho_imagem } = usuario;
  const idUsuario = sessionStorage.setItem("id", id);
  const nomeUsuario = sessionStorage.setItem("nome", nome);
  const tokenSessao = sessionStorage.setItem("token", token);
  const imagePerfil = sessionStorage.setItem("avatar", caminho_imagem);

  return { idUsuario, nomeUsuario, tokenSessao, imagePerfil };
}
