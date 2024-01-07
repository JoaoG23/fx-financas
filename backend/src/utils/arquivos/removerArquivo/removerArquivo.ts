import { existsSync, unlinkSync } from 'fs';

export const removerArquivo = async (caminho: string) => {
  try {
    const isExisteArquivo = existsSync(caminho);
    if (!isExisteArquivo) {
      return 'Arquivo não existe';
    }
    await unlinkSync(caminho);
  } catch (error) {
    throw new Error('Arquivo não removido');
  }
};
