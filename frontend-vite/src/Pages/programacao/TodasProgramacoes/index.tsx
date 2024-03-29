import { BsFillCloudDownloadFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import * as Fluxo from "./styles";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";

import { pesquisarProgramacoesPorCriterio } from "./api";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../Components/tables/TableComum";
import { CabecalhoTabela } from "../ComponentesParaTodos/tabela/CabecalhoTabela";
import { LinhaItemProgramacao } from "../ComponentesParaTodos/tabela/Linha";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";
import { SecondaryButton } from "../../../Components/Buttons/SecondaryButton/ButtonDark";
import { FormularioPesquisa } from "../ComponentesParaTodos/campos/FormularioPesquisa";

import { ItemFluxoCaixa } from "../../../types/ItemFluxoCaixa";
import { CriteriosPesquisaItemFluxoCaixa } from "../../../types/CriteriosPesquisa";
import { PaginacaoFluxoCaixaCache } from "../../../types/fluxocaixa/PaginacaoFluxoCaixaCache";

import { buscarConfiguracoesPaginaPorChave } from "../../../utils/paginacao/buscarConfiguracoesPaginaPorChave/buscarConfiguracoesPaginaPorChave";
import { guardarConfiguracoesPaginaPorChave } from "../../../utils/paginacao/guardarConfiguracoesPaginaPorChave/guardarConfiguracoesPaginaPorChave";
import { converterValorEmMoedaBR } from "../../../utils/conversao/converterValorEmMoedaBR/converterValorEmMoedaBR";

export const TodosProgramacoes: React.FC = () => {
  const navigate = useNavigate();

  const chaveProgramacao: string = "fx-finances-programacao";

  const configuracaoPagina: PaginacaoFluxoCaixaCache =
    buscarConfiguracoesPaginaPorChave(chaveProgramacao) || {};

  const [criteriosBusca, setCriteriosBusca] =
    useState<CriteriosPesquisaItemFluxoCaixa>(
      configuracaoPagina?.criteriosBusca || { entradaOuSaidaOuTodos: "todos" }
    );

  const { data, isLoading } = useQuery(
    ["pesquisar-programacao-por-criterios", { criteriosBusca }],
    async () => await pesquisarProgramacoesPorCriterio(criteriosBusca),
    {
      onError: (error: any) => {
        toast.error(`Ops! : ${error.response.data}`);
      },
    }
  );

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    guardarConfiguracoesPaginaPorChave(chaveProgramacao, {
      criteriosBusca,
    });
    reset(criteriosBusca);
  }, [criteriosBusca]);

  const programacoes = data?.data[1] || [];
  const somaTotalReceitas = data?.data[0]?.somaTodasProgramacaoDeReceita || 0;

  return (
    <Fluxo.Container>
      <Fluxo.Formulario>
        <FormularioPesquisa
          onSubmit={handleSubmit(
            (criterios: CriteriosPesquisaItemFluxoCaixa) => {
              setCriteriosBusca(criterios);
            }
          )}
          register={register}
        />
      </Fluxo.Formulario>
      {isLoading && <SpinnerCarregamento />}
      <Fluxo.Header>
        <div>
          <h2>Todas Programações</h2>
          <Fluxo.TotalReceitas>
            Total receitas : {converterValorEmMoedaBR(somaTotalReceitas)}
          </Fluxo.TotalReceitas>
        </div>
        <Fluxo.ContainerButtons>
          <ButtonDefault onClick={() => navigate("adicionar")}>
            <>Adicionar</>
            <IoMdAddCircle />
          </ButtonDefault>
          <SecondaryButton onClick={() => navigate("capturar_inserir")}>
            <>Inserir Tudo fluxocaixa</>
            <BsFillCloudDownloadFill />
          </SecondaryButton>
        </Fluxo.ContainerButtons>
      </Fluxo.Header>

      <TableComum>
        <CabecalhoTabela />
        {programacoes?.map((item: ItemFluxoCaixa) => (
          <LinhaItemProgramacao key={item?.id} item={item} />
        ))}
      </TableComum>
    </Fluxo.Container>
  );
};
