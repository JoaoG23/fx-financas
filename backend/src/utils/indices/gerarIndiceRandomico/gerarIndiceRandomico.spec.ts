import { gerarIndiceRandomico } from './gerarIndiceRandomico';

describe('gerarIndiceRandomico', () => {
  describe('Quando funcao for execultada', () => {
    test('Deveria gerar um valor indice', () => {
      const indice = gerarIndiceRandomico();
      expect(indice).toBeTruthy();
    });
  });
});
