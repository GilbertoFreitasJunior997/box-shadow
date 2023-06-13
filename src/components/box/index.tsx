import { useBoxStore } from "../../store";
import { StyledBox } from "./styles";

export const Box = () => {
  const store = useBoxStore((s) => ({
    width: s.width,
    height: s.height,
    bgColor: s.bgColor,
    isRounded: s.isRounded,
    borderRadius: s.borderRadius,
    boxShadows: s.boxShadows,
  }));

  return <StyledBox className="flex items-center justify-center" {...store} />;
};
