import { useState } from "react";
import { useQuery } from "react-query";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { buscarTodosElementos } from "./api";
import { toast } from "react-toastify";
import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";

import  * as Selects  from "./styles";

import Select from "react-select";

import { Controller } from "react-hook-form";



import { converterElementoParaOptions } from "./utils/converterElementoParaOptions/converterElementoParaOptions";
import { useElementoStore } from "../../../stores/useElementoStore/useElementoStore";
import { adicionarElemento } from "../../../Pages/categorias/elementos/AdicionarElementos/api";

type Props = {
  label?: string;
  name: string;
  control?: any;
  register: any;
  desativar?: boolean;
  requirido?: boolean;
};

export const ElementoSelect: React.FC<Props> = ({
  label,
  name,
  control,
  register,
  desativar = false,
  requirido = true,
}) => {
  const { idConvertido } = buscaDadoUsuarioNaSessao();

  const selecionarElemento = useElementoStore(state => state.adicionarElemento)

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
              // console.log(valor);
              selecionarElemento(valor)
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
