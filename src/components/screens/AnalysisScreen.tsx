import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Bookmark,
  Check,
  ChevronLeft,
  ChevronRight,
  Share2,
  X,
  Users,
  Activity,
  Sparkles,
  Info,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import productMain from "@/assets/product-main.jpg";
import alt1 from "@/assets/alt-1.jpg";
import alt2 from "@/assets/alt-2.jpg";
import alt3 from "@/assets/alt-3.jpg";

const harmfulIngredients = [
  {
    name: "Peanuts / Peanut Oil",
    type: "Allergen Conflict",
    severity: "danger",
    reason: "Sarah Chen and Lily Chen have severe peanut allergy profiles. Ingestion can trigger immediate anaphylaxis.",
    productPresence: "Contains whole roasted peanuts and peanut butter paste.",
  },
  {
    name: "18g Sugar Content",
    type: "Diabetic Conflict",
    severity: "danger",
    reason: "Exceeds Sarah Chen's 10g diabetic single-serving limit. High risk of causing an immediate blood glucose spike.",
    productPresence: "Uses honey and molasses heavily as binder sweeteners.",
  },
  {
    name: "480mg Sodium",
    type: "Hypertension Caution",
    severity: "warning",
    reason: "Represents 21% of daily threshold. Exceeds Michael Chen's hypertension diet recommendation, causing arterial strain.",
    productPresence: "Added salts and processed sodium-based preservatives.",
  },
];

const familyMembers = [
  {
    name: "Sarah Chen",
    relation: "You",
    avatar: "SC",
    color: "bg-purple-500 text-purple-100",
    status: "avoid",
    reason: "Severe peanut allergy and diabetic sugar limit conflict.",
  },
  {
    name: "Michael Chen",
    relation: "Dad",
    avatar: "MC",
    color: "bg-blue-500 text-blue-100",
    status: "avoid",
    reason: "Hypertension. High sodium content violates his diet.",
  },
  {
    name: "Jenny Chen",
    relation: "Mom",
    avatar: "JC",
    color: "bg-emerald-500 text-emerald-100",
    status: "safe",
    reason: "No active conflicts. Safe to consume in moderation.",
  },
  {
    name: "Lily Chen",
    relation: "Sister",
    avatar: "LC",
    color: "bg-pink-500 text-pink-100",
    status: "avoid",
    reason: "Shares severe peanut allergy; risk of allergic reaction.",
  },
  {
    name: "David Chen",
    relation: "Brother",
    avatar: "DC",
    color: "bg-orange-500 text-orange-100",
    status: "safe",
    reason: "No restrictions. Active teen, great source of protein.",
  },
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
          <button className="flex items-center gap-1.5 rounded-full bg-card px-3 py-2 text-[12.5px] font-semibold ring-1 ring-border hover:bg-secondary cursor-pointer">
            <Bookmark className="h-4 w-4" strokeWidth={2.25} /> Save
          </button>
          <button className="flex items-center gap-1.5 rounded-full bg-card px-3 py-2 text-[12.5px] font-semibold ring-1 ring-border hover:bg-secondary cursor-pointer">
            <Share2 className="h-4 w-4" strokeWidth={2.25} /> Share
          </button>
        </div>
      </div>

      {/* Main content grid: Left = Product Info & swipeable cards; Right = Alternatives */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {/* LEFT COLUMN */}
        <div className="space-y-5 lg:col-span-3">
          {/* Product hero card */}
          <section className="flex items-center gap-4 rounded-2xl bg-card p-4 ring-1 ring-border sm:p-5">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-secondary sm:h-24 sm:w-24 border border-border">
              <img src={productMain} alt="Granola Bar" className="h-full w-full object-cover" width={768} height={768} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Snack Bar</p>
              <h2 className="mt-0.5 truncate text-[17px] font-semibold tracking-tight text-foreground sm:text-[20px]">
                Honey Granola Bar
              </h2>
              <p className="text-[12.5px] text-muted-foreground">Nature Valley · 42g</p>
              <p className="mt-1 text-[10.5px] text-muted-foreground/80">UPC 016000275287</p>
            </div>
          </section>

          {/* Swipeable cards deck */}
          <SwipeableCardDeck />
        </div>

        {/* RIGHT COLUMN (Alternatives) */}
        <div className="space-y-5 lg:col-span-2">
          <section className="h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[15px] font-semibold tracking-tight text-foreground">Better Alternatives</h3>
                  <p className="text-[11.5px] text-muted-foreground">Matched to your profile restrictions</p>
                </div>
                <button className="flex items-center gap-0.5 text-[12px] font-medium text-primary hover:underline cursor-pointer">
                  See all <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {alternatives.map((a) => (
                  <div
                    key={a.name}
                    className="flex items-center gap-3 rounded-2xl bg-card p-2.5 ring-1 ring-border sm:p-3 hover:bg-secondary/20 transition-colors"
                  >
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-secondary sm:h-16 sm:w-16 border border-border">
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
            </div>

            {/* Quick guidance alert at bottom of right column */}
            <div className="mt-5 rounded-2xl bg-primary/5 border border-primary/20 p-4">
              <h4 className="text-[13px] font-bold text-primary flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 animate-spin-slow" />
                Smart Alternative Matching
              </h4>
              <p className="mt-1 text-[12px] text-muted-foreground leading-relaxed">
                These bars are verified peanut-free, gluten-free, and fit under Sarah's 10g sugar limit per serving.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SwipeableCardDeck() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [flyOutDirection, setFlyOutDirection] = useState<"left" | "right" | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setDragOffset({ x: dx, y: dy });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    const threshold = 120;
    if (dragOffset.x > threshold) {
      // Swipe Right -> Go to previous card
      setFlyOutDirection("right");
      setTimeout(() => {
        setActiveCardIndex((prev) => (prev - 1 + 3) % 3);
        setFlyOutDirection(null);
        setDragOffset({ x: 0, y: 0 });
      }, 250);
    } else if (dragOffset.x < -threshold) {
      // Swipe Left -> Go to next card
      setFlyOutDirection("left");
      setTimeout(() => {
        setActiveCardIndex((prev) => (prev + 1) % 3);
        setFlyOutDirection(null);
        setDragOffset({ x: 0, y: 0 });
      }, 250);
    } else {
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const triggerNext = () => {
    setFlyOutDirection("left");
    setTimeout(() => {
      setActiveCardIndex((prev) => (prev + 1) % 3);
      setFlyOutDirection(null);
    }, 250);
  };

  const triggerPrev = () => {
    setFlyOutDirection("right");
    setTimeout(() => {
      setActiveCardIndex((prev) => (prev - 1 + 3) % 3);
      setFlyOutDirection(null);
    }, 250);
  };

  const cardsOrder = [
    (activeCardIndex + 2) % 3,
    (activeCardIndex + 1) % 3,
    activeCardIndex,
  ];

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      {/* Cards stack container */}
      <div className="relative w-full max-w-md h-[460px] select-none touch-none">
        {cardsOrder.map((idx) => {
          const isTop = idx === activeCardIndex;
          const isMiddle = idx === (activeCardIndex + 1) % 3;

          let style: React.CSSProperties = {};

          if (isTop) {
            style = {
              transform: flyOutDirection
                ? `translate3d(${flyOutDirection === "left" ? "-500px" : "500px"}, ${dragOffset.y}px, 0) rotate(${flyOutDirection === "left" ? "-40deg" : "40deg"})`
                : `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0) rotate(${dragOffset.x * 0.08}deg)`,
              opacity: flyOutDirection ? 0 : 1,
              zIndex: 30,
              cursor: isDragging ? "grabbing" : "grab",
              transition: isDragging
                ? "none"
                : "transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.1), opacity 0.35s ease",
            };
          } else if (isMiddle) {
            style = {
              transform: `translate3d(0, 10px, 0) scale(0.96)`,
              zIndex: 20,
              opacity: 0.88,
              transition: "transform 0.35s ease, opacity 0.35s ease",
            };
          } else {
            // Bottom card
            style = {
              transform: `translate3d(0, 20px, 0) scale(0.92)`,
              zIndex: 10,
              opacity: 0.5,
              transition: "transform 0.35s ease, opacity 0.35s ease",
            };
          }

          return (
            <div
              key={idx}
              style={style}
              onPointerDown={isTop ? handlePointerDown : undefined}
              onPointerMove={isTop ? handlePointerMove : undefined}
              onPointerUp={isTop ? handlePointerUp : undefined}
              onPointerCancel={isTop ? handlePointerUp : undefined}
              className="absolute inset-0 rounded-2xl bg-card border border-border shadow-md p-5 overflow-hidden flex flex-col justify-between"
            >
              {idx === 0 && <SummaryCardContent />}
              {idx === 1 && <IngredientsCardContent />}
              {idx === 2 && <FamilyCardContent />}

              {/* Swipe Direction Overlay Badge */}
              {isTop && Math.abs(dragOffset.x) > 30 && (
                <div
                  className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-150 ${
                    dragOffset.x > 0 ? "bg-success/[0.06]" : "bg-primary/[0.06]"
                  }`}
                  style={{ opacity: Math.min(Math.abs(dragOffset.x) / 150, 0.85) }}
                >
                  <span
                    className={`px-4 py-2 rounded-full text-[12px] font-bold border shadow-sm ${
                      dragOffset.x > 0
                        ? "bg-success text-success-foreground border-success/30"
                        : "bg-primary text-primary-foreground border-primary/30"
                    }`}
                  >
                    {dragOffset.x > 0 ? "← Previous Card" : "Next Card →"}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Indicators & Controls */}
      <div className="flex items-center justify-between w-full max-w-md px-2 mt-2">
        <button
          onClick={triggerPrev}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
          title="Previous Card"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActiveCardIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeCardIndex === i ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              title={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={triggerNext}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
          title="Next Card"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Helper text */}
      <p className="text-[11px] text-muted-foreground text-center flex items-center gap-1 justify-center">
        <Sparkles className="h-3 w-3 text-primary animate-pulse" />
        Swipe card or use arrows to view profile details
      </p>
    </div>
  );
}

function SummaryCardContent() {
  return (
    <div className="flex-1 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-danger animate-pulse" />
          <span className="text-[14px] font-bold tracking-tight text-foreground">Dietitian Summary</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-danger/10 px-2 py-0.5 text-[10px] font-bold text-danger border border-danger/20">
          <AlertTriangle className="h-3 w-3" />
          AVOID
        </span>
      </div>

      {/* Circle rating and explanation */}
      <div className="flex items-center gap-4 my-3 bg-danger/[0.03] border border-danger/10 rounded-xl p-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.04),transparent_60%)]" />
        <div className="relative h-[84px] w-[84px] shrink-0">
          <svg viewBox="0 0 130 130" className="h-full w-full -rotate-90">
            <circle cx="65" cy="65" r={radius} stroke="var(--border)" strokeWidth="10" fill="none" />
            <circle
              cx="65"
              cy="65"
              r={radius}
              stroke="var(--danger)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference}`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[25px] font-black leading-none tracking-tight text-foreground">{score}</span>
            <span className="mt-0.5 text-[8px] font-bold uppercase tracking-wider text-muted-foreground">
              / 100
            </span>
          </div>
        </div>
        <div>
          <h4 className="text-[15px] font-bold leading-tight text-foreground">Not Safe for Sarah</h4>
          <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
            3 ingredients conflict with active allergies and wellness profiles.
          </p>
        </div>
      </div>

      {/* Nutrition List */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 my-1 max-h-[190px]">
        {nutrition.map((n) => {
          const isDanger = n.level === "danger";
          const isWarning = n.level === "warning";
          const barColor = isDanger ? "bg-danger" : isWarning ? "bg-warning" : "bg-foreground";

          return (
            <div key={n.label} className="group">
              <div className="flex items-baseline justify-between">
                <span className="text-[12px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {n.label}
                </span>
                <span className={`text-[12px] font-bold tabular-nums ${isDanger ? "text-danger" : isWarning ? "text-warning" : "text-foreground"}`}>
                  {n.value}
                  <span className="ml-0.5 text-[10px] font-medium text-muted-foreground">{n.unit}</span>
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                  style={{ width: `${n.pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-border/50 pt-3 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Serving size: 42g</span>
        <span className="font-semibold text-primary flex items-center gap-0.5">
          Swipe to view warnings <ChevronRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}

function IngredientsCardContent() {
  return (
    <div className="flex-1 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-danger" />
          <span className="text-[14px] font-bold tracking-tight text-foreground">Harmful Ingredients</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-danger/10 px-2 py-0.5 text-[10px] font-bold text-danger border border-danger/20">
          3 DANGER ALERTS
        </span>
      </div>

      {/* Harmful List */}
      <div className="flex-1 overflow-y-auto space-y-3.5 my-3 pr-1 max-h-[300px]">
        {harmfulIngredients.map((item, index) => {
          const isDanger = item.severity === "danger";
          return (
            <div
              key={index}
              className={`rounded-xl border p-3.5 transition-all duration-200 hover:scale-[1.01] hover:shadow-sm ${
                isDanger
                  ? "bg-danger/[0.02] border-danger/15 hover:bg-danger/[0.04]"
                  : "bg-warning/[0.02] border-warning/15 hover:bg-warning/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[11.5px] font-bold uppercase tracking-wide px-2 py-0.5 rounded ${
                  isDanger ? "bg-danger text-danger-foreground" : "bg-warning text-warning-foreground"
                }`}>
                  {item.name}
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground/70">
                  {item.type}
                </span>
              </div>
              <p className="mt-2 text-[12px] font-medium leading-relaxed text-foreground">
                <span className="font-bold text-danger">Conflict reason: </span>{item.reason}
              </p>
              <p className="mt-1.5 text-[11px] text-muted-foreground flex items-start gap-1">
                <Info className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                <span>
                  <span className="font-semibold text-foreground/80">Product source:</span> {item.productPresence}
                </span>
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-border/50 pt-3 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Nutritional Warnings</span>
        <span className="font-semibold text-primary flex items-center gap-0.5">
          Swipe for family list <ChevronRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}

function FamilyCardContent() {
  return (
    <div className="flex-1 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <span className="text-[14px] font-bold tracking-tight text-foreground">Family Compatibility</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary border border-primary/20">
          5 PROFILES
        </span>
      </div>

      {/* Family list */}
      <div className="flex-1 overflow-y-auto space-y-2.5 my-3 pr-1 max-h-[300px]">
        {familyMembers.map((member, index) => {
          const isSafe = member.status === "safe";
          return (
            <div
              key={index}
              className={`flex items-center justify-between rounded-xl border p-2.5 transition-all duration-200 hover:scale-[1.01] ${
                isSafe
                  ? "bg-success/[0.01] border-success/15 hover:bg-success/[0.03]"
                  : "bg-danger/[0.01] border-danger/15 hover:bg-danger/[0.03]"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 shadow-sm ${member.color}`}>
                  {member.avatar}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[12.5px] font-bold text-foreground leading-none">{member.name}</span>
                    <span className="text-[9.5px] font-medium text-muted-foreground/80 bg-secondary px-1.5 py-0.5 rounded leading-none">
                      {member.relation}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground leading-snug truncate max-w-[200px] sm:max-w-[220px]" title={member.reason}>
                    {member.reason}
                  </p>
                </div>
              </div>
              <div className="shrink-0 ml-2">
                {isSafe ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold text-success border border-success/20">
                    <Check className="h-3 w-3" strokeWidth={3} />
                    SAFE
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-danger/15 px-2 py-0.5 text-[10px] font-bold text-danger border border-danger/20">
                    <X className="h-3 w-3" strokeWidth={3} />
                    AVOID
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-border/50 pt-3 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Family Compatibility Matrix</span>
        <span className="font-semibold text-primary flex items-center gap-0.5">
          Swipe to return to start <ChevronRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}
