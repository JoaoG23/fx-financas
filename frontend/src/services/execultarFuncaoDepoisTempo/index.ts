export function execultarFuncaoDepoisTempo(
  tempoParaInicioEvento: number,
  funcaoExecultada: any
) {
  setTimeout(funcaoExecultada, tempoParaInicioEvento);
}
