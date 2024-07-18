
import TipsLayoutProvider from "@/components/TipsLayoutProvider";
import React from "react";

const CareTipsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <TipsLayoutProvider>{children}</TipsLayoutProvider>;
};

export default CareTipsLayout;
