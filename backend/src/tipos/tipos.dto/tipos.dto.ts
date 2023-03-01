import { Prisma } from "@prisma/client";

export class TiposDto implements Prisma.tiposCreateManyInput {
  id?: string;
  descricao: string;
  subelementosId:string;
}
