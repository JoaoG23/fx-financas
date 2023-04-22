import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../utils/Paginacao";
import { UsuarioDto } from "../usuario.dto/Usuario.dto";

export interface IUsuariosRepository {
  save(data: UsuarioDto);
  update(id: string, newData: UsuarioDto);
  delete(id: string);
  findById(id: string);
  findLastItem();
}

export class UsuariosRepository implements IUsuariosRepository {
  private paginacao: Paginacao;
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
    this.paginacao = new Paginacao();
  }
  findById(id: string) {
    throw new Error("Method not implemented.");
  }
  findLastItem() {
    throw new Error("Method not implemented.");
  }

  async save(data: UsuarioDto) {
    return await this.prisma.usuarios.create({
      data,
    });
  }

  async update(id: string, newData: UsuarioDto) {
    return await this.prisma.usuarios.update({
      where: { id },
      data: newData,
    });
  }

  async delete(id: string) {
    return await this.prisma.usuarios.delete({
      where: { id },
    });
  }

}
