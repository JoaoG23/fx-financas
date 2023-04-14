import { describe, expect } from "vitest";
import { formataDataPadraoBR } from ".";


describe('formatarDataPadraoBR', () => { 
    describe('Quando for enviada a dateTime para funcao', () => { 
        test('Deveria retorna somente a data em formato pt-br Ex:29/01/2020', () => { 

            const dataEnviada = '2020-01-29T19:30:21.373Z';
           const dataPtBr = formataDataPadraoBR(dataEnviada);

           expect(dataPtBr).toBe('29/01/2020');
         })
     })
})
