import { UsuarioDto } from "../usuario.dto/Usuario.dto";
import { UsuarioAtualizarDto } from "../usuario.dto/UsuarioAtualizar.dto";

export interface UsuariosRepositoryInterface {
  save(usuario: UsuarioDto);

  updateById(id: string, usuario: UsuarioAtualizarDto);

  deleteById(id: string);

  findByTelefone(telefone: string);
  findById(id: string);
  findAll();
  findByUsername(username: string);
  findByEmail(email: string);
}
