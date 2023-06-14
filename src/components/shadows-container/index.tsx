import { useBoxStore } from "../../store";
import { Shadow } from "../shadow";

export const ShadowsContainer = () => {
  const boxShadows = useBoxStore((s) => s.boxShadows);

  return (
    <div className="pt-4 gap-2 flex flex-col">
      {boxShadows.map((shadow) => (
        <Shadow key={shadow.id} {...shadow} />
      ))}
    </div>
  );
};
