import { Control, Controller, FieldValues } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosTipos } from "./api";

import * as Selects from "./styles";
import Select from "react-select";

import { estiloConstumizado } from "../configs/configsStyles";
import { converterElementoParaOptions } from "../../../utils/conversao/converterElementoParaOptions/converterElementoParaOptions";

import { useTiposStore } from "../../../stores/useTiposStore/useTiposStore";

type Props = {
  label?: string;
  name: string;
  desativar?: boolean;
  requirido?: boolean;
  subelementosId?: string;
  control?: Control<FieldValues> | undefined;
};

export const TiposSelect: React.FC<Props> = ({
  label,
  name,
  control,
  desativar = false,
  requirido = true,
  subelementosId,
}) => {
  const selecionarSubElemento = useTiposStore((state) => state.adicionarTipos);

  const { isLoading, data } = useQuery(
    ["tipos-usuario", subelementosId!],
    () =>
      buscarTodosTipos({
        subelementosId: subelementosId!,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const tipos = data?.data[1];
  const tiposOptions = converterElementoParaOptions(tipos) || [];

  return (
    <Selects.ContainerInput>
      <strong>{label}</strong>

      <Controller
        name={name}
        render={({ field: { onChange } }) => (
          <Select
            styles={estiloConstumizado}
            placeholder={`Selecione ${label}`}
            isSearchable={false}
            isLoading={isLoading}
            options={tiposOptions}
            onChange={(valor: any) => {
              selecionarSubElemento(valor);
              onChange(valor.value);
            }}
          />
        )}
        control={control}
        defaultValue={""}
        rules={{ required: requirido }}
      />
    </Selects.ContainerInput>
  );
};
