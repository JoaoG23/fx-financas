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
  desativar?: boolean;
  requirido?: boolean;
  placeholder?: string;
  control: Control<FieldValues>;
};

export const CelularInput: React.FC<Props> = ({
  name,
  control,
  label,
  desativar = false,
  requirido = true,
  placeholder,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input.ContainerInput>
          <strong>{label}</strong>
          <Input.Campo
            mask="(99) 99999-9999"
            onChange={onChange}
            value={value}
            disabled={desativar}
            placeholder={placeholder}
          />
        </Input.ContainerInput>
      )}
      rules={{ required: requirido }}
    />
  );
};
