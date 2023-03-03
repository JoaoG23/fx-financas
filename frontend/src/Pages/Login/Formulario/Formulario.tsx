import React from "react";
import { useForm } from "react-hook-form";
import { InputDefault } from "../../../Components/Inputs/InputDefault";
import { Form } from "./styles";

export const Formulario: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Form>
      <InputDefault
        name={"teste"}
        register={register}
        placeholder={"Testando"}
      ></InputDefault>
      <InputDefault
        name={"teste"}
        register={register}
        placeholder={"Testando"}
      ></InputDefault>
      <InputDefault
        name={"teste"}
        register={register}
        placeholder={"Testando"}
      ></InputDefault>
    </Form>
  );
};
