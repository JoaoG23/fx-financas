import create from "zustand";
import { ReactSelectOptions } from "../../types/react-select/ReactSelectOptions";

type State = {
  subtipo: ReactSelectOptions;
  adicionarSubtipo(subtipo: ReactSelectOptions): void;
  limparSubtipo(): void;
};

export const usesubtipoStore = create<State>((set) => ({
  subtipo: {},

  adicionarSubtipo(subtipo: ReactSelectOptions) {
    set((state) => ({ ...state.subtipo, subtipo }));
  },

  limparSubtipo() {
    set((state) => ({ ...state.subtipo, subtipo: {} }));
  },
}));
