import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosTipoDespesa } from "./api";

import * as Selects from "./styles";

import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";
import { Local } from "../../../types/Local";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

type Props<T = unknown> = {
  label?: string;
  name: string;
  control?: Control<FieldValues> | undefined;
  register: UseFormRegister<any> | Function;
  desativar?: boolean;
  requirido?: boolean;
  opcoes?: T[];
};

export const TipoDespesaSelect: React.FC<Props<any>> = ({
  label,
  name,
  register,
  desativar = false,
  opcoes = [],
  requirido = true,
}) => {
  const { isLoading, data } = useQuery(
    "todos-tipos-despesas",
    buscarTodosTipoDespesa,
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const tipoDespesas = data?.data[1] || opcoes;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}
      <strong>{label}</strong>
      <Selects.Container
        aria-label="tipoDespesa"
        {...register(name, { required: requirido })}
        disabled={desativar}
      >
        <option value="">Selecione um tipo despesa</option>
        {tipoDespesas?.map((option: Local) => (
          <option key={option?.id} value={option?.id}>
            {option?.descricao}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
