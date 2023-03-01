import { ElementoDto } from "../elementos.dto/Elementos.dto";

export interface IElementosServices {
  criar(data: ElementoDto);
  atualizarUmPorId(id: string, dadosNovos: ElementoDto);
  deletarUmPorId(id: number);
}
