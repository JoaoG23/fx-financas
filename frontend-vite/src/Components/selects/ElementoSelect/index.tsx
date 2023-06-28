import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosElementos } from "./api";

import * as Selects from "./styles";

import { useElementoStore } from "../../../stores/useElementoStore/useElementoStore";

import { Elemento } from "../../../types/Elemento";

import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

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
  const { idUsuario } = buscaDadoUsuarioNaSessao();

  const selecionarElemento = useElementoStore(
    (state) => state.adicionarElemento
  );

  const { isLoading, data } = useQuery(
    ["elemento-usuario", idUsuario],
    () =>
      buscarTodosElementos({
        usuariosId: idUsuario!,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const elementos = data?.data || opcoes;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}
      <strong>{label}</strong>
      <Selects.Container
        aria-label="elementos"
        {...register(name, { required: requirido })}
        disabled={desativar}
        onChange={(e: any) => {
          const idElemento = e.target.value;

          selecionarElemento(idElemento);
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
