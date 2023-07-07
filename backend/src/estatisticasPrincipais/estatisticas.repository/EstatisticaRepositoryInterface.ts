export interface EstatisticaRepositoryInterface {
  sumAllValorOfMonthLessThanZeroByUsuarioId(usuariosId: string);
  sumAllValorOfMonthMoreThanZeroByUsuarioId(usuariosId: string);
  sumAllValorLessThanZeroByUsuariosIdAndMonthAndYears(
    numberOfMonth: number,
    usuariosId: string,
    years: number
  );
  sumBiggerThanZero(usuariosId: string);
  sumLessThanZero(usuariosId: string)
  sumAllValorMoreThanZeroByUsuariosIdAndMonthAndYears(
    numberOfMonth: number,
    usuariosId: string,
    years: number
  );
  findLastSaldoByUsuariosId(usuariosId: string);
}
