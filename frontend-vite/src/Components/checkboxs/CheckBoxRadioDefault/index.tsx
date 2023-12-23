import { FieldValues, UseFormRegister } from "react-hook-form";
import React from "react";

import * as Checkbox from "../styles";

type Props = {
  name: string;
  register: UseFormRegister<FieldValues> | any;
  defaultValue?: string | boolean;
  disabled?: boolean;
  required?: boolean;
};

export const CheckBoxRadioDefault: React.FC<Props> = ({
  defaultValue = true,
  name,
  register,
  disabled = false,
  required = true,
}) => {
  return (
    <Checkbox.Container>
      <Checkbox.Radio
        type="radio"
        readOnly={disabled}
        defaultValue={defaultValue}
        {...register(name, { required: required })}
      />
    </Checkbox.Container>
  );
};
