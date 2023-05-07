import { ItemFluxoCaixaCriado } from "../../../../../types/ItemFluxoCaixa";
import { converterVazioParaNull } from "../../../../../utils/conversao/converterVazioParaNull/converterVazioParaNull";

export const converterValoresItemFluxocaixa = (
  idConvertido: string,
  itemFluxocaixa: ItemFluxoCaixaCriado
) => {
  const novoItemFluxocaixa = {
    ...itemFluxocaixa,
    usuariosId: idConvertido,
    elementosId: converterVazioParaNull(itemFluxocaixa?.elementosId),
    subelementosId: converterVazioParaNull(itemFluxocaixa?.subelementosId),
    tiposId: converterVazioParaNull(itemFluxocaixa?.tiposId),
    subtiposId: converterVazioParaNull(itemFluxocaixa?.subtiposId),
    locaisId: converterVazioParaNull(itemFluxocaixa?.locaisId),
    valor: parseFloat(itemFluxocaixa.valor!),
  };
  return novoItemFluxocaixa;
};
