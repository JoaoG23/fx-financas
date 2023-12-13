import { UsuarioDto } from "../usuario.dto/Usuario.dto";

export interface UsuariosRepositoryInterface {
  save(usuario: UsuarioDto);
  updateById(id: string, usuario: UsuarioDto);
  deleteById(id: string);
  findById(id: string);
  findAll();
  findByUsername(username: string);
  findByEmail(email: string);
}
