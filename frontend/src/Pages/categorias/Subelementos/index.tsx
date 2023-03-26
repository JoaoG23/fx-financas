import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Container } from "./styles";
import { useState } from "react";
import { buscarTodosSubElementos } from "./api";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import Card from "../../../Components/Card";
import { BsFillBasket2Fill, BsFillBoxSeamFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";

export const Subelementos: React.FC = () => {
  const [pagina, setPagina] = useState(1);
  const { id } = useParams();

  const { isLoading, data } = useQuery(
    ["subelementos-elemento", pagina],
    () =>
      buscarTodosSubElementos({
        elementosId: id!,
        numero_pagina: pagina,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );
  const subelementos = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;
  return (
    <Container>
      {isLoading && <SpinnerCarregamento />}
      {subelementos?.map((subelemento: any) => {
        return (
          <Link to={"subelementos"} key={subelemento.id}>
            <Card key={subelemento.id}>
              <BsFillBasket2Fill />
              <h4>{subelemento.descricao}</h4>
            </Card>
          </Link>
        );
      })}
      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={subelementos}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </Container>
  );
};
