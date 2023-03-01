import { PrismaClient } from "@prisma/client";

export class UsuarioBuscasServices {
  prismaService: PrismaClient;

  constructor() {
    this.prismaService = new PrismaClient();
  }

  async buscarUmPeloIdusuario(id: string) {
    const usuario = await this.prismaService.usuarios.findFirst({
      where: { id },
    });
    return usuario;
  }

  async buscarUmPeloEmail(email: string) {
    const usuario = await this.prismaService.usuarios.findFirst({
      where: { email },
    });
    return usuario;
  }

  async buscarUmNomeLogin(username: string) {
    const usuario = await this.prismaService.usuarios.findFirst({
      where: { username },
    });
    return usuario;
  }
}
