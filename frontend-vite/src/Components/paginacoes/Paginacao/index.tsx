import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import * as Paginacao from "./styles";

import { controlarNumeroBotoesExibidosTela } from "./utils/controlarNumeroBotoesExibidosTela/controlarNumeroBotoesExibidosTela";
import { criarTodosBotaoPaginacao } from "./utils/criarTodosBotaoPaginacao/criarTodosBotaoPaginacao";

type Props = {
  setPagina: React.Dispatch<React.SetStateAction<number>>;
  pagina: number;
  totalPaginas: number;
  arrayElementos: object[];
  quantidadeTotalItems?: number;
};

export const PaginacaoComum: React.FC<Props> = ({
  pagina,
  totalPaginas,
  setPagina,
  quantidadeTotalItems,
}) => {
  const botoesPaginacao = criarTodosBotaoPaginacao(
    totalPaginas,
    pagina,
    setPagina
  );
  const voltarPagina = () => {
    setPagina((paginaAntiga: any) => Math.max(paginaAntiga - 1, 1));
  };
  const avancarPagina = () => {
    setPagina((paginaAntiga: any) => paginaAntiga + 1);
  };
  const selecionarUltimaPagina = () => {
    setPagina(totalPaginas);
  };

  return (
    <Paginacao.Container>
      <Paginacao.ButtonNext onClick={voltarPagina} disabled={pagina === 1}>
        <IoIosArrowBack />
      </Paginacao.ButtonNext>
      {controlarNumeroBotoesExibidosTela(botoesPaginacao, pagina)}
      <>
        <p>Total páginas: {totalPaginas} |</p>
        <p>
          Qtd items: <strong>{quantidadeTotalItems}</strong>
        </p>
        <Paginacao.Button onClick={selecionarUltimaPagina}>
          {totalPaginas}
        </Paginacao.Button>
      </>
      <Paginacao.ButtonNext
        onClick={avancarPagina}
        disabled={pagina >= totalPaginas}
      >
        <IoIosArrowForward />
      </Paginacao.ButtonNext>
    </Paginacao.Container>
  );
};
