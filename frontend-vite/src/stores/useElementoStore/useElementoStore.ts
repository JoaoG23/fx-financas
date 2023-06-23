import { create } from "zustand";

type State = {
  elemento: string;

  adicionarElemento(elemento: string): void;
  limparElemento(): void;
};

export const useElementoStore = create<State>((set) => ({
  elemento: "",

  adicionarElemento(elemento: string) {
    set({ elemento: elemento });
  },

  limparElemento() {
    set({ elemento: "" });
  },
}));
