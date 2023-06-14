import { create } from "zustand";
import { UseBoxStoreType } from "./types";
import { DEFAULT_STORE_VALUE } from "./consts";

export const useBoxStore = create<UseBoxStoreType>()((set, get) => ({
  ...DEFAULT_STORE_VALUE,

  setHeight: (height) => set({ height }),
  setWidth: (width) => set({ width }),
  setIsSquare: (isSquare) => set({ isSquare }),

  setBgColor: (bgColor) => set({ bgColor }),

  setIsRounded: (isRounded) => set({ isRounded }),
  setBorderRadius: (borderRadius) => set({ borderRadius }),

  addBoxShadow: (newShadow) => {
    const shadows = get().boxShadows;
    let maxId = 0;
    shadows.forEach((shadow) => {
      if (shadow.id > maxId) maxId = shadow.id;
    });
    maxId++;

    set((old) => ({
      boxShadows: [...old.boxShadows, { ...newShadow, id: maxId }],
    }));
  },
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
