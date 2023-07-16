import { endpoint } from "../../../../../../../services/endpoint";
import { buscaDadoUsuarioNaSessao } from "../../../../../../../utils/buscaDadoUsuarioNaSessao";

const { idUsuario } = buscaDadoUsuarioNaSessao();

export const buscarDespesaMesPorTiposUsuarios = async () => {
  const resposta = await endpoint.get(
    `/estatistica/tipos/despesas_tipos/${idUsuario}`
  );
  return resposta;
};
