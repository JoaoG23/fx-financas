import Joi from "joi";
import { LocaisDto } from "./locais.dto";

export const validarSeCamposCorretos = (localDto:LocaisDto) => {
  const schema = Joi.object({
    id: Joi.string(),
    descricao: Joi.string().required().max(50),
    usuariosId: Joi.string().required(),
  });

  return schema.validate(localDto);
};
