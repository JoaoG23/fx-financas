import { SubtiposDto } from "../subtipos.dto/subtipos.dto";

export interface ISubTipoServices {
  criar(data: SubtiposDto);
  atualizarUmPorId(id: string, dadosNovos: SubtiposDto);
  deletarUmPorId(id: number);
}
