import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosTipos } from "./api";

import * as Selects from "./styles";

import { useTiposStore } from "../../../stores/useTiposStore/useTiposStore";
import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";
import { Tipo } from "../../../types/Tipo";

type Props<T = unknown> = {
  label?: string;
  name: string;
  desativar?: boolean;
  requirido?: boolean;
  subelementosId?: string;
  control?: Control<FieldValues> | undefined;
  register: UseFormRegister<any> | Function;
  opcoes?: T[];
};

export const TiposSelect: React.FC<Props<Tipo>> = ({
  label,
  name,
  register,
  desativar = false,
  requirido = true,
  opcoes = [],
  subelementosId,
}) => {
  const selecionarTipo = useTiposStore((state) => state.adicionarTipos);

  const { isLoading, data } = useQuery(
    ["tipos-subelementos", subelementosId!],
    () => buscarTodosTipos(subelementosId!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const tipos = data?.data;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}
      <strong>{label}</strong>

      <Selects.Container
        aria-label="tipos"
        {...register(name, { required: requirido })}
        disabled={desativar}
        onChange={(e: any) => {
          const idIipo = e.target.value;

          selecionarTipo(idIipo);
        }}
      >
        <option value="">Selecione um tipo</option>
        {tipos?.map((option: Tipo) => (
          <option key={option?.id} value={option?.id}>
            {option?.descricao}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
