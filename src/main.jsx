import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  MapPin,
  Menu,
  MessageCircle,
  MonitorPlay,
  Phone,
  Rocket,
  Sparkles,
  Target,
  TestTube2,
  Trophy,
  Users,
  X
} from 'lucide-react'
import './styles.css'

const nav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' }
]

const stats = [
  ['37+', 'Years of educational excellence'],
  ['400+', 'Coaching centres across India'],
  ['10 Lac+', 'Aakashians qualified in NEET & JEE'],
  ['5500+', 'Expert faculty members']
]

const courses = [
  {
    icon: <TestTube2 />,
    title: 'NEET Coaching',
    text: 'Medical entrance preparation with NCERT-focused learning, regular testing, and guided doubt clearing.',
    points: ['Class 11, 12 & repeaters', 'Mock tests and analysis', 'Biology, Physics, Chemistry']
  },
  {
    icon: <Brain />,
    title: 'JEE Main & Advanced',
    text: 'Engineering entrance preparation built around concept depth, problem-solving practice, and test discipline.',
    points: ['Physics, Chemistry, Maths', 'Main + Advanced practice', 'Performance tracking']
  },
  {
    icon: <BookOpen />,
    title: 'Foundation Courses',
    text: 'Early preparation for school students with strong fundamentals in Science, Mathematics, and reasoning.',
    points: ['Classes 8 to 10', 'Board + concept clarity', 'Reasoning foundation']
  },
  {
    icon: <Award />,
    title: 'Olympiad Preparation',
    text: 'Practice-focused guidance for Olympiads and competitive exposure through mentor-led learning.',
    points: ['Worksheets and drills', 'Advanced concepts', 'Competitive confidence']
  }
]

const journey = [
  ['01', 'Admission Enquiry', 'Share your class, goal and preferred learning mode.'],
  ['02', 'Counselling', 'Academic counsellors help choose a suitable program.'],
  ['03', 'Batch Allocation', 'Students are mapped to the right classroom or online batch.'],
  ['04', 'Concept Classes', 'Structured sessions build clarity subject by subject.'],
  ['05', 'Tests & Doubts', 'Regular assessments and doubt-solving improve consistency.'],
  ['06', 'Exam Readiness', 'Performance review keeps the preparation focused.']
]

const values = [
  ['Expert Faculty', 'Experienced mentors who simplify difficult concepts.', GraduationCap],
  ['Structured Study Plans', 'A guided academic calendar with clear milestones.', CalendarCheck],
  ['Regular Tests', 'Frequent practice to measure progress and exam readiness.', Trophy],
  ['Doubt-Solving Support', 'Students get help when they get stuck.', MessageCircle],
  ['Performance Tracking', 'Clear feedback helps students improve steadily.', Target],
  ['Parent-Friendly Guidance', 'Simple communication for families and learners.', Users]
]

const faqs = [
  ['What courses does AAKASH INSTITUTIONS offer?', 'The institute focuses on NEET, JEE Main & Advanced, Foundation courses, and Olympiad preparation.'],
  ['Does AAKASH INSTITUTIONS provide NEET coaching?', 'Yes. NEET preparation includes concept classes, NCERT-focused learning, tests, and doubt-solving support.'],
  ['Is JEE Main and Advanced coaching available?', 'Yes. JEE coaching covers Physics, Chemistry, and Mathematics with problem-solving and test practice.'],
  ['Are foundation courses available for school students?', 'Yes. Foundation programs support Classes 8 to 10 with Science, Mathematics, and reasoning basics.'],
  ['How are students tested and monitored?', 'Students are supported through regular tests, result analysis, and performance review.'],
  ['How can I apply for admission?', 'Use the enquiry form or Apply Now button to request academic counselling.']
]

function usePath() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  const navigate = (next) => {
    window.history.pushState({}, '', next)
    setPath(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return [path, navigate]
}

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function Navbar({ page, navigate }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => document.body.classList.toggle('scrolled', window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const go = (path) => {
    navigate(path)
    setOpen(false)
  }
  return (
    <header className="navbar">
      <button className="brand" onClick={() => go('/')} aria-label="Go to Home">
        <img src="/aakash-logo.png" alt="AAKASH INSTITUTIONS logo" />
      </button>
      <nav className="desktopNav">
        {nav.map(item => <button key={item.path} className={page === item.path ? 'active' : ''} onClick={() => go(item.path)}>{item.label}</button>)}
      </nav>
      <button className="navCta" onClick={() => go('/contact')}>Apply Now <ArrowRight size={16} /></button>
      <button className="menuBtn" onClick={() => setOpen(v => !v)} aria-label="Open menu">{open ? <X /> : <Menu />}</button>
      {open && <div className="mobileNav">{nav.map(item => <button key={item.path} onClick={() => go(item.path)}>{item.label}</button>)}<button onClick={() => go('/contact')}>Apply Now</button></div>}
    </header>
  )
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div>
          <img src="/aakash-logo.png" className="footerLogo" alt="AAKASH INSTITUTIONS" />
          <p>Student-focused coaching for NEET, JEE, Foundation and Olympiad preparation with structured learning support.</p>
          <div className="socials"><span>f</span><span>in</span><span>ig</span><span>yt</span></div>
        </div>
        <div>
          <h4>Quick Links</h4>
          {nav.map(item => <button key={item.path} onClick={() => navigate(item.path)}>{item.label}</button>)}
        </div>
        <div>
          <h4>Courses</h4>
          <p>NEET Coaching</p><p>JEE Main & Advanced</p><p>Foundation Courses</p><p>Olympiad Prep</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Admission Enquiry</p><p>Course Counselling</p><p>Nearest Centre Support</p><p>Online Learning Help</p>
        </div>
      </div>
      <div className="copyright">© 2026 AAKASH INSTITUTIONS. All rights reserved.</div>
    </footer>
  )
}

function TrustStrip() {
  return (
    <section className="section trustSection">
      <Reveal className="sectionHead compact">
        <span className="eyebrow">Trust & Results</span>
        <h2>Built for serious exam preparation</h2>
        <p>Aakash is known for its long legacy, large network, expert faculty and strong NEET/JEE preparation ecosystem.</p>
      </Reveal>
      <div className="statRail">
        {stats.map(([num, label]) => <Reveal className="statPill" key={label}><strong>{num}</strong><span>{label}</span></Reveal>)}
      </div>
      <div className="trustChips">
        {['Structured methodology', 'Regular testing', 'Doubt solving', 'Performance review', 'Parent-friendly guidance'].map(x => <span key={x}><CheckCircle2 size={16} />{x}</span>)}
      </div>
    </section>
  )
}

function ServicesCards({ detailed = false }) {
  return (
    <section className="section servicesSection">
      <Reveal className="sectionHead">
        <span className="eyebrow">Courses</span>
        <h2>{detailed ? 'Choose the right program for your goal' : 'Focused courses for competitive success'}</h2>
        <p>Programs are arranged around the student’s class, target exam and current preparation level.</p>
      </Reveal>
      <div className={`courseGrid ${detailed ? 'detailed' : ''}`}>
        {courses.map((course, i) => <Reveal className="courseCard" key={course.title}>
          <div className="courseTop"><div className="courseIcon">{course.icon}</div><span>0{i + 1}</span></div>
          <h3>{course.title}</h3>
          <p>{course.text}</p>
          {detailed && <ul>{course.points.map(p => <li key={p}><CheckCircle2 size={16} />{p}</li>)}</ul>}
          <button>View Course <ArrowRight size={16} /></button>
        </Reveal>)}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section processSection">
      <Reveal className="sectionHead">
        <span className="eyebrow">Student Journey</span>
        <h2>From enquiry to exam readiness</h2>
        <p>A simple roadmap that keeps students, parents, and counsellors aligned from the first conversation.</p>
      </Reveal>
      <div className="roadmap">
        {journey.map(([n, title, text], i) => <Reveal className="stepCard" key={title}>
          <span>{n}</span><h3>{title}</h3><p>{text}</p>{i < journey.length - 1 && <div className="connector" />}
        </Reveal>)}
      </div>
    </section>
  )
}

function CTA({ navigate, title = 'Start Your Preparation with AAKASH INSTITUTIONS' }) {
  return (
    <section className="section ctaSection">
      <Reveal className="ctaBox">
        <div>
          <span className="eyebrow light">Admission Open</span>
          <h2>{title}</h2>
          <p>Speak with an academic counsellor and choose the right path for NEET, JEE, Olympiads or Foundation preparation.</p>
        </div>
        <button onClick={() => navigate('/contact')}>Apply Now <Rocket size={18} /></button>
      </Reveal>
    </section>
  )
}

function Home({ navigate }) {
  return <>
    <main>
      <section className="hero homeHero">
        <div className="heroBgGrid" />
        <Reveal className="heroCopy">
          <span className="eyebrow">NEET • JEE • Foundation • Olympiad</span>
          <h1>Build Your Future with Expert Coaching That Keeps You Ahead</h1>
          <p>AAKASH INSTITUTIONS helps students prepare through expert teaching, structured study plans, regular tests, and doubt-solving support.</p>
          <div className="heroActions"><button onClick={() => navigate('/contact')}>Apply Now <ArrowRight size={18} /></button><button className="ghost" onClick={() => navigate('/services')}>Explore Courses</button></div>
          <div className="quickBadges"><span>NEET</span><span>JEE Main + Advanced</span><span>Foundation</span><span>Olympiad Prep</span></div>
        </Reveal>
        <Reveal className="heroVisual">
          <div className="rankCard"><Trophy /><strong>AIR Focus</strong><small>Test + Analysis</small></div>
          <div className="studentPanel">
            <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80" alt="Students preparing in a classroom" />
            <div className="subjectOrbit"><span>Physics</span><span>Chemistry</span><span>Maths</span><span>Biology</span></div>
          </div>
          <div className="appCard"><MonitorPlay /><strong>Classroom + Online</strong><small>Flexible learning support</small></div>
        </Reveal>
      </section>
      <TrustStrip />
      <ServicesCards />
      <Process />
      <CTA navigate={navigate} />
    </main>
  </>
}

function About({ navigate }) {
  return <main>
    <section className="pageHero aboutHero">
      <Reveal><span className="eyebrow">About AAKASH</span><h1>Guiding Students Towards Academic and Competitive Exam Success</h1><p>Structured preparation, expert mentoring, regular testing and student-centric support for focused exam readiness.</p></Reveal>
      <div className="heroMiniCards"><span><GraduationCap /> Faculty-led learning</span><span><Target /> Goal-based batches</span><span><Sparkles /> Progress support</span></div>
    </section>
    <section className="section aboutSplit">
      <Reveal className="aboutImage"><img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80" alt="Teacher mentoring students" /></Reveal>
      <Reveal className="aboutText"><span className="eyebrow">Our Approach</span><h2>A coaching ecosystem designed around clarity, consistency and confidence.</h2><p>AAKASH INSTITUTIONS focuses on preparing students for NEET, JEE Main, JEE Advanced, Olympiads, and foundation-level academic programs. The institute supports students through expert faculty, planned study schedules, regular assessments, doubt-clearing sessions, and exam-focused preparation.</p><div className="aboutStats">{stats.slice(0,3).map(([n,l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></Reveal>
    </section>
    <section className="section valueSection">
      <Reveal className="sectionHead"><span className="eyebrow">Why Students Choose Us</span><h2>Academic support that feels organized and measurable</h2></Reveal>
      <div className="valueGrid">{values.map(([t, d, Icon]) => <Reveal className="valueCard" key={t}><Icon /><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
    </section>
    <CTA navigate={navigate} title="Find the right course for your academic goal" />
  </main>
}

function Services({ navigate }) {
  const [open, setOpen] = useState(0)
  return <main>
    <section className="pageHero servicesHero">
      <Reveal><span className="eyebrow">Courses & Programs</span><h1>Courses Designed for NEET, JEE, Foundation & Olympiad Success</h1><p>Choose a program based on your class, target exam and current preparation level.</p></Reveal>
    </section>
    <ServicesCards detailed />
    <section className="section faqSection">
      <Reveal className="sectionHead"><span className="eyebrow">FAQ</span><h2>Frequently asked questions</h2><p>Simple answers for students and parents before admission enquiry.</p></Reveal>
      <div className="faqList">{faqs.map(([q,a], i) => <Reveal className={`faqItem ${open === i ? 'open' : ''}`} key={q}><button onClick={() => setOpen(open === i ? -1 : i)}><span>{q}</span><ChevronDown /></button><p>{a}</p></Reveal>)}</div>
    </section>
    <CTA navigate={navigate} title="Need help choosing the right course?" />
  </main>
}

function Contact() {
  const [sent, setSent] = useState(false)
  return <main>
    <section className="pageHero contactHero">
      <Reveal><span className="eyebrow">Admission Counselling</span><h1>Speak with Our Academic Counsellor</h1><p>Share your class, exam goal and preferred learning mode. Our team will help you choose the right preparation path.</p></Reveal>
    </section>
    <section className="section contactSection">
      <Reveal className="formCard">
        <h2>Send Admission Enquiry</h2>
        <div className="formGrid"><input placeholder="Student name" /><input placeholder="Parent / guardian name" /><input placeholder="Phone number" /><input placeholder="Email address" /><select><option>Class</option><option>Class 8</option><option>Class 9</option><option>Class 10</option><option>Class 11</option><option>Class 12</option><option>Dropper</option></select><select><option>Target exam</option><option>NEET</option><option>JEE Main & Advanced</option><option>Foundation</option><option>Olympiad</option></select><select><option>Preferred mode</option><option>Classroom</option><option>Online</option><option>Hybrid</option></select><textarea placeholder="Message"></textarea></div>
        <button onClick={() => setSent(true)}>{sent ? 'Enquiry Recorded' : 'Submit Enquiry'} <ArrowRight size={18} /></button>
      </Reveal>
      <Reveal className="contactCards">
        <div><Phone /><h3>Admission Enquiry</h3><p>Request a call from the counselling team.</p></div>
        <div><BookOpen /><h3>Course Counselling</h3><p>Get guidance for NEET, JEE, Foundation or Olympiad.</p></div>
        <div><MapPin /><h3>Nearest Centre</h3><p>Find classroom options near your city.</p></div>
        <div><MonitorPlay /><h3>Online Support</h3><p>Explore digital preparation options.</p></div>
        <div className="mapBox">
          <iframe
            title="AAKASH INSTITUTIONS location map"
            src="https://www.google.com/maps?q=12.9561504,77.7168284&z=17&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: '100%', height: '100%', minHeight: '220px', border: 0, borderRadius: '24px' }}
            allowFullScreen
          />
        </div>
      </Reveal>
    </section>
  </main>
}

function App() {
  const [path, navigate] = usePath()
  const page = useMemo(() => {
    if (path === '/about') return <About navigate={navigate} />
    if (path === '/services') return <Services navigate={navigate} />
    if (path === '/contact') return <Contact />
    return <Home navigate={navigate} />
  }, [path])
  useEffect(() => {
    const els = [...document.querySelectorAll('.reveal')]
    const io = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('show')), { threshold: 0.12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [page])
  return <>
    <Navbar page={path} navigate={navigate} />
    {page}
    <Footer navigate={navigate} />
  </>
}

createRoot(document.getElementById('root')).render(<App />)
