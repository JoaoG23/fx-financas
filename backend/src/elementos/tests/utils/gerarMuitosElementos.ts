import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function gerarMuitosElementos() {
  let arrayElemento = [];
  for (let i = 0; i < 3; i++) {
    let novoElemento = {
      descricao: "Elemento",
    };

    arrayElemento.push(novoElemento);
  }

  return arrayElemento;
}

const array = gerarMuitosElementos();
const dados = prisma.elementos.createMany({
  data: array,
});
dados.then((res) => console.log(res)).then((data) => console.log(data));
