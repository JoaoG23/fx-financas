import { LocaisDto } from "../locais.dto/locais.dto";

export interface LocaisRepositoryInteface {
  save(data: LocaisDto);
  updateById(id: string, newData: LocaisDto);
  deleteById(id: string);
  deleteAllByUsuariosId(usuariosId: string);
  findById(id: string);
  findAllByUsuariosId(usuariosId: string);
  countAllByUsuariosId(usuariosId: string);
  findAllByPageAndUsuariosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  );
}
