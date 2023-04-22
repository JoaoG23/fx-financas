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
            type="text"
            decimalScale={2}
            placeholder={placeholder}
            fixedDecimalScale
            disabled={desativar}
            decimalSeparator=","
            onChange={onChange}
          />
        </Input.ContainerInput>
      )}
      rules={{ required: requirido }}
    />
  );
};
