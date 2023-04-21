
export const converterElementoParaOptions = <T = unknown>(elementos: T[]) => {
    return elementos?.map((elemento: any) => {
        return {
          value: elemento?.id!,
          label: elemento?.descricao!,
        };
      });
}
