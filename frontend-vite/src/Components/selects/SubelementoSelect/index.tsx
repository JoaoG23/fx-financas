import { Control, Controller, FieldValues } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosSubelementos } from "./api";
import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";

import * as Selects from "./styles";
import Select from "react-select";
import { converterElementoParaOptions } from "../ElementoSelect/utils/converterElementoParaOptions/converterElementoParaOptions";
import { useElementoStore } from "../../../stores/useElementoStore/useElementoStore";

type Props = {
  label?: string;
  name: string;
  register: any;
  desativar?: boolean;
  requirido?: boolean;
  elementosId?: string;
  control?: Control<FieldValues> | undefined;
};

export const SublementoSelect: React.FC<Props> = ({
  label,
  name,
  control,
  register,
  desativar = false,
  requirido = true,
  elementosId,
}) => {
  const selecionarSubElemento = useElementoStore(state => state.adicionarElemento)


  const { isLoading, data } = useQuery(
    ["subelemento-usuario", elementosId!],
    () =>
      buscarTodosSubelementos({
        elementosId: elementosId!,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const elementos = data?.data[1];

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}

      <strong>{label}</strong>

      <Controller
        name={name}
        render={({ field: { onChange } }) => (
          <Select
            options={converterElementoParaOptions(elementos)}
            onChange={(valor: any) => {
              console.log(valor);
              // selecionarElemento(valor)
              onChange(valor.value);
            }}
          />
        )}
        control={control}
        defaultValue=""
      />
    </Selects.ContainerInput>
  );
};
