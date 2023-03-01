-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "username" VARCHAR(200) NOT NULL,
    "senha" TEXT NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "telefone" VARCHAR(22) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "elementos" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,
    "usuariosId" TEXT,

    CONSTRAINT "elementos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subelementos" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,
    "elementosId" TEXT,

    CONSTRAINT "subelementos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipos" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,
    "subelementosId" TEXT,

    CONSTRAINT "tipos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fluxocaixa" (
    "id" TEXT NOT NULL,
    "data" DATE NOT NULL,
    "hora" TIME(0) NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,
    "valor" DECIMAL(12,2) NOT NULL,
    "saldo" DECIMAL(12,2) NOT NULL,
    "elementosId" TEXT,
    "orderador" SERIAL NOT NULL,
    "usuariosId" TEXT,

    CONSTRAINT "fluxocaixa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locais" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,

    CONSTRAINT "locais_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "elementos" ADD CONSTRAINT "elementos_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subelementos" ADD CONSTRAINT "subelementos_elementosId_fkey" FOREIGN KEY ("elementosId") REFERENCES "elementos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipos" ADD CONSTRAINT "tipos_subelementosId_fkey" FOREIGN KEY ("subelementosId") REFERENCES "subelementos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_elementosId_fkey" FOREIGN KEY ("elementosId") REFERENCES "elementos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fluxocaixa" ADD CONSTRAINT "fluxocaixa_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
