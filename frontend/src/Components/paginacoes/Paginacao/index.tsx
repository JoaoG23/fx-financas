
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


    return (
        <div >
            <div >
                <button onClick={() => setPagina((paginaAntiga:any) => Math.max(paginaAntiga - 1, 1))} disabled={pagina === 1} >Voltar</button>
                <div >Páginas : {pagina} até {totalPaginas} Qtd de items: {quantidadeTotalItems}</div>
                <button onClick={() => setPagina((paginaAntiga:any) => paginaAntiga + 1)} disabled={pagina >= totalPaginas} >Avançar</button>
            </div>
        </div>
    );
}