import { TiposDto } from "../tipos.dto/tipos.dto";

export interface TiposRepositoryInterface {
  save(data: TiposDto);
  updateById(id: string, newData: TiposDto);
  deleteById(id: string);
  findById(id: string);
  findAllByUsuariosId(usuariosId: string);

  findAllBySubelementosId(subelementosId: string);
  countAllBySubelementosId(subelementosId: string);

  findAllByPageAndSubelementosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    subelementosId: string
  )

}
