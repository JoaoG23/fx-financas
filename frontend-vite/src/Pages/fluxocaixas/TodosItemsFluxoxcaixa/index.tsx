import { useForm } from "react-hook-form";
import * as Fluxo from "./styles";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { pesquisarItemsFluxoCaixaPaginaPorCriterio } from "./api";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../Components/tables/TableComum";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import { CabecalhoTabela } from "../ComponentesParaTodos/tabela/CabecalhoTabela";
import { LinhaItemFluxocaixa } from "../ComponentesParaTodos/tabela/Linha";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";
import { FormularioPesquisa } from "../ComponentesParaTodos/campos/FormularioPesquisa";

import { buscarConfiguracoesPaginaPorChave } from "../../../utils/paginacao/buscarConfiguracoesPaginaPorChave/buscarConfiguracoesPaginaPorChave";

import { ItemFluxoCaixa } from "../../../types/ItemFluxoCaixa";
import { CriteriosPesquisaItemFluxoCaixa } from "../../../types/CriteriosPesquisa";
import { guardarConfiguracoesPaginaPorChave } from "../../../utils/paginacao/guardarConfiguracoesPaginaPorChave/guardarConfiguracoesPaginaPorChave";
import { PaginacaoFluxoCaixaCache } from "../../../types/fluxocaixa/PaginacaoFluxoCaixaCache";

export const TodosItemsFluxoCaixa: React.FC = () => {
  const navigate = useNavigate();

  // Paginacao ---
  const chaveFluxoCaixa: string = "fx-finances-fluxocaixa-todos";

  const configuracaoPagina: PaginacaoFluxoCaixaCache =
    buscarConfiguracoesPaginaPorChave(chaveFluxoCaixa) || {};

  const paginaAtual: number = Number(configuracaoPagina?.pagina!);

  const [pagina, setPagina] = useState<number>(paginaAtual || 1);

  const [criteriosBusca, setCriteriosBusca] =
    useState<CriteriosPesquisaItemFluxoCaixa>(
      configuracaoPagina?.criteriosBusca || { entradaOuSaidaOuTodos: "todos" }
    );

  const comecarPelaPrimeiraPagina = () => setPagina(1);

  const { data, isLoading } = useQuery(
    [
      "todo-items-fluxocaixa-pagina",
      {
        pagina,
        criteriosBusca,
      },
    ],
    async () =>
      await pesquisarItemsFluxoCaixaPaginaPorCriterio(pagina, criteriosBusca),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    guardarConfiguracoesPaginaPorChave(chaveFluxoCaixa, {
      criteriosBusca,
      pagina,
    });
    reset(criteriosBusca);
  }, [pagina, criteriosBusca]);

  const itemsFluxoCaixa = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      <Fluxo.Formulario>
        <FormularioPesquisa
          onSubmit={handleSubmit(
            (criterios: CriteriosPesquisaItemFluxoCaixa) => {
              setCriteriosBusca(criterios);
              comecarPelaPrimeiraPagina();
            }
          )}
          register={register}
          control={control}
          errors={errors}
        />
      </Fluxo.Formulario>
      {isLoading && <SpinnerCarregamento />}
      <Fluxo.Header>
        <h2>Fluxo de caixa</h2>
        <Fluxo.ContainerButtons>
          <ButtonDefault onClick={() => navigate("adicionar")}>
            <>Adicionar</>
            <IoMdAddCircle />
          </ButtonDefault>
        </Fluxo.ContainerButtons>
      </Fluxo.Header>

      <TableComum>
        <CabecalhoTabela />
        {itemsFluxoCaixa?.map((item: ItemFluxoCaixa) => (
          <LinhaItemFluxocaixa key={item?.id} item={item} />
        ))}
      </TableComum>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={itemsFluxoCaixa}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </Fluxo.Container>
  );
};
