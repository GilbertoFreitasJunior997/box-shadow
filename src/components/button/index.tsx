import { ForwardedRef, forwardRef } from "react";
import { ButtonProps } from "./types";
import { BUTTON_COLORS } from "./consts";

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { color, text, onClick, tooltip } = props;

    const buttonColor = BUTTON_COLORS[color];

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      try {
        e.stopPropagation();
        onClick?.();
      } catch {
        // prevent unknow radix error
      }
    };

    return (
      <button
        onClick={handleClick}
        title={tooltip}
        className={`${buttonColor} focus:ring-2 outline-none transition-colors rounded h-6 max-h-[1.5rem] px-2 flex items-center justify-center`}
        ref={ref}
      >
        {text}
      </button>
    );
  }
);
