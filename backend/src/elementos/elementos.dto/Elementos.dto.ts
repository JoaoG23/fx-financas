import { Prisma } from "@prisma/client";

export class ElementoDto {
  id?: string;
  descricao: string;
  usuariosId?: string;
}
