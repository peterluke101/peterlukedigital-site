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
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-lg">
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
    <div className="bg-[#F8FAFC]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A1628]/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-base font-semibold text-white sm:text-lg">
            Peter Luke Digital
          </a>
          <div className="hidden items-center gap-7 text-sm text-[#94A3B8] md:flex">
            <a
              href="#services"
              onClick={() => trackSectionNavClick("services", "desktop")}
              className="transition hover:text-white"
            >
              Services
            </a>
            <a
              href="#case-study"
              onClick={() => trackSectionNavClick("case-study", "desktop")}
              className="transition hover:text-white"
            >
              Case Study
            </a>
            <a
              href="#about"
              onClick={() => trackSectionNavClick("about", "desktop")}
              className="transition hover:text-white"
            >
              About
            </a>
          </div>
          <a
            href={calendlyLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackAuditCtaClick("nav")}
            className="rounded-full bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Book Free Audit
          </a>
          <div className="flex w-full items-center justify-center gap-5 text-xs text-[#94A3B8] md:hidden">
            <a
              href="#services"
              onClick={() => trackSectionNavClick("services", "mobile")}
              className="transition hover:text-white"
            >
              Services
            </a>
            <a
              href="#case-study"
              onClick={() => trackSectionNavClick("case-study", "mobile")}
              className="transition hover:text-white"
            >
              Case Study
            </a>
            <a
              href="#about"
              onClick={() => trackSectionNavClick("about", "mobile")}
              className="transition hover:text-white"
            >
              About
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="top" className="bg-[#0A1628] scroll-mt-24">
          <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl"
            >
              We build websites that bring patients to medical and wellness
              practices.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="mt-6 max-w-3xl text-base leading-relaxed text-[#94A3B8] sm:text-lg"
            >
              Most clinic websites look outdated, rank nowhere on Google, and
              lose patients before they ever call. We fix that - design, SEO,
              and content included.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackAuditCtaClick("hero")}
                className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Book a Free 20-Min Audit
              </a>
              <a
                href="#case-study"
                className="text-sm font-semibold text-[#94A3B8] underline-offset-4 transition hover:text-white hover:underline"
              >
                See how we helped Juvenis Medical
              </a>
            </motion.div>
            <p className="mt-8 text-sm text-[#94A3B8]">
              No contracts. No fluff. First lead usually within 30 days.
            </p>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#1E3A5F] px-4 py-3 text-center text-sm text-white sm:px-6">
          First inbound lead for Juvenis Medical within 24 hours of launch
        </section>

        <MotionSection className="bg-[#F8FAFC] scroll-mt-24">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="max-w-3xl text-2xl font-bold text-[#0A1628] sm:text-3xl">
              If any of these sound familiar, your website is costing you
              patients.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
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
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#0A1628]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="services" className="bg-white scroll-mt-24">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-bold text-[#0A1628] sm:text-3xl">
              What we do.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: "🩺",
                  title: "Website Redesign",
                  outcomes: [
                    "Modern, trust-building design",
                    "Mobile-first patient experience",
                    "Clear conversion-focused layout",
                  ],
                },
                {
                  icon: "📍",
                  title: "SEO & Local Visibility",
                  outcomes: [
                    "Better Google Maps visibility",
                    "Service-page keyword targeting",
                    "On-page SEO for patient intent",
                  ],
                },
                {
                  icon: "📱",
                  title: "Social Media Management",
                  outcomes: [
                    "Consistent brand messaging",
                    "Educational content planning",
                    "More traffic from social channels",
                  ],
                },
                {
                  icon: "🚀",
                  title: "Full Growth Package",
                  outcomes: [
                    "Design, SEO, and content together",
                    "Monthly strategy + performance checks",
                    "End-to-end patient acquisition support",
                  ],
                  featured: true,
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className={`rounded-2xl border p-6 shadow-sm ${
                    service.featured
                      ? "border-blue-200 bg-blue-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <ServiceIcon>{service.icon}</ServiceIcon>
                    {service.featured ? (
                      <span className="rounded-full bg-[#2563EB] px-3 py-1 text-xs font-semibold text-white">
                        Most Popular
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#0A1628]">
                    {service.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="bg-[#F8FAFC] scroll-mt-24">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-bold text-[#0A1628] sm:text-3xl">
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
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-sm font-semibold text-[#2563EB]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#0A1628]">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="case-study" className="bg-white scroll-mt-24">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-bold text-[#0A1628] sm:text-3xl">
              Real results for real practices.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Case study coming soon.
            </p>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackAuditCtaClick("case-study")}
              className="mt-8 inline-flex rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Book your free audit.
            </a>
          </div>
        </MotionSection>

        <MotionSection className="bg-[#F8FAFC] scroll-mt-24">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-bold text-[#0A1628] sm:text-3xl">
              Built specifically for medical and wellness practices.
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs text-[#2563EB]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </MotionSection>

        <MotionSection id="about" className="bg-white scroll-mt-24">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8 lg:py-20">
            <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:h-72 lg:h-56">
              <Image
                src="/images/pete-selfie.png"
                alt="Pete Luke headshot"
                fill
                sizes="(max-width: 1024px) 100vw, 240px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0A1628] sm:text-3xl">
                You&apos;re working with a person, not an agency.
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
                I&apos;m Pete Luke - I started Peter Luke Digital because I kept
                seeing the same problem: medical practices with incredible
                doctors and real results, completely invisible online. I
                specialize in this space - the compliance requirements, the
                patient trust signals, the SEO terms that drive appointments.
              </p>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="bg-[#0A1628] scroll-mt-24">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-bold text-white sm:text-4xl">
              Is your website losing you patients?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#94A3B8]">
              Find out in 20 minutes - free, no obligation.
            </p>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackAuditCtaClick("final-cta")}
              className="mt-8 inline-flex rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Book Your Free Audit
            </a>
          </div>
        </MotionSection>
      </main>

      <footer className="bg-[#1E3A5F]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-[#94A3B8] sm:px-6 lg:px-8">
          <p className="font-semibold text-white">Peter Luke Digital</p>
          <a href="mailto:peter@peterlukedigital.com" className="hover:text-white">
            peter@peterlukedigital.com
          </a>
          <a
            href="https://peterlukedigital.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            peterlukedigital.com
          </a>
          <p>Copyright 2026 Peter Luke Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
