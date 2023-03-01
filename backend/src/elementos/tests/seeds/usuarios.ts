import { UsuarioDTO } from "../../elementos.dto/Elementos.dto";

export const usuarioCriado: UsuarioDTO = {
  id_usuario: "admin",
  login_nome: "admin",
  email: "admin@admin.com",
  nome: "Adminstrador",
  senha: "admin",
  status: "1",
  id_perfil: "admin",
};

export const usuarioEditado: Omit<UsuarioDTO, "id_usuario"> = {
  login_nome: "tester",
  email: "tester@tester.com",
  nome: "Analistar de Testes",
  senha: "tester",
  status: "0",
  id_perfil: "tester",
};
