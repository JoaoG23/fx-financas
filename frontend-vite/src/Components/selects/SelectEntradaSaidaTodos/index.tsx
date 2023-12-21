import { Control, FieldValues, UseFormRegister } from "react-hook-form";

import * as Selects from "./styles";

type Props<T = unknown> = {
  label?: string;
  name: string;
  control?: Control<FieldValues> | undefined;
  register: UseFormRegister<any> | Function;
  desativar?: boolean;
  requirido?: boolean;
  opcoes?: T[];
};

export const SelectEntradaSaidaTodos: React.FC<Props<any>> = ({
  label,
  name,
  register,
  desativar = false,
  requirido = true,
}) => {
  return (
    <Selects.ContainerInput>
      <strong>{label}</strong>
      <Selects.Container
        aria-label="tipos"
        {...register(name, { required: requirido })}
        disabled={desativar}
      >
        <option value={"todos"} selected>
          Todos
        </option>
        <option value={"saida"}>Saída</option>
        <option value={"entrada"}>Entrada</option>
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
