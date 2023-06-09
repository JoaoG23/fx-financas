export const buscarUltimoDiaMes = () => {
  const dataAtual = new Date();

  return new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
};
