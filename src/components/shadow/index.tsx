import { FC, useState } from "react";
import { Button } from "../button";
import { useBoxStore } from "../../store";
import { BoxShadow } from "../../globals/types";
import { Checkbox } from "../checkbox";
import { Slider } from "../slider";
import { ChevronRightIcon, TrashIcon } from "@radix-ui/react-icons";
import { TextInput } from "../text-input";

export const Shadow: FC<BoxShadow> = (props) => {
  const {
    id,
    active,
    inset,
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    color,
  } = props;

  const { removeBoxShadow, editBoxShadow } = useBoxStore((s) => ({
    removeBoxShadow: s.removeBoxShadow,
    editBoxShadow: s.editBoxShadow,
  }));

  const [isOpen, setIsOpen] = useState(true);

  const handleToggleOpen = () => {
    setIsOpen((v) => !v);
  };

  const handleRemoveShadow = () => {
    removeBoxShadow(id);
  };

  const handleToggleActive = (isActive: boolean) => {
    editBoxShadow(id, { ...props, active: isActive });
  };

  const handleToggleInset = (isInset: boolean) => {
    editBoxShadow(id, { ...props, inset: isInset });
  };

  const handleChangeOffsetX = (value: number) => {
    editBoxShadow(id, { ...props, offsetX: value });
  };

  const handleChangeOffsetY = (value: number) => {
    editBoxShadow(id, { ...props, offsetY: value });
  };

  const handleChangeBlurRadius = (value: number) => {
    editBoxShadow(id, { ...props, blurRadius: value });
  };

  const handleChangeSpreadRadius = (value: number) => {
    editBoxShadow(id, { ...props, spreadRadius: value });
  };

  const handleChangeColor = (value: string) => {
    editBoxShadow(id, { ...props, color: value });
  };

  return (
    <div>
      <div
        onClick={handleToggleOpen}
        className={`flex items-center justify-between bg-slate-950 p-2 cursor-pointer select-none ${
          isOpen ? "rounded-t" : "rounded"
        }`}
      >
        <span>Shadow {id}</span>

        <div className="flex items-center gap-1">
          <Button
            text={
              <div className="flex gap-1 items-center">
                <TrashIcon />
              </div>
            }
            tooltip="Remove shadow"
            color="remove"
            onClick={handleRemoveShadow}
          />
          <ChevronRightIcon
            className={`${
              isOpen ? "rotate-90" : ""
            } transition-transform w-5 h-5`}
          />
        </div>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } p-2 bg-slate-800 rounded-b flex flex-col gap-5`}
      >
        <div className="w-full flex gap-4">
          <Checkbox
            value={active}
            onChange={handleToggleActive}
            label="Active"
          />
          <Checkbox value={inset} onChange={handleToggleInset} label="Inset" />
        </div>
        <Slider
          label="Horizontal Offset"
          unity="px"
          min={-100}
          max={100}
          value={offsetX}
          onChange={handleChangeOffsetX}
        />
        <Slider
          label="Vertical Offset"
          unity="px"
          min={-100}
          max={100}
          value={offsetY}
          onChange={handleChangeOffsetY}
        />
        <Slider
          label="Blur Radius"
          unity="px"
          min={0}
          max={100}
          value={blurRadius}
          onChange={handleChangeBlurRadius}
        />
        <Slider
          label="Spread Radius"
          unity="px"
          min={-100}
          max={100}
          value={spreadRadius}
          onChange={handleChangeSpreadRadius}
        />
        <TextInput label="Color" value={color} onChange={handleChangeColor} />
      </div>
    </div>
  );
};
