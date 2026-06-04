import { ArrowLeft, Image as ImageIcon, Keyboard, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ScannerScreen() {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-black text-white lg:min-h-0 lg:rounded-3xl">
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-[520px] flex-col lg:min-h-[720px]">
        {/* Faux camera viewport */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black lg:rounded-3xl" />
        <div
          className="absolute inset-0 opacity-30 lg:rounded-3xl"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 40%, rgba(34,197,94,0.18), transparent 60%)",
          }}
        />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-5 pt-4">
          <Link
            to="/"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/10"
          >
            <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2.25} />
          </Link>
          <div className="rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-semibold backdrop-blur-md ring-1 ring-white/10">
            Barcode Scanner
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/10">
            <Zap className="h-[18px] w-[18px]" strokeWidth={2.25} />
          </button>
        </div>

        {/* Center frame */}
        <div className="relative z-10 mt-10 flex flex-1 flex-col items-center sm:mt-16">
          <p className="text-[13px] font-medium text-white/60">Align barcode within frame</p>
          <div className="relative mt-5 h-[260px] w-[300px] sm:h-[320px] sm:w-[380px]">
            <div className="absolute inset-0 rounded-[28px] bg-white/[0.03] ring-1 ring-white/10" />
            {[
              "top-0 left-0 border-t-[3px] border-l-[3px] rounded-tl-[24px]",
              "top-0 right-0 border-t-[3px] border-r-[3px] rounded-tr-[24px]",
              "bottom-0 left-0 border-b-[3px] border-l-[3px] rounded-bl-[24px]",
              "bottom-0 right-0 border-b-[3px] border-r-[3px] rounded-br-[24px]",
            ].map((c) => (
              <span key={c} className={`absolute h-10 w-10 border-primary ${c}`} />
            ))}
            <div className="absolute inset-x-6 top-0 overflow-hidden">
              <div className="animate-scan-line h-[220px] sm:h-[280px]">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_12px_2px_rgba(34,197,94,0.7)]" />
              </div>
            </div>
            <div className="absolute inset-x-10 top-1/2 flex h-12 -translate-y-1/2 items-end gap-[2px] opacity-25">
              {Array.from({ length: 48 }).map((_, i) => (
                <span key={i} className="w-[2px] bg-white" style={{ height: `${30 + ((i * 37) % 70)}%` }} />
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 ring-1 ring-primary/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[12px] font-semibold text-primary">Scanning…</span>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="relative z-10 px-5 pb-8 pt-6">
          <div className="rounded-3xl bg-white/[0.06] p-3 backdrop-blur-xl ring-1 ring-white/10">
            <div className="grid grid-cols-2 gap-2.5">
              <button className="flex flex-col items-center gap-1.5 rounded-2xl bg-white/[0.04] py-3 ring-1 ring-white/5">
                <Keyboard className="h-5 w-5" strokeWidth={2} />
                <span className="text-[12px] font-semibold">Enter Barcode</span>
              </button>
              <Link
                to="/analysis"
                className="flex flex-col items-center gap-1.5 rounded-2xl bg-white/[0.04] py-3 ring-1 ring-white/5"
              >
                <ImageIcon className="h-5 w-5" strokeWidth={2} />
                <span className="text-[12px] font-semibold">From Gallery</span>
              </Link>
            </div>
            <p className="mt-3 text-center text-[11px] text-white/50">
              Analysis based on your profile · Diabetes, Peanut allergy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
