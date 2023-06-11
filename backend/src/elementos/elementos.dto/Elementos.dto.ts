import { Prisma } from "@prisma/client";

export class ElementoDto implements Prisma.elementosCreateManyInput {
  id?: string;
  descricao: string;
  usuariosId?: string;
}
