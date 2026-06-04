import { Activity, AlertCircle, ChevronRight, Lightbulb, ScanLine, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

const recentScans = [
  { name: "Greek Yogurt, Plain", brand: "Chobani", status: "safe", date: "Today, 9:12 AM" },
  { name: "Whole Grain Crackers", brand: "Triscuit", status: "caution", date: "Yesterday, 4:38 PM" },
  { name: "Peanut Butter Cups", brand: "Reese's", status: "avoid", date: "Yesterday, 2:01 PM" },
  { name: "Cold Brew Coffee", brand: "Stumptown", status: "safe", date: "Mon, 8:24 AM" },
];

const statusMap = {
  safe: { label: "Safe", className: "bg-success/10 text-success", dot: "bg-success" },
  caution: { label: "Caution", className: "bg-warning/10 text-warning", dot: "bg-warning" },
  avoid: { label: "Avoid", className: "bg-danger/10 text-danger", dot: "bg-danger" },
} as const;

export function HomeScreen() {
  return (
    <div className="space-y-5">
      {/* Greeting */}
      <header className="flex items-end justify-between">
        <div>
          <p className="text-[13px] font-medium text-muted-foreground">Good Morning</p>
          <h1 className="mt-0.5 text-[22px] font-semibold tracking-tight text-foreground sm:text-[26px] lg:text-[30px]">
            Sarah Chen
          </h1>
        </div>
      </header>

      {/* Top grid: profile + CTA (md+ side-by-side) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Health profile */}
        <section className="rounded-2xl bg-card p-4 ring-1 ring-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10">
                <ShieldCheck className="h-4 w-4 text-primary" strokeWidth={2.25} />
              </div>
              <span className="text-[13px] font-semibold text-foreground">Health Profile</span>
            </div>
            <button className="flex items-center gap-0.5 text-[12px] font-medium text-muted-foreground">
              Edit <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 border-t border-border pt-3">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Conditions</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                <span className="rounded-md bg-secondary px-2 py-1 text-[12px] font-medium text-foreground">Diabetes</span>
                <span className="rounded-md bg-secondary px-2 py-1 text-[12px] font-medium text-foreground">Hypertension</span>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Allergies</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                <span className="rounded-md bg-danger/10 px-2 py-1 text-[12px] font-medium text-danger">Peanut</span>
                <span className="rounded-md bg-danger/10 px-2 py-1 text-[12px] font-medium text-danger">Gluten</span>
              </div>
            </div>
          </div>
        </section>

        {/* Scan CTA */}
        <section>
          <Link
            to="/scan"
            className="relative block h-full w-full overflow-hidden rounded-2xl bg-foreground p-5 text-left shadow-lg shadow-foreground/10"
          >
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute right-4 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-2xl bg-primary">
              <ScanLine className="h-7 w-7 text-primary-foreground" strokeWidth={2.25} />
            </div>
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">Quick Action</p>
              <h2 className="mt-1 text-[20px] font-semibold tracking-tight text-background">Scan a Product</h2>
              <p className="mt-1 max-w-[240px] text-[13px] leading-snug text-background/60">
                Instant safety analysis for your profile
              </p>
            </div>
          </Link>
        </section>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-2.5 sm:gap-4">
        {[
          { label: "Scanned", value: "47", sub: "this week", icon: ScanLine, accent: "text-foreground" },
          { label: "Safe", value: "32", sub: "products", icon: ShieldCheck, accent: "text-success" },
          { label: "Avoided", value: "8", sub: "alerts", icon: AlertCircle, accent: "text-danger" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-card p-3 ring-1 ring-border sm:p-4">
            <s.icon className={`h-4 w-4 ${s.accent}`} strokeWidth={2.25} />
            <p className="mt-2 text-[20px] font-semibold tracking-tight text-foreground sm:text-[24px]">{s.value}</p>
            <p className="text-[11px] font-medium text-muted-foreground sm:text-[12px]">
              {s.label} <span className="text-muted-foreground/60">· {s.sub}</span>
            </p>
          </div>
        ))}
      </section>

      {/* Recent scans + Tip (lg becomes 2-col with tip in sidebar) */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-semibold tracking-tight text-foreground">Recent Scans</h3>
            <button className="text-[12px] font-medium text-primary">See all</button>
          </div>
          <div className="mt-2.5 divide-y divide-border rounded-2xl bg-card ring-1 ring-border">
            {recentScans.map((scan) => {
              const s = statusMap[scan.status as keyof typeof statusMap];
              return (
                <Link
                  to="/analysis"
                  key={scan.name}
                  className="flex items-center gap-3 px-3.5 py-3 transition-colors hover:bg-secondary/40 sm:px-5 sm:py-4"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary">
                    <Activity className="h-4 w-4 text-muted-foreground" strokeWidth={2.25} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13.5px] font-semibold text-foreground">{scan.name}</p>
                    <p className="mt-0.5 text-[11.5px] text-muted-foreground">
                      {scan.brand} · {scan.date}
                    </p>
                  </div>
                  <span className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold ${s.className}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="flex gap-3 rounded-2xl bg-card p-4 ring-1 ring-border lg:flex-col lg:items-start">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-warning/15">
            <Lightbulb className="h-4 w-4 text-warning" strokeWidth={2.25} />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-foreground">Daily Tip</p>
            <p className="mt-0.5 text-[12.5px] leading-snug text-muted-foreground">
              Aim for under 25g of added sugar today. You've consumed 14g so far.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
