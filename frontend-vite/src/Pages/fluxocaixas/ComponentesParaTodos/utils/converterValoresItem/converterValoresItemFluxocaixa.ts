import {
  ItemFluxoCaixa,
  ItemFluxoCaixaCriado,
} from "../../../../../types/ItemFluxoCaixa";
import { converterVazioParaNull } from "../../../../../utils/conversao/converterVazioParaNull/converterVazioParaNull";

export const converterValoresItemFluxocaixa = (
  idUsuario: string,
  itemFluxocaixa: ItemFluxoCaixa
) => {
  const {
    elementos,
    subelementos,
    tipos,
    subtipos,
    locais,
    tipos_despesas,
    ...restanteFluxoCaixa
  } = itemFluxocaixa;

  const novoItemFluxocaixa = {
    ...restanteFluxoCaixa,
    usuariosId: idUsuario,
    elementosId: converterVazioParaNull(itemFluxocaixa?.elementosId),
    subelementosId: converterVazioParaNull(itemFluxocaixa?.subelementosId),
    tiposId: converterVazioParaNull(itemFluxocaixa?.tiposId),
    subtiposId: converterVazioParaNull(itemFluxocaixa?.subtiposId),
    locaisId: converterVazioParaNull(itemFluxocaixa?.locaisId),
    tipos_despesasId: converterVazioParaNull(itemFluxocaixa?.tipos_despesasId),
    valor: parseFloat(itemFluxocaixa?.valor! as any),
  };
  return novoItemFluxocaixa;
};
