import { create } from "zustand";

type State = {
  tipos: string;

  adicionarTipos(tipos: string): void;
  limpartipos(): void;
};

export const useTiposStore = create<State>((set) => ({
  tipos: "",

  adicionarTipos(tipos: string) {
    set({ tipos: tipos });
  },

  limpartipos() {
    set({ tipos: "" });
  },
}));
