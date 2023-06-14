import * as SliderBase from "@radix-ui/react-slider";
import { FC } from "react";
import { SliderProps } from "./types";

export const Slider: FC<SliderProps> = (props) => {
  const { label, unity, max, min, value, onChange } = props;

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between">
        <span>{label}</span>
        <div className="flex gap-1">
          <input
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(e.target.valueAsNumber)}
            className="w-10 text-center text-sm border border-slate-900 bg-slate-100 rounded text-black outline-none focus:ring-2 focus:ring-slate-900 px-1"
          />
          {unity}
        </div>
      </div>
      <SliderBase.Root
        onValueChange={(e) => onChange(e[0])}
        value={[value]}
        max={max}
        min={min}
        step={1}
        className="relative flex items-center w-full h-5"
      >
        <SliderBase.Track className="bg-slate-600 relative flex-grow rounded-full h-1">
          <SliderBase.Range className="absolute bg-slate-200 rounded-full h-full" />
        </SliderBase.Track>
        <SliderBase.Thumb
          aria-label="Volume"
          className="block w-4 h-4 bg-slate-200 rounded-full cursor-pointer hover:bg-slate-300 outline-none"
        />
      </SliderBase.Root>
    </div>
  );
};
