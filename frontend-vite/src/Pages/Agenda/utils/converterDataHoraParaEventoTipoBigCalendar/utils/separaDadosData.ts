export function separaDadosData(data: Date) {
	const ano = data.getUTCFullYear();
	const mes = data.getUTCMonth();
	const dia = data.getUTCDate();

	return {
		ano,
		mes,
		dia,
	};
}
