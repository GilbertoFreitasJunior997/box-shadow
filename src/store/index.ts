import { create } from "zustand";
import { UseBoxStoreType } from "./types";
import { DEFAULT_STORE_VALUE } from "./consts";

export const useBoxStore = create<UseBoxStoreType>()((set) => ({
  ...DEFAULT_STORE_VALUE,

  setHeight: (height) => set({ height }),
  setWidth: (width) => set({ width }),

  setBgColor: (bgColor) => set({ bgColor }),

  setIsRounded: (isRounded) => set({ isRounded }),
  setBorderRadius: (borderRadius) => set({ borderRadius }),

  addBoxShadow: (newShadow) =>
    set((old) => ({ boxShadows: [...old.boxShadows, newShadow] })),
  removeBoxShadow: (id) =>
    set((old) => ({
      boxShadows: old.boxShadows.filter((shadow) => shadow.id !== id),
    })),
  editBoxShadow: (id, props) =>
    set((old) => ({
      boxShadows: old.boxShadows.map((shadow) =>
        shadow.id === id ? props : shadow
      ),
    })),
}));
