import React from 'react';
import { Elemento } from '../../../../../types/Elemento';
import { Subelemento } from '../../../../../types/Subelemento';


export const converterSublementoParaOptions = (subelementos: Subelemento[]) => {
    return subelementos?.map((subelemento: Subelemento) => {
        return {
          value: subelemento?.id!,
          label: subelemento?.descricao!,
        };
      });
}
