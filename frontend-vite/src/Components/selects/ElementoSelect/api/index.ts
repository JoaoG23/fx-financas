import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  usuariosId?: string;
};

export async function buscarTodosElementos({ usuariosId }: Criterios) {
  const resposta = await endpoint.get(`/elementos/usuario/${usuariosId}`);
  return resposta;
}
