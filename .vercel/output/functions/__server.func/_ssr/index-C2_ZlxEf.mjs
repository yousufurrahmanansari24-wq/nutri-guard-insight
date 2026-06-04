import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BrLj5zs3.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as ShieldCheck, C as ChevronRight, c as ScanLine, d as CircleAlert, e as Activity, L as Lightbulb } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const recentScans = [
  { name: "Greek Yogurt, Plain", brand: "Chobani", status: "safe", date: "Today, 9:12 AM" },
  { name: "Whole Grain Crackers", brand: "Triscuit", status: "caution", date: "Yesterday, 4:38 PM" },
  { name: "Peanut Butter Cups", brand: "Reese's", status: "avoid", date: "Yesterday, 2:01 PM" },
  { name: "Cold Brew Coffee", brand: "Stumptown", status: "safe", date: "Mon, 8:24 AM" }
];
const statusMap = {
  safe: { label: "Safe", className: "bg-success/10 text-success", dot: "bg-success" },
  caution: { label: "Caution", className: "bg-warning/10 text-warning", dot: "bg-warning" },
  avoid: { label: "Avoid", className: "bg-danger/10 text-danger", dot: "bg-danger" }
};
function HomeScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "flex items-end justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-muted-foreground", children: "Good Morning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-0.5 text-[22px] font-semibold tracking-tight text-foreground sm:text-[26px] lg:text-[30px]", children: "Sarah Chen" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl bg-card p-4 ring-1 ring-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-primary", strokeWidth: 2.25 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground", children: "Health Profile" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-0.5 text-[12px] font-medium text-muted-foreground", children: [
            "Edit ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-3 border-t border-border pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground", children: "Conditions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex flex-wrap gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-secondary px-2 py-1 text-[12px] font-medium text-foreground", children: "Diabetes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-secondary px-2 py-1 text-[12px] font-medium text-foreground", children: "Hypertension" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground", children: "Allergies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex flex-wrap gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-danger/10 px-2 py-1 text-[12px] font-medium text-danger", children: "Peanut" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-danger/10 px-2 py-1 text-[12px] font-medium text-danger", children: "Gluten" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/scan",
          className: "relative block h-full w-full overflow-hidden rounded-2xl bg-foreground p-5 text-left shadow-lg shadow-foreground/10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/20 blur-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-2xl bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScanLine, { className: "h-7 w-7 text-primary-foreground", strokeWidth: 2.25 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-primary", children: "Quick Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 text-[20px] font-semibold tracking-tight text-background", children: "Scan a Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-[240px] text-[13px] leading-snug text-background/60", children: "Instant safety analysis for your profile" })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid grid-cols-3 gap-2.5 sm:gap-4", children: [
      { label: "Scanned", value: "47", sub: "this week", icon: ScanLine, accent: "text-foreground" },
      { label: "Safe", value: "32", sub: "products", icon: ShieldCheck, accent: "text-success" },
      { label: "Avoided", value: "8", sub: "alerts", icon: CircleAlert, accent: "text-danger" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card p-3 ring-1 ring-border sm:p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: `h-4 w-4 ${s.accent}`, strokeWidth: 2.25 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[20px] font-semibold tracking-tight text-foreground sm:text-[24px]", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-medium text-muted-foreground sm:text-[12px]", children: [
        s.label,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground/60", children: [
          "· ",
          s.sub
        ] })
      ] })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-5 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold tracking-tight text-foreground", children: "Recent Scans" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[12px] font-medium text-primary", children: "See all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2.5 divide-y divide-border rounded-2xl bg-card ring-1 ring-border", children: recentScans.map((scan) => {
          const s = statusMap[scan.status];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/analysis",
              className: "flex items-center gap-3 px-3.5 py-3 transition-colors hover:bg-secondary/40 sm:px-5 sm:py-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-muted-foreground", strokeWidth: 2.25 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[13.5px] font-semibold text-foreground", children: scan.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-[11.5px] text-muted-foreground", children: [
                    scan.brand,
                    " · ",
                    scan.date
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold ${s.className}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${s.dot}` }),
                  s.label
                ] })
              ]
            },
            scan.name
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex gap-3 rounded-2xl bg-card p-4 ring-1 ring-border lg:flex-col lg:items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-warning/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-4 w-4 text-warning", strokeWidth: 2.25 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: "Daily Tip" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[12.5px] leading-snug text-muted-foreground", children: "Aim for under 25g of added sugar today. You've consumed 14g so far." })
        ] })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HomeScreen, {}) });
}
export {
  Index as component
};
