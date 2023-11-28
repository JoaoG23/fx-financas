export const buscarTodasChavesPaginacao = () => {
  const chavesSessao: Array<string> = Object.keys(sessionStorage);

  const chavesSistema = chavesSessao.filter((chave) =>
    chave.match(/fx-finances/)
  );

  return chavesSistema;
};

