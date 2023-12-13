export function buscaDadoUsuarioNaSessao() {
  const idUsuario = sessionStorage.getItem("id");
  const nomeUsuario = sessionStorage.getItem("nome");
  const tokenSessao = sessionStorage.getItem("token");

  return { idUsuario, nomeUsuario, tokenSessao };
}
