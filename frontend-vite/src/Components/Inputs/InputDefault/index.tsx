import React from "react";
import { ContainerInput, NoBorders } from "../styles";

import { FieldValues, UseFormRegister } from "react-hook-form";
import { LabelDefault } from "../../FontColor/LabelDefault";

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

export const InputDefault: React.FC<Props> = ({
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
    <ContainerInput>
      <LabelDefault>{label}</LabelDefault>
      <NoBorders
        readOnly={desativar}
        placeholder={placeholder}
        maxLength={tamanhoMaximo}
        defaultValue={valorPadrao}
        {...register(name, { required: requirido })}
        type={type}
      ></NoBorders>
    </ContainerInput>
  );
};
