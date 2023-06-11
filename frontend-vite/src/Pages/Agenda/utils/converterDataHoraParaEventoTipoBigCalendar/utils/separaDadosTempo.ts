export function separaDadosTempo(tempo: Date) {
	const hora = tempo.getUTCHours();
	const minuto = tempo.getUTCMinutes();

	return {
		hora,
		minuto,
	};
}