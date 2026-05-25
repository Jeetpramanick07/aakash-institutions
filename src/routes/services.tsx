import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, Stethoscope, Atom, BookOpen, Trophy, Check, Plus, Minus, ArrowRight,
} from "lucide-react";
import servicesImg from "../assets/services-hero.jpg";
import { SectionHeader, YellowUnderline, BackgroundShapes } from "../components/Shared";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NEET, JEE, Foundation & Olympiad Programs" },
      { name: "description", content: "Detailed coaching programs at Aakash Institutions for NEET, JEE Main & Advanced, Foundation (Class 8–10) and Olympiad preparation." },
      { property: "og:title", content: "Coaching Programs — Aakash Institutions" },
      { property: "og:description", content: "Programs designed for NEET, JEE, Foundation and Olympiad success." },
    ],
  }),
  component: ServicesPage,
});

const programs = [
  {
    icon: Stethoscope, tag: "Medical", title: "NEET Coaching",
    suitable: "Class 11, Class 12, repeaters, medical aspirants",
    features: ["NCERT-focused concept clarity", "Biology, Physics and Chemistry preparation", "Regular mock tests", "Doubt-solving support", "Performance analysis"],
  },
  {
    icon: Atom, tag: "Engineering", title: "JEE Main & Advanced Coaching",
    suitable: "Engineering aspirants, Class 11, Class 12, repeaters",
    features: ["Physics, Chemistry, Mathematics preparation", "JEE Main and Advanced focus", "Problem-solving practice", "Test series and performance analysis", "Concept strengthening"],
  },
  {
    icon: BookOpen, tag: "School", title: "Foundation Courses",
    suitable: "Classes 8 to 10",
    features: ["Science and Mathematics fundamentals", "Reasoning and academic strengthening", "Early competitive exam readiness", "School exam support", "Concept-based learning"],
  },
  {
    icon: Trophy, tag: "Olympiad", title: "Olympiad Preparation",
    suitable: "School students preparing for Olympiads and competitive exams",
    features: ["Concept-based preparation", "Practice worksheets", "Competitive exam exposure", "Mentor-led learning", "Regular practice tests"],
  },
];

const faqs = [
  { q: "What courses does AAKASH INSTITUTIONS offer?", a: "We offer NEET, JEE Main & Advanced, Foundation (Class 8–10) and Olympiad preparation programs delivered via classroom, online and hybrid modes." },
  { q: "Does AAKASH INSTITUTIONS provide NEET coaching?", a: "Yes. Our NEET program covers Biology, Physics and Chemistry with NCERT-focused clarity, regular mock tests and dedicated doubt-solving sessions." },
  { q: "Is JEE Main and Advanced coaching available?", a: "Yes. The JEE program covers PCM with problem-solving practice, test series, concept strengthening and detailed performance analysis." },
  { q: "Are foundation courses available for school students?", a: "Yes. Foundation programs for Classes 8 to 10 build strong Science, Mathematics and reasoning fundamentals along with school exam support." },
  { q: "How are students tested and monitored?", a: "Students take weekly assessments, periodic mock tests and full-length papers. Each report includes topic-wise analysis and improvement recommendations." },
  { q: "How can I apply for admission?", a: "Visit the Contact page, fill the enquiry form with your class and target exam, and our counsellor will reach out to guide you through admission." },
];

function ServicesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <BackgroundShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge-accent"><Sparkles className="w-3.5 h-3.5" /> Our Programs</span>
            <h1 className="mt-5 font-heading font-extrabold text-4xl md:text-6xl text-navy leading-tight">
              Courses Designed for <YellowUnderline>NEET, JEE, Foundation</YellowUnderline> & Olympiad Success
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Choose the right program based on your class, exam goal and preparation level.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {programs.map(p => (
                <span key={p.title} className="badge-blue flex items-center gap-1.5"><p.icon className="w-3.5 h-3.5" /> {p.title.split(" ")[0]}</span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
              <img src={servicesImg} alt="Student preparing for entrance exams" width={1280} height={1024} loading="lazy" className="w-full h-[420px] object-cover" />
            </div>
            {/* Floating course badges */}
            {[
              { label: "NEET", c: "bg-yellow text-navy", top: "top-4", side: "left-4" },
              { label: "JEE Main", c: "bg-white text-primary", top: "top-1/2", side: "right-4 -translate-y-1/2" },
              { label: "Foundation", c: "bg-primary text-white", top: "bottom-16", side: "left-6" },
              { label: "Olympiad", c: "bg-white text-navy", top: "bottom-4", side: "right-8" },
            ].map((b, i) => (
              <span key={i} className={`absolute ${b.top} ${b.side} ${b.c} font-accent font-bold text-xs px-3 py-1.5 rounded-full shadow-[var(--shadow-card)] border border-border animate-float-slow`} style={{ animationDelay: `${i * 0.4}s` }}>
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — alternating */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {programs.map((p, i) => (
            <div key={p.title} className={`reveal grid md:grid-cols-5 gap-6 items-stretch`}>
              <div className={`md:col-span-2 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="card-academic card-lift h-full" style={{ background: i % 2 ? "var(--soft-blue)" : "white" }}>
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-yellow/30 text-navy flex items-center justify-center"><p.icon className="w-7 h-7" /></div>
                    <span className="badge-blue">{p.tag}</span>
                  </div>
                  <h3 className="mt-6 font-heading font-bold text-2xl md:text-3xl text-navy">{p.title}</h3>
                  <div className="mt-3 font-accent text-xs tracking-widest uppercase text-primary">Suitable for</div>
                  <p className="mt-1 text-sm text-navy/85">{p.suitable}</p>
                  <Link to="/contact" className="mt-6 btn-primary text-sm inline-flex">Enquire <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="card-academic h-full">
                  <h4 className="font-heading font-bold text-lg text-navy">What you'll get</h4>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-navy/85">
                        <span className="w-5 h-5 rounded-full bg-soft-blue text-primary flex items-center justify-center flex-none mt-0.5"><Check className="w-3 h-3" /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-soft-blue/60">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Common questions" title={<>Everything you need to <YellowUnderline>know</YellowUnderline></>} sub="Quick answers about programs, admissions and learning support." />
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="reveal bg-white border border-border rounded-2xl overflow-hidden card-lift">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 text-left px-5 py-4">
                    <span className="font-heading font-semibold text-navy text-base">{f.q}</span>
                    <span className={`w-9 h-9 rounded-full flex items-center justify-center flex-none transition-colors ${isOpen ? "bg-primary text-white" : "bg-soft-blue text-primary"}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Need Help Choosing the Right Program?" text="Share your class, target exam and preparation goal. Our academic counsellor will guide you with the right course option." button="Start Enquiry" />
    </>
  );
}
