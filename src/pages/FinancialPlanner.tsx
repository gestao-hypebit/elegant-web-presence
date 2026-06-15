import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

// ─── Helpers ───────────────────────────────────────────────────────────────

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

function FadeIn({ children, delay = 0, className = "", y = 24 }: {
  children: React.ReactNode; delay?: number; className?: string; y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["Services", "About", "Process", "Testimonials", "Contact"];
  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E8EDE9]" : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-[#0B0B0F] font-semibold tracking-tight text-lg">
          <span className="text-[#1A4D3E]">Lucas</span> Moretti
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm text-[#4A5240] hover:text-[#1A4D3E] transition-colors font-medium">
              {l}
            </a>
          ))}
          <a href="#contact"
            className="bg-[#1A4D3E] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#143D31] transition-colors font-medium">
            Free Assessment
          </a>
        </div>
        <button className="md:hidden text-[#0B0B0F]" onClick={() => setOpen(!open)}>
          <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-1" : ""}`} />
          <div className={`w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#FAFAFA] border-t border-[#E8EDE9]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                  className="text-sm text-[#4A5240] font-medium">
                  {l}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="bg-[#1A4D3E] text-white text-sm px-5 py-2.5 rounded-full text-center font-medium">
                Free Assessment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="relative min-h-screen bg-[#FAFAFA] flex flex-col justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#0B0B0F 1px,transparent 1px),linear-gradient(90deg,#0B0B0F 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Accent orb */}
      <motion.div
        className="absolute top-24 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1A4D3E 0%, transparent 70%)", y }} />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#1A4D3E]/8 text-[#1A4D3E] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 bg-[#1A4D3E] rounded-full" />
            Personal Financial Planning
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-[#0B0B0F] leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Your wealth.<br />
            <span className="text-[#1A4D3E]">Your clarity.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#4A5240] text-lg leading-relaxed mb-10 max-w-md"
          >
            I help ambitious professionals build a clear financial roadmap — so your money works as hard as you do, without the overwhelm.
          </motion.p>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-xl border border-[#D4DBD5] bg-white text-[#0B0B0F] placeholder-[#9DA89E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A4D3E]/30 focus:border-[#1A4D3E] transition-all"
              />
              <button type="submit"
                className="bg-[#1A4D3E] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#143D31] transition-all duration-200 whitespace-nowrap shadow-lg shadow-[#1A4D3E]/20 hover:shadow-xl hover:shadow-[#1A4D3E]/30 hover:-translate-y-0.5">
                Get Free Score
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 max-w-md bg-[#1A4D3E]/8 border border-[#1A4D3E]/20 rounded-xl px-5 py-4"
            >
              <span className="text-[#1A4D3E] text-xl">✓</span>
              <p className="text-sm text-[#1A4D3E] font-medium">Check your inbox — your free financial health score is on its way.</p>
            </motion.div>
          )}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-[#9DA89E] mt-3"
          >
            Free financial health assessment. No spam, unsubscribe anytime.
          </motion.p>
        </div>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:block"
        >
          <HeroCard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] text-[#9DA89E] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#9DA89E] to-transparent" />
      </motion.div>
    </section>
  );
}

function HeroCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const clients = useCountUp(240, inView);
  const assets = useCountUp(18, inView);
  const years = useCountUp(12, inView);

  return (
    <div ref={ref} className="relative">
      <div className="bg-white rounded-2xl border border-[#E8EDE9] p-8 shadow-xl shadow-[#1A4D3E]/5">
        <p className="text-xs text-[#9DA89E] uppercase tracking-widest mb-6 font-medium">Track Record</p>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { value: clients, suffix: "+", label: "Clients helped" },
            { value: assets, suffix: "M+", label: "Assets managed" },
            { value: years, suffix: "yr", label: "Experience" },
          ].map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-[#0B0B0F] tabular-nums"
                style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
                {value}<span className="text-[#1A4D3E]">{suffix}</span>
              </p>
              <p className="text-xs text-[#9DA89E] mt-1">{label}</p>
            </div>
          ))}
        </div>
        {/* Mini chart */}
        <div className="relative h-20 flex items-end gap-1">
          {[30, 45, 35, 60, 50, 75, 65, 90, 78, 100].map((h, i) => (
            <motion.div key={i}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.4, delay: inView ? 0.8 + i * 0.05 : 0, ease: "easeOut" }}
              style={{ height: `${h}%`, background: i === 9 ? "#1A4D3E" : "#1A4D3E20", originY: 1 }}
              className="flex-1 rounded-t-sm"
            />
          ))}
        </div>
        <p className="text-xs text-[#9DA89E] mt-2 text-center">Average client portfolio growth over 10 months</p>
      </div>
      {/* Floating badge */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 bg-[#C9A84C] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg"
      >
        CFP® Certified
      </motion.div>
    </div>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────

const services = [
  {
    icon: "◈",
    title: "Financial Clarity Session",
    price: "$297",
    duration: "90 min",
    description: "A focused deep-dive into your current financial picture. Walk away with a personalized action plan and clarity on your next 3 moves.",
    features: ["Full financial audit", "Personalized action plan", "Priority roadmap", "Follow-up resources"],
  },
  {
    icon: "◉",
    title: "Growth Blueprint",
    price: "$1,800",
    duration: "3 months",
    description: "Build the systems and strategies to consistently grow your net worth. Includes ongoing accountability and monthly strategy calls.",
    features: ["Monthly strategy calls", "Investment allocation", "Debt elimination plan", "Tax efficiency review", "Emergency fund strategy"],
    featured: true,
  },
  {
    icon: "◆",
    title: "Wealth Architecture",
    price: "$4,200",
    duration: "6 months",
    description: "Comprehensive wealth management for high-earning professionals ready to build generational wealth with expert guidance.",
    features: ["Bi-weekly check-ins", "Estate planning basics", "Business owner strategies", "Retirement optimization", "Portfolio construction", "Priority support"],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-xs text-[#1A4D3E] uppercase tracking-widest font-semibold mb-3">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The right plan<br />for where you are now
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className={`relative rounded-2xl p-8 h-full flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group
                ${s.featured
                  ? "bg-[#1A4D3E] border-[#1A4D3E] text-white shadow-xl shadow-[#1A4D3E]/20"
                  : "bg-white border-[#E8EDE9] hover:border-[#1A4D3E]/30 hover:shadow-[#1A4D3E]/5"}`}>
                {s.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`text-2xl mb-4 ${s.featured ? "text-[#C9A84C]" : "text-[#1A4D3E]"}`}>{s.icon}</div>
                <p className={`text-xs uppercase tracking-widest font-semibold mb-1 ${s.featured ? "text-[#C9A84C]" : "text-[#1A4D3E]"}`}>{s.duration}</p>
                <h3 className={`text-xl font-bold mb-2 ${s.featured ? "text-white" : "text-[#0B0B0F]"}`}>{s.title}</h3>
                <p className={`text-3xl font-bold mb-4 tabular-nums ${s.featured ? "text-white" : "text-[#0B0B0F]"}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.price}
                </p>
                <p className={`text-sm leading-relaxed mb-6 ${s.featured ? "text-white/80" : "text-[#4A5240]"}`}>{s.description}</p>
                <ul className="flex-1 flex flex-col gap-2 mb-8">
                  {s.features.map(f => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${s.featured ? "text-white/90" : "text-[#4A5240]"}`}>
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${s.featured ? "bg-[#C9A84C]" : "bg-[#1A4D3E]"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact"
                  className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200
                    ${s.featured
                      ? "bg-white text-[#1A4D3E] hover:bg-[#F2F5F3]"
                      : "border border-[#1A4D3E] text-[#1A4D3E] hover:bg-[#1A4D3E] hover:text-white"}`}>
                  Get Started
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ──────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 bg-[#F2F5F3]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="relative">
            <div className="aspect-[4/5] bg-[#1A4D3E]/10 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#1A4D3E]/20 to-[#1A4D3E]/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-[#1A4D3E]/20 mx-auto mb-4 flex items-center justify-center text-5xl">
                    👤
                  </div>
                  <p className="text-[#1A4D3E] font-semibold">Lucas Moretti, CFP®</p>
                  <p className="text-sm text-[#4A5240] mt-1">Replace with your photo</p>
                </div>
              </div>
            </div>
            {/* Credential badge */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-[#E8EDE9]"
            >
              <p className="text-xs text-[#9DA89E] mb-1">Certified by</p>
              <p className="text-sm font-bold text-[#0B0B0F]">CFP Board</p>
              <p className="text-xs text-[#1A4D3E] font-medium">Since 2012</p>
            </motion.div>
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <p className="text-xs text-[#1A4D3E] uppercase tracking-widest font-semibold mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] tracking-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              I've been where<br />you are
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#4A5240] leading-relaxed mb-4">
              Twelve years ago I was earning a good salary and still somehow losing ground every month — no plan, no direction, just noise. That frustration became my life's work.
            </p>
            <p className="text-[#4A5240] leading-relaxed mb-8">
              Today I help professionals like you cut through the complexity and build a financial life that's intentional. No jargon, no cookie-cutter plans — just a clear strategy built around your actual goals.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "CFP® Certified", sub: "Fiduciary standard" },
                { label: "MBA Finance", sub: "University of Chicago" },
                { label: "Featured in", sub: "Forbes, MarketWatch" },
                { label: "Fee-only", sub: "No commissions, ever" },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-[#E8EDE9]">
                  <p className="font-semibold text-[#0B0B0F] text-sm">{label}</p>
                  <p className="text-xs text-[#9DA89E] mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────

const steps = [
  { n: "01", title: "Free Assessment", body: "Complete a short financial health questionnaire. I'll review your situation before we ever speak — no wasted time, just honest insight." },
  { n: "02", title: "Strategy Call", body: "A focused 60-minute call where I present your financial snapshot and we map out exactly what needs to happen next." },
  { n: "03", title: "Your Roadmap", body: "You receive a written, prioritized financial roadmap — investments, savings, debt, protection — built specifically for you." },
  { n: "04", title: "Execute & Grow", body: "We work the plan together. Monthly check-ins keep you on track and the strategy adapts as your life evolves." },
];

function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-xs text-[#1A4D3E] uppercase tracking-widest font-semibold mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            From confusion<br />to clarity in 4 steps
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#1A4D3E]/20 to-transparent" />
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.12}>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-[#1A4D3E]/8 flex items-center justify-center mb-5">
                  <span className="text-[#1A4D3E] font-bold text-lg tabular-nums"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.n}</span>
                </div>
                <h3 className="font-bold text-[#0B0B0F] mb-2">{s.title}</h3>
                <p className="text-sm text-[#4A5240] leading-relaxed">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote: "Within 6 months I had eliminated $22k in debt and finally knew exactly where every dollar was going. Lucas doesn't just give advice — he gives you a system.",
    name: "Sarah Chen",
    title: "Product Manager, SF",
    initials: "SC",
  },
  {
    quote: "I was making $180k a year and had almost nothing saved. Now I have a real investment portfolio and a plan to retire at 52. The ROI on working with Lucas is absurd.",
    name: "Marcus Williams",
    title: "Software Engineer, NYC",
    initials: "MW",
  },
  {
    quote: "As a business owner I had no separation between my money and the company's money. Lucas built a structure that protects my family and actually grows my wealth.",
    name: "Diana Reyes",
    title: "Founder, Austin TX",
    initials: "DR",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0B0B0F]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-semibold mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Real people,<br />real results
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className="text-[#C9A84C] text-4xl mb-4 leading-none">"</div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A4D3E]/40 flex items-center justify-center text-[#C9A84C] text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.title}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  { q: "Do you work with clients who aren't wealthy yet?", a: "Absolutely. Most of my clients come to me earning well but feeling behind. The right time to start building wealth is before you feel ready — that's exactly what the free assessment is for." },
  { q: "What does 'fee-only' mean?", a: "It means I earn nothing from recommending financial products. I'm paid only by you, which means my advice is fully aligned with your interests — not a commission." },
  { q: "How quickly will I see results?", a: "Most clients report feeling financially clear within the first 30 days. Measurable results — debt reduction, savings growth, investment gains — typically show within 90 days of executing the plan." },
  { q: "Can we work together if I'm outside the US?", a: "Yes. I work with clients in over 15 countries via video call. All documents and plans are delivered digitally." },
  { q: "What if I already have a financial advisor?", a: "A second opinion is always valuable. Many clients come to me after finding that their existing advisor was commission-based or not meeting their needs." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-xs text-[#1A4D3E] uppercase tracking-widest font-semibold mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Common questions
          </h2>
        </FadeIn>
        <div className="flex flex-col divide-y divide-[#E8EDE9]">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 0.05}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-6 flex items-start justify-between gap-4 group"
              >
                <span className={`font-semibold text-sm transition-colors ${open === i ? "text-[#1A4D3E]" : "text-[#0B0B0F] group-hover:text-[#1A4D3E]"}`}>
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`text-xl flex-shrink-0 mt-0.5 font-light transition-colors ${open === i ? "text-[#1A4D3E]" : "text-[#9DA89E]"}`}
                >+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-[#4A5240] leading-relaxed pb-6">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 bg-[#F2F5F3]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <FadeIn>
          <p className="text-xs text-[#1A4D3E] uppercase tracking-widest font-semibold mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] tracking-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Start with a<br />free assessment
          </h2>
          <p className="text-[#4A5240] leading-relaxed mb-10">
            Fill out the short form and I'll send you a personalized financial health score with specific recommendations — no obligation, no sales call unless you want one.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { icon: "✉", label: "Email", value: "lucas@mfp.com" },
              { icon: "📞", label: "Phone", value: "+1 (555) 200-0100" },
              { icon: "📍", label: "Location", value: "Chicago, IL — Remote worldwide" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-lg">{icon}</span>
                <div>
                  <p className="text-xs text-[#9DA89E]">{label}</p>
                  <p className="text-sm text-[#0B0B0F] font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {!sent ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#E8EDE9] p-8 shadow-sm flex flex-col gap-4">
              <h3 className="font-bold text-[#0B0B0F] text-lg mb-2">Get your free financial score</h3>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#4A5240] font-medium">Full Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  required placeholder="Your name"
                  className="px-4 py-3 rounded-xl border border-[#D4DBD5] text-sm text-[#0B0B0F] placeholder-[#9DA89E] focus:outline-none focus:ring-2 focus:ring-[#1A4D3E]/30 focus:border-[#1A4D3E] transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#4A5240] font-medium">Email Address</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  required placeholder="you@example.com"
                  className="px-4 py-3 rounded-xl border border-[#D4DBD5] text-sm text-[#0B0B0F] placeholder-[#9DA89E] focus:outline-none focus:ring-2 focus:ring-[#1A4D3E]/30 focus:border-[#1A4D3E] transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#4A5240] font-medium">What's your biggest financial challenge?</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  required rows={4} placeholder="e.g. I earn well but feel like I'm not building real wealth..."
                  className="px-4 py-3 rounded-xl border border-[#D4DBD5] text-sm text-[#0B0B0F] placeholder-[#9DA89E] resize-none focus:outline-none focus:ring-2 focus:ring-[#1A4D3E]/30 focus:border-[#1A4D3E] transition-all" />
              </div>
              <button type="submit"
                className="bg-[#1A4D3E] text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-[#143D31] transition-all duration-200 shadow-lg shadow-[#1A4D3E]/20 hover:shadow-xl hover:-translate-y-0.5 mt-2">
                Send My Free Assessment Request
              </button>
              <p className="text-xs text-[#9DA89E] text-center">Response within 24 hours. No spam, ever.</p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-[#1A4D3E]/20 p-12 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-[#1A4D3E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#1A4D3E] text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0F] mb-2">You're on your way.</h3>
              <p className="text-[#4A5240] text-sm leading-relaxed">I'll review your information and send your personalized financial health score within 24 hours.</p>
            </motion.div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0B0B0F] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white font-semibold">
          <span className="text-[#1A4D3E]">Lucas</span> Moretti
        </p>
        <p className="text-white/30 text-xs text-center">
          © {new Date().getFullYear()} Lucas Moretti Financial Planning. CFP® is a registered trademark of the CFP Board.
        </p>
        <div className="flex gap-5">
          {["Privacy", "Terms", "Disclosures"].map(l => (
            <a key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FinancialPlanner() {
  return (
    <div className="font-sans antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
