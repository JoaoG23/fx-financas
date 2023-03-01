-- AlterTable
ALTER TABLE "descricao_classificacao" ADD COLUMN     "usuariosId" TEXT;

-- AddForeignKey
ALTER TABLE "descricao_classificacao" ADD CONSTRAINT "descricao_classificacao_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
