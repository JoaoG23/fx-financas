import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class FluxocaixaDto implements Prisma.fluxocaixaCreateManyInput {
  orderador?: number;
  id?: string;
  data_insersao: string | Date;
  descricao: string;
  valor: string | number | Prisma.Decimal | DecimalJsLike;
  saldo?: string | number | Prisma.Decimal | DecimalJsLike;
  elementosId?: string;
  usuariosId?: string;
  locaisId?: string;
  subelementosId?: string;
  tiposId?: string;
  subtiposId?: string;
  tipos_despesasId?: string;
  inserido_via_programacao?:string;
}
