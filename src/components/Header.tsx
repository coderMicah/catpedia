"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { INavItem } from "../types";
import { ModeToggle } from "./ThemeToggle";

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
          <div>
          <svg
            width="1000"
            height="1000"
            viewBox="0 0 1000 1000"
            version="1.1"
            id="svg5"
            className="max-w-16 max-h-10 text-primary fill-current"
            xmlns="http://www.w3.org/2000/svg"
            //  xmlns:svg="http://www.w3.org/2000/svg"
            //  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            //  xmlns:cc="http://creativecommons.org/ns#"
            //  xmlns:dc="http://purl.org/dc/elements/1.1/"
          >
      
            <g id="layer1">
              <g
                id="g3215"
                transform="matrix(0.90442737,0,0,0.90442737,14.909704,640.59056)"
              >
                <path
                  id="path169"
                  d="m 684.52496,-380.18555 c -23.53511,1.23358 -53.12375,20.00932 -76.9707,50.44727 -17.79653,22.71528 -32.35376,51.9116 -41.63281,79.40039 -10.49034,-1.28437 -21.06106,-1.93876 -31.64454,-1.95899 -14.19061,0.13382 -28.34112,1.40757 -42.28906,3.80665 -16.27055,-32.04274 -133.95159,-121.12046 -206.65625,-102.45899 -26.34021,6.76088 -8.88692,63.64591 4.15625,106.25391 10.23608,33.43805 23.04235,66.55717 38.09766,98.67187 -11.62967,17.2992 -20.62071,35.97655 -26.72266,55.511721 -2.47429,-0.671366 -4.91013,-1.372497 -7.43164,-2.001953 -37.21124,-9.289208 -79.15747,-13.708808 -102.85742,-13.720708 -23.69995,-0.0119 -29.15085,4.38458 -30.58008,8.960942 -1.42922,4.576356 1.16163,9.330525 5.42578,10.695313 4.26416,1.364788 10.20195,-0.65956 22.67969,-1.335937 12.47774,-0.676378 31.49532,-0.0049 50.03711,2.191406 18.54178,2.196338 36.60655,5.917589 54.72656,10.949218 1.34385,0.373165 2.68355,0.800395 4.02735,1.1875 -2.15895,9.705911 -3.6088,19.53309 -4.33985,29.416016 -1.43581,0.109371 -2.84029,0.168203 -4.28515,0.294922 -38.2065,3.350864 -79.3022,12.848486 -101.71094,20.564453 -22.40875,7.715966 -26.12925,13.6491354 -25.98828,18.4414064 0.14096,4.79227095 4.14106,8.4418859 8.61718,8.3417968 4.47612,-0.100093 9.42855,-3.94855798 21.00391,-8.65625 11.57536,-4.7076969 29.77291,-10.2750402 48.01758,-14.2441402 17.64563,-3.83878 35.34464,-6.156312 53.46875,-7.347657 0.15183,2.181441 0.3387,4.360715 0.56055,6.53711 h 223.91406 c 1.89779,-4.290589 3.07368,-8.607451 3.16406,-12.503907 0.0783,-3.376629 -1.53516,-5.491723 -3.85937,-8.93164 -5.72106,-8.467468 -33.77572,-7.328345 -33.85352,-17.550781 -0.0778,-10.222339 19.83533,-18.660723 43.32617,-18.632813 23.49085,0.0283 44.11344,7.30812 44.05664,16.925781 -0.0501,8.489275 -28.82247,12.75041 -33.91601,19.998047 -2.07319,2.949992 -3.39848,5.282095 -3.33008,8.402344 0.0842,3.838364 1.22221,8.077795 3.07031,12.292969 h 241.51367 c 0.22999,-2.245883 0.42272,-4.494841 0.57813,-6.746094 0.46795,0.02716 0.94081,0.03579 1.4082,0.06445 18.77037,1.151227 37.06197,3.523088 55.30664,7.492188 18.24467,3.9691 36.44222,9.5364443 48.01758,14.2441402 11.57536,4.70769302 16.52779,8.5561571 21.00391,8.65625 4.47612,0.100091 8.47622,-3.54952585 8.61718,-8.3417968 0.14097,-4.792271 -3.57953,-10.7254404 -25.98828,-18.4414064 -22.40874,-7.715964 -63.50443,-17.213586 -101.71094,-20.56445 -2.51831,-0.220866 -4.97961,-0.346898 -7.46874,-0.515625 -0.69593,-9.514982 -2.05811,-18.979142 -4.07813,-28.333984 2.31731,-0.684404 4.63042,-1.404936 6.94922,-2.048829 18.12001,-5.031628 36.18478,-8.75288 54.72656,-10.949218 18.54179,-2.196306 37.55937,-2.867784 50.03711,-2.191406 12.47774,0.676377 18.41553,2.700725 22.67969,1.335937 4.26415,-1.364788 6.855,-6.118958 5.42578,-10.695313 -1.42923,-4.576352 -6.88013,-8.972832 -30.58008,-8.960942 -23.69995,0.0119 -65.64618,4.43151 -102.85742,13.720708 -3.56334,0.889531 -7.03598,1.859145 -10.50195,2.830078 -5.25551,-17.386126 -12.79715,-34.122166 -22.45899,-49.839846 0.084,-1.26721 0.20407,-2.51448 0.28125,-3.7832 2.74292,-45.10568 1.39705,-90.56434 -3.91211,-134.80664 -5.30918,-44.24228 -14.58124,-87.2653 -39.18359,-98.85156 -5.38178,-2.53449 -11.4961,-3.56611 -18.08594,-3.22071 z m 14.08203,53.83594 c 3.44339,0.38919 6.18126,2.97767 7.96289,8.06836 23.31444,66.61661 14.48729,122.46046 12.57227,144.33008 -11.92915,-12.56421 -25.35891,-23.86148 -40.03711,-33.67969 2.53156,-5.82175 4.41296,-13.39584 5.0332,-19.7207 0.79525,-8.10941 -0.47697,-14.15068 -4.13476,-15.26367 -3.65779,-1.11299 -9.7006,2.70236 -15.26563,7.47265 -4.29158,3.67871 -8.28918,7.9278 -9.89844,12.88672 -5.81194,-3.27155 -11.77165,-6.31723 -17.86328,-9.12891 2.52964,-8.37205 10.32402,-32.45018 18.35743,-47.35156 16.26165,-30.16419 32.94327,-48.78085 43.27343,-47.61328 z m -381.12695,25.60938 c 19.51083,-0.88445 62.40788,22.73394 101.97852,75.53515 -8.68372,4.28955 -17.07428,9.06011 -25.125,14.28516 -1.86271,-4.33056 -5.48713,-8.09676 -9.34571,-11.4043 -5.56503,-4.7703 -11.60783,-8.5876 -15.26562,-7.47461 -3.65779,1.11299 -4.93002,7.15622 -4.13477,15.26563 0.65704,6.70002 2.72661,14.80367 5.48828,20.73828 -8.41232,6.91795 -16.28758,14.36573 -23.56836,22.28906 -5.70008,-16.27136 -33.3491,-94.09862 -39.6289,-113.2793 -3.30297,-10.08842 0.733,-15.55305 9.60156,-15.95507 z m 101.44141,138.83789 c 24.21714,-6.7e-4 43.84941,20.23497 43.84961,45.19726 -0.16359,13.05221 -5.79371,25.394171 -15.44141,33.849611 4.77428,-7.189921 7.36622,-15.883063 7.40039,-24.820311 -0.0387,-15.1832 -7.42917,-29.16625 -19.33984,-36.5918 1.05317,2.45907 1.60218,5.14745 1.60742,7.8711 -1.6e-4,10.16118 -7.40839,18.39836 -16.54688,18.39843 -9.13849,-8e-5 -16.54671,-8.23726 -16.54687,-18.39843 0.001,-4.44637 1.45069,-8.74179 4.08008,-12.0918 -16.9585,4.55762 -28.91862,21.41327 -28.95899,40.8125 0.006,3.91773 0.50336,7.815381 1.47852,11.580077 -3.38105,-6.324097 -5.24292,-13.391147 -5.42969,-20.609377 1.9e-4,-24.96151 19.63127,-45.19682 43.84766,-45.19726 z m 221.26757,0 c 24.21639,4.4e-4 43.84747,20.23575 43.84766,45.19726 -0.22158,16.55144 -9.20321,31.653946 -23.41211,39.367189 6.70505,-6.178062 11.41812,-14.580242 13.37695,-23.847659 3.97144,-18.98824 -4.24502,-37.9524 -19.89453,-45.91797 1.88043,3.82167 2.41051,8.32463 1.49219,12.67579 -2.10171,9.94037 -11.05196,16.46681 -19.99219,14.57812 -8.94153,-1.88879 -14.48731,-11.47979 -12.38672,-21.42187 0.56853,-2.66397 1.66191,-5.18093 3.20118,-7.36914 -13.18892,4.8023 -23.3111,16.95534 -26.48829,31.80273 -1.09606,5.32041 -1.25524,10.78022 -0.46875,16.07812 -1.96868,-5.07654 -3.02749,-10.47914 -3.125,-15.94531 1.9e-4,-24.96229 19.63246,-45.19793 43.84961,-45.19726 z"
                />
                <g id="g3209">
                  <path
                    d="M 0.28623285,26.440495 C -0.61343615,17.558265 -0.30673215,6.0812567 5.9181468,-4.3800237 12.143026,-14.841304 24.28542,-24.285389 37.552912,-29.569679 c 13.267492,-5.28429 27.658482,-6.408588 42.049998,-6.07117 14.391516,0.337418 28.78252,2.136293 39.85995,6.036558 11.07744,3.900264 18.84059,9.900809 24.28924,18.906995 5.44866,9.0061853 8.58298,21.016632 8.87346,31.216101 0.29048,10.199469 -2.26242,18.587292 -7.37376,23.972411 -5.11135,5.38512 -12.7815,7.767773 -19.65209,7.610279 -6.87059,-0.157495 -12.94178,-2.855801 -16.65229,-5.329007 -3.71052,-2.473205 -5.05967,-4.721798 -5.84711,-5.059245 -0.78744,-0.337448 -1.0123,1.236572 -1.57449,4.159801 -0.56219,2.923228 -1.46162,7.195546 -5.284179,11.579979 C 92.419086,61.837457 85.67331,66.334643 78.253147,68.2461 70.832984,70.157557 62.738054,69.482978 56.216967,67.12227 49.69588,64.761563 44.74897,60.714092 42.387341,55.429766 40.025713,50.145439 40.250571,43.624529 39.800756,41.375598 c -0.449814,-2.248932 -1.574113,-0.225191 -4.1599,2.248101 -2.585786,2.473293 -6.633255,5.396464 -11.917128,6.18366 C 18.439855,50.594556 11.918935,49.245398 7.6052038,45.427612 3.2914738,41.609825 1.1859018,35.322726 0.28623285,26.440495 Z"
                    id="path2744"
                  />
                  <path
                    d="m 920.42858,26.440495 c -0.89967,-8.88223 -0.59297,-20.3592383 5.63191,-30.8205187 6.22488,-10.4612803 18.36727,-19.9053653 31.63477,-25.1896553 13.26749,-5.28429 27.65848,-6.408588 42.04999,-6.07117 14.39155,0.337418 28.78255,2.136293 39.85995,6.036558 11.0774,3.900264 18.8406,9.900809 24.2892,18.906995 5.4487,9.0061853 8.583,21.016632 8.8735,31.216101 0.2905,10.199469 -2.2624,18.587292 -7.3738,23.972411 -5.1113,5.38512 -12.7815,7.767773 -19.652,7.610279 -6.8706,-0.157495 -12.9418,-2.855801 -16.6523,-5.329007 -3.7106,-2.473205 -5.0597,-4.721798 -5.8471,-5.059245 -0.7875,-0.337448 -1.0123,1.236572 -1.5745,4.159801 -0.5622,2.923228 -1.4617,7.195546 -5.2842,11.579979 -3.8226,4.384434 -10.5683,8.88162 -17.98851,10.793077 -7.42016,1.911457 -15.51509,1.236878 -22.03618,-1.12383 -6.52109,-2.360707 -11.468,-6.408178 -13.82963,-11.692504 -2.36162,-5.284327 -2.13677,-11.805237 -2.58658,-14.054168 -0.44981,-2.248932 -1.57411,-0.225191 -4.1599,2.248101 -2.58579,2.473293 -6.63326,5.396464 -11.91713,6.18366 -5.28387,0.787197 -11.80479,-0.561961 -16.11852,-4.379747 -4.31373,-3.817787 -6.4193,-10.104886 -7.31897,-18.987117 z"
                    id="path3205"
                  />
                </g>
              </g>
            </g>
          </svg>
          </div>

          <h1 className="text-sm -mt-4 -ml-1 font-semibold ">Catpedia</h1>
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
          <ul className="flex space-x-6 items-center">
            {navItems.map((item) => {
              return (
                <li
                  className={cn(
                    "font-medium",
                    pathname === item.href
                      ? "text-orange-400 hover:text-orange-600"
                      : "text-primary "
                  )}
                  key={item.name}
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}

            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
