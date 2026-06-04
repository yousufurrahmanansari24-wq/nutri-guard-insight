import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BrLj5zs3.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as ArrowLeft, B as Bookmark, S as Share2, T as TriangleAlert, C as ChevronRight, a as Check } from "../_libs/lucide-react.mjs";
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
const productMain = "/assets/product-main-ywO2XmkI.jpg";
const alt1 = "/assets/alt-1-m8X9eNid.jpg";
const alt2 = "/assets/alt-2-B6tlPvZD.jpg";
const alt3 = "/assets/alt-3-C-17Ja7O.jpg";
const reasons = [
  { title: "High Sugar Content", detail: "18g per serving — exceeds your diabetic daily target", level: "danger" },
  { title: "High Sodium Content", detail: "480mg per serving — 21% of daily limit", level: "warning" },
  { title: "Contains Peanut Allergen", detail: "Listed in your profile as severe allergy", level: "danger" }
];
const nutrition = [
  { label: "Calories", value: "240", unit: "kcal", pct: 65 },
  { label: "Sugar", value: "18", unit: "g", pct: 90, level: "danger" },
  { label: "Protein", value: "6", unit: "g", pct: 30 },
  { label: "Fat", value: "11", unit: "g", pct: 55 },
  { label: "Sodium", value: "480", unit: "mg", pct: 78, level: "warning" }
];
const alternatives = [
  { name: "Organic Oat Crunch", brand: "Nature's Path", score: 86, img: alt1 },
  { name: "Almond Seed Bar", brand: "RXBAR", score: 79, img: alt2 },
  { name: "Quinoa Protein Bar", brand: "Kind", score: 91, img: alt3 }
];
const score = 28;
const radius = 52;
const circumference = 2 * Math.PI * radius;
const dash = score / 100 * circumference;
function AnalysisScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "grid h-10 w-10 place-items-center rounded-full bg-card ring-1 ring-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-[18px] w-[18px]", strokeWidth: 2.25 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold tracking-tight text-foreground", children: "Analysis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-10 w-10 place-items-center rounded-full bg-card ring-1 ring-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-[16px] w-[16px]", strokeWidth: 2.25 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-10 w-10 place-items-center rounded-full bg-card ring-1 ring-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-[16px] w-[16px]", strokeWidth: 2.25 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center justify-between lg:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold uppercase tracking-[0.18em] text-primary", children: "Result" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 text-[26px] font-semibold tracking-tight text-foreground", children: "Product Analysis" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 rounded-full bg-card px-3 py-2 text-[12.5px] font-semibold ring-1 ring-border hover:bg-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-4 w-4", strokeWidth: 2.25 }),
          " Save"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 rounded-full bg-card px-3 py-2 text-[12.5px] font-semibold ring-1 ring-border hover:bg-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4", strokeWidth: 2.25 }),
          " Share"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-5 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex items-center gap-4 rounded-2xl bg-card p-4 ring-1 ring-border sm:p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-secondary sm:h-24 sm:w-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: productMain, alt: "Granola Bar", className: "h-full w-full object-cover", width: 768, height: 768 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: "Snack Bar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-0.5 truncate text-[17px] font-semibold tracking-tight text-foreground sm:text-[20px]", children: "Honey Granola Bar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12.5px] text-muted-foreground", children: "Nature Valley · 42g" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10.5px] text-muted-foreground/80", children: "UPC 016000275287" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden rounded-2xl bg-card ring-1 ring-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-5 bg-danger/[0.06] p-5 sm:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.10),transparent_60%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[130px] w-[130px] shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 130 130", className: "h-full w-full -rotate-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "65", cy: "65", r: radius, stroke: "var(--border)", strokeWidth: "9", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: "65",
                  cy: "65",
                  r: radius,
                  stroke: "var(--danger)",
                  strokeWidth: "9",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeDasharray: `${dash} ${circumference}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[34px] font-bold leading-none tracking-tight text-foreground", children: score }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: "/ 100" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-danger px-2.5 py-1 text-[11px] font-semibold text-danger-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3", strokeWidth: 2.5 }),
              "AVOID"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-[20px] font-semibold leading-tight tracking-tight text-foreground", children: "Not safe for you" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12.5px] leading-snug text-muted-foreground", children: "3 conflicts with your health profile" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold tracking-tight text-foreground", children: "Nutrition Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-muted-foreground", children: "per 42g serving" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2.5 rounded-2xl bg-card p-4 ring-1 ring-border sm:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-x-8", children: nutrition.map((n) => {
            const barColor = n.level === "danger" ? "bg-danger" : n.level === "warning" ? "bg-warning" : "bg-foreground";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12.5px] font-medium text-muted-foreground", children: n.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] font-semibold tabular-nums text-foreground", children: [
                  n.value,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 text-[11px] font-medium text-muted-foreground", children: n.unit })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${barColor}`, style: { width: `${n.pct}%` } }) })
            ] }, n.label);
          }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold tracking-tight text-foreground", children: "Why avoid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-muted-foreground", children: "3 issues" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2.5 space-y-2", children: reasons.map((r) => {
          const isDanger = r.level === "danger";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex items-start gap-3 rounded-xl bg-card p-3 ring-1 sm:p-4 ${isDanger ? "ring-danger/20" : "ring-warning/30"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg ${isDanger ? "bg-danger/10" : "bg-warning/15"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TriangleAlert,
                      {
                        className: `h-4 w-4 ${isDanger ? "text-danger" : "text-warning"}`,
                        strokeWidth: 2.25
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13.5px] font-semibold text-foreground", children: r.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[12px] leading-snug text-muted-foreground", children: r.detail })
                ] })
              ]
            },
            r.title
          );
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold tracking-tight text-foreground", children: "Better Alternatives" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11.5px] text-muted-foreground", children: "Matched to your profile" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-0.5 text-[12px] font-medium text-primary", children: [
          "See all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2.5 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3", children: alternatives.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 rounded-2xl bg-card p-2.5 ring-1 ring-border sm:p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-secondary sm:h-16 sm:w-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: a.img,
                alt: a.name,
                className: "h-full w-full object-cover",
                loading: "lazy",
                width: 512,
                height: 512
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[13.5px] font-semibold text-foreground", children: a.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11.5px] text-muted-foreground", children: a.brand }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-success", strokeWidth: 3 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-success", children: "Safe for your profile" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end pr-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[16px] font-bold tabular-nums leading-none text-success", children: a.score }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-muted-foreground", children: "score" })
            ] })
          ]
        },
        a.name
      )) })
    ] })
  ] });
}
function AnalysisPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnalysisScreen, {}) });
}
export {
  AnalysisPage as component
};
