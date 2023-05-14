import { Prisma } from "@prisma/client";

export class LocaisDto implements Prisma.locaisCreateManyInput {
  id?: string;
  descricao: string;
  usuariosId?: string;
}
