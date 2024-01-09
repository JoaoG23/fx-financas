export function buscaDadoUsuarioNaSessao() {
  const idUsuario = sessionStorage.getItem("id");
  const nomeUsuario = sessionStorage.getItem("nome");
  const tokenSessao = sessionStorage.getItem("token");
  const imagePerfil = sessionStorage.getItem("avatar");

  return { idUsuario, nomeUsuario, tokenSessao, imagePerfil };
}
