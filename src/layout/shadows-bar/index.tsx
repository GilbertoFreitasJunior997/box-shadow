import { Button } from "../../components/button";
import { ShadowsContainer } from "../../components/shadows-container";
import { Sidebar } from "../../components/sidebar";
import { useBoxStore } from "../../store";
import { DEFAULT_SHADOW } from "../../store/consts";

export const ShadowsBar = () => {
  const addBoxShadow = useBoxStore((s) => s.addBoxShadow);

  const handleAddShadow = () => {
    addBoxShadow(DEFAULT_SHADOW);
  };

  return (
    <Sidebar>
      <div className="flex items-center justify-between">
        <h3>Box Shadows</h3>

        <Button
          color="add"
          text="New"
          onClick={handleAddShadow}
          tooltip="New shadow"
        />
      </div>

      <ShadowsContainer />
    </Sidebar>
  );
};
