import styled from "styled-components";
import { StoreProps } from "../../store/types";

export const StyledBox = styled.div<StoreProps>`
  width: ${(p) => p.width}rem;
  height: ${(p) => p.height}rem;

  border-radius: ${(p) => (p.isRounded ? "15rem" : `${p.borderRadius}rem`)};

  transition: all 100ms ease;
`;
