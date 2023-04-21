import React from "react";
import * as Input from "./styles";

import { FieldValues, UseFormRegister } from "react-hook-form";


type Props = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues> | any;
  tamanhoMaximo?: number;
  valorPadrao?: string;
  desativar?: boolean;
  requirido?: boolean;
};

export const TextAreaDefault: React.FC<Props> = ({
  valorPadrao,
  label,
  name,
  type,
  placeholder,
  register,
  tamanhoMaximo,
  desativar = false,
  requirido = true,
}) => {
  return (
    <Input.ContainerInput>
      <strong>{label}</strong>
      <Input.Campo
        readOnly={desativar}
        placeholder={placeholder}
        maxLength={tamanhoMaximo}
        defaultValue={valorPadrao}
        {...register(name, { required: requirido })}
        type={type}
      ></Input.Campo>
    </Input.ContainerInput>
  );
};
