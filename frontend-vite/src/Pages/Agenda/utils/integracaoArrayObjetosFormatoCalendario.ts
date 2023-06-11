
/*

@Autor Joao Guilherme
converte as chaves
do objeto para um
formato que calendario
consigua exibir na tela.

*/
// import { OperacaoAgendamento } from "../../../../../types/OperacaoAgendamento";

import { ItemFluxoCaixa } from "../../../types/ItemFluxoCaixa";

type PostagemCaledarioSaida = {
	id?:number,
	title?:string,
	start?:string | Date,
	end?:string | Date,
}
export function integracaoArrayObjetosFormatoCalendario( arrayAConverter:ItemFluxoCaixa[] | null,convertidoArray:PostagemCaledarioSaida[]) {
//     arrayAConverter?.map((agendamento: OperacaoAgendamento) => {
// 	   const dadosConvertidos = {
// 		   id:agendamento.id,
// 		   title:agendamento['nome'],
// 		   start:agendamento['data_chegada'],
// 		   end:agendamento['data_saida'],
// 	   }
// 	   convertidoArray.push(dadosConvertidos)
//    });
   return convertidoArray;
}
