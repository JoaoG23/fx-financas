
type Props = {
    setPagina:any
    pagina:any
    totalPaginas:number
    arrayElementos:object[]
    quantidadeTotalItems?:number;
}

export const PaginacaoComum: React.FC<Props> = ({
    pagina,
    totalPaginas,
    setPagina,
    arrayElementos,
    quantidadeTotalItems = 0,
}) => {
    console.log("🚀 ~ file: index.tsx:17 ~ pagina:", pagina)

    const criarTodosBotaoPaginar = (totalPaginas:number) => {
        let arrayBotoes:any = [];
        for (let i = 0; i < totalPaginas; i++) {
            arrayBotoes.push(<button key={i} onClick={() => setPagina(() => i + 1)} >{i + 1}</button>);
            
        }
        return arrayBotoes;
      };

    return (
        <div >
            <div >
                <button onClick={() => setPagina((paginaAntiga:any) => Math.max(paginaAntiga - 1, 1))} disabled={pagina === 1} >Voltar</button>
                <div >Páginas : {pagina} até {totalPaginas} Qtd de items: {quantidadeTotalItems}</div>
                <div>{criarTodosBotaoPaginar(totalPaginas)}</div>
                <button onClick={() => setPagina((paginaAntiga:any) => paginaAntiga + 1)} disabled={pagina >= totalPaginas} >Avançar</button>
            </div>
        </div>
    );
}