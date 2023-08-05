import { {Classe}Dto } from "../../../programacaofluxocaixa.dto/programacaofluxocaixa.dto";
import { I{Classe}Repository } from "../../../programacaofluxocaixa.repository/programacaofluxocaixa.repository.Interface";

export class {Classe}MockRepository implements I{Classe}Repository {
  private programacaofluxocaixaMocado: {Classe}Dto[] = [];
  pesquisarPorCriterios(criterios: {Classe}Dto) {
    const { descricao, idprogramacaofluxocaixa } = criterios;
    return this.programacaofluxocaixaMocado.filter(
      (item) =>
        item.idprogramacaofluxocaixa === idprogramacaofluxocaixa && item.descricao === descricao
    );
  }

  limparDados() {
    return (this.programacaofluxocaixaMocado = []);
  }

  salvar(data: programacaofluxocaixaDto) {
    this.programacaofluxocaixaMocado.push(data);
    return this.programacaofluxocaixaMocado.filter(
      (item) => item.idprogramacaofluxocaixa === data.idprogramacaofluxocaixa
    );
  }

  atualizarPorId(idprogramacaofluxocaixa: string, newData: {Classe}Dto) {
    const idItem = this.programacaofluxocaixaMocado.findIndex(
      (item) => item.idprogramacaofluxocaixa === idprogramacaofluxocaixa
    );

    const itemAtualizado = (this.programacaofluxocaixaMocado[idItem] = newData);
    return itemAtualizado;
  }

  deletarPorId(idprogramacaofluxocaixa: string) {
    const idItem = this.programacaofluxocaixaMocado.findIndex(
      (item) => item.idprogramacaofluxocaixa === idprogramacaofluxocaixa
    );

    return this.programacaofluxocaixaMocado.splice(idItem, 1);
  }
  buscarPorId(idprogramacaofluxocaixa: string) {
    const idItem = this.programacaofluxocaixaMocado.findIndex(
      (item) => item.idprogramacaofluxocaixa === idprogramacaofluxocaixa
    );

    return this.programacaofluxocaixaMocado[idItem];
  }
  buscarTodos() {
    return this.programacaofluxocaixaMocado;
  }
  contarTodosPorCriterio() {
    return this.programacaofluxocaixaMocado.length;
  }
  buscarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number) {
    return this.programacaofluxocaixaMocado.slice(
      (numeroPagina - 1) * quantidadeItemPagina,
      numeroPagina * quantidadeItemPagina
    );
  }
}
