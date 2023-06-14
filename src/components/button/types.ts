import { ReactNode } from "react";

export type ButtonColor = "add" | "remove" | "see-code";

export type ButtonProps = {
  text: ReactNode;
  tooltip: string;
  color: ButtonColor;
  onClick?(): void;
};
