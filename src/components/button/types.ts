import { ReactNode } from "react";

export type ButtonColor = "add" | "remove";

export type ButtonProps = {
  text: ReactNode;
  tooltip: string;
  color: ButtonColor;
  onClick(): void;
};
