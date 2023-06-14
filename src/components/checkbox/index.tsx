import * as CheckboxBase from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { FC, useId } from "react";
import { CheckboxProps } from "./types";

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { label, value, onChange } = props;

  const id = useId();

  return (
    <div className="flex items-center gap-2">
      <CheckboxBase.Root
        checked={!!value}
        id={id}
        onCheckedChange={(e) => onChange(!!e)}
        className="bg-slate-300 h-5 w-5 rounded flex items-center justify-center focus:ring-2 focus:ring-black"
      >
        <CheckboxBase.Indicator>
          <CheckIcon color="black" />
        </CheckboxBase.Indicator>
      </CheckboxBase.Root>
      <label htmlFor={id} className="select-none cursor-pointer">
        {label}
      </label>
    </div>
  );
};
