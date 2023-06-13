import { BorderRadius, BoxShadow } from "../globals/types";

export type StoreProps = {
  width: number;
  height: number;

  bgColor: string;

  isRounded: boolean;
  borderRadius: BorderRadius;

  boxShadows: BoxShadow[];
};

export type StoreActions = {
  setWidth(width: number): void;
  setHeight(height: number): void;

  setBgColor(bgColor: string): void;

  setIsRounded(isRounded: boolean): void;
  setBorderRadius(borderRadius: BorderRadius): void;

  addBoxShadow(newShadow: BoxShadow): void;
  removeBoxShadow(id: number): void;
  editBoxShadow(id: number, props: BoxShadow): void;
};

export type UseBoxStoreType = StoreProps & StoreActions;
