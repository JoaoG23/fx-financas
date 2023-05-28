import { LocaisDto } from "../locais.dto/locais.dto";

export interface LocaisRepositoryInteface {
    save(data: LocaisDto);
    updateById(id: string, newData: LocaisDto);
    deleteById(id: string);
    findById(id: string);
    countAllByUsuariosId(usuariosId:string);
    findAllByPageAndUsuariosId(
      numeroPagina: number,
      quantidadeItemPagina: number,
      usuariosId: string
    );
  }
  