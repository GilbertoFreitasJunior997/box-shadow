import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Checkbox } from "../../components/checkbox";
import { Sidebar } from "../../components/sidebar";
import { Slider } from "../../components/slider";
import { TextInput } from "../../components/text-input";
import { useBoxStore } from "../../store";

export const BoxBar = () => {
  const {
    height,
    setHeight,
    width,
    setWidth,
    isSquare,
    setIsSquare,
    bgColor,
    setBgColor,
    isRounded,
    setIsRounded,
    borderRadius,
    setBorderRadius,
  } = useBoxStore();

  const handleChangeHeight = (value: number) => {
    setHeight(value);
  };

  const handleChangeWidth = (value: number) => {
    setWidth(value);
  };

  const handleChangeSize = (value: number) => {
    handleChangeWidth(value);
    handleChangeHeight(value);
  };

  const handleToggleIsSquare = (value: boolean) => {
    setIsSquare(value);
    handleChangeSize((height + width) / 2);
  };

  const handleChangeBorderRadius = (value: number) => {
    setBorderRadius(value);
  };

  const handleToggleIsRounded = (value: boolean) => {
    setIsRounded(value);
  };

  const handleChangeBgColor = (value: string) => {
    setBgColor(value);
  };

  return (
    <Sidebar>
      <div className="flex items-center justify-between">
        <h3>Box Settings</h3>
        <a
          href="https://github.com/GilbertoFreitasJunior997/box-shadow"
          target="_blank"
        >
          <GitHubLogoIcon width={20} height={20} />
        </a>
      </div>

      <div className="pt-4 flex flex-col gap-2">
        <Checkbox
          label="Square Ratio"
          onChange={handleToggleIsSquare}
          value={isSquare}
        />
        {isSquare ? (
          <>
            <Slider
              label="Size"
              min={1}
              max={30}
              onChange={handleChangeSize}
              unity="rem"
              value={height}
            />
          </>
        ) : (
          <>
            <Slider
              label="Width"
              min={1}
              max={30}
              onChange={handleChangeWidth}
              unity="rem"
              value={width}
            />
            <Slider
              label="Height"
              min={1}
              max={30}
              onChange={handleChangeHeight}
              unity="rem"
              value={height}
            />
          </>
        )}

        <TextInput
          label="Box Color"
          value={bgColor}
          onChange={handleChangeBgColor}
        />

        <div className="pt-3" />
        <Checkbox
          label="Rounded"
          onChange={handleToggleIsRounded}
          value={isRounded}
        />
        {!isRounded && (
          <>
            <Slider
              label="Border Radius"
              min={1}
              max={15}
              onChange={handleChangeBorderRadius}
              unity="rem"
              value={borderRadius}
            />
          </>
        )}
      </div>
    </Sidebar>
  );
};
