interface CriteriosProgramacao {
  elementosId?: string;
  usuariosId?: string;
  subelementosId?: string;
  tiposId?: string;
  subtiposId?: string;
  tipos_despesasId?: string;
  descricao?: string;
}

export const retornarSemDataParametrosPesquisa = (
  criteriosProgramacao: CriteriosProgramacao
): object[] => {
  const {
    elementosId,
    subelementosId,
    tiposId,
    subtiposId,
    tipos_despesasId,
    descricao,
  } = criteriosProgramacao;

  return [
    {
      elementosId: {
        contains: elementosId,
      },
    },
    {
      subelementosId: {
        contains: subelementosId,
      },
    },
    {
      tiposId: {
        contains: tiposId,
      },
    },
    {
      subtiposId: {
        contains: subtiposId,
      },
    },
    {
      tipos_despesasId: {
        contains: tipos_despesasId,
      },
    },
    {
      descricao: {
        contains: descricao,
      },
    },
  ];
};
