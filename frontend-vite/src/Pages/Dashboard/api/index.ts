import { endpoint } from "../../../services/endpoint";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

const { idConvertido } = buscaDadoUsuarioNaSessao();

async function buscarTotalReceitasMes(usuariosId: string) {
  const resposta = await endpoint.get(`/estatisticas/total_ganhos_mes/${usuariosId}`);
  return resposta;
}
async function buscarTotalDespesasMes(usuariosId: string) {
  const resposta = await endpoint.get(`/estatisticas/total_gasto_mes/${usuariosId}`);
  return resposta;
}
async function buscarSaldoAtual(usuariosId: string) {
  const resposta = await endpoint.get(`/estatisticas/saldo_atual/${usuariosId}`);
  return resposta;
}

export const buscarDadosCabecalho = async () => {
  const resposta = await Promise.all([
    buscarTotalReceitasMes(idConvertido!),
    buscarTotalDespesasMes(idConvertido!),
    buscarSaldoAtual(idConvertido!),
  ]);
  return resposta;
};
