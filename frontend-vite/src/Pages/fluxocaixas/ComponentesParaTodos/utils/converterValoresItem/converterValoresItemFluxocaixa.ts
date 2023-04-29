import { ItemFluxoCaixaCreate } from '../../../../../types/ItemFluxoCaixa';
import { converterVazioParaNull } from '../../../../../utils/conversao/converterVazioParaNull/converterVazioParaNull';


export const converterValoresItemFluxocaixa = ( idConvertido:string,itemFluxocaixa: ItemFluxoCaixaCreate) => {
    function retornarSeValorPositivoNegativo(entradaSaida:boolean, valorDebitado: string ) {
        return entradaSaida ? parseFloat(valorDebitado) : parseFloat('-' + valorDebitado) 
      }
      
      const novoItemFluxocaixa = {
        ...itemFluxocaixa,
        usuariosId: idConvertido,
        elementosId: converterVazioParaNull(itemFluxocaixa?.elementosId),
        subelementosId:  converterVazioParaNull(itemFluxocaixa?.subelementosId),
        tiposId:converterVazioParaNull(itemFluxocaixa?.tiposId),
        subtiposId:converterVazioParaNull(itemFluxocaixa?.subtiposId),
        locaisId:converterVazioParaNull(itemFluxocaixa?.locaisId),
        valor: retornarSeValorPositivoNegativo(itemFluxocaixa?.entradaSaida!,itemFluxocaixa.valor!),
      };
      delete novoItemFluxocaixa.entradaSaida 
    return novoItemFluxocaixa
}
