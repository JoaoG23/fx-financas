import { endpoint } from "../../../../services/endpoint";

export async function buscarTodosItemFluxoCaixa() {
  const resposta = await endpoint.get(`/operacaoagendamento`, {
    params: {
      auth: token,
    },
  });
  return resposta;
}

export async function atualizarHorariosUmAgendamento<T = unknown>(
  id: string | number,
  dataHorarioInicialEFim: T
) {
  const resposta = await endpoint.patch(
    `/operacaoagendamento/horario/${id}`,
    dataHorarioInicialEFim
  );
  return resposta;
}
