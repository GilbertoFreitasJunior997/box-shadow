import { BoxShadow } from "../../globals/types";

const getCssShadow = (shadow: BoxShadow) => {
  const { offsetX, offsetY, blurRadius, spreadRadius, color, inset } = shadow;

  return `${
    inset ? "inset" : ""
  } ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
};

export const cssShadows = (shadows: BoxShadow[]) => {
  const activeShadows = shadows.filter((shadow) => shadow.active);

  return activeShadows.map((shadow) => getCssShadow(shadow)).join(", ");
};
