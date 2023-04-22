import { PrismaClient } from "@prisma/client";
import autenticacao from "../../utils/Autenticacao";
import criptografia from "../../utils/Criptografia";
import { AutenticacaoUsuarioDto } from "../AutenticacaoUsuarioDto";
import { FluxoCaixaRepository } from "../../fluxocaixa/fluxocaixa.repository/fluxocaixa.repository";

export class AuthenticacaoService {
  public prisma: PrismaClient;
  public fluxocaixaRepository: FluxoCaixaRepository;
  constructor() {
    this.prisma = new PrismaClient();
    this.fluxocaixaRepository = new FluxoCaixaRepository();
  }

  async verificarExisteEmail(email: string) {
    const usuario = await this.prisma.usuarios.findFirst({
      where: { email },
    });
    return usuario;
  }

  async verificarExisteUsername(username: string) {
    const usuario = await this.prisma.usuarios.findFirst({
      where: { username },
    });
    return usuario;
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
      msg: "",
      token: null,
    };

    const tokenRecebido = await autenticacao.gerarTokenSessao(logado);

    (logado.msg = "Logado com sucesso"), (logado.token = tokenRecebido);

    return logado;
  }

  async registar(dadosLogin: AutenticacaoUsuarioDto) {
    const { email, username, senha } = dadosLogin;

    const existeEmail = await this.verificarExisteEmail(email);
    const existeUsername = await this.verificarExisteUsername(username);
    if (existeEmail) {
      throw new Error("Esse email já está cadastrado no sistema");
    }
    if (existeUsername) {
      throw new Error("Esse nome de usuário já existe");
    }

    dadosLogin.senha = criptografia.crptografarSenha(senha);

    // Criar primeiro Item fluxo caixa
    const novoUsuario = await this.prisma.usuarios.create({
      data: dadosLogin,
    });

    await this.fluxocaixaRepository.save({
      descricao: "Saldo inicial",
      valor: 100,
      elementosId: null,
      usuariosId: novoUsuario.id,
      locaisId: null,
      subelementosId: null,
      tiposId: null,
      subtiposId: null,
      data_insersao: new Date(),
      hora_insersao: new Date(),
      saldo: 0,
    });

    return novoUsuario;
  }

  async esqueciSenha(dadosLogin: AutenticacaoUsuarioDto) {
    const { email, senha } = dadosLogin;

    const existeEmail = await this.verificarExisteEmail(email);

    if (!existeEmail) {
      throw new Error("Esse email não esta cadastrado");
    }

    const hashSenha = criptografia.crptografarSenha(senha);

    await this.prisma.usuarios.update({
      where: { id: existeEmail?.id },
      data: { senha: hashSenha },
    });

    return "Operacão realizada com sucesso! Tente logar novamente com senha nova!";
  }
}
