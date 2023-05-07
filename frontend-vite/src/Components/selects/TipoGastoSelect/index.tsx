import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosLocais } from "./api";

import * as Selects from "./styles";

import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";

type Props<T = unknown> = {
  label?: string;
  name: string;
  control?: Control<FieldValues> | undefined;
  register: UseFormRegister<any> | Function;
  desativar?: boolean;
  requirido?: boolean;
  opcoes?: T[];
};


export const TipoGastoSelect: React.FC<Props<any>> = ({
  label,
  name,
  register,
  desativar = false,
  opcoes = [],
  requirido = true,
}) => {
  const { isLoading, data } = useQuery("todos-tipos-gasto", buscarTodosLocais, {
    onError: (error: any) => {
      toast.error(`Houve um error: ${error.response.data}`);
    },
  });

  const tipoGastos = data?.data || opcoes ;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}
      <strong>{label}</strong>
      <Selects.Container
        aria-label="tipoGasto"
        {...register(name, { required: requirido })}
        disabled={desativar}
      >
        <option value="">Selecione um tipos de gasto</option>
        {tipoGastos?.map((option: any) => (
          <option key={option?.id} value={option?.id}>
            {option?.descricao}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
