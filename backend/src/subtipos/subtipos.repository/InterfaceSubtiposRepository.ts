import { SubtiposDto } from "../subtipos.dto/subtipos.dto";

export interface SubtiposRepositoryInterface {
  save(data: SubtiposDto);
  updateById(id: string, newData: SubtiposDto);
  deleteById(id: string);
  deleteAllByUsuariosId(usuariosId: string);
  findById(id: string);
  findAllByUsuariosId(usuariosId: string);

  findAllByTiposId(tiposId: string);
  countAllByTiposId(tiposId: string);

  findAllByPageAndTiposId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    tiposId: string
  )

}
