
  
    import { PrismaClient } from "@prisma/client";
    import { Paginacao } from "../../utils/Paginacao";
    import { joinDescricaoSelect } from "./utils/joinDescricaoSelect";
    
    export interface I{Classe}Repository {
      limparDados?();
      pesquisarPorCriterios(criterios: Omit<{Classe}Dto, "ativo">);
      salvar(data: {Classe}Dto);
      atualizarPorId(id: string, newData: {Classe}Dto);
      deletarPorId(id: string);
      buscarPorId(iddepartamento: string);
      buscarTodos();
      contarTodosPorCriterio();
      buscarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);
    }
    
    
    export class {Classe}Repository implements I{Classe}Repository {
      private paginacao: Paginacao;
      private prisma: PrismaClient;
      constructor() {
        this.prisma = new PrismaClient();
        this.paginacao = new Paginacao();
      }



      async pesquisarPorCriterios(criterios: Omit<{Classe}Dto, "ativo">) {
        const { idprogramacaofluxocaixa,descricao } = criterios;
    
        const elementoBuscado = await this.prisma.programacaofluxocaixa.findMany({
          where: {
            AND: [
              {
                idprogramacaofluxocaixa: {
                  contains: idprogramacaofluxocaixa,
                },
              },
              {
                descricao: {
                  contains: descricao,
                },
              },
            ],
          },
        });
    
        return elementoBuscado;
      }


      async salvar(data: {Classe}Dto) {
        return await this.prisma.programacaofluxocaixa.create({
          data,
        });
      }
      async atualizarPorId(id: string, newData: any) {
        return await this.prisma.programacaofluxocaixa.update({
          where: { id },
          data: newData,
        });
      }
      async deletarPorId(id: string) {
        return await this.prisma.programacaofluxocaixa.delete({
          where: { id },
        });
      }
      async buscarPorId(id: string) {
        const programacaofluxocaixa = await this.prisma.programacaofluxocaixa.findFirst({
          where: { id },
        });
        return programacaofluxocaixa;
      }
      async buscarTodos() {
        return await this.prisma.programacaofluxocaixa.findMany({
          include: joinDescricaoSelect,
        });
      }
      async contarTodosPorCriterio(criterios: object) {
        const count = await this.prisma.programacaofluxocaixa.count({ where: criterios });
        return count;
      }
    
      async buscarTodosPorPagina(
        numeroPagina: number,
        quantidadeItemPagina: number
      ) {
        const quantidadeTotalRegistros = await this.contarTodosPorCriterio({
        });
        const itemsPorPagina = Number(quantidadeItemPagina);
    
        const totalQuantidadePaginas =
          await this.paginacao.retornaQuantidadePaginas(
            quantidadeTotalRegistros,
            itemsPorPagina
          );
    
        const pularPagina = (numeroPagina - 1) * itemsPorPagina;
        const programacaofluxocaixa = await this.prisma.programacaofluxocaixa.findMany({
          skip: pularPagina,
          take: itemsPorPagina,
        });
    
        return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, programacaofluxocaixa];
      }
    }
    
  
  