import { ItemFluxoCaixa } from "../../../../../types/ItemFluxoCaixa";
import { converterVazioParaNull } from "../../../../../utils/conversao/converterVazioParaNull/converterVazioParaNull";
import { transformarDateTimeInputEmIso } from "../../../../../utils/formatadoresDatahora/transformarDateTimeInputEmIso/transformarDateTimeInputEmIso";
import { converterValorNegativoSeForSaida } from "../converterValorNegativoSeSaida/converterValorNegativoSeSaida";

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
    entradaSaida,
    ...restanteFluxoCaixa
  } = itemFluxocaixa;

  const valor = converterValorNegativoSeForSaida(
    entradaSaida as string,
    itemFluxocaixa?.valor!
  );

  const novoItemFluxocaixa = {
    ...restanteFluxoCaixa,
    data_insersao: transformarDateTimeInputEmIso(itemFluxocaixa?.data_insersao as string),
    usuariosId: idUsuario,
    elementosId: converterVazioParaNull(itemFluxocaixa?.elementosId),
    subelementosId: converterVazioParaNull(itemFluxocaixa?.subelementosId),
    tiposId: converterVazioParaNull(itemFluxocaixa?.tiposId),
    subtiposId: converterVazioParaNull(itemFluxocaixa?.subtiposId),
    locaisId: converterVazioParaNull(itemFluxocaixa?.locaisId),
    tipos_despesasId: converterVazioParaNull(itemFluxocaixa?.tipos_despesasId),
    valor: valor,
  };
  return novoItemFluxocaixa;
};
