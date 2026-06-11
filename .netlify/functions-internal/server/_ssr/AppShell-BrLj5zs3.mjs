import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as House, g as ScanLine, i as History, j as User, k as Bell, l as Sun, M as Moon } from "../_libs/lucide-react.mjs";
function getInitialTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    setTheme(getInitialTheme());
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("ng-theme", next);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: `grid h-9 w-9 place-items-center rounded-full bg-card text-foreground ring-1 ring-border transition-colors hover:bg-secondary ${className}`,
      children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-[16px] w-[16px]", strokeWidth: 2.25 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-[16px] w-[16px]", strokeWidth: 2.25 })
    }
  );
}
const nav = [
  { id: "home", label: "Home", to: "/", icon: House },
  { id: "scan", label: "Scan", to: "/scan", icon: ScanLine },
  { id: "analysis", label: "Analysis", to: "/analysis", icon: History },
  { id: "profile", label: "Profile", to: "/", icon: User }
];
function AppShell({ children, fullBleed = false }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-border bg-card lg:flex lg:flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 px-6 py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-xl bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 12l2 2 4-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold tracking-tight", children: "NutriGuard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium text-muted-foreground", children: "Health intelligence" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-2 flex flex-1 flex-col gap-0.5 px-3", children: nav.map((item) => {
        const active = isActive(pathname, item.to, item.id);
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            className: `flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-colors ${active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-[18px] w-[18px] ${active ? "text-primary" : ""}`, strokeWidth: 2.25 }),
              item.label
            ]
          },
          item.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-lg bg-secondary/60 p-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-[12px] font-semibold text-primary", children: "SC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[12.5px] font-semibold", children: "Sarah Chen" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[11px] text-muted-foreground", children: "Premium plan" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur-xl lg:pl-64", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 12l2 2 4-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-semibold tracking-tight", children: "NutriGuard" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-2 lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-muted-foreground", children: sectionTitle(pathname) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "relative grid h-9 w-9 place-items-center rounded-full bg-card text-foreground ring-1 ring-border hover:bg-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-[16px] w-[16px]", strokeWidth: 2.25 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-danger" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: `lg:pl-64 ${fullBleed ? "" : "pb-24 lg:pb-10"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: fullBleed ? "" : "mx-auto w-full max-w-[1400px] px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-8", children }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-card/95 backdrop-blur-xl lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-md items-center justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2", children: nav.map((item) => {
      const active = isActive(pathname, item.to, item.id);
      const Icon = item.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: item.to,
          className: "flex flex-col items-center gap-0.5 px-3 py-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Icon,
              {
                className: `h-[20px] w-[20px] ${active ? "text-primary" : "text-muted-foreground"}`,
                strokeWidth: 2.25
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-medium ${active ? "text-primary" : "text-muted-foreground"}`, children: item.label })
          ]
        },
        item.id
      );
    }) }) })
  ] });
}
function isActive(pathname, to, id) {
  if (id === "profile") return false;
  if (to === "/") return pathname === "/";
  return pathname.startsWith(to);
}
function sectionTitle(pathname) {
  if (pathname.startsWith("/scan")) return "Product Scanner";
  if (pathname.startsWith("/analysis")) return "Product Analysis";
  return "Dashboard";
}
export {
  AppShell as A
};
