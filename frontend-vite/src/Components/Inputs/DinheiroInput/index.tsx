import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import * as Input from "./styles";

type Props = {
  label?: string;
  name: string;
  register: UseFormRegister<FieldValues> | any;
  valorPadrao?: string;
  placeholder?: string;
  desativar?: boolean;
  requirido?: boolean;
  control?: Control<FieldValues>;
};

export const DinheiroInput: React.FC<Props> = ({
  name,
  control,
  label,
  placeholder,
  desativar = false,
  requirido = true,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input.ContainerInput>
          <strong>{label}</strong>
          <Input.Campo
            type="number"
            step="0.01" 
            placeholder={placeholder}
            disabled={desativar}
            onChange={onChange}
          />
        </Input.ContainerInput>
      )}
      rules={{ required: requirido }}
    />
  );
};
