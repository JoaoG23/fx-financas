import { SubelementoDto } from "../subelementos.dto/subelementos.dto";

export interface SubelementosRepositoryInterface {
  save(data: SubelementoDto);
  updateById(id: string, newData: SubelementoDto);
  deleteById(id: string);
  findById(id: string);
  findAllByUsuariosId(usuariosId: string);

  findAllByElementosId(elementosId: string);
  countAllByElementosId(elementosId: string);

  findAllByPageAndElementosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    elementosId: string
  )

}
