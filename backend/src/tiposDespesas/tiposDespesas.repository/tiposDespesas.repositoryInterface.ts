import { TipoDespesaDto } from "../tiposDespesas.dto/tiposDespesas.dto";

export interface TiposDespesasRepositoryInteface {
  save(tipoDespesa: TipoDespesaDto);
  updateById(id: string, tipoDespesa: TipoDespesaDto);
  deleteById(id: string);
  findById(id: string);
  countAll();
  findAllByPage(numeroPagina: number, quantidadeItemPagina: number);
  findAll();
}
