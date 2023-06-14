import { BoxShadow } from "../globals/types";
import { StoreProps } from "./types";

export const DEFAULT_SHADOW: BoxShadow = {
  id: 1,
  active: true,
  inset: false,
  offsetX: 0,
  offsetY: 15,
  blurRadius: 20,
  spreadRadius: 0,
  color: "rgba(0, 0, 0, 0.5)",
};

export const DEFAULT_STORE_VALUE: StoreProps = {
  width: 10,
  height: 10,
  isSquare: false,

  bgColor: "rgba(255, 255, 255, 1)",

  isRounded: false,
  borderRadius: 1,

  boxShadows: [DEFAULT_SHADOW],
};
