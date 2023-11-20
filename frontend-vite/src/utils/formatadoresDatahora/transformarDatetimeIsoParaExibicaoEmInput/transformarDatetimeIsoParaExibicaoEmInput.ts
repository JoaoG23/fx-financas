export const transformarDatetimeIsoParaExibicaoEmInput = (
  datetimeInput: string
) => {
  const dataTratada = datetimeInput?.slice(0,16);
  return dataTratada;
};
