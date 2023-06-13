import { FC, PropsWithChildren } from "react";

export const Sidebar: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <aside className="bg-slate-900 max-w-[20vw] w-60">{children}</aside>;
};
