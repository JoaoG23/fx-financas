import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Container } from "./styles";
import { useState } from "react";
import { buscarTodosElementos } from "./api";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import Card from "../../../Components/Card";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";

export const Elementos: React.FC = () => {
  const { idConvertido } = buscaDadoUsuarioNaSessao();
  const [pagina, setPagina] = useState(1);

  const { isLoading, data } = useQuery(
    ["elemento-usuario", pagina],
    () =>
      buscarTodosElementos({
        elementosId: idConvertido!,
        numero_pagina: pagina,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const elementos = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Container>
      {isLoading && <SpinnerCarregamento />}
      {elementos?.map((elemento: any) => {
        return (
          <Link to={`subelementos/${elemento.id}`} key={elemento.id}>
            <Card key={elemento.id}>
              <BsFillBoxSeamFill />
              <h4>{elemento.descricao}</h4>
            </Card>
          </Link>
        );
      })}
      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={elementos}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </Container>
  );
};
