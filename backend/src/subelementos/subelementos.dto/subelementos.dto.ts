import { Prisma } from "@prisma/client";

export class SubelementoDto implements Prisma.subelementosCreateManyInput {
  id?: string;
  descricao: string;
  elementosId?: string;

}
