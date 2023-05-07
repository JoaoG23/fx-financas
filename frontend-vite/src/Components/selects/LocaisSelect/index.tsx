import { Control, Controller, FieldValues } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosLocais } from "./api";

import * as Selects from "./styles";
import Select from "react-select";

import { estiloConstumizado } from "../configs/configsStyles";
import { converterElementoParaOptions } from "../../../utils/conversao/converterElementoParaOptions/converterElementoParaOptions";

type Props = {
  label?: string;
  name: string;
  desativar?: boolean;
  requirido?: boolean;
  control?: Control<FieldValues> | undefined;
};

export const LocaisSelect: React.FC<Props> = ({
  label,
  name,
  control,
  desativar = false,
  requirido = true,
}) => {
  const { isLoading, data } = useQuery("todos-locais", buscarTodosLocais, {
    onError: (error: any) => {
      toast.error(`Houve um error: ${error.response.data}`);
    },
  });

  const locais = data?.data;
  const locaisOptions = converterElementoParaOptions(locais) || [];

  return (
    <Selects.ContainerInput>
      <strong>{label}</strong>

      <Controller
        name={name}
        render={({ field: { onChange, value } }) => (
          <Select
            styles={estiloConstumizado}
            placeholder={`Selecione ${label}`}
            isSearchable={true}
            isLoading={isLoading}
            options={locaisOptions}
            onChange={(valor: any) => {
              onChange(valor.value);
            }}
            value={value}
          />
        )}
        control={control}
        defaultValue={""}
        rules={{ required: requirido }}
      />
    </Selects.ContainerInput>
  );
};
