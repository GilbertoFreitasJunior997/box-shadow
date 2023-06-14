import styled from "styled-components";

export const StyledBox = styled.div<{
  $width: number;
  $height: number;
  $isRounded: boolean;
  $borderRadius: number;
}>`
  width: ${(p) => p.$width}rem;
  height: ${(p) => p.$height}rem;

  border-radius: ${(p) => (p.$isRounded ? "15rem" : `${p.$borderRadius}rem`)};

  transition: all 100ms ease;
`;
