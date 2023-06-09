export interface EstatisticaRepositoryInterface {
  sumAllValorOfMonthLessThanZeroByUsuarioId(usuariosId: string);
  sumAllValorOfMonthMoreThanZeroByUsuarioId(usuariosId: string);
  sumAllValorLessThanZeroByUsuariosIdAndMonthAndYears(
    numberOfMonth: number,
    usuariosId: string,
    years: number
  );
  findLastSaldoByUsuariosId(usuariosId: string);
}
