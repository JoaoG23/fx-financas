import { useQuery } from "react-query";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { buscarTodosElementos } from "./api";
import { toast } from "react-toastify";
import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";

import * as Selects from "./styles";
import { useState } from "react";

type Props = {
  label?: string;
  name: string;
  register: any;
  desativar?: boolean;
  requirido?: boolean;
};

export const ElementoSelect: React.FC<Props> = ({
  label,
  name,
  register,
  desativar = false,
  requirido = true,
}) => {
  const { idConvertido } = buscaDadoUsuarioNaSessao();

  const [idElementoSelecionado, setIdElementoSelecionado] = useState("");

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

      <Selects.Container
        {...register(name, { required: requirido })}
        disabled={desativar}
      >
        <option value={""}> Selecione o primeiro elemento</option>
        {elementos?.map((option: any) => (
          <option key={option?.id} value={option?.id}>
            {option?.descricao}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
