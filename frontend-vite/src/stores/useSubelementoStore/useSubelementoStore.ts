import { create } from "zustand";

type SubelementoSelect = {
  value?: string;
  label?: string;
};

type State = {
  subelemento: SubelementoSelect;

  adicionarSubelemento(subelemento: SubelementoSelect): void;
  limparSubelemento(): void;
};

export const useSubelementoStore = create<State>((set) => ({
  subelemento: {},

  adicionarSubelemento(subelemento: SubelementoSelect) {
    set((state) => ({ ...state.subelemento, subelemento }));
  },

  limparSubelemento() {
    set((state) => ({ ...state.subelemento, subelemento: {} }));
  },
}));
