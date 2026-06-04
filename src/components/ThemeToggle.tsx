import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("ng-theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={`grid h-9 w-9 place-items-center rounded-full bg-card text-foreground ring-1 ring-border transition-colors hover:bg-secondary ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="h-[16px] w-[16px]" strokeWidth={2.25} />
      ) : (
        <Moon className="h-[16px] w-[16px]" strokeWidth={2.25} />
      )}
    </button>
  );
}
