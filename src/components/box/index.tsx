import { useBoxStore } from "../../store";
import { StyledBox } from "./styles";
import { cssShadows } from "./utils";

export const Box = () => {
  const store = useBoxStore((s) => ({
    width: s.width,
    height: s.height,
    bgColor: s.bgColor,
    isRounded: s.isRounded,
    borderRadius: s.borderRadius,
    boxShadows: s.boxShadows,
    isSquare: s.isSquare,
  }));

  return (
    <StyledBox
      className="flex items-center justify-center"
      style={{
        boxShadow: cssShadows(store.boxShadows),
        backgroundColor: store.bgColor,
      }}
      {...store}
    />
  );
};
