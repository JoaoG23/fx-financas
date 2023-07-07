import { ElementosEstatisticasDto } from "../../../elementosEstatisticas.dto/elementosEstatisticas.dto";
import { IElementosEstatisticasRepository } from "../../../elementosEstatisticas.repository/elementosEstatisticas.repository.Interface";

export class ElementosEstatisticasMockRepository implements IElementosEstatisticasRepository {
  private elementosEstatisticasMocado: ElementosEstatisticasDto[] = [];
  pesquisarPorCriterios(criterios: ElementosEstatisticasDto) {
    const { descricao, idelementosEstatisticas } = criterios;
    return this.elementosEstatisticasMocado.filter(
      (item) =>
        item.idelementosEstatisticas === idelementosEstatisticas && item.descricao === descricao
    );
  }

  limparDados() {
    return (this.elementosEstatisticasMocado = []);
  }

  salvar(data: elementosEstatisticasDto) {
    this.elementosEstatisticasMocado.push(data);
    return this.elementosEstatisticasMocado.filter(
      (item) => item.idelementosEstatisticas === data.idelementosEstatisticas
    );
  }

  atualizarPorId(idelementosEstatisticas: string, newData: ElementosEstatisticasDto) {
    const idItem = this.elementosEstatisticasMocado.findIndex(
      (item) => item.idelementosEstatisticas === idelementosEstatisticas
    );

    const itemAtualizado = (this.elementosEstatisticasMocado[idItem] = newData);
    return itemAtualizado;
  }

  deletarPorId(idelementosEstatisticas: string) {
    const idItem = this.elementosEstatisticasMocado.findIndex(
      (item) => item.idelementosEstatisticas === idelementosEstatisticas
    );

    return this.elementosEstatisticasMocado.splice(idItem, 1);
  }
  buscarPorId(idelementosEstatisticas: string) {
    const idItem = this.elementosEstatisticasMocado.findIndex(
      (item) => item.idelementosEstatisticas === idelementosEstatisticas
    );

    return this.elementosEstatisticasMocado[idItem];
  }
  buscarTodos() {
    return this.elementosEstatisticasMocado;
  }
  contarTodosPorCriterio() {
    return this.elementosEstatisticasMocado.length;
  }
  buscarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number) {
    return this.elementosEstatisticasMocado.slice(
      (numeroPagina - 1) * quantidadeItemPagina,
      numeroPagina * quantidadeItemPagina
    );
  }
}
