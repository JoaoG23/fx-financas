interface CriteriosProgramacao {
  elementosId?: string;
  usuariosId?: string;
  subelementosId?: string;
  tiposId?: string;
  subtiposId?: string;
  tipos_despesasId?: string;
  descricao?: string;
  entradaOuSaida?: string
}

export const retornaParametrosPesquisaSaida = (
  criteriosProgramacao: CriteriosProgramacao
): object[] => {
  const {
    usuariosId,
    elementosId,
    subelementosId,
    tiposId,
    subtiposId,
    tipos_despesasId,
    descricao,
  } = criteriosProgramacao;

  return [
    {
      usuariosId: {
        contains: usuariosId,
      },
    },
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
        mode: 'insensitive'
      },
    },
    {
      valor: {
        lt: 0,
      },
    }
  ];
};
