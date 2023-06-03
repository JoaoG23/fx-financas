import { Prisma } from "@prisma/client";

export class TipoDespesaDto implements Prisma.tipos_despesasCreateManyInput {
  id?: string;
  descricao: string;
}
