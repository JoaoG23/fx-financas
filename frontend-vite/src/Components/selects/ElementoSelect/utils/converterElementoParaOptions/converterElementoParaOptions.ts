import React from 'react';
import { Elemento } from '../../../../../types/Elemento';


export const converterElementoParaOptions = (elementos: Elemento[]) => {
    return elementos?.map((elemento: Elemento) => {
        return {
          value: elemento?.id!,
          label: elemento?.descricao!,
        };
      });
}
