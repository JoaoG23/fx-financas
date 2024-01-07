import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../utils/Paginacao";
import { UsuarioDto } from "../usuario.dto/Usuario.dto";
import { UsuariosRepositoryInterface } from "./UsuariosRepositoryInterface";

export class UsuariosRepository implements UsuariosRepositoryInterface {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return await this.prisma.usuarios.findMany({});
  }
  async findByUsername(username: string) {
    return await this.prisma.usuarios.findFirst({
      where: { username },
    });
  }
  async findByEmail(email: string) {
    return await this.prisma.usuarios.findFirst({
      where: { email },
    });
  }
  async findByTelefone(telefone: string) {
    return await this.prisma.usuarios.findUnique({
      where: { telefone },
    });
  }
  async findById(id: string) {
    return await this.prisma.usuarios.findUnique({
      where: { id },
      select: {
        nome: true,
        username: true,
        email: true,
        telefone: true,
        caminho_imagem: true,
      },
    });
  }

  async save(usuario: UsuarioDto) {
    return await this.prisma.usuarios.create({
      data: usuario,
    });
  }

  async updateById(id: string, usuario: UsuarioDto) {
    return await this.prisma.usuarios.update({
      where: { id },
      data: usuario,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.usuarios.delete({
      where: { id },
    });
  }
}
