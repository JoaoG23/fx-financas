export interface ElementosClassificacoesRepositoryInterface {
  sumAllValorMoreThanZeroByUsuariosIdAndThisMonthElementosId(
    usuariosId: string,
    elementosId: string
  );
  findAllELementosByUsuariosId(usuariosId: string);
}
