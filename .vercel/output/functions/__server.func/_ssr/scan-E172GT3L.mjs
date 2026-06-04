import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BrLj5zs3.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as ArrowLeft, Z as Zap, K as Keyboard, I as Image } from "../_libs/lucide-react.mjs";
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
function ScannerScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-[100dvh] w-full overflow-hidden bg-black text-white lg:min-h-0 lg:rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex min-h-[100dvh] w-full max-w-[520px] flex-col lg:min-h-[720px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black lg:rounded-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-30 lg:rounded-3xl",
        style: {
          backgroundImage: "radial-gradient(circle at 50% 40%, rgba(34,197,94,0.18), transparent 60%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-between px-5 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-[18px] w-[18px]", strokeWidth: 2.25 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-semibold backdrop-blur-md ring-1 ring-white/10", children: "Barcode Scanner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-[18px] w-[18px]", strokeWidth: 2.25 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-10 flex flex-1 flex-col items-center sm:mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/60", children: "Align barcode within frame" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5 h-[260px] w-[300px] sm:h-[320px] sm:w-[380px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-[28px] bg-white/[0.03] ring-1 ring-white/10" }),
        [
          "top-0 left-0 border-t-[3px] border-l-[3px] rounded-tl-[24px]",
          "top-0 right-0 border-t-[3px] border-r-[3px] rounded-tr-[24px]",
          "bottom-0 left-0 border-b-[3px] border-l-[3px] rounded-bl-[24px]",
          "bottom-0 right-0 border-b-[3px] border-r-[3px] rounded-br-[24px]"
        ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute h-10 w-10 border-primary ${c}` }, c)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-6 top-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-scan-line h-[220px] sm:h-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_12px_2px_rgba(34,197,94,0.7)]" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-10 top-1/2 flex h-12 -translate-y-1/2 items-end gap-[2px] opacity-25", children: Array.from({ length: 48 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-[2px] bg-white", style: { height: `${30 + i * 37 % 70}%` } }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 ring-1 ring-primary/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold text-primary", children: "Scanning…" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 px-5 pb-8 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white/[0.06] p-3 backdrop-blur-xl ring-1 ring-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex flex-col items-center gap-1.5 rounded-2xl bg-white/[0.04] py-3 ring-1 ring-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Keyboard, { className: "h-5 w-5", strokeWidth: 2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold", children: "Enter Barcode" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/analysis",
            className: "flex flex-col items-center gap-1.5 rounded-2xl bg-white/[0.04] py-3 ring-1 ring-white/5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-5 w-5", strokeWidth: 2 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold", children: "From Gallery" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-[11px] text-white/50", children: "Analysis based on your profile · Diabetes, Peanut allergy" })
    ] }) })
  ] }) });
}
function ScanPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { fullBleed: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScannerScreen, {}) }) }) });
}
export {
  ScanPage as component
};
