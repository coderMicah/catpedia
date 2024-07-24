"use client";

import { usePathname } from "next/navigation";
import SideNav from "../components/SideNav";

const TipsLayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <>
      {pathname.startsWith("/care-and-tips/articles/") ||
      pathname.startsWith("/care-and-tips/tips/") ? (
        <div className="max-w-7xl mx-auto px-3">{children} </div>
      ) : (
        <div className="max-w-7xl mx-auto px-3 flex flex-col md:flex-row gap-8 my-5">
          <SideNav />
          <div className="w-full">{children}</div>
        </div>
      )}
    </>
  );
};

export default TipsLayoutProvider;
