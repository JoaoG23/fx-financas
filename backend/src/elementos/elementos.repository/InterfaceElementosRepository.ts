import { ElementoDto } from "../elementos.dto/Elementos.dto";

export interface IElementosRepository {
    save(data: ElementoDto);
    updateById(id: string, newData: ElementoDto);
    deleteById(id: string);
    deleteAllByUsuariosId(usuariosId: string);
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
  