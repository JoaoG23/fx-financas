import { {Classe}Dto } from "../../../estatisticasClassificacoes.dto/estatisticasClassificacoes.dto";
import { I{Classe}Repository } from "../../../estatisticasClassificacoes.repository/estatisticasClassificacoes.repository.Interface";

export class {Classe}MockRepository implements I{Classe}Repository {
  private estatisticasClassificacoesMocado: {Classe}Dto[] = [];
  pesquisarPorCriterios(criterios: {Classe}Dto) {
    const { descricao, idestatisticasClassificacoes } = criterios;
    return this.estatisticasClassificacoesMocado.filter(
      (item) =>
        item.idestatisticasClassificacoes === idestatisticasClassificacoes && item.descricao === descricao
    );
  }

  limparDados() {
    return (this.estatisticasClassificacoesMocado = []);
  }

  salvar(data: estatisticasClassificacoesDto) {
    this.estatisticasClassificacoesMocado.push(data);
    return this.estatisticasClassificacoesMocado.filter(
      (item) => item.idestatisticasClassificacoes === data.idestatisticasClassificacoes
    );
  }

  atualizarPorId(idestatisticasClassificacoes: string, newData: {Classe}Dto) {
    const idItem = this.estatisticasClassificacoesMocado.findIndex(
      (item) => item.idestatisticasClassificacoes === idestatisticasClassificacoes
    );

    const itemAtualizado = (this.estatisticasClassificacoesMocado[idItem] = newData);
    return itemAtualizado;
  }

  deletarPorId(idestatisticasClassificacoes: string) {
    const idItem = this.estatisticasClassificacoesMocado.findIndex(
      (item) => item.idestatisticasClassificacoes === idestatisticasClassificacoes
    );

    return this.estatisticasClassificacoesMocado.splice(idItem, 1);
  }
  buscarPorId(idestatisticasClassificacoes: string) {
    const idItem = this.estatisticasClassificacoesMocado.findIndex(
      (item) => item.idestatisticasClassificacoes === idestatisticasClassificacoes
    );

    return this.estatisticasClassificacoesMocado[idItem];
  }
  buscarTodos() {
    return this.estatisticasClassificacoesMocado;
  }
  contarTodosPorCriterio() {
    return this.estatisticasClassificacoesMocado.length;
  }
  buscarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number) {
    return this.estatisticasClassificacoesMocado.slice(
      (numeroPagina - 1) * quantidadeItemPagina,
      numeroPagina * quantidadeItemPagina
    );
  }
}
