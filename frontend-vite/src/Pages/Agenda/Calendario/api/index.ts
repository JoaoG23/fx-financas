import { endpoint } from "../../../../services/endpoint";

export async function buscarTodosItemFluxoCaixa(usuariosId: string) {
  const resposta = await endpoint.get(`/fluxocaixa/usuario/${usuariosId}`);
  return resposta;
}

export async function atualizarHorariosUmAgendamento<T = unknown>(
  id: string | number,
  dataHorarioInicialEFim: T
) {
  const resposta = await endpoint.patch(
    `/fluxocaixa/${id}`,
    dataHorarioInicialEFim
  );
  return resposta;
}
