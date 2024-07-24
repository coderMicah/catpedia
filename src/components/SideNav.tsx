"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


//todo:make side nav reusable component

const SideNav = () => {
  const pathname = usePathname();
  
  return (
    <div className="w-56 ">
      <ul className="flex flex-row md:flex-col gap-6">
        <li className="font-semibold ">
          <Link className={cn(pathname === "/care-and-tips/articles" && "text-orange-400 hover:text-orange-600")} href={"/care-and-tips/articles"} >Articles</Link>
        </li>
        <li  className="font-semibold">
          <Link className={cn(pathname === "/care-and-tips/tips" && "text-orange-400 hover:text-orange-600")} href={"/care-and-tips/tips"}>Tips</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
