import { LocaisDto } from "../locais.dto/locais.dto";

export interface ILocaisRepository {
    save(data: LocaisDto);
    update(id: string, newData: LocaisDto);
    delete(id: string);
    findById(id: string);
    findAll();
    countAll();
    findAllByPageAndUsuariosId(
      numeroPagina: number,
      quantidadeItemPagina: number,
      usuariosId: string
    );
  }
  