import { Control, Controller, FieldValues } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosSubTipos } from "./api";

import * as Selects from "./styles";
import Select from "react-select";

import { estiloConstumizado } from "../configs/configsStyles";
import { converterElementoParaOptions } from "../../../utils/conversao/converterElementoParaOptions/converterElementoParaOptions";
import { usesubtipoStore } from "../../../stores/useSubtipoStore/useSubtiposStore";


type Props = {
  label?: string;
  name: string;
  desativar?: boolean;
  requirido?: boolean;
  tiposId?: string;
  control?: Control<FieldValues> | undefined;
};

export const SubtiposSelect: React.FC<Props> = ({
  label,
  name,
  control,
  desativar = false,
  requirido = true,
  tiposId,
}) => {
  const selecionarSubElemento = usesubtipoStore((state) => state.adicionarSubtipo);

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

  const Subtipos = data?.data[1];
  const SubtiposOptions = converterElementoParaOptions(Subtipos);

  return (
    <Selects.ContainerInput>
      <strong>{label}</strong>

      <Controller
        name={name}
        render={({ field: { onChange } }) => (
          <Select
            isDisabled={desativar}
            styles={estiloConstumizado}
            placeholder={`Selecione ${label}`}
            isSearchable={false}
            isLoading={isLoading}
            options={SubtiposOptions}
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
