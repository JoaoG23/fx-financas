import { ConflictError } from "rest-api-errors";
import { PrismaClient } from "@prisma/client";

import autenticacao from "../../utils/Autenticacao";
import criptografia from "../../utils/Criptografia";

import { AutenticacaoUsuarioDto } from "../AutenticacaoUsuarioDto";
import { FluxoCaixaRepository } from "../../fluxocaixa/fluxocaixa.repository/fluxocaixa.repository";
import { UsuariosRepository } from "../../usuarios/usuarios.repository/usuarios.repository";

import { buscaDatahoraAtual } from "../../utils/datetime/buscarDatahoraAtual/buscaDatahoraAtual";
import { UsuariosRepositoryInterface } from "../../usuarios/usuarios.repository/UsuariosRepositoryInterface";
import { UsuarioDto } from "../../usuarios/usuario.dto/Usuario.dto";
export class AuthenticacaoService {
  private fluxocaixaRepository: FluxoCaixaRepository;
  private usuariosRepository: UsuariosRepositoryInterface;

  constructor(
    fluxocaixaRepository: FluxoCaixaRepository,
    usuariosRepository: UsuariosRepositoryInterface
  ) {
    this.usuariosRepository = usuariosRepository;
    this.fluxocaixaRepository = fluxocaixaRepository;
  }

  async verificarExisteEmail(email: string) {
    return await this.usuariosRepository.findByEmail(email);
  }

  async verificarExisteUsername(username: string) {
    return await this.usuariosRepository.findByUsername(username);
  }

  async validarExisteEmail(email: string) {
    const existeEmail = await this.usuariosRepository.findByEmail(email);

    if (existeEmail) {
      throw new ConflictError("", "Esse email já está cadastrado no sistema");
    }
  }

  async validarExisteUsername(username: string) {
    const existeUsername = await this.usuariosRepository.findByUsername(
      username
    );

    if (existeUsername) {
      throw new ConflictError("", "Esse nome de usuário já existe");
    }
  }

  async logar(dadosLogin: any) {
    const { username, senha } = dadosLogin;
    const existeUsername = await this.verificarExisteUsername(username);
    if (!existeUsername) {
      throw new Error("Usuário ou senha estão incorretos");
    }

    const validarLogin = criptografia.verificarSenhasCombinam(
      senha,
      existeUsername.senha
    );

    if (!validarLogin) {
      throw new Error("Usuário ou senha estão incorretos");
    }

    const logado = {
      id: existeUsername.id,
      nome: existeUsername.nome,
    };

    const tokenRecebido = await autenticacao.gerarTokenSessao(logado);

    const usuarioLogado = {
      ...logado,
      msg: "Logado com sucesso",
      token: tokenRecebido,
    };

    return usuarioLogado;
  }

  async registar(usuario: AutenticacaoUsuarioDto) {
    const { email, username, senha } = usuario;

    await this.validarExisteEmail(email);
    await this.validarExisteUsername(username);

    usuario.senha = criptografia.crptografarSenha(senha);

    const novoUsuario = await this.usuariosRepository.save(usuario);

    await this.fluxocaixaRepository.save({
      descricao: "Saldo inicial",
      valor: 0,
      elementosId: null,
      usuariosId: novoUsuario.id,
      locaisId: null,
      subelementosId: null,
      tiposId: null,
      subtiposId: null,
      data_insersao: buscaDatahoraAtual(),
      saldo: 0,
    });

    return novoUsuario;
  }

  async esqueciSenha(usuario: AutenticacaoUsuarioDto) {
    const { email, senha } = usuario;

    const existeEmail = await this.verificarExisteEmail(email);

    if (!existeEmail) {
      throw new Error("Esse email não esta cadastrado");
    }

    const hashSenha = criptografia.crptografarSenha(senha);
    const idUsuario = existeEmail?.id;
    await this.usuariosRepository.updateById(idUsuario, {
      senha: hashSenha,
    } as UsuarioDto);

    return "Operacão realizada com sucesso! Tente logar novamente com senha nova!";
  }
}

const fluxocaixaRepository = new FluxoCaixaRepository();
const usuariosRepository = new UsuariosRepository();

export default new AuthenticacaoService(
  fluxocaixaRepository,
  usuariosRepository
);
