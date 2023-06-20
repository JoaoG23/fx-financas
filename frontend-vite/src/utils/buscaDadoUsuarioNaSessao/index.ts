export function buscaDadoUsuarioNaSessao() {
  const idUsuario = localStorage.getItem("id");
  const nomeUsuario = localStorage.getItem("nome");
  const tokenSessao = localStorage.getItem("token");

  return { idUsuario, nomeUsuario, tokenSessao };
}
