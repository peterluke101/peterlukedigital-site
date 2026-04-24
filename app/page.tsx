"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const calendlyLink = "https://calendly.com/peterluke101/30min";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function MotionSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}

function ServiceIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-lg">
      {children}
    </span>
  );
}

function trackAuditCtaClick(placement: string) {
  if (!gaMeasurementId || typeof window === "undefined") {
    return;
  }

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) {
    return;
  }

  gtag("event", "book_audit_click", {
    event_category: "engagement",
    event_label: placement,
    value: 1,
  });
}

function trackSectionNavClick(section: string, placement: "desktop" | "mobile") {
  if (!gaMeasurementId || typeof window === "undefined") {
    return;
  }

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) {
    return;
  }

  gtag("event", "section_nav_click", {
    event_category: "navigation",
    event_label: section,
    nav_placement: placement,
    value: 1,
  });
}

export default function Home() {
  return (
    <div className="bg-background">
      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(11,11,18,0.7)] backdrop-blur-[20px] backdrop-saturate-[140%]">
        <nav className="mx-auto w-full max-w-[1200px] px-7 py-[14px]">
          <div className="flex items-center justify-between">
            <a href="#top" className="flex shrink-0 flex-col items-center gap-1">
              <Image
                src="/assets/images/logo-icon.png"
                alt="Peter Luke Digital"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                priority
              />
              <span className="text-[13px] font-bold tracking-[0.06em] text-text">Peter Luke Digital</span>
            </a>
            <div className="hidden items-center gap-7 text-sm text-muted md:flex">
              <a
                href="#services"
                onClick={() => trackSectionNavClick("services", "desktop")}
                className="transition hover:text-text"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                onClick={() => trackSectionNavClick("how-it-works", "desktop")}
                className="transition hover:text-text"
              >
                How It Works
              </a>
              <a
                href="#case-study"
                onClick={() => trackSectionNavClick("case-study", "desktop")}
                className="transition hover:text-text"
              >
                Case Study
              </a>
              <a
                href="#who-we-help"
                onClick={() => trackSectionNavClick("who-we-help", "desktop")}
                className="transition hover:text-text"
              >
                Who We Help
              </a>
              <a
                href="#about"
                onClick={() => trackSectionNavClick("about", "desktop")}
                className="transition hover:text-text"
              >
                About
              </a>
            </div>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackAuditCtaClick("nav")}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-text shadow-[0_0_40px_-8px_rgba(0,102,255,0.45)] transition hover:bg-[#3385FF]"
            >
              Get Free Website
            </a>
          </div>
          <div className="mt-2 grid w-full grid-cols-5 gap-x-2 gap-y-1 text-center text-[11px] text-muted md:hidden">
            <a
              href="#services"
              onClick={() => trackSectionNavClick("services", "mobile")}
              className="transition hover:text-text"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={() => trackSectionNavClick("how-it-works", "mobile")}
              className="transition hover:text-text"
            >
              How It Works
            </a>
            <a
              href="#case-study"
              onClick={() => trackSectionNavClick("case-study", "mobile")}
              className="transition hover:text-text"
            >
              Case Study
            </a>
            <a
              href="#who-we-help"
              onClick={() => trackSectionNavClick("who-we-help", "mobile")}
              className="transition hover:text-text"
            >
              Who We Help
            </a>
            <a
              href="#about"
              onClick={() => trackSectionNavClick("about", "mobile")}
              className="transition hover:text-text"
            >
              About
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="top" className="relative overflow-hidden bg-background scroll-mt-24">
          <div className="pointer-events-none absolute -left-[10%] -top-[20%] h-[80%] w-[55%] bg-[radial-gradient(ellipse,rgba(0,212,255,0.35),transparent_60%)] blur-[40px]" />
          <div className="pointer-events-none absolute -bottom-[30%] -right-[10%] h-[90%] w-[60%] bg-[radial-gradient(ellipse,rgba(138,43,255,0.3),transparent_65%)] blur-[40px]" />
          <div className="relative z-[2] mx-auto grid w-full max-w-[1200px] items-center gap-12 px-7 pb-[120px] pt-[110px] lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="mb-[18px] text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                DIGITAL PARTNER FOR GROWING BUSINESSES
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="max-w-4xl text-[clamp(42px,5.2vw,64px)] font-bold leading-[1.04] tracking-[-0.025em] text-text"
              >
                We build your website for free. You invest in{" "}
                <span className="bg-[linear-gradient(90deg,#00D4FF,#FF00E0)] bg-clip-text text-transparent">
                  growth.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                className="mt-[22px] max-w-[560px] text-[18px] leading-[1.6] text-text-bright"
              >
                We design and launch your website at no upfront cost when you
                commit to 6 months of content marketing at $800/month. After 6
                months, the site is yours to keep.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
                className="mt-8 flex flex-col flex-wrap gap-[18px] sm:flex-row sm:items-center"
              >
                <a
                  href={calendlyLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackAuditCtaClick("hero")}
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-[22px] py-[14px] text-[15px] font-bold tracking-[-0.01em] text-text shadow-[0_0_40px_-8px_rgba(0,102,255,0.45)] transition-all duration-[180ms] hover:bg-[#3385FF]"
                >
                  Get Your Free Website
                </a>
                <a
                  href="#case-study"
                  className="text-sm font-semibold text-muted transition duration-150 hover:text-text"
                >
                  See the Juvenis case study →
                </a>
              </motion.div>
              <p className="mt-[26px] text-[13px] tracking-[0.01em] text-muted">
                No long-term contracts. No fluff. Just a website built to grow.
              </p>
            </div>
            <div className="relative mx-auto hidden aspect-square w-full max-w-[520px] items-center justify-center lg:flex">
              <Image
                src="/assets/images/logo-primary.png"
                alt="Peter Luke Digital logo"
                width={520}
                height={520}
                className="h-auto w-[92%] object-contain"
                priority
              />
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(255,255,255,0.08)] bg-[#0F0F18] px-7 py-[14px] text-center text-sm text-text">
          First inbound lead for Juvenis Medical within 24 hours of launch
        </section>

        <MotionSection id="problems" className="relative overflow-hidden bg-surface scroll-mt-24">
          <div className="pointer-events-none absolute -right-[10%] bottom-[-20%] h-[70%] w-[55%] bg-[radial-gradient(ellipse,rgba(255,0,224,0.28),transparent_65%)] blur-[60px]" />
          <div className="mx-auto w-full max-w-[1200px] px-7 py-[110px]">
            <h2 className="max-w-3xl text-2xl font-bold text-text sm:text-3xl">
              If any of these sound familiar, your website is costing you
              patients.
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "We don't rank on Google",
                  text: "Patients search for your services every day, but your practice is not on page 1 when it matters.",
                },
                {
                  title: "Our site looks old",
                  text: "Patients decide whether to trust your practice within seconds, and outdated design hurts credibility fast.",
                },
                {
                  title: "We get traffic but no calls",
                  text: "A website that does not convert visitors into booked consultations is just an expensive business card.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-background p-[28px] transition-colors duration-200 hover:border-[rgba(255,255,255,0.14)]"
                >
                  <h3 className="text-lg font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-text-bright">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="services" className="relative overflow-hidden bg-background scroll-mt-24">
          <div className="pointer-events-none absolute -left-[10%] top-[-10%] h-[70%] w-[55%] bg-[radial-gradient(ellipse,rgba(0,212,255,0.30),transparent_65%)] blur-[60px]" />
          <div className="pointer-events-none absolute right-[-5%] bottom-[-10%] h-[50%] w-[40%] bg-[radial-gradient(ellipse,rgba(138,43,255,0.25),transparent_65%)] blur-[50px]" />
          <div className="mx-auto w-full max-w-[1200px] px-7 py-[110px]">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Everything included in your plan.
            </h2>
            <p className="mt-3 text-[16px] text-muted">One plan. Three pillars. Everything working together.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: "🖥️",
                  title: "Your Website — Built Free",
                  outcomes: [
                    "Professional design tailored to your brand",
                    "Mobile-first, fast-loading, SEO-ready",
                    "Yours to keep after 6 months",
                  ],
                },
                {
                  icon: "✍️",
                  title: "2 Blog Articles / Month",
                  outcomes: [
                    "SEO-optimized to rank on Google",
                    "Written to answer what your customers search for",
                    "Builds authority and drives organic traffic",
                  ],
                },
                {
                  icon: "📱",
                  title: "30 Social Posts / Month",
                  outcomes: [
                    "Consistent presence across your platforms",
                    "Content that educates and converts",
                    "Keeps your brand top of mind",
                  ],
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-surface-elevated p-[28px] transition-colors duration-200 hover:border-[rgba(255,255,255,0.14)]"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(45deg,#00D4FF,#0066FF,#00F5A0,#8A2BFF,#FF00E0)]" />
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <h3 className="mt-4 text-lg font-semibold text-text">
                    {service.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-[13.5px] text-text-bright">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="mt-2 h-[5px] w-[5px] rounded-full bg-cyan" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="how-it-works" className="relative overflow-hidden bg-surface scroll-mt-24">
          <div className="pointer-events-none absolute left-[30%] top-[-20%] h-[80%] w-[50%] bg-[radial-gradient(ellipse,rgba(138,43,255,0.30),transparent_65%)] blur-[60px]" />
          <div className="mx-auto w-full max-w-[1200px] px-7 py-[110px]">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Simple process. Fast results.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                "Free Audit 20 min",
                "We Build & Optimize",
                "You Get Patients",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-surface-elevated p-[28px]"
                >
                  <p className="text-[13px] font-bold tracking-[0.14em] text-cyan uppercase">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-text">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="pricing" className="relative overflow-hidden bg-background scroll-mt-24">
          <div className="pointer-events-none absolute -right-[5%] top-[-10%] h-[80%] w-[55%] bg-[radial-gradient(ellipse,rgba(0,212,255,0.32),transparent_65%)] blur-[60px]" />
          <div className="pointer-events-none absolute -left-[10%] bottom-[-20%] h-[60%] w-[45%] bg-[radial-gradient(ellipse,rgba(255,0,224,0.25),transparent_65%)] blur-[50px]" />
          <div className="mx-auto w-full max-w-[1200px] px-7 py-[110px]">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Simple, Transparent Pricing
            </h2>
            <div className="mt-8 max-w-2xl rounded-2xl border border-[rgba(255,255,255,0.08)] bg-surface-elevated p-[28px]">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
                Growth Plan
              </p>
              <p className="mt-3 text-4xl font-bold tracking-[-0.02em] text-text">
                $800/mo
              </p>
              <p className="mt-3 text-[15px] text-text-bright">
                6-month commitment. Website built free at the start.
              </p>
              <ul className="mt-6 space-y-2 text-[15px] text-text-bright">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-[5px] w-[5px] rounded-full bg-cyan" />
                  <span>Professional website — designed and launched at no upfront cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-[5px] w-[5px] rounded-full bg-cyan" />
                  <span>2 SEO blog articles per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-[5px] w-[5px] rounded-full bg-cyan" />
                  <span>30 social media posts per month across your platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-[5px] w-[5px] rounded-full bg-cyan" />
                  <span>Monthly performance report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-[5px] w-[5px] rounded-full bg-cyan" />
                  <span>After 6 months, the website is yours to keep — continue or walk away</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted">
                No long-term contracts beyond the initial 6 months. No fluff. Just a website built to grow.
              </p>
              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackAuditCtaClick("pricing")}
                className="mt-7 inline-flex rounded-md border border-transparent bg-primary px-[22px] py-[14px] text-[15px] font-bold tracking-[-0.01em] text-text shadow-[0_0_40px_-8px_rgba(0,102,255,0.45)] transition-all duration-[180ms] hover:bg-[#3385FF]"
              >
                Get Your Free Website
              </a>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="addons" className="relative overflow-hidden bg-surface scroll-mt-24">
          <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[70%] w-[50%] bg-[radial-gradient(ellipse,rgba(138,43,255,0.25),transparent_65%)] blur-[60px]" />
          <div className="mx-auto w-full max-w-[1200px] px-7 py-[110px]">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Also available.
            </h2>
            <p className="mt-3 text-[16px] text-muted">One-time projects. No subscription required.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: "✦",
                  title: "Logo & Brand Identity",
                  price: "$750",
                  turnaround: "48–72 hour turnaround",
                  outcomes: [
                    "Custom logo (4 variations)",
                    "Brand colors, typography & usage guide",
                    "Print + digital files included",
                  ],
                },
                {
                  icon: "🪪",
                  title: "Business Card Design",
                  price: "$199",
                  turnaround: "24 hour turnaround",
                  outcomes: [
                    "Front + back, print-ready files",
                    "Matched to your existing brand",
                    "Unlimited revisions",
                  ],
                },
                {
                  icon: "📐",
                  title: "Social Media Starter Kit",
                  price: "$299",
                  turnaround: "48 hour turnaround",
                  outcomes: [
                    "Profile photo + cover image",
                    "5 branded post templates",
                    "Ready to use immediately",
                  ],
                },
              ].map((addon) => (
                <div
                  key={addon.title}
                  className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-background p-[28px] transition-colors duration-200 hover:border-[rgba(255,255,255,0.14)]"
                >
                  <div className="flex items-start justify-between">
                    <Image src="/assets/images/logo-icon.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
                    <span className="text-xl font-bold tracking-[-0.02em] text-text">{addon.price}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text">{addon.title}</h3>
                  <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-cyan">{addon.turnaround}</p>
                  <ul className="mt-4 space-y-2 text-[13.5px] text-text-bright">
                    {addon.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="mt-2 h-[5px] w-[5px] rounded-full bg-purple" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={calendlyLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackAuditCtaClick(`addon-${addon.title}`)}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-[rgba(255,255,255,0.12)] px-[18px] py-[11px] text-[14px] font-semibold text-text transition-colors duration-150 hover:border-[rgba(255,255,255,0.25)] hover:bg-surface-elevated"
                  >
                    Book a call
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-10 w-full overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)]">
              <Image
                src="/assets/images/PLD-branding-guide.jpg"
                alt="Brand identity example — Peter Luke Digital"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </MotionSection>

        <MotionSection id="case-study" className="bg-background scroll-mt-24">
          <div className="mx-auto w-full max-w-[1200px] px-7 py-[110px] text-center">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Real results for real practices.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Case study coming soon.
            </p>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackAuditCtaClick("case-study")}
              className="mt-8 inline-flex rounded-md border border-transparent bg-primary px-[22px] py-[14px] text-[15px] font-bold tracking-[-0.01em] text-text shadow-[0_0_40px_-8px_rgba(0,102,255,0.45)] transition-all duration-[180ms] hover:bg-[#3385FF]"
            >
              Book your free audit.
            </a>
          </div>
        </MotionSection>

        <MotionSection id="who-we-help" className="relative overflow-hidden bg-surface scroll-mt-24">
          <div className="pointer-events-none absolute -left-[5%] top-[10%] h-[70%] w-[50%] bg-[radial-gradient(ellipse,rgba(0,212,255,0.28),transparent_65%)] blur-[60px]" />
          <div className="mx-auto w-full max-w-[1200px] px-7 py-[110px]">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Built specifically for medical and wellness practices.
            </h2>
            <ul className="mt-8 grid gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Hormone/TRT clinics",
                "Peptide therapy",
                "Functional medicine",
                "Weight loss/GLP-1",
                "Solo physicians",
                "Telehealth practices",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-surface-elevated p-[14px] text-[15px] text-muted"
                >
                  <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full border-[1.5px] border-[rgba(0,212,255,0.55)] text-[12px] text-cyan">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </MotionSection>

        <MotionSection id="about" className="relative overflow-hidden bg-background scroll-mt-24">
          <div className="pointer-events-none absolute right-[-5%] top-[5%] h-[80%] w-[55%] bg-[radial-gradient(ellipse,rgba(138,43,255,0.28),transparent_65%)] blur-[60px]" />
          <div className="mx-auto grid w-full max-w-[1200px] gap-[56px] px-7 py-[110px] lg:grid-cols-[320px_1fr]">
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-surface">
              <Image
                src="/assets/images/Headshot.PNG"
                alt="Pete Luke headshot"
                fill
                sizes="(max-width: 1024px) 100vw, 240px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text sm:text-3xl">
                You&apos;re working with a person, not an agency.
              </h2>
              <p className="mt-4 max-w-[560px] text-[16px] leading-[1.7] text-text-bright">
                I&apos;m Pete Luke - I started Peter Luke Digital because I kept
                seeing the same problem: medical practices with incredible
                doctors and real results, completely invisible online. I
                specialize in this space - the compliance requirements, the
                patient trust signals, the SEO terms that drive appointments.
              </p>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="relative overflow-hidden bg-background scroll-mt-24">
          <div className="pointer-events-none absolute -left-[10%] top-[-10%] h-[90%] w-[55%] bg-[radial-gradient(ellipse,rgba(0,212,255,0.38),transparent_60%)] blur-[60px]" />
          <div className="pointer-events-none absolute -right-[10%] bottom-[-20%] h-[90%] w-[60%] bg-[radial-gradient(ellipse,rgba(255,0,224,0.35),transparent_65%)] blur-[60px]" />
          <div className="mx-auto w-full max-w-[1200px] px-7 py-[120px] text-center">
            <div className="mb-8 flex justify-center">
              <Image src="/assets/images/logo-icon.png" alt="" width={96} height={96} className="h-24 w-24 object-contain opacity-95" />
            </div>
            <h2 className="text-2xl font-bold text-text sm:text-4xl">
              Is your website losing you patients?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Find out in 20 minutes - free, no obligation.
            </p>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackAuditCtaClick("final-cta")}
              className="mt-[34px] inline-flex rounded-md border border-transparent bg-primary px-[22px] py-[14px] text-[15px] font-bold tracking-[-0.01em] text-text shadow-[0_0_40px_-8px_rgba(0,102,255,0.45)] transition-all duration-[180ms] hover:bg-[#3385FF]"
            >
              Book Your Free Audit
            </a>
          </div>
        </MotionSection>
      </main>

      <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#0F0F18]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-7 py-8 text-sm text-muted">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/logo-icon.png"
              alt="Peter Luke Digital"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <p className="font-semibold text-text">Peter Luke Digital</p>
          </div>
          <a href="mailto:peter@peterlukedigital.com" className="hover:text-text">
            peter@peterlukedigital.com
          </a>
          <a
            href="https://peterlukedigital.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text"
          >
            peterlukedigital.com
          </a>
          <p>Copyright 2026 Peter Luke Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
