import { ElementoDto } from "../elementos.dto/Elementos.dto";

export interface IElementosRepository {
    save(data: ElementoDto);
    update(id: string, newData: ElementoDto);
    delete(id: string);
    findById(id: string);
    findAll();
    findAllByUsuariosId(usuariosId:string);
    countAll();
    findAllByPageAndUsuariosId(
      numeroPagina: number,
      quantidadeItemPagina: number,
      usuariosId: string
    );
  }
  