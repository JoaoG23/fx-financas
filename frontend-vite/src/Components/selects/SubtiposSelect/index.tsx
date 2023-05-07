import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosSubTipos } from "./api";

import * as Selects from "./styles";

import { usesubtipoStore } from "../../../stores/useSubtipoStore/useSubtiposStore";
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
  const selecionarSubtipo = usesubtipoStore((state) => state.adicionarSubtipo);

  const { isLoading, data } = useQuery(
    ["subtipos-usuario", tiposId!],
    () =>
      buscarTodosSubTipos({
        tiposId: tiposId!,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const subtipos = data?.data[1] || opcoes;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}

      <strong>{label}</strong>

      <Selects.Container
        aria-label="subtipos"
        {...register(name, { required: requirido })}
        disabled={desativar}
        onChange={(e: any) => {
          const descricao = e.nativeEvent.target[e.target.selectedIndex].text;

          const tipoSelecionado = {
            label: descricao,
            value: e.target.value,
          };

          selecionarSubtipo(tipoSelecionado);
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
