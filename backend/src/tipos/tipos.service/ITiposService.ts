import { TiposDto } from "../tipos.dto/tipos.dto";

export interface ITiposService {
    criar(data: TiposDto);
    atualizarUmPorId(id: string, dadosNovos: TiposDto);
    deletarUmPorId(id: number);
}