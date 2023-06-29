import React from "react";
import { ContainerInput, NoBorders } from "./styles";

import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues> | any;
  tamanhoMaximo?: number;
  valorPadrao?: string;
  desativar?: boolean;
  requirido?: boolean;
};

export const DecimalInput: React.FC<Props> = ({
  valorPadrao,
  label,
  name,
  placeholder,
  register,
  tamanhoMaximo,
  desativar = false,
  requirido = true,
}) => {
  return (
    <ContainerInput>
      <strong>{label}</strong>
      <NoBorders
        type="number"
        step="0.01"
        readOnly={desativar}
        placeholder={placeholder}
        maxLength={tamanhoMaximo}
        defaultValue={valorPadrao}
        {...register(name, { required: requirido })}
      ></NoBorders>
    </ContainerInput>
  );
};
