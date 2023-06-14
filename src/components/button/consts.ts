import { ButtonColor } from "./types";

export const BUTTON_COLORS: { [key in ButtonColor]: string } = {
  add: "bg-emerald-600 hover:bg-emerald-800 active:bg-emerald-900 focus:ring-emerald-800",
  remove: "bg-red-600 hover:bg-red-800 active:bg-red-900 focus:ring-red-800",
};
