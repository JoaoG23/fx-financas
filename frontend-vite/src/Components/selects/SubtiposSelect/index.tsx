import {
  Control,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosSubTipos } from "./api";

import * as Selects from "./styles";

import { useSubtipoStore } from "../../../stores/useSubtipoStore/useSubtiposStore";
import { Subtipo } from "../../../types/Subtipo";
import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";

type Props<T = unknown> = {
  label?: string;
  name: string;
  register: UseFormRegister<any> | Function;
  desativar?: boolean;
  requirido?: boolean;
  tiposId?: string;
  control?: Control<FieldValues> | undefined;
  opcoes?: T[];
};

export const SubtiposSelect: React.FC<Props> = ({
  label,
  name,
  register,
  desativar = false,
  requirido = true,
  tiposId,
  opcoes = [],
}) => {
  const selecionarSubtipo = useSubtipoStore((state) => state.adicionarSubtipo);

  const { isLoading, data } = useQuery(
    ["subtipos-tipo", tiposId!],
    () =>
      buscarTodosSubTipos(tiposId!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const subtipos = data?.data;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}

      <strong>{label}</strong>

      <Selects.Container
        aria-label="subtipos"
        {...register(name, { required: requirido })}
        disabled={desativar}
        onChange={(e: any) => {
          const idSubtipo = e.target.value;

          selecionarSubtipo(idSubtipo);
        }}
      >
        <option value="">Selecione um subtipo</option>
        {subtipos?.map((option: Subtipo) => (
          <option key={option?.id} value={option?.id}>
            {option?.descricao}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
