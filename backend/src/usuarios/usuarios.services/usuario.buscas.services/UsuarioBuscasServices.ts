import { UsuariosRepositoryInterface } from "../../usuarios.repository/UsuariosRepositoryInterface";

import { UsuarioBuscasServicesInterface } from "./UsuarioBuscasServicesInterface";

export class UsuarioBuscasServices implements UsuarioBuscasServicesInterface {
  constructor(private usuariosRepository: UsuariosRepositoryInterface) {}

  async buscarUmPorIdusuario(id: string) {
    return await this.usuariosRepository.findById(id);
  }

  async buscarUmPeloEmail(email: string) {
    return await this.usuariosRepository.findByEmail(email);
  }

  async buscarUmUsername(username: string) {
    return await this.usuariosRepository.findByUsername(username);
  }
}
