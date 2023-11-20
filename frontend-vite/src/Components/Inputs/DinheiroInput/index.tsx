import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import * as Input from "./styles";

type Props = {
  label?: string;
  name: string;
  register: UseFormRegister<FieldValues> | any;
  valorPadrao?: string;
  setValue: UseFormSetValue<FieldValues>;
  desativar?: boolean;
  requirido?: boolean;
  placeholder?: string;
  control: Control<FieldValues>;
};

export const DinheiroInput: React.FC<Props> = ({
  name,
  control,
  label,
  desativar = false,
  requirido = true,
  placeholder,
  setValue,
}) => {
  const currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };

  const handleChange = (event?: any, value?: any, maskedValue?: any) => {
    event.preventDefault();
    setValue(name, value);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => (
        <Input.ContainerInput>
          <strong>{label}</strong>
          <Input.Campo
            config={currencyConfig}
            currency="BRL"
            onChange={handleChange}
            value={value}
            disabled={desativar!}
            placeholder={placeholder}
          />
        </Input.ContainerInput>
      )}
      rules={{ required: requirido }}
    />
  );
};
