import Joi from "joi";
import { TipoDespesaDto } from "./tiposDespesas.dto";

export const validarSeCamposCorretos = (tipoDespesaDto:TipoDespesaDto) => {
  const schema = Joi.object({
    id: Joi.string(),
    descricao: Joi.string().required().max(50),
  });

  return schema.validate(tipoDespesaDto);
};
