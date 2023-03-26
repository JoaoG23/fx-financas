export function buscaDadoUsuarioNaSessao() {
  const idConvertido = localStorage.getItem("id");
  const nomeUsuario = localStorage.getItem("nome");
  const tokenSessao = localStorage.getItem("token");

  return { idConvertido, nomeUsuario, tokenSessao };
}
