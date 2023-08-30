export const buscarUltimoDiaDoMesSelecionado = (mes: number) => {
  const mesCorreto = mes - 1;
  const dataAtual = new Date()

  return new Date(dataAtual.getFullYear(), mesCorreto + 1, 0);
};
