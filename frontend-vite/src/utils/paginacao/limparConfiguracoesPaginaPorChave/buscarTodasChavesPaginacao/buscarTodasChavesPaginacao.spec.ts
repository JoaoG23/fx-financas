import { describe , test ,expect} from "vitest";
import { buscarTodasChavesPaginacao } from "./buscarTodasChavesPaginacao";

describe('buscarTodasChavesPaginacao.ts', () => {
    describe('Quando execultar a função', () => {
        test('Deveria retorna somente todas as inicial fx-finances', () => {

            const retorno = buscarTodasChavesPaginacao()
            expect(retorno).toBeTruthy()
        });
    });
});