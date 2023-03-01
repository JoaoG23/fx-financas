import { Prisma } from "@prisma/client";


export class AutenticacaoUsuarioDto implements Prisma.usuariosCreateInput {
    id?: string;
    nome: string;
    username: string;
    senha: string;
    email: string;
    telefone: string;
    createdAt?: string | Date;
    updateAt?: string | Date;
    fluxocaixa?: Prisma.fluxocaixaCreateNestedManyWithoutUsuariosInput;

}
