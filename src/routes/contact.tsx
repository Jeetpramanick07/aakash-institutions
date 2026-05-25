import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles, Phone, Mail, MapPin, MonitorPlay, ClipboardCheck, Headphones, Send, CheckCircle2,
} from "lucide-react";
import contactImg from "../assets/contact-hero.jpg";
import { YellowUnderline, BackgroundShapes } from "../components/Shared";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Speak with an Academic Counsellor | Aakash Institutions" },
      { name: "description", content: "Share your exam goal, class and preferred course. Our team will help you choose the right NEET, JEE, Foundation or Olympiad preparation path." },
      { property: "og:title", content: "Contact Aakash Institutions" },
      { property: "og:description", content: "Talk to an academic counsellor about NEET, JEE, Foundation or Olympiad coaching." },
    ],
  }),
  component: ContactPage,
});

const infoCards = [
  { icon: ClipboardCheck, title: "Admission Enquiry", text: "Apply for NEET, JEE, Foundation or Olympiad batches.", meta: "admissions@aakashinstitutions.edu" },
  { icon: Headphones, title: "Course Counselling", text: "Get expert guidance on the right program for your goal.", meta: "+91 98765 43210" },
  { icon: MapPin, title: "Nearest Centre", text: "Find your closest Aakash Institutions classroom centre.", meta: "400+ centres across India" },
  { icon: MonitorPlay, title: "Online Learning Support", text: "Assistance with live classes, recordings and assessments.", meta: "online.support@aakash.edu" },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
    (e.currentTarget as HTMLFormElement).reset();
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-border bg-white text-navy text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <BackgroundShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge-accent"><Sparkles className="w-3.5 h-3.5" /> Talk to us</span>
            <h1 className="mt-5 font-heading font-extrabold text-4xl md:text-6xl text-navy leading-tight">
              Speak with Our <YellowUnderline>Academic Counsellor</YellowUnderline>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Share your exam goal, class and preferred course. Our team will help you choose the right preparation path.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy/85">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 98765 43210</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> admissions@aakashinstitutions.edu</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
              <img src={contactImg} alt="Academic counsellor with student" width={1280} height={1024} loading="lazy" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 reveal">
            <div className="card-academic p-6 md:p-8">
              <span className="badge-blue">Enquiry form</span>
              <h2 className="mt-3 font-heading font-bold text-2xl md:text-3xl text-navy">Tell us about your goal</h2>
              <p className="mt-2 text-sm text-muted-foreground">We typically respond within one working day.</p>

              <form onSubmit={onSubmit} className="mt-7 grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-navy mb-1.5 block">Student Name</label>
                  <input required name="student" placeholder="Full name" className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy mb-1.5 block">Parent / Guardian Name</label>
                  <input required name="parent" placeholder="Parent name" className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy mb-1.5 block">Phone Number</label>
                  <input required type="tel" name="phone" placeholder="+91 ..." className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy mb-1.5 block">Email Address</label>
                  <input required type="email" name="email" placeholder="you@email.com" className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy mb-1.5 block">Class</label>
                  <select required name="class" className={inputCls} defaultValue="">
                    <option value="" disabled>Select class</option>
                    {["Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Repeater / Dropper"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy mb-1.5 block">Target Exam</label>
                  <select required name="exam" className={inputCls} defaultValue="">
                    <option value="" disabled>Select target exam</option>
                    <option>NEET</option>
                    <option>JEE Main &amp; Advanced</option>
                    <option>Foundation</option>
                    <option>Olympiad</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-navy mb-1.5 block">Preferred Learning Mode</label>
                  <select required name="mode" className={inputCls} defaultValue="">
                    <option value="" disabled>Choose mode</option>
                    <option>Classroom Learning</option>
                    <option>Online Learning</option>
                    <option>Hybrid Learning</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-navy mb-1.5 block">Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us your preparation goal..." className={inputCls} />
                </div>
                <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                  <button type="submit" className="btn-primary"><Send className="w-4 h-4" /> Submit Enquiry</button>
                  {submitted && (
                    <span className="flex items-center gap-2 text-sm font-semibold text-primary animate-fade-up">
                      <CheckCircle2 className="w-4 h-4" /> Thanks — our counsellor will reach out shortly.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4 reveal">
            {infoCards.map((c) => (
              <div key={c.title} className="card-academic card-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-soft-blue text-primary flex items-center justify-center flex-none"><c.icon className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-heading font-bold text-navy">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                    <div className="mt-2 font-accent text-xs tracking-wider uppercase text-primary">{c.meta}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)]">
              <iframe
                title="Aakash Institutions location"
                src="https://www.google.com/maps?q=Connaught+Place,+New+Delhi&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
