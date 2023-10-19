import { FieldValues, UseFormRegister } from "react-hook-form";
import React from "react";

import * as Checkbox from "./styles";

type Props = {
  name: string;
  register: UseFormRegister<FieldValues> | any;
  valorPadrao?: string | boolean;
  descricao?: string;
  desativar?: boolean;
  requirido?: boolean;
};

export const CheckBoxRadio: React.FC<Props> = ({
  valorPadrao = true,
  name,
  descricao,
  register,
  desativar = false,
  requirido = true,
}) => {
  return (
    <Checkbox.Container>
      <Checkbox.Radio
        type="radio"
        readOnly={desativar}
        defaultValue={valorPadrao}
        {...register(name, { required: requirido })}
      />
    </Checkbox.Container>
  );
};
