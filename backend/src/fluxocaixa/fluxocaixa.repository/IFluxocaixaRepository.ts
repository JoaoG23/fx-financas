import { FluxocaixaDto } from "../fluxocaixa.dto/fluxocaixa.dto";
import { CriteriosPesquisa } from "../interfaces/CriteriosPesquisa";


export interface IFluxocaixaRepository {
  save(data: FluxocaixaDto);
  saveMany(fluxocaixaDto: FluxocaixaDto[]);
  update(id: string, newData: FluxocaixaDto);
  delete(id: string);
  deleteAllByUsuariosId(usuariosId: string);
  findById(id: string);
  findLastItemByUsuariosId(usuariosId: string);
  findAllByUsuariosId(usuariosId: string);
  describeAllFields();
  countAllByIdUsuario(usuariosId: string);
  countAllByIdUsuarioThisMonth(usuariosId: string);
  updateLastItemSaldo(valor: number, usuariosId: string);
  sumBiggerThanZero(usuariosId: string);
  sumLessThanZero(usuariosId: string);
  findAllByPageAndUsuariosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  );
  findAllByPageAndUsuariosIdAndThisMonth(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  );
  findAllByCriterios(criterios: CriteriosPesquisa);
}
