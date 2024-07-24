import React from "react";
import { ModeToggle } from "./ThemeToggle";

const Footer = () => {
  return (


    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              &copy; 2024 Catpedia. All rights reserved.
            </p>
          </div>

          <ul className="flex flex-wrap items-center">
            <li className="inline-block">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
