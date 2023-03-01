/*
  Warnings:

  - You are about to alter the column `descricao` on the `elementos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(70)`.
  - You are about to alter the column `descricao` on the `fluxocaixa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(70)`.
  - You are about to alter the column `descricao` on the `locais` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(70)`.
  - You are about to alter the column `descricao` on the `subelementos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(70)`.
  - You are about to alter the column `descricao` on the `tipos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(70)`.

*/
-- AlterTable
ALTER TABLE "elementos" ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(70);

-- AlterTable
ALTER TABLE "fluxocaixa" ADD COLUMN     "locaisId" TEXT,
ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(70);

-- AlterTable
ALTER TABLE "locais" ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(70);

-- AlterTable
ALTER TABLE "subelementos" ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(70);

-- AlterTable
ALTER TABLE "tipos" ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(70);

-- CreateTable
CREATE TABLE "subtipos" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(70) NOT NULL,
    "tiposId" TEXT,

    CONSTRAINT "subtipos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "descricao_classificacao" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(70) NOT NULL,

    CONSTRAINT "descricao_classificacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subtipos" ADD CONSTRAINT "subtipos_tiposId_fkey" FOREIGN KEY ("tiposId") REFERENCES "tipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_locaisId_fkey" FOREIGN KEY ("locaisId") REFERENCES "locais"("id") ON DELETE SET NULL ON UPDATE CASCADE;
