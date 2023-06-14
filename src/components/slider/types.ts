export type SliderProps = {
  value: number;
  max: number;
  min: number;

  label: string;
  unity: string;

  onChange(newValue: number): void;
};
