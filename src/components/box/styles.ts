import styled from "styled-components";
import { StoreProps } from "../../store/types";
import { getCssShadow } from "./utils";

export const StyledBox = styled.div<StoreProps>`
  width: ${(p) => p.width}rem;
  height: ${(p) => p.height}rem;

  background-color: ${(p) => p.bgColor};

  border-radius: ${(p) =>
    p.isRounded
      ? "9999rem"
      : `${p.borderRadius.tl}rem ${p.borderRadius.tr}rem ${p.borderRadius.br}rem ${p.borderRadius.bl}rem`};

  box-shadow: ${(p) =>
    p.boxShadows.map((shadow, index) => {
      const isLast = p.boxShadows.length - 1 === index;

      return `${getCssShadow(shadow)} ${isLast ? "" : ", "}`;
    })};
`;
