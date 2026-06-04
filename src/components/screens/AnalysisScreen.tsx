import { AlertTriangle, ArrowLeft, Bookmark, Check, ChevronRight, Share2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import productMain from "@/assets/product-main.jpg";
import alt1 from "@/assets/alt-1.jpg";
import alt2 from "@/assets/alt-2.jpg";
import alt3 from "@/assets/alt-3.jpg";

const reasons = [
  { title: "High Sugar Content", detail: "18g per serving — exceeds your diabetic daily target", level: "danger" },
  { title: "High Sodium Content", detail: "480mg per serving — 21% of daily limit", level: "warning" },
  { title: "Contains Peanut Allergen", detail: "Listed in your profile as severe allergy", level: "danger" },
];

const nutrition = [
  { label: "Calories", value: "240", unit: "kcal", pct: 65 },
  { label: "Sugar", value: "18", unit: "g", pct: 90, level: "danger" },
  { label: "Protein", value: "6", unit: "g", pct: 30 },
  { label: "Fat", value: "11", unit: "g", pct: 55 },
  { label: "Sodium", value: "480", unit: "mg", pct: 78, level: "warning" },
];

const alternatives = [
  { name: "Organic Oat Crunch", brand: "Nature's Path", score: 86, img: alt1 },
  { name: "Almond Seed Bar", brand: "RXBAR", score: 79, img: alt2 },
  { name: "Quinoa Protein Bar", brand: "Kind", score: 91, img: alt3 },
];

const score = 28;
const radius = 52;
const circumference = 2 * Math.PI * radius;
const dash = (score / 100) * circumference;

export function AnalysisScreen() {
  return (
    <div className="space-y-5">
      {/* Header (mobile back row) */}
      <header className="flex items-center justify-between lg:hidden">
        <Link to="/" className="grid h-10 w-10 place-items-center rounded-full bg-card ring-1 ring-border">
          <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2.25} />
        </Link>
        <span className="text-[13px] font-semibold tracking-tight text-foreground">Analysis</span>
        <div className="flex gap-2">
          <button className="grid h-10 w-10 place-items-center rounded-full bg-card ring-1 ring-border">
            <Bookmark className="h-[16px] w-[16px]" strokeWidth={2.25} />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-card ring-1 ring-border">
            <Share2 className="h-[16px] w-[16px]" strokeWidth={2.25} />
          </button>
        </div>
      </header>

      {/* Desktop title row */}
      <div className="hidden items-center justify-between lg:flex">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">Result</p>
          <h1 className="mt-1 text-[26px] font-semibold tracking-tight text-foreground">Product Analysis</h1>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 rounded-full bg-card px-3 py-2 text-[12.5px] font-semibold ring-1 ring-border hover:bg-secondary">
            <Bookmark className="h-4 w-4" strokeWidth={2.25} /> Save
          </button>
          <button className="flex items-center gap-1.5 rounded-full bg-card px-3 py-2 text-[12.5px] font-semibold ring-1 ring-border hover:bg-secondary">
            <Share2 className="h-4 w-4" strokeWidth={2.25} /> Share
          </button>
        </div>
      </div>

      {/* 2-col on lg: left = product + verdict + nutrition; right = reasons */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {/* LEFT */}
        <div className="space-y-5 lg:col-span-3">
          {/* Product hero */}
          <section className="flex items-center gap-4 rounded-2xl bg-card p-4 ring-1 ring-border sm:p-5">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-secondary sm:h-24 sm:w-24">
              <img src={productMain} alt="Granola Bar" className="h-full w-full object-cover" width={768} height={768} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Snack Bar</p>
              <h1 className="mt-0.5 truncate text-[17px] font-semibold tracking-tight text-foreground sm:text-[20px]">
                Honey Granola Bar
              </h1>
              <p className="text-[12.5px] text-muted-foreground">Nature Valley · 42g</p>
              <p className="mt-1 text-[10.5px] text-muted-foreground/80">UPC 016000275287</p>
            </div>
          </section>

          {/* Verdict */}
          <section className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
            <div className="relative flex items-center gap-5 bg-danger/[0.06] p-5 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.10),transparent_60%)]" />
              <div className="relative h-[130px] w-[130px] shrink-0">
                <svg viewBox="0 0 130 130" className="h-full w-full -rotate-90">
                  <circle cx="65" cy="65" r={radius} stroke="var(--border)" strokeWidth="9" fill="none" />
                  <circle
                    cx="65"
                    cy="65"
                    r={radius}
                    stroke="var(--danger)"
                    strokeWidth="9"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${dash} ${circumference}`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[34px] font-bold leading-none tracking-tight text-foreground">{score}</span>
                  <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    / 100
                  </span>
                </div>
              </div>
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-danger px-2.5 py-1 text-[11px] font-semibold text-danger-foreground">
                  <AlertTriangle className="h-3 w-3" strokeWidth={2.5} />
                  AVOID
                </span>
                <h2 className="mt-2 text-[20px] font-semibold leading-tight tracking-tight text-foreground">
                  Not safe for you
                </h2>
                <p className="mt-1 text-[12.5px] leading-snug text-muted-foreground">
                  3 conflicts with your health profile
                </p>
              </div>
            </div>
          </section>

          {/* Nutrition */}
          <section>
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold tracking-tight text-foreground">Nutrition Summary</h3>
              <span className="text-[11px] font-medium text-muted-foreground">per 42g serving</span>
            </div>
            <div className="mt-2.5 rounded-2xl bg-card p-4 ring-1 ring-border sm:p-5">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-x-8">
                {nutrition.map((n) => {
                  const barColor =
                    n.level === "danger" ? "bg-danger" : n.level === "warning" ? "bg-warning" : "bg-foreground";
                  return (
                    <div key={n.label}>
                      <div className="flex items-baseline justify-between">
                        <span className="text-[12.5px] font-medium text-muted-foreground">{n.label}</span>
                        <span className="text-[13px] font-semibold tabular-nums text-foreground">
                          {n.value}
                          <span className="ml-0.5 text-[11px] font-medium text-muted-foreground">{n.unit}</span>
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${n.pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="space-y-5 lg:col-span-2">
          <section>
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold tracking-tight text-foreground">Why avoid</h3>
              <span className="text-[11px] font-medium text-muted-foreground">3 issues</span>
            </div>
            <div className="mt-2.5 space-y-2">
              {reasons.map((r) => {
                const isDanger = r.level === "danger";
                return (
                  <div
                    key={r.title}
                    className={`flex items-start gap-3 rounded-xl bg-card p-3 ring-1 sm:p-4 ${
                      isDanger ? "ring-danger/20" : "ring-warning/30"
                    }`}
                  >
                    <div
                      className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                        isDanger ? "bg-danger/10" : "bg-warning/15"
                      }`}
                    >
                      <AlertTriangle
                        className={`h-4 w-4 ${isDanger ? "text-danger" : "text-warning"}`}
                        strokeWidth={2.25}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13.5px] font-semibold text-foreground">{r.title}</p>
                      <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground">{r.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Alternatives — full width, grid on md+ */}
      <section>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight text-foreground">Better Alternatives</h3>
            <p className="text-[11.5px] text-muted-foreground">Matched to your profile</p>
          </div>
          <button className="flex items-center gap-0.5 text-[12px] font-medium text-primary">
            See all <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="mt-2.5 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {alternatives.map((a) => (
            <div
              key={a.name}
              className="flex items-center gap-3 rounded-2xl bg-card p-2.5 ring-1 ring-border sm:p-3"
            >
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-secondary sm:h-16 sm:w-16">
                <img
                  src={a.img}
                  alt={a.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13.5px] font-semibold text-foreground">{a.name}</p>
                <p className="text-[11.5px] text-muted-foreground">{a.brand}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <Check className="h-3 w-3 text-success" strokeWidth={3} />
                  <span className="text-[11px] font-semibold text-success">Safe for your profile</span>
                </div>
              </div>
              <div className="flex flex-col items-end pr-1">
                <span className="text-[16px] font-bold tabular-nums leading-none text-success">{a.score}</span>
                <span className="text-[10px] font-medium text-muted-foreground">score</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
