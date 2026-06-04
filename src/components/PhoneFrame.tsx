import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  label?: string;
  dark?: boolean;
}

export function PhoneFrame({ children, label, dark }: PhoneFrameProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-[780px] w-[380px] rounded-[44px] bg-neutral-900 p-[10px] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.25),0_18px_36px_-18px_rgba(15,23,42,0.3)] ring-1 ring-black/5">
        <div className={`relative h-full w-full overflow-hidden rounded-[36px] ${dark ? "bg-black" : "bg-background"}`}>
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-50 h-[26px] w-[110px] -translate-x-1/2 rounded-full bg-neutral-900" />
          {/* Status bar */}
          <div className={`relative z-40 flex h-11 items-center justify-between px-7 pt-2 text-[13px] font-semibold ${dark ? "text-white" : "text-foreground"}`}>
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5.5L3 7.5L7 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 5.5L10 7.5L14 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><rect x="0" y="6" width="2.5" height="5" rx="0.5"/><rect x="4" y="4" width="2.5" height="7" rx="0.5"/><rect x="8" y="2" width="2.5" height="9" rx="0.5"/><rect x="12" y="0" width="2.5" height="11" rx="0.5"/></svg>
              <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="currentColor"/><rect x="2" y="2" width="15" height="7" rx="1.5" fill="currentColor"/><rect x="19.5" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor"/></svg>
            </span>
          </div>
          <div className="h-[calc(100%-44px)] overflow-y-auto overflow-x-hidden">
            {children}
          </div>
        </div>
      </div>
      {label && <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</span>}
    </div>
  );
}
