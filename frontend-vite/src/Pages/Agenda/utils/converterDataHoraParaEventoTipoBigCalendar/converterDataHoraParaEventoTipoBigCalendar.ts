import { separaDadosTempo } from "./utils/separaDadosTempo";
import { separaDadosData } from "./utils/separaDadosData";
import { ItemFluxoCaixa } from "../../../../types/ItemFluxoCaixa";
import { converterUndefinedParaVazio } from "../../../../utils/converterUndefinedParaVazio/converterUndefinedParaVazio";
import moment from "moment";
/*

@Autor Joao Guilherme
converte dataHora dos dados
vindo do Agendamento backend
para eventos do calendario
bigCalendar

*/

export function converterDataHoraParaEventoTipoBigCalendar(
  evento: ItemFluxoCaixa
) {


  const dataInsersao = new Date(evento?.data_insersao!);

  const { dia, mes, ano } = separaDadosData(dataInsersao);
  const { hora: horaInicial, minuto: minutoInicial } =
    separaDadosTempo(dataInsersao);


  const dataInicial = new Date(ano, mes, dia, horaInicial, minutoInicial, 0);
  const dataFinal = new Date(ano, mes, dia, horaInicial, minutoInicial + 20, 0);

  const eventoConvetido = {
    id: evento?.id!,
    title: evento?.descricao!,
    start: dataInicial,
    end: dataFinal,
  };

  return eventoConvetido;
}
