import { PrismaConexao } from "../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();

function gerarMuitosSubelementos() {
  let arrayElemento = [];
  for (let i = 0; i < 3; i++) {
    let novoElemento = {
      descricao: "Elemento",
    };

    arrayElemento.push(novoElemento);
  }

  return arrayElemento;
}

const array = gerarMuitosSubelementos();
const dados = prisma.subelementos.createMany({
  data: array,
});
dados.then((res) => console.log(res)).then((data) => console.log(data));
