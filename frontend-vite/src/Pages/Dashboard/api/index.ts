import { endpoint } from "../../../services/endpoint";

// const { idUsuario } = buscaDadoUsuarioNaSessao();

export async function obterDetalhesFinanceirosMesPorUsuario(
  usuariosId: string | null
) {
  const resposta = await endpoint.get(
    `/estatisticas/detalhes-finaceiros-mes/${usuariosId}`
  );
  return resposta;
}
