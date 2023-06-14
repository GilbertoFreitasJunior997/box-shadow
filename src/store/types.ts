import { BoxShadow } from "../globals/types";

export type StoreProps = {
  width: number;
  height: number;
  isSquare: boolean;

  bgColor: string;

  isRounded: boolean;
  borderRadius: number;

  boxShadows: BoxShadow[];
};

export type StoreActions = {
  setWidth(width: number): void;
  setHeight(height: number): void;
  setIsSquare(isSquare: boolean): void;

  setBgColor(bgColor: string): void;

  setIsRounded(isRounded: boolean): void;
  setBorderRadius(borderRadius: number): void;

  addBoxShadow(newShadow: BoxShadow): void;
  removeBoxShadow(id: number): void;
  editBoxShadow(id: number, props: BoxShadow): void;
};

export type UseBoxStoreType = StoreProps & StoreActions;
