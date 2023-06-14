import { FC } from "react";
import { ButtonProps } from "./types";
import { BUTTON_COLORS } from "./consts";

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { color, text, onClick, tooltip } = props;

  const buttonColor = BUTTON_COLORS[color];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      title={tooltip}
      className={`${buttonColor} focus:ring-2 transition-colors rounded h-6 max-h-[1.5rem] px-2 flex items-center justify-center`}
    >
      {text}
    </button>
  );
};
