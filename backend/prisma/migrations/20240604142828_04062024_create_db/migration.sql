-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "username" VARCHAR(200) NOT NULL,
    "senha" TEXT NOT NULL,
    "caminho_imagem" VARCHAR(100),
    "email" VARCHAR(200) NOT NULL,
    "telefone" VARCHAR(22) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "elementos" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(70) NOT NULL,
    "usuariosId" VARCHAR(36),
    "limiteGasto" DECIMAL(12,2) DEFAULT 0,

    CONSTRAINT "elementos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subelementos" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(70) NOT NULL,
    "elementosId" TEXT,
    "usuariosId" VARCHAR(36),
    "limiteGasto" DECIMAL(12,2) DEFAULT 0,

    CONSTRAINT "subelementos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipos" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(70) NOT NULL,
    "subelementosId" TEXT,
    "usuariosId" VARCHAR(36),
    "limiteGasto" DECIMAL(12,2) DEFAULT 0,

    CONSTRAINT "tipos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subtipos" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(70) NOT NULL,
    "tiposId" TEXT,
    "usuariosId" VARCHAR(36),
    "limiteGasto" DECIMAL(12,2) DEFAULT 0,

    CONSTRAINT "subtipos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fluxocaixa" (
    "orderador" SERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "data_insersao" TIMESTAMP(6) NOT NULL,
    "descricao" VARCHAR(70) NOT NULL,
    "valor" DECIMAL(12,2) NOT NULL,
    "saldo" DECIMAL(12,2) DEFAULT 0,
    "elementosId" TEXT DEFAULT '',
    "usuariosId" VARCHAR(36),
    "locaisId" TEXT DEFAULT '',
    "subelementosId" TEXT DEFAULT '',
    "tiposId" TEXT DEFAULT '',
    "subtiposId" TEXT DEFAULT '',
    "tipos_despesasId" TEXT,
    "inserido_via_programacao" TEXT DEFAULT '',

    CONSTRAINT "fluxocaixa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "programacao_fluxocaixa" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(70),
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "valor" DECIMAL(12,2) NOT NULL,
    "elementosId" TEXT DEFAULT '',
    "usuariosId" VARCHAR(36),
    "locaisId" TEXT DEFAULT '',
    "subelementosId" TEXT DEFAULT '',
    "tiposId" TEXT DEFAULT '',
    "subtiposId" TEXT DEFAULT '',
    "tipos_despesasId" TEXT,
    "createdAt" TIMESTAMP(3),

    CONSTRAINT "programacao_fluxocaixa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipos_despesas" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(30) NOT NULL,

    CONSTRAINT "tipos_despesas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locais" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(70) NOT NULL,
    "usuariosId" VARCHAR(36) DEFAULT '',

    CONSTRAINT "locais_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_nome_key" ON "usuarios"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_username_key" ON "usuarios"("username");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_telefone_key" ON "usuarios"("telefone");

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
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_elementosId_fkey" FOREIGN KEY ("elementosId") REFERENCES "elementos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_locaisId_fkey" FOREIGN KEY ("locaisId") REFERENCES "locais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_subelementosId_fkey" FOREIGN KEY ("subelementosId") REFERENCES "subelementos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_subtiposId_fkey" FOREIGN KEY ("subtiposId") REFERENCES "subtipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_tiposId_fkey" FOREIGN KEY ("tiposId") REFERENCES "tipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_tipos_despesasId_fkey" FOREIGN KEY ("tipos_despesasId") REFERENCES "tipos_despesas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programacao_fluxocaixa" ADD CONSTRAINT "programacao_fluxocaixa_elementosId_fkey" FOREIGN KEY ("elementosId") REFERENCES "elementos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programacao_fluxocaixa" ADD CONSTRAINT "programacao_fluxocaixa_locaisId_fkey" FOREIGN KEY ("locaisId") REFERENCES "locais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programacao_fluxocaixa" ADD CONSTRAINT "programacao_fluxocaixa_subelementosId_fkey" FOREIGN KEY ("subelementosId") REFERENCES "subelementos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programacao_fluxocaixa" ADD CONSTRAINT "programacao_fluxocaixa_subtiposId_fkey" FOREIGN KEY ("subtiposId") REFERENCES "subtipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programacao_fluxocaixa" ADD CONSTRAINT "programacao_fluxocaixa_tiposId_fkey" FOREIGN KEY ("tiposId") REFERENCES "tipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programacao_fluxocaixa" ADD CONSTRAINT "programacao_fluxocaixa_tipos_despesasId_fkey" FOREIGN KEY ("tipos_despesasId") REFERENCES "tipos_despesas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programacao_fluxocaixa" ADD CONSTRAINT "programacao_fluxocaixa_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locais" ADD CONSTRAINT "locais_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
