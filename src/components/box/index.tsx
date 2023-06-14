import { useBoxStore } from "../../store";
import { StyledBox } from "./styles";
import { cssShadows } from "./utils";

export const Box = () => {
  const { bgColor, boxShadows, ...store } = useBoxStore((s) => ({
    $width: s.width,
    $height: s.height,
    $isRounded: s.isRounded,
    $borderRadius: s.borderRadius,

    boxShadows: s.boxShadows,
    bgColor: s.bgColor,
  }));

  return (
    <StyledBox
      className="flex items-center justify-center"
      style={{
        boxShadow: cssShadows(boxShadows),
        backgroundColor: bgColor,
      }}
      {...store}
    />
  );
};
