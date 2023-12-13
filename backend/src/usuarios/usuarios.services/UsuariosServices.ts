import { ElementosRepository } from "../../elementos/elementos.repository/elementos.repository";
import { FluxoCaixaRepository } from "../../fluxocaixa/fluxocaixa.repository/fluxocaixa.repository";
import { ProgramacaoFluxocaixaRepository } from "../../programacaofluxocaixa/programacaofluxocaixa.repository/Programacaofluxocaixa.repository";
import { ProgramacaoFluxocaixaRepositoryInterface } from "../../programacaofluxocaixa/programacaofluxocaixa.repository/Programacaofluxocaixa.repository.Interface";

import { SubelementosRepositoryInterface } from "../../subelementos/subelementos.repository/InterfaceSubelementosRepository";
import { SubelementosRepository } from "../../subelementos/subelementos.repository/subelementos.repository";
import { SubtiposRepositoryInterface } from "../../subtipos/subtipos.repository/InterfaceSubtiposRepository";
import { SubtiposRepository } from "../../subtipos/subtipos.repository/subtipos.repository";

import { TiposRepositoryInterface } from "../../tipos/tipos.repository/InterfaceTiposRepository";
import { TiposRepository } from "../../tipos/tipos.repository/tipos.repository";

import { UsuarioDto } from "../usuario.dto/Usuario.dto";

import { UsuariosRepositoryInterface } from "../usuarios.repository/UsuariosRepositoryInterface";
import { UsuariosRepository } from "../usuarios.repository/usuarios.repository";

import { UsuarioValidacaoServices } from "./usuario.validacao.services/UsuarioValidacaoServices";

class UsuariosServices {
  constructor(
    private usuariosRepository: UsuariosRepositoryInterface,
    private elementosRepository: ElementosRepository,
    private subelementosRepository: SubelementosRepositoryInterface,
    private tiposRepository: TiposRepositoryInterface,
    private subtiposRepository: SubtiposRepositoryInterface,
    private fluxocaixaRepository: FluxoCaixaRepository,
    private programacaofluxocaixaRepository: ProgramacaoFluxocaixaRepositoryInterface,

    private validacoesServices: UsuarioValidacaoServices
  ) {}

  async listarTodos() {
    return await this.usuariosRepository.findAll();
  }
  async listaPorId(id: string) {
    return await this.usuariosRepository.findById(id);
  }

  async atualizarPorId(id: string, usuario: UsuarioDto) {
    await this.validacoesServices.verificarSeNaoExisteId(id);
    return await this.usuariosRepository.updateById(id, usuario);
  }
  async criar(usuario: UsuarioDto) {
    const { email, username } = usuario;

    await this.validacoesServices.verificarSeExisteEmail(email);
    await this.validacoesServices.verificarSeExisteUsername(username);
    return await this.usuariosRepository.save(usuario);
  }

  async deletarPorId(id: string) {
    await this.validacoesServices.verificarSeNaoExisteId(id);

    await this.subtiposRepository.deleteAllByUsuariosId(id);
    await this.tiposRepository.deleteAllByUsuariosId(id);
    await this.subelementosRepository.deleteAllByUsuariosId(id);
    await this.elementosRepository.deleteAllByUsuariosId(id);
    await this.fluxocaixaRepository.deleteAllByUsuariosId(id);
    await this.programacaofluxocaixaRepository.deleteAllByUsuariosId(id);

    return await this.usuariosRepository.deleteById(id);
  }
}

const usuariosRepository = new UsuariosRepository();
const elementosRepository = new ElementosRepository();
const subelementosRepository = new SubelementosRepository();
const tiposRepository = new TiposRepository();
const subtiposRepository = new SubtiposRepository();
const fluxocaixaRepository = new FluxoCaixaRepository();
const programacaofluxocaixaRepository = new ProgramacaoFluxocaixaRepository();

const usuariosValidacaoService = new UsuarioValidacaoServices(
  usuariosRepository
);

export default new UsuariosServices(
  usuariosRepository,
  elementosRepository,
  subelementosRepository,
  tiposRepository,
  subtiposRepository,
  fluxocaixaRepository,
  programacaofluxocaixaRepository,
  usuariosValidacaoService
);
