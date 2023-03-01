import { Paginacao } from "../../utils/Paginacao";
import { UsuarioDto } from "../usuario.dto/Usuario.dto";
import { UsuarioValidacaoServices } from "./usuario.validacao.services/UsuarioValidacaoServices";

class UsuariosServices extends UsuarioValidacaoServices {
  public paginacaoService: Paginacao;
  constructor() {
    super();
    this.paginacaoService = new Paginacao();
  }

  async listarTodos() {
    const usuarios = await this.prismaService.usuarios.findMany({});
    return usuarios;
  }
  async listaPorId(id: string) {
    const usuario = await this.prismaService.usuarios.findUnique({
      where: { id },
    });
    return usuario;
  }
  async contarTotalRegistros() {
    const contagem = await this.prismaService.usuarios.count();
    return contagem;
  }

  async listarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number
  ) {
    const quantidadeTotalRegistros = await this.contarTotalRegistros();
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacaoService.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const usuarios = await this.prismaService.usuarios.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, usuarios];
  }

  async atualizarPeloIdusuarios(id: string, dadosNovos: UsuarioDto) {
    const existeIdusuarios = await this.buscarUmPeloIdusuario(id);
    if (!existeIdusuarios) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    const usuarios = await this.prismaService.usuarios.update({
      where: { id },
      data: dadosNovos,
    });
    return usuarios;
  }

  async deletarUmPeloIdusuarios(id: any) {
    const existeIdusuarios = await this.buscarUmPeloIdusuario(id);
    if (!existeIdusuarios) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return this.prismaService.usuarios.delete({
      where: { id },
    });
  }
}

export default new UsuariosServices();
