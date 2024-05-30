"use client";

import { Sun, Moon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useThemeToggle from "@/hooks/useThemeToggle";

export function ThemeToggle({ className, ...props }: ButtonProps) {
  const { isDark, toggle, hydrated } = useThemeToggle();

  if (!hydrated) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("text-2xl", className)}
      title="Toggle theme"
      aria-label="Toggle theme"
      {...props}
      onClick={toggle}
    >
      {isDark ? (
        <Moon className="size-[1em] fill-current" />
      ) : (
        <Sun className="size-[1em] fill-current" />
      )}
    </Button>
  );
}
