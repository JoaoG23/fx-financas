import { converteValorNegativoParaAbsoluto } from "../../../../../../utils/conversao/converteValorNegativoParaAbsoluto/converteValorNegativoParaAbsoluto";

type TipoDespesa = {
  despesas: number;
};
export const extrairDespesas = (despesa: TipoDespesa) => {
  const gastoMes = converteValorNegativoParaAbsoluto(despesa?.despesas!);
  return gastoMes;
};
