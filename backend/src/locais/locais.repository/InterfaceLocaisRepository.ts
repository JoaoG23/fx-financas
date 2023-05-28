import { LocaisDto } from "../locais.dto/locais.dto";

export interface LocaisRepositoryInteface {
    save(data: LocaisDto);
    update(id: string, newData: LocaisDto);
    delete(id: string);
    findById(id: string);
    findAll();
    countAllByUsuariosId(usuariosId:string);
    findAllByPageAndUsuariosId(
      numeroPagina: number,
      quantidadeItemPagina: number,
      usuariosId: string
    );
  }
  