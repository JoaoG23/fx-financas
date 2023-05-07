import React from "react";
import { create } from "zustand";

type ElementoSelect = {
  value?: string;
  label?: string;
};

type State = {
  elemento: ElementoSelect;

  adicionarElemento(elemento: ElementoSelect): void;
  limparElemento(): void;
};

export const useElementoStore = create<State>((set) => ({
  elemento: {},

  adicionarElemento(elemento: ElementoSelect) {
    set((state) => ({ ...state.elemento, elemento }));
  },

  limparElemento() {
    set((state) => ({ ...state.elemento, elemento: {} }));
  },
}));
