import { useEffect, useState } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  X,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 glass-nav site-navbar transition-shadow ${
        scrolled ? "shadow-[0_6px_20px_-12px_rgba(16,42,67,0.25)]" : ""
      }`}
    >
      <div className="site-navbar-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="site-navbar-row flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="site-logo-link flex items-center gap-2.5 group">
            <span className="site-logo-box">
              <img
                src={logo}
                alt="Aakash Institutions"
                className="navbar-logo"
              />
            </span>

            <div className="site-logo-text leading-tight">
              <div className="font-heading font-bold text-[0.95rem] md:text-base text-navy tracking-tight">
                AAKASH
              </div>
              <div className="font-accent text-[0.62rem] md:text-[0.65rem] tracking-[0.18em] text-primary">
                INSTITUTIONS
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => {
              const active = location.pathname === n.to;

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? "bg-soft-blue text-primary"
                      : "text-navy hover:text-primary hover:bg-soft-blue/60"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/contact" className="btn-primary text-sm">
              <GraduationCap className="w-4 h-4" />
              Apply Now
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-lg text-navy hover:bg-soft-blue"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-fade-up">
            <div className="flex flex-col gap-1 pt-2">
              {NAV.map((n) => {
                const active = location.pathname === n.to;

                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`px-4 py-3 rounded-xl text-sm font-medium ${
                      active ? "bg-soft-blue text-primary" : "text-navy"
                    }`}
                  >
                    {n.label}
                  </Link>
                );
              })}

              <Link to="/contact" className="btn-primary justify-center mt-2">
                <GraduationCap className="w-4 h-4" />
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 left-10 w-72 h-72 rounded-full bg-yellow/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="footer-logo-box">
              <img src={logo} alt="Aakash" className="footer-logo" />
            </span>

            <div className="leading-tight">
              <div className="font-heading font-bold text-base">AAKASH</div>
              <div className="font-accent text-[0.65rem] tracking-[0.18em] text-yellow">
                INSTITUTIONS
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Expert NEET, JEE, Foundation & Olympiad coaching with structured
            study plans, regular testing and doubt-solving support.
          </p>

          <div className="flex gap-2 mt-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-yellow hover:text-navy text-white flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Navigate
          </h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-yellow transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Courses
          </h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>NEET Coaching</li>
            <li>JEE Main &amp; Advanced</li>
            <li>Foundation Class 8–10</li>
            <li>Olympiad Preparation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </h4>

          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-2.5">
              <Phone className="w-4 h-4 text-yellow mt-0.5" />
              +91 98765 43210
            </li>
            <li className="flex gap-2.5">
              <Mail className="w-4 h-4 text-yellow mt-0.5" />
              admissions@aakashinstitutions.edu
            </li>
            <li className="flex gap-2.5">
              <MapPin className="w-4 h-4 text-yellow mt-0.5" />
              Academic Plaza, New Delhi, India
            </li>
          </ul>

          <Link to="/contact" className="mt-5 inline-flex btn-yellow text-sm">
            Talk to a Counsellor
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/55">
          <div>© {new Date().getFullYear()} Aakash Institutions. All rights reserved.</div>
          <div>Built for serious learners.</div>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col watermark-bg"
      style={{ ["--watermark-url" as never]: `url(${logo})` }}
    >
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}