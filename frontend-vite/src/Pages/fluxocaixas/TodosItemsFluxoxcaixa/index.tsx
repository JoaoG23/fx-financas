import { useForm } from "react-hook-form";
import * as Fluxo from "./styles";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { BsDatabaseFillAdd } from "react-icons/bs";
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

import { ItemFluxoCaixa } from "../../../types/ItemFluxoCaixa";
import { CriteriosPesquisaItemFluxoCaixa } from "../../../types/CriteriosPesquisa";

export const TodosItemsFluxoCaixa: React.FC = () => {
  const navigate = useNavigate();

  const [criteriosBusca, setCriteriosBusca] =
    useState<CriteriosPesquisaItemFluxoCaixa>({});
  const [pagina, setPagina] = useState<number>(1);
  const comecarPelaPrimeiraPagina = () => setPagina(1);

  const {
    data,
    mutate: mutatePesquisar,
    isLoading,
  } = useMutation(
    async () =>
      await pesquisarItemsFluxoCaixaPaginaPorCriterio(pagina, criteriosBusca),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  useEffect(() => {
    mutatePesquisar();
  }, [pagina, criteriosBusca]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

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
              mutatePesquisar();
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
