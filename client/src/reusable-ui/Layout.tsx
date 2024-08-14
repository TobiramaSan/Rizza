import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: Props) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto py-10 px-4 lg:px-0 ",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default Layout;
