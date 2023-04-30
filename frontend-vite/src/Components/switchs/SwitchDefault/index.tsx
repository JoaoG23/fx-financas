import React from "react";
import { Container, SwitchContainer, SwitchInput, SwitchSlider } from "./styles";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegister<FieldValues> | any;
  valorPadrao?: string;
  desativar?: boolean;
  requirido?: boolean;
  descricaoLigado?: string;
  descricaoDesligado?: string;
};

export const SwitchDefault: React.FC<Props> = ({
  valorPadrao,
  name,
  register,
  desativar = false,
  requirido = true,
  descricaoLigado,
  descricaoDesligado,
}) => {
  return (
    <Container>
      <p>{descricaoDesligado}</p>
      <SwitchContainer >
        <SwitchInput
        role="switch-default"
          type="checkbox"
          readOnly={desativar}
          defaultValue={valorPadrao}
          {...register(name, { required: requirido })}
        />
        <SwitchSlider />
      </SwitchContainer>
      <p>{descricaoLigado}</p>
    </Container>
  );
};
