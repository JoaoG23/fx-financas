import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { buscarTodosElementos } from "./api";
import { useQuery } from "react-query";

import { toast } from "react-toastify";

import * as Selects from "./styles";

import { Control, FieldValues, UseFormRegister } from "react-hook-form";

import { useElementoStore } from "../../../stores/useElementoStore/useElementoStore";
import { Elemento } from "../../../types/Elemento";
import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";

type Props<T = unknown> = {
  label?: string;
  name: string;
  control?: Control<FieldValues> | undefined;
  register: UseFormRegister<any> | Function;
  desativar?: boolean;
  requirido?: boolean;
  opcoes?: T[];
};

export const ElementoSelect: React.FC<Props<Elemento>> = ({
  label,
  name,
  register,
  desativar = false,
  requirido = true,
  opcoes = [],
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

  const elementos = data?.data[1] || opcoes;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}
      <strong>{label}</strong>
      <Selects.Container
        aria-label="elementos"
        {...register(name, { required: requirido })}
        disabled={desativar}
        onChange={(e: any) => {
          const descricao = e.nativeEvent.target[e.target.selectedIndex].text;

          const elementoSelecionado = {
            label: descricao,
            value: e.target.value,
          };

          selecionarElemento(elementoSelecionado);
        }}
      >
        <option value="">Selecione um elemento</option>
        {elementos?.map((option: Elemento) => (
          <option key={option?.id} value={option?.id}>
            {option?.descricao}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
