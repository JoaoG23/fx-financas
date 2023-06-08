export interface EstatisticaRepositoryInterface {
  sumAllValorOfMonthLessThanZeroByUsuarioId(usuariosId: string);
  sumAllValorOfMonthMoreThanZeroByUsuarioId(usuariosId: string);
  findLastSaldoByUsuariosId(usuariosId:string);
}
