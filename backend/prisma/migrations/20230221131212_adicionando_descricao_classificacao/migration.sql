/*
  Warnings:

  - You are about to drop the `descricao_classificacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "descricao_classificacao" DROP CONSTRAINT "descricao_classificacao_usuariosId_fkey";

-- DropTable
DROP TABLE "descricao_classificacao";

-- CreateTable
CREATE TABLE "descricao_classificacaos" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(70) NOT NULL,
    "usuariosId" TEXT,

    CONSTRAINT "descricao_classificacaos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "descricao_classificacaos" ADD CONSTRAINT "descricao_classificacaos_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
