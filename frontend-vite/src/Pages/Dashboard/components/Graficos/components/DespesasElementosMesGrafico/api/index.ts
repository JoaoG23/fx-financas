import { endpoint } from "../../../../../../../services/endpoint";
import { buscaDadoUsuarioNaSessao } from "../../../../../../../utils/buscaDadoUsuarioNaSessao";

const { idUsuario } = buscaDadoUsuarioNaSessao();

export const buscarDespesaMesPorElementoUsuarios = async (mes: number) => {
  const resposta = await endpoint.get(
    `/estatistica/elementos/despesas_elemento`,{
      params: {
        mes,
        usuariosId:idUsuario
      }
    }
  );
  return resposta;
};
