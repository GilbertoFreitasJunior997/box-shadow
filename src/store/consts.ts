import { StoreProps } from "./types";

export const DEFAULT_STORE_VALUE: StoreProps = {
  width: 10,
  height: 10,

  bgColor: "white",

  isRounded: false,
  borderRadius: {
    tl: 1,
    tr: 1,
    br: 1,
    bl: 1,
  },

  boxShadows: [
    {
      id: 1,
      offsetX: 0,
      offsetY: 15,
      blurRadius: 20,
      spreadRadius: 0,
      color: "black",
    },
  ],
};
