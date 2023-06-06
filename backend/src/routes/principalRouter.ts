import { Router } from "express";

import auth from "./Auth";
import usuariosRouters from "../usuarios/usuario.routers/usuarios.routers";
import elementosRouters from "../elementos/elementos.routers/elementos.routers";


import fluxocaixaRouters from "../fluxocaixa/fluxocaixa.routers/fluxocaixa.routers";


import autenticacaoRouters from "../autheticacao/autenticacao.routers/autenticacao.routers";
import subelementoRouters from "../subelementos/subelementos.routers/subelementos.routers";
import tipoRouters from "../tipos/tipos.routers/tipos.routers";
import subtiposRouters from "../subtipos/subtipos.routers/subtipos.routers";
import locaisRouters from "../locais/locais.routers/locais.routers";
import tipoDespesaRouters from "../tiposDespesas/tiposDespesas.routers/tiposDespesas.routers";
import estatisticaRouters from "../estatisticas/estatisticas.routers/estatisticas.routers";


const routers = Router();

routers.use("/usuarios", auth.comum, usuariosRouters);
routers.use("/elementos", auth.comum, elementosRouters);
routers.use("/subelementos", auth.comum, subelementoRouters);
routers.use("/tipos", auth.comum, tipoRouters);
routers.use("/subtipos", auth.comum, subtiposRouters);
routers.use("/locais", auth.comum, locaisRouters);
routers.use("/tipos_despesas", auth.comum, tipoDespesaRouters);
routers.use("/estatisticas", auth.comum, estatisticaRouters);


routers.use("/fluxocaixa", auth.comum, fluxocaixaRouters);
routers.use("/", autenticacaoRouters);

export default routers;
