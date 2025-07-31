"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center">
      <SwitchPrimitive.Root
        className="w-14 h-8 bg-gray-200 rounded-full relative focus:outline-none flex items-center px-1.5 cursor-pointer"
        checked={isDark}
        onCheckedChange={handleToggle}
      >
        <SwitchPrimitive.Thumb
          className={`block w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        />
        {isDark ? (
          <Moon className="absolute left-1.5 h-4 w-4 text-gray-600" />
        ) : (
          <Sun className="absolute right-1.5 h-4 w-4 text-gray-800" />
        )}
      </SwitchPrimitive.Root>
    </div>
  );
}
