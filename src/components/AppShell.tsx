import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, History, Home, ScanLine, User } from "lucide-react";
import { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { id: "home", label: "Home", to: "/", icon: Home },
  { id: "scan", label: "Scan", to: "/scan", icon: ScanLine },
  { id: "analysis", label: "Analysis", to: "/analysis", icon: History },
  { id: "profile", label: "Profile", to: "/", icon: User },
] as const;

export function AppShell({ children, fullBleed = false }: { children: ReactNode; fullBleed?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar (lg+) */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-border bg-card lg:flex lg:flex-col">
        <div className="flex items-center gap-2.5 px-6 py-5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div>
            <p className="text-[15px] font-semibold tracking-tight">NutriGuard</p>
            <p className="text-[11px] font-medium text-muted-foreground">Health intelligence</p>
          </div>
        </div>
        <nav className="mt-2 flex flex-1 flex-col gap-0.5 px-3">
          {nav.map((item) => {
            const active = isActive(pathname, item.to, item.id);
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-colors ${
                  active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                }`}
              >
                <Icon className={`h-[18px] w-[18px] ${active ? "text-primary" : ""}`} strokeWidth={2.25} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3 rounded-lg bg-secondary/60 p-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-[12px] font-semibold text-primary">
              SC
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold">Sarah Chen</p>
              <p className="truncate text-[11px] text-muted-foreground">Premium plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur-xl lg:pl-64">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5 lg:hidden">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span className="text-[15px] font-semibold tracking-tight">NutriGuard</span>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <span className="text-[13px] font-medium text-muted-foreground">
              {sectionTitle(pathname)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button className="relative grid h-9 w-9 place-items-center rounded-full bg-card text-foreground ring-1 ring-border hover:bg-secondary">
              <Bell className="h-[16px] w-[16px]" strokeWidth={2.25} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-danger" />
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className={`lg:pl-64 ${fullBleed ? "" : "pb-24 lg:pb-10"}`}>
        <div className={fullBleed ? "" : "mx-auto w-full max-w-[1400px] px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-8"}>
          {children}
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-card/95 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
          {nav.map((item) => {
            const active = isActive(pathname, item.to, item.id);
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.to}
                className="flex flex-col items-center gap-0.5 px-3 py-1"
              >
                <Icon
                  className={`h-[20px] w-[20px] ${active ? "text-primary" : "text-muted-foreground"}`}
                  strokeWidth={2.25}
                />
                <span className={`text-[10px] font-medium ${active ? "text-primary" : "text-muted-foreground"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function isActive(pathname: string, to: string, id: string) {
  if (id === "profile") return false;
  if (to === "/") return pathname === "/";
  return pathname.startsWith(to);
}

function sectionTitle(pathname: string) {
  if (pathname.startsWith("/scan")) return "Product Scanner";
  if (pathname.startsWith("/analysis")) return "Product Analysis";
  return "Dashboard";
}
