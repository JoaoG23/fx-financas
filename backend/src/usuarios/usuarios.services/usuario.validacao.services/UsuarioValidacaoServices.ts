import { UsuariosRepositoryInterface } from "../../usuarios.repository/UsuariosRepositoryInterface";
import { UsuariosValidacoesServiceInterface } from "./UsuariosValidacoesServiceInterface";

export class UsuarioValidacaoServices
  implements UsuariosValidacoesServiceInterface
{
  constructor(private usuariosRepository: UsuariosRepositoryInterface) {}
  async verificarSeNaoExisteId(id: string) {
    const existeId = await this.usuariosRepository.findById(id);
    if (!existeId) {
      throw new Error("Esse id não existe");
    }
  }

  async verificarSeExisteEmail(email: string) {
    const existeEmail = await this.usuariosRepository.findByEmail(email);
    if (existeEmail) {
      throw new Error("Esse email Já existe");
    }
  }

  async verificarSeExisteUsername(username: string) {
    const existeLogin = await this.usuariosRepository.findByUsername(username);

    if (existeLogin) {
      throw new Error("Esse nome de login Já existe");
    }
  }
  async verificarSeExisteTelefone(telefone: string) {
    const existeTelefone = await this.usuariosRepository.findByTelefone(telefone);

    if (existeTelefone) {
      throw new Error("Esse telefone Já existe");
    }
  }
}
