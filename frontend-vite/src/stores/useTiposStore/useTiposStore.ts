import { create } from "zustand";
import { ReactSelectOptions } from "../../types/react-select/ReactSelectOptions";

type State = {
  tipos: ReactSelectOptions;

  adicionarTipos(tipos: ReactSelectOptions): void;
  limpartipos(): void;
};

export const useTiposStore = create<State>((set) => ({
  tipos: {},

  adicionarTipos(tipos: ReactSelectOptions) {
    set((state) => ({ ...state.tipos, tipos }));
  },

  limpartipos() {
    set((state) => ({ ...state.tipos, tipos: {} }));
  },
}));
