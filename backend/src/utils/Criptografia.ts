import * as bcrypt from 'bcryptjs';
class Criptografia {
    verificarSenhasCombinam(senhaEntrada: string, hashBancoDados: string) {
        return bcrypt.compareSync(senhaEntrada ,hashBancoDados );
    }
    crptografarSenha(senhaEntrada: string) {
        return bcrypt.hashSync(senhaEntrada);
    }
}

export default new Criptografia();