import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles, GraduationCap, Users, ClipboardCheck, MessageCircleQuestion,
  BarChart3, HeartHandshake, BookOpenCheck, Award,
} from "lucide-react";
import aboutImg from "../assets/about-mentor.jpg";
import { SectionHeader, YellowUnderline, BackgroundShapes } from "../components/Shared";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aakash Institutions" },
      { name: "description", content: "Aakash Institutions guides students towards academic and competitive exam success through structured preparation, expert mentoring and regular testing." },
      { property: "og:title", content: "About Aakash Institutions" },
      { property: "og:description", content: "Structured preparation, expert mentoring, regular testing and student-centric academic support." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: GraduationCap, title: "Expert Faculty", desc: "Senior subject experts who train thousands of toppers every year." },
  { icon: BookOpenCheck, title: "Structured Study Plans", desc: "Week-by-week study schedules aligned to exam patterns and syllabus." },
  { icon: ClipboardCheck, title: "Regular Tests", desc: "Frequent assessments to reinforce concepts and build exam stamina." },
  { icon: MessageCircleQuestion, title: "Doubt-Solving Support", desc: "Dedicated sessions and one-on-one doubt clarification for every student." },
  { icon: BarChart3, title: "Performance Tracking", desc: "Detailed analytics and report cards highlighting strengths and gaps." },
  { icon: HeartHandshake, title: "Parent-Friendly Guidance", desc: "Transparent counselling sessions that keep parents involved in the journey." },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <BackgroundShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <span className="badge-accent"><Sparkles className="w-3.5 h-3.5" /> About AAKASH INSTITUTIONS</span>
          <h1 className="mt-5 font-heading font-extrabold text-4xl md:text-6xl text-navy max-w-4xl mx-auto leading-tight">
            Guiding Students Towards <YellowUnderline>Academic & Competitive Exam Success</YellowUnderline>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AAKASH INSTITUTIONS focuses on structured preparation, expert mentoring, regular testing and student-centric academic support.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {["NEET", "JEE Main", "JEE Advanced", "Foundation", "Olympiad"].map((t) => (
              <span key={t} className="badge-blue">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="badge-blue">Who we are</span>
            <h2 className="mt-4 font-heading font-bold text-3xl md:text-5xl text-navy leading-tight">
              An institute built around <YellowUnderline>student outcomes</YellowUnderline>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              AAKASH INSTITUTIONS is a coaching centre focused on preparing students for NEET, JEE Main, JEE Advanced, Olympiads and foundation-level academic programs. The institute supports students through expert faculty, planned study schedules, regular assessments, doubt-clearing sessions and exam-focused preparation.
            </p>
            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {[
                "Structured preparation",
                "Exam-focused teaching",
                "Student progress monitoring",
                "Academic counselling",
                "Regular tests",
                "Doubt-clearing support",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-navy/85">
                  <span className="w-2 h-2 rounded-full bg-yellow" /> {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative">
            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
              <img src={aboutImg} alt="Mentor guiding a student" width={1280} height={1024} loading="lazy" className="w-full h-[420px] object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { icon: Users, label: "Classroom Learning", num: "Live batches" },
                { icon: GraduationCap, label: "Online Support", num: "24×7 access" },
                { icon: MessageCircleQuestion, label: "Doubt Solving", num: "Daily" },
                { icon: ClipboardCheck, label: "Tests", num: "Weekly" },
              ].map((b, i) => (
                <div key={i} className="card-academic card-lift">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-soft-blue text-primary flex items-center justify-center"><b.icon className="w-5 h-5" /></div>
                    <div>
                      <div className="font-heading font-semibold text-sm text-navy">{b.label}</div>
                      <div className="font-accent text-[0.7rem] tracking-wider text-muted-foreground uppercase">{b.num}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -top-5 -right-3 bg-white rounded-2xl shadow-[var(--shadow-card)] px-4 py-3 border border-border animate-float-slow">
              <div className="flex items-center gap-2"><Award className="w-5 h-5 text-yellow" /> <span className="font-heading font-semibold text-navy text-sm">Trusted by parents</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-soft-blue/60">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="What sets us apart" title={<>Six pillars of <YellowUnderline>academic support</YellowUnderline></>} sub="Every program is built on the same student-first foundation." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className="card-academic card-lift reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="w-12 h-12 rounded-2xl bg-yellow/20 text-navy flex items-center justify-center"><v.icon className="w-6 h-6" /></div>
                <h3 className="mt-5 font-heading font-bold text-lg text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Choose the Right Course for Your Goal" text="Talk to an academic counsellor to identify the most effective program based on your class and target exam." />
    </>
  );
}
