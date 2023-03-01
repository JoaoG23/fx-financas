import { SubelementoDto } from "../subelementos.dto/subelementos.dto";

export interface ISubelementosService {
    criar(data: SubelementoDto);
    atualizarUmPorId(id: string, dadosNovos: SubelementoDto);
    deletarUmPorId(id: number);
}