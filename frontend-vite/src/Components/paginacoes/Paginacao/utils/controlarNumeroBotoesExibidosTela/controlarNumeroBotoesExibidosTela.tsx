import { pularUmBotaoAcima } from "./pularUmBotaoAcima/pularUmBotaoAcima";

export const controlarNumeroBotoesExibidosTela = (
	botoesPagincao: JSX.Element[],
	pagina: number
) => {
	let quantidadeBotoesMostradosPorVez = 6;

	let inicioListaBotoes = (pagina - 1) * 1;
	let finalListaBotoes = inicioListaBotoes + quantidadeBotoesMostradosPorVez;

	let botoesFiltrados: JSX.Element[] = botoesPagincao.slice(
		pularUmBotaoAcima(inicioListaBotoes),
		finalListaBotoes
	);
	return botoesFiltrados;
};
