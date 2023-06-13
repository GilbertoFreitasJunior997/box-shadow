import { Box } from "../../components/box";
import { BoxBar } from "../box-bar";
import { ShadowsBar } from "../shadows-bar";

export const Container = () => {
  return (
    <div className="h-screen w-screen flex">
      <ShadowsBar />
      <main className="flex-grow bg-slate-600 flex items-center justify-center">
        <Box />
      </main>
      <BoxBar />
    </div>
  );
};
