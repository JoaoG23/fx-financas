import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosLocaisPorId } from "./api";

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

export const LocaisSelect: React.FC<Props<any>> = ({
  label,
  name,
  register,
  desativar = false,
  opcoes = [],
  requirido = true,
}) => {
  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const { isLoading, data } = useQuery(
    ["todos-locais", idUsuario],
    () => buscarTodosLocaisPorId(idUsuario!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const locais = data?.data || opcoes;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}
      <strong>{label}</strong>
      <Selects.Container
        aria-label="locais"
        {...register(name, { required: requirido })}
        disabled={desativar}
      >
        <option value="">Selecione um local da movimentação</option>
        {locais?.map((option: Local) => (
          <option key={option?.id} value={option?.id}>
            {option?.descricao}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
