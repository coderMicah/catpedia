"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button variant="outline" size="icon" className="border-none hover:bg-inherit" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all text-orange-500" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all text-orange-500 " />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
