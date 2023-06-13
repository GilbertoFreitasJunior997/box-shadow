import { BoxShadow } from "../../globals/types";

export const getCssShadow = (shadow: BoxShadow) => {
  const { offsetX, offsetY, blurRadius, spreadRadius, color } = shadow;

  return `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
};
