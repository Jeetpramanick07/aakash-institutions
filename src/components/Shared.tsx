import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} reveal`}>
      {eyebrow && <span className="badge-blue mb-4">{eyebrow}</span>}
      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

export function YellowUnderline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 right-0 bottom-1 h-3 bg-yellow/60 -z-0 rounded-sm" />
    </span>
  );
}

export function BackgroundShapes() {
  return (
    <>
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-soft-blue blur-3xl opacity-70 animate-blob pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 rounded-full bg-yellow/20 blur-3xl opacity-60 animate-blob pointer-events-none" style={{ animationDelay: "3s" }} />
    </>
  );
}
