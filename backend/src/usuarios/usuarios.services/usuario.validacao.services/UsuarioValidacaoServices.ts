import { UsuarioBuscasServices } from "../usuario.buscas.services/UsuarioBuscasServices";

export class UsuarioValidacaoServices extends UsuarioBuscasServices {
  async validarCamposExistem(
    email: string,
    nomelogin: string
  ) {
    const existeEmail = await this.buscarUmPeloEmail(email);
    const existeLogin = await this.buscarUmNomeLogin(nomelogin);

    if (existeEmail) {
      throw new Error('Esse email Já existe')
    }
    if (existeLogin) {
      throw new Error('Esse nome de login Já existe')
    }
  }
}
