"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Moon className="h-[1.5rem] w-[1.3rem] transition-all text-orange-500 dark:hidden" />
      <Sun className="hidden h-5 w-5 transition-all text-orange-500 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
