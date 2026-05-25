import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection({
  title,
  text,
  button = "Apply Now",
  to = "/contact",
}: { title: string; text: string; button?: string; to?: string }) {
  return (
    <section className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl reveal" style={{ background: "var(--gradient-cta)" }}>
        {/* shapes */}
        <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-yellow/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-sky/40 blur-3xl" />
        <div className="absolute top-8 right-10 hidden md:block">
          <div className="w-16 h-16 rounded-2xl bg-yellow rotate-12 animate-float-slow flex items-center justify-center font-heading font-bold text-navy text-xl">A+</div>
        </div>
        <div className="absolute bottom-10 right-32 hidden md:block">
          <div className="w-12 h-12 rounded-xl bg-white/90 -rotate-6 animate-float-fast flex items-center justify-center font-accent font-bold text-primary text-sm">JEE</div>
        </div>

        <div className="relative px-6 sm:px-12 py-14 md:py-20 text-white text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-yellow font-accent font-bold text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Admissions Open
          </span>
          <h3 className="font-heading font-bold text-3xl md:text-5xl leading-tight">{title}</h3>
          <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">{text}</p>
          <Link to={to} className="mt-8 btn-yellow inline-flex">
            {button} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
