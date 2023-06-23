import { create } from "zustand";

type State = {
  subtipo: string;
  adicionarSubtipo(subtipo: string): void;
  limparSubtipo(): void;
};

export const useSubtipoStore = create<State>((set) => ({
  subtipo: "",

  adicionarSubtipo(subtipo: string) {
    set({ subtipo: subtipo });
  },

  limparSubtipo() {
    set({ subtipo: "" });
  },
}));
