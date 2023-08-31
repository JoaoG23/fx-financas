import { create } from "zustand";

type State = {
  mes: number;

  adicionarMes(mes: number): void;
};

const mesAtual = new Date().getMonth() + 1;

export const useMesStore = create<State>((set) => ({
  mes: mesAtual,

  adicionarMes(mes: number) {
    set({ mes: mes });
  },
}));
