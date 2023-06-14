import { Box } from "../box";
import { SeeCodeButton } from "../see-code-button";

export const BoxContainer = () => {
  return (
    <main className="flex-grow bg-slate-600 flex items-center justify-center relative">
      <SeeCodeButton />
      <Box />
    </main>
  );
};
