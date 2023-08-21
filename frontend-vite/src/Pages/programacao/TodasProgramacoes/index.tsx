import { useForm } from "react-hook-form";
import * as Fluxo from "./styles";

import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";

import { buscarProgramacoesPorUsuariosId } from "./api";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { TableComum } from "../../../Components/tables/TableComum";
import { CabecalhoTabela } from "../ComponentesParaTodos/tabela/CabecalhoTabela";
import { LinhaItemProgramacao } from "../ComponentesParaTodos/tabela/Linha";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";

import { ItemFluxoCaixa } from "../../../types/ItemFluxoCaixa";
import { SecondaryButton } from "../../../Components/Buttons/SecondaryButton/ButtonDark";
import { BsFillCloudDownloadFill } from "react-icons/bs";

export const TodosProgramacoes: React.FC = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    "programacao-por-usuarioId",
    buscarProgramacoesPorUsuariosId,
    {
      onError: (error: any) => {
        toast.error(`Ops! : ${error.response.data}`);
      },
    }
  );

  const programacao = data?.data || [];

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}
      <Fluxo.Header>
        <h2>Todas Programações</h2>
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
        {programacao?.map((item: ItemFluxoCaixa) => (
          <LinhaItemProgramacao key={item?.id} item={item} />
        ))}
      </TableComum>
    </Fluxo.Container>
  );
};
