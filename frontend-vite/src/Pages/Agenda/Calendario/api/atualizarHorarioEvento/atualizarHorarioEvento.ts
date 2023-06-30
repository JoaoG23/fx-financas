// Service
import { requestAtualizaHorario } from "./requestAtualizaHorario/requestAtualizaHorario";

type Props = {
	id?: number;
	start?: Date;
	end?: Date;
};

export async function atualizarHorarioEvento(dados: Props) {
	const { id, start, end } = dados;


	const itemDataInsersaoAtualizada = {
		data_insersao: start,
	};

	await requestAtualizaHorario(id, itemDataInsersaoAtualizada);
}
