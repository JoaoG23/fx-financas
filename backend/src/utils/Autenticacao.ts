import jwt from "jsonwebtoken";

class Autenticacao {
    async gerarTokenSessao( algunsDadosUsuario: object) {
         const secret = process.env.TOKEN_SECRET;
         const tokenGenerated = await jwt.sign(algunsDadosUsuario, secret, {
             expiresIn:'2h',
         });
         return tokenGenerated;
     }

     
 }
export default new Autenticacao();