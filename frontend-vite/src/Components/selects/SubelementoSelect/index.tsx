import { Control, Controller, FieldValues } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosSubelementos } from "./api";

import * as Selects from "./styles";
import Select from "react-select";


import { useSubelementoStore } from "../../../stores/useSubelementoStore/useSubelementoStore";
import { estiloConstumizado } from "../configs/configsStyles";
import { converterElementoParaOptions } from "../../../utils/conversao/converterElementoParaOptions/converterElementoParaOptions";

type Props = {
  label?: string;
  name: string;
  desativar?: boolean;
  requirido?: boolean;
  elementosId?: string;
  control?: Control<FieldValues> | undefined;
};

export const SublementoSelect: React.FC<Props> = ({
  label,
  name,
  control,
  desativar = false,
  requirido = true,
  elementosId,
}) => {
  const selecionarSubElemento = useSubelementoStore(
    (state) => state.adicionarSubelemento
  );

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



  const subelementos = data?.data[1];
  const subelementosOptions = converterElementoParaOptions(subelementos) || [];

  return (
    <Selects.ContainerInput>
      <strong>{label}</strong>

      <Controller
        name={name}
        render={({ field: { onChange } }) => (
          <Select
            styles={estiloConstumizado}
            placeholder={`Selecione ${label}`}
            isSearchable={true}
            isLoading={isLoading}
            options={subelementosOptions}
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
