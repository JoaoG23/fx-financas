import * as Paginacao from "../../styles";

export const criarTodosBotaoPaginacao = (
  totalPaginas: number,
  pagina: number,
  setPagina: React.Dispatch<React.SetStateAction<number>>,
) => {
  let arrayBotoes: JSX.Element[] = [];


  for (let i = 0; i < totalPaginas; i++) {
    const numeroPagina: number = i + 1;
    arrayBotoes.push(
      <Paginacao.Button
        key={i}
        ativo={ numeroPagina === pagina ? true : false}
        onClick={() => {
          setPagina(() => i + 1);
        }}
      >
        {numeroPagina}
      </Paginacao.Button>
    );
  }
  return arrayBotoes;
};
