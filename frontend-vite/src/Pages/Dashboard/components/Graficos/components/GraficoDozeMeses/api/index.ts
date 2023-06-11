import { endpoint } from "../../../../../../../services/endpoint";
import { buscaDadoUsuarioNaSessao } from "../../../../../../../utils/buscaDadoUsuarioNaSessao";

const { idConvertido } = buscaDadoUsuarioNaSessao();

export const buscarReceitasEDespesas12MesesAno = async () => {
  const resposta = await endpoint.get(
    `/estatisticas/despesas_receitas_dozes_meses?usuariosId=${idConvertido}&ano=${2023}`
  );
  return resposta;
};
