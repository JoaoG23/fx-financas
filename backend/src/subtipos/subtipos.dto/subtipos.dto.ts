import { Prisma } from "@prisma/client";

export class SubtiposDto implements Prisma.subtiposCreateManyInput {
  id?: string;
  descricao: string;
  tiposId?: string;
}
