import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as Paginacao from "./styles";

type Props = {
  setPagina: any;
  pagina: number;
  totalPaginas: number;
  arrayElementos: any;
  quantidadeTotalItems?: number;
};

export const PaginacaoComum: React.FC<Props> = ({
  pagina,
  totalPaginas,
  setPagina,
  arrayElementos,
  quantidadeTotalItems = 0,
}) => {
  // const criarTodosBotaoPaginar = (totalPaginas: number) => {
  //   let arrayBotoes: any = [];
  //   for (let i = 0; i < totalPaginas; i++) {
  //     arrayBotoes.push(
  //       <Paginacao.Button key={i} onClick={() => setPagina(() => i + 1)}>
  //         {i + 1}
  //       </Paginacao.Button>
  //     );
  //   }
  //   return arrayBotoes;
  // };

  return (
    <Paginacao.Container>
      <Paginacao.Button
        onClick={() =>
          setPagina((paginaAntiga: any) => Math.max(paginaAntiga - 1, 1))
        }
        disabled={pagina === 1}
      >
        <IoIosArrowBack size={20} />
      </Paginacao.Button>
      <div>
        Páginas : {pagina} até {totalPaginas} Qtd de items:{" "}
        {quantidadeTotalItems}
      </div>
      {/* <Paginacao.NumeroPaginas>
        {criarTodosBotaoPaginar(totalPaginas)}
      </Paginacao.NumeroPaginas> */}
      <Paginacao.Button
        onClick={() => setPagina((paginaAntiga: any) => paginaAntiga + 1)}
        disabled={pagina >= totalPaginas}
      >
        <IoIosArrowForward size={20} />
      </Paginacao.Button>
    </Paginacao.Container>
  );
};
