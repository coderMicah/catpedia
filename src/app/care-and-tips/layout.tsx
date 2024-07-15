import SideNav from "@/components/SideNav";
import React from "react";

const CareTipsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-w-7xl mx-auto px-3 flex flex-col md:flex-row gap-8 my-5">
      <SideNav />
      {children}
    </div>
  );
};

export default CareTipsLayout;
