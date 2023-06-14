import { FC } from "react";
import { TextInputProps } from "./types";

export const TextInput: FC<TextInputProps> = (props) => {
  const { label, value, onChange } = props;

  return (
    <div>
      {label}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value || "")}
        className="w-full h-8 border border-slate-900 bg-slate-100 rounded text-black outline-none focus:ring-2 focus:ring-slate-900 px-2"
      />
    </div>
  );
};
