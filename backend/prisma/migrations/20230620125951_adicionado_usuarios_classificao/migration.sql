/*
  Warnings:

  - You are about to alter the column `usuariosId` on the `elementos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.
  - You are about to drop the column `data` on the `fluxocaixa` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `fluxocaixa` table. All the data in the column will be lost.
  - You are about to alter the column `usuariosId` on the `fluxocaixa` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.
  - You are about to drop the `descricao_classificacaos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `data_insersao` to the `fluxocaixa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora_insersao` to the `fluxocaixa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "descricao_classificacaos" DROP CONSTRAINT "descricao_classificacaos_usuariosId_fkey";

-- DropForeignKey
ALTER TABLE "elementos" DROP CONSTRAINT "elementos_usuariosId_fkey";

-- DropForeignKey
ALTER TABLE "fluxocaixa" DROP CONSTRAINT "fluxocaixa_usuariosId_fkey";

-- DropForeignKey
ALTER TABLE "subelementos" DROP CONSTRAINT "subelementos_elementosId_fkey";

-- DropForeignKey
ALTER TABLE "subtipos" DROP CONSTRAINT "subtipos_tiposId_fkey";

-- DropForeignKey
ALTER TABLE "tipos" DROP CONSTRAINT "tipos_subelementosId_fkey";

-- AlterTable
ALTER TABLE "elementos" ALTER COLUMN "usuariosId" SET DATA TYPE VARCHAR(36);

-- AlterTable
ALTER TABLE "fluxocaixa" DROP COLUMN "data",
DROP COLUMN "hora",
ADD COLUMN     "data_insersao" DATE NOT NULL,
ADD COLUMN     "hora_insersao" TIME(0) NOT NULL,
ADD COLUMN     "subelementosId" TEXT DEFAULT '',
ADD COLUMN     "subtiposId" TEXT DEFAULT '',
ADD COLUMN     "tiposId" TEXT DEFAULT '',
ADD COLUMN     "tipos_despesasId" TEXT,
ALTER COLUMN "saldo" DROP NOT NULL,
ALTER COLUMN "saldo" SET DEFAULT 0,
ALTER COLUMN "elementosId" SET DEFAULT '',
ALTER COLUMN "usuariosId" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "locaisId" SET DEFAULT '';

-- AlterTable
ALTER TABLE "locais" ADD COLUMN     "usuariosId" VARCHAR(36) DEFAULT '';

-- AlterTable
ALTER TABLE "subelementos" ADD COLUMN     "usuariosId" VARCHAR(36);

-- AlterTable
ALTER TABLE "subtipos" ADD COLUMN     "usuariosId" VARCHAR(36);

-- AlterTable
ALTER TABLE "tipos" ADD COLUMN     "usuariosId" VARCHAR(36);

-- DropTable
DROP TABLE "descricao_classificacaos";

-- CreateTable
CREATE TABLE "tipos_despesas" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(30) NOT NULL,

    CONSTRAINT "tipos_despesas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "elementos" ADD CONSTRAINT "elementos_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subelementos" ADD CONSTRAINT "subelementos_elementosId_fkey" FOREIGN KEY ("elementosId") REFERENCES "elementos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subelementos" ADD CONSTRAINT "subelementos_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipos" ADD CONSTRAINT "tipos_subelementosId_fkey" FOREIGN KEY ("subelementosId") REFERENCES "subelementos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipos" ADD CONSTRAINT "tipos_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subtipos" ADD CONSTRAINT "subtipos_tiposId_fkey" FOREIGN KEY ("tiposId") REFERENCES "tipos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subtipos" ADD CONSTRAINT "subtipos_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_subelementosId_fkey" FOREIGN KEY ("subelementosId") REFERENCES "subelementos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_tiposId_fkey" FOREIGN KEY ("tiposId") REFERENCES "tipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_subtiposId_fkey" FOREIGN KEY ("subtiposId") REFERENCES "subtipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_tipos_despesasId_fkey" FOREIGN KEY ("tipos_despesasId") REFERENCES "tipos_despesas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locais" ADD CONSTRAINT "locais_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
