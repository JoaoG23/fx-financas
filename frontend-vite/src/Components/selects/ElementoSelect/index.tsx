import { useQuery } from "react-query";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { buscarTodosElementos } from "./api";
import { toast } from "react-toastify";

import * as Selects from "./styles";

import Select from "react-select";

import { Controller } from "react-hook-form";

import { useElementoStore } from "../../../stores/useElementoStore/useElementoStore";
import { estiloConstumizado } from "../configs/configsStyles";
import { converterElementoParaOptions } from "../../../utils/conversao/converterElementoParaOptions/converterElementoParaOptions";

type Props = {
  label?: string;
  name: string;
  control?: any;
  desativar?: boolean;
  requirido?: boolean;
};

export const ElementoSelect: React.FC<Props> = ({
  label,
  name,
  control,
  desativar = false,
  requirido = true,
}) => {
  const { idConvertido } = buscaDadoUsuarioNaSessao();

  const selecionarElemento = useElementoStore(
    (state) => state.adicionarElemento
  );

  const { isLoading, data } = useQuery(
    ["elemento-usuario", idConvertido],
    () =>
      buscarTodosElementos({
        usuariosId: idConvertido!,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const elementos = data?.data[1];
  const elementosOptions = converterElementoParaOptions(elementos) || [];

  return (
    <Selects.ContainerInput>
      <strong>{label}</strong>

      <Controller
        name={name}
        render={({ field: { onChange } }) => (
          <Select
            isLoading={isLoading}
            styles={estiloConstumizado}
            placeholder={`Selecione ${label}`}
            options={elementosOptions}
            onChange={(valor: any) => {
              selecionarElemento(valor);
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
