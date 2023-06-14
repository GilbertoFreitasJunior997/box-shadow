import { FC, PropsWithChildren } from "react";

export const Sidebar: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <aside className="bg-slate-900 w-80 max-w-[20vw]  px-3 py-5 overflow-y-scroll">
      {children}
    </aside>
  );
};
