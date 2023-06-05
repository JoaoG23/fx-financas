import { endpoint } from "../../../../services/endpoint";

export async function buscarTodosLocaisPorId(usuariosId: string) {
  const resposta = await endpoint.get(`/locais`, {
    params: {
      usuariosId,
    },
  });
  return resposta;
}
