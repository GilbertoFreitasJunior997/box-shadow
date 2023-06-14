import { BoxContainer } from "../../components/box-container";
import { BoxBar } from "../box-bar";
import { ShadowsBar } from "../shadows-bar";

export const Container = () => {
  return (
    <div className="h-screen w-screen flex">
      <ShadowsBar />
      <BoxContainer />
      <BoxBar />
    </div>
  );
};
