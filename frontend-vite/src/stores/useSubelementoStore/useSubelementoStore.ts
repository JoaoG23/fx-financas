import { create } from "zustand";

type State = {
  subelemento: string;

  adicionarSubelemento(subelemento: string): void;
  limparSubelemento(): void;
};

export const useSubelementoStore = create<State>((set) => ({
  subelemento: "",

  adicionarSubelemento(subelemento: string) {
    set({ subelemento: subelemento });
  },

  limparSubelemento() {
    set({ subelemento: "" });
  },
}));
