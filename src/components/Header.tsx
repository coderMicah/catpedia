"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { INavItem } from "../types";

export const navItems: INavItem[] = [
  {
    name: "Home",
    href: "/",
    ariaLabel: "Link to Home page",
  },
  {
    name: "Breeds",
    href: "/breeds",
    ariaLabel: `Link to Breeds page`,
  },
  {
    name: "Care & Tips",
    href: "/care-and-tips",
    ariaLabel: "Link to Care and Tips page",
  },
  // {
  //   name: "Interactivity",
  //   href: "/interactivity",
  //   ariaLabel: "Link to interactivity page",
  // },
  // {
  //   name: "Community",
  //   href: "/community",
  //   ariaLabel: "Link to community page",
  // },
  // {
  //   name: "Pricing",
  //   href: "/pricing",
  //   ariaLabel: "Link to pricing page",
  // },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"/Peeking-Cat.svg"} width={50} height={10} alt="logo" />
          <h1 className="text-sm -mt-4 -ml-1 font-bold text-gray-800">
            Catpedia
          </h1>
        </Link>

        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger role="button" aria-label="menu-open-button">
              <MenuIcon
              //   className={cn(isHome ? "text-white" : "text-black")}
              />
            </SheetTrigger>
            <SheetContent side="left" className="w-full">
              <ul className="flex flex-col gap-8">
                {navItems.map((item) => (
                  <li
                    className={cn(
                      pathname === item.href
                        ? "text-orange-400 hover:text-orange-600"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                    key={item.name}
                  >
                    <SheetClose asChild>
                      <Link
                        aria-label={item.ariaLabel}
                        href={item.href}
                        className="hover:cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => {
              return (
                <li
                  className={cn(
                    pathname === item.href
                      ? "text-orange-400 hover:text-orange-600"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                  key={item.name}
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
