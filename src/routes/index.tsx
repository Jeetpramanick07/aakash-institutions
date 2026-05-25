import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap, ArrowRight, Stethoscope, Atom, BookOpen, Trophy,
  ClipboardList, Users, BookMarked, MonitorPlay, Target, Award,
  Sparkles, ShieldCheck, BarChart3, Star,
} from "lucide-react";
import heroImg from "../assets/hero-students.jpg";
import { Counter } from "../components/Counter";
import { SectionHeader, YellowUnderline, BackgroundShapes } from "../components/Shared";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aakash Institutions — NEET, JEE & Foundation Coaching" },
      { name: "description", content: "Build your future with expert NEET, JEE Main & Advanced, Foundation and Olympiad coaching. Structured study plans, regular tests and doubt-solving support." },
      { property: "og:title", content: "Aakash Institutions — NEET, JEE & Foundation Coaching" },
      { property: "og:description", content: "Expert coaching for NEET, JEE Main & Advanced, Foundation and Olympiad." },
    ],
  }),
  component: HomePage,
});

const courses = [
  { icon: Stethoscope, title: "NEET Coaching", desc: "Focused medical entrance preparation with concept clarity, NCERT-based learning, regular tests, and doubt-solving support.", points: ["NCERT-focused clarity", "Biology, Physics, Chemistry", "Weekly mock tests"] },
  { icon: Atom, title: "JEE Main & Advanced", desc: "Engineering entrance preparation designed around problem-solving, concept depth, test practice, and performance improvement.", points: ["PCM mastery", "Test series + analysis", "Problem-solving drills"] },
  { icon: BookOpen, title: "Foundation Courses", desc: "Early academic preparation for Classes 8 to 10 with strong fundamentals in Science, Mathematics, and reasoning.", points: ["Science & Maths basics", "School exam support", "Reasoning skills"] },
  { icon: Trophy, title: "Olympiad Preparation", desc: "Specialized preparation support for competitive exams and Olympiads with practice-focused learning.", points: ["Concept-based prep", "Practice worksheets", "Mentor-led learning"] },
];

const trust = [
  { value: 37, suffix: "+", label: "Years of Excellence", icon: Award },
  { value: 400, suffix: "+", label: "Coaching Centers", icon: ShieldCheck },
  { value: 1000000, suffix: "+", label: "Qualified Students", icon: GraduationCap, display: "10 Lac+" },
  { value: 5500, suffix: "+", label: "Expert Faculty", icon: Users },
];

const steps = [
  { title: "Admission Enquiry", desc: "Share class, target exam and preferred mode.", icon: ClipboardList },
  { title: "Counselling & Course Selection", desc: "Expert counsellor helps choose the right program.", icon: Users },
  { title: "Batch Allocation", desc: "Get placed in a batch matched to your level.", icon: BookMarked },
  { title: "Classroom / Online Learning", desc: "Structured live sessions led by senior faculty.", icon: MonitorPlay },
  { title: "Regular Tests & Doubt Solving", desc: "Weekly assessments and dedicated doubt sessions.", icon: Target },
  { title: "Performance Review & Exam Readiness", desc: "Detailed reports and personalised improvement plans.", icon: BarChart3 },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <BackgroundShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-20 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="badge-accent">
              <Sparkles className="w-3.5 h-3.5" /> Admissions 2026 Open
            </span>
            <h1 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.05]">
              Build Your Future with Expert{" "}
              <YellowUnderline>NEET, JEE</YellowUnderline> & Foundation Coaching
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              AAKASH INSTITUTIONS helps students prepare for NEET, JEE Main, JEE Advanced, Olympiads and school-level foundation programs through expert teaching, structured study plans, regular tests and doubt-solving support.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary"><GraduationCap className="w-4 h-4" /> Apply Now</Link>
              <Link to="/services" className="btn-outline">Explore Courses <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-navy/80">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> 37+ Years Trusted</span>
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow" fill="currentColor" /> Rank-Producing Faculty</span>
              <span className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-primary" /> Performance Tracked</span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-lift)] border border-border">
              <img src={heroImg} alt="Students preparing for NEET and JEE" width={1280} height={1024} className="w-full h-[420px] md:h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 md:-left-8 bg-white rounded-2xl shadow-[var(--shadow-card)] p-3 pr-4 border border-border animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-soft-blue text-primary flex items-center justify-center"><Stethoscope className="w-5 h-5" /></div>
                <div>
                  <div className="font-accent text-[0.65rem] tracking-widest text-primary">COURSE</div>
                  <div className="font-heading font-semibold text-navy text-sm">NEET Prep</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 md:-left-10 bg-white rounded-2xl shadow-[var(--shadow-card)] p-3 pr-5 border border-border animate-float-fast" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow/20 text-navy flex items-center justify-center"><Trophy className="w-5 h-5" /></div>
                <div>
                  <div className="font-accent text-[0.65rem] tracking-widest text-navy/60">RANK</div>
                  <div className="font-heading font-semibold text-navy text-sm">All India Top 100</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-2 md:-right-8 -translate-y-1/2 bg-white rounded-2xl shadow-[var(--shadow-card)] p-3 pr-4 border border-border animate-float-slow" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-soft-blue text-primary flex items-center justify-center"><Atom className="w-5 h-5" /></div>
                <div>
                  <div className="font-accent text-[0.65rem] tracking-widest text-primary">COURSE</div>
                  <div className="font-heading font-semibold text-navy text-sm">JEE Main + Adv</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-3 md:right-6 bg-white rounded-2xl shadow-[var(--shadow-card)] p-4 border border-border w-[200px] animate-float-fast" style={{ animationDelay: "1.4s" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-accent text-[0.65rem] tracking-widest text-navy/60">PROGRESS</span>
                <span className="font-heading font-bold text-primary text-sm">92%</span>
              </div>
              <div className="h-2 rounded-full bg-soft-blue overflow-hidden">
                <div className="h-full w-[92%] rounded-full" style={{ background: "linear-gradient(90deg, var(--primary), var(--sky))" }} />
              </div>
              <div className="mt-2 text-[0.7rem] text-muted-foreground">Mock Test Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-soft-blue/60">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Trusted by Lakhs of Families" title={<>A legacy of <YellowUnderline>academic excellence</YellowUnderline></>} sub="Three decades of rank-producing coaching backed by structured methodology and performance tracking." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trust.map((t, i) => (
              <div key={i} className="card-academic text-center reveal card-lift" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-2xl bg-soft-blue text-primary flex items-center justify-center mx-auto"><t.icon className="w-6 h-6" /></div>
                <div className="mt-4 font-heading font-extrabold text-3xl md:text-4xl text-navy">
                  {t.display ? t.display : <><Counter to={t.value} suffix={t.suffix} /></>}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Programs we offer" title={<>Courses designed for <YellowUnderline>every exam goal</YellowUnderline></>} sub="Choose a program built around your class, target exam and preparation level." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((c, i) => (
              <div key={i} className="card-academic card-lift reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-2xl bg-soft-blue text-primary flex items-center justify-center"><c.icon className="w-6 h-6" /></div>
                <h3 className="mt-5 font-heading font-bold text-lg text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-navy/80">
                  {c.points.map((p, j) => (
                    <li key={j} className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow flex-none" /> {p}</li>
                  ))}
                </ul>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-soft-card relative overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-yellow/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <SectionHeader eyebrow="Student journey" title={<>A clear <YellowUnderline>roadmap</YellowUnderline> from enquiry to exam day</>} sub="Every student moves through a structured six-step learning path designed to maximise outcomes." />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="card-academic card-lift h-full relative">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-soft-blue text-primary flex items-center justify-center"><s.icon className="w-6 h-6" /></div>
                    <div className="w-10 h-10 rounded-full bg-yellow text-navy font-heading font-bold flex items-center justify-center text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <h3 className="mt-5 font-heading font-bold text-lg text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                {/* dotted connector for desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center my-2">
                    <div className="flex gap-1">
                      {[0,1,2].map(d => <span key={d} className="w-1.5 h-1.5 rounded-full bg-primary/40" />)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Preparation with AAKASH INSTITUTIONS"
        text="Get expert guidance for NEET, JEE, Olympiads and foundation courses. Speak with our academic counsellor and choose the right program for your goal."
      />
    </>
  );
}
