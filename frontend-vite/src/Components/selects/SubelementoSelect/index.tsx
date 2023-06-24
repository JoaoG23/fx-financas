import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosSubelementos } from "./api";

import * as Selects from "./styles";

import { useSubelementoStore } from "../../../stores/useSubelementoStore/useSubelementoStore";

import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";

import { Subelemento } from "../../../types/Subelemento";

type Props<T = unknown> = {
  label?: string;
  name: string;
  desativar?: boolean;
  requirido?: boolean;
  elementosId?: string;
  register: UseFormRegister<any> | Function;
  control?: Control<FieldValues> | undefined;
  opcoes?: T[];
};

export const SublementoSelect: React.FC<Props<Subelemento>> = ({
  label,
  name,
  register,
  desativar = false,
  requirido = true,
  opcoes = [],
  elementosId,
}) => {
  const selecionarSubElemento = useSubelementoStore(
    (state) => state.adicionarSubelemento
  );

  const { isLoading, data } = useQuery(
    ["subelemento-elementos", elementosId!],
    () => buscarTodosSubelementos(elementosId!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const subelementos = data?.data;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}
      <strong>{label}</strong>

      <Selects.Container
        aria-label="subelementos"
        {...register(name, { required: requirido })}
        disabled={desativar}
        onChange={(e: any) => {
          const idSubelemento  = e.target.value;

          selecionarSubElemento(idSubelemento);
        }}
      >
        <option value="">Selecione um subelemento</option>
        {subelementos?.map((option: Subelemento) => (
          <option key={option?.id} value={option?.id}>
            {option?.descricao}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
