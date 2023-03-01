export function buscaDadoUsuarioNaSessao() {
    const idConvertido = Number(localStorage.getItem('id'));
    const nomeUsuario = localStorage.getItem('nome');
    const tokenSessao = localStorage.getItem('token');

     return { idConvertido ,nomeUsuario , tokenSessao }
}