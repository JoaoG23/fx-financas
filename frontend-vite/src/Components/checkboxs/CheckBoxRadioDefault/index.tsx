import { FieldValues, UseFormRegister } from "react-hook-form";
import React from "react";

import * as Checkbox from "../styles";

type Props = {
  name: string;
  register: UseFormRegister<FieldValues> | any;
  defaultValue?: string | boolean;
  disabled?: boolean;
  required?: boolean;
  checked?: boolean;
};

export const CheckBoxRadioDefault: React.FC<Props> = ({
  defaultValue = true,
  name,
  register,
  disabled = false,
  required = true,
  checked,
}) => {
  return (
    <Checkbox.Container>
      <Checkbox.Radio
        type="radio"
        readOnly={disabled}
        checked={checked}
        defaultValue={defaultValue}
        {...register(name, { required: required })}
      />
    </Checkbox.Container>
  );
};
