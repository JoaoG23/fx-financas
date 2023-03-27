import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Container } from "./styles";
import { useState } from "react";
import { buscarTodosSubElementos } from "./api";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import Card from "../../../Components/Card";
import { BsFillBasket2Fill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../Components/tables/TableComum";

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
      <header>
        <h3>Fluxo de caixa</h3>
      </header>
      <TableComum>
        <tr>
          <th>
            <input type={"checkbox"}></input>
          </th>
          <th>Descrição</th>
          <th></th>
        </tr>
        {subelementos?.map((subelemento: any) => {
          return (
            <tr key={subelemento.id}>
              <td>
                <input type={"checkbox"}></input>
              </td>
              <td>{subelemento.descricao}</td>
              <td>
                <button>
                  Items
                  <Link to={"subelementos"} key={subelemento.id}></Link>
                </button>
              </td>
            </tr>
          );
        })}
      </TableComum>
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
