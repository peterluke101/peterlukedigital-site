"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const calendlyLink = "https://calendly.com/peterluke101/30min";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function MotionDiv({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={className}
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

function GradientRing({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      style={{ width: size, height: size, padding: Math.max(2, Math.round(size * 0.04)) }}
      className={`shrink-0 rounded-full bg-[conic-gradient(from_135deg,#00D4FF,#0066FF,#00F5A0,#8A2BFF,#FF00E0,#00D4FF)] ${className}`}
    >
      <div className="h-full w-full rounded-full bg-[#0F0F18]" />
    </div>
  );
}

export default function CaseStudy() {
  return (
    <div className="bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(11,11,18,0.7)] backdrop-blur-[20px] backdrop-saturate-[140%]">
        <nav className="mx-auto w-full max-w-[1200px] px-7 py-[14px]">
          <div className="flex items-center justify-between">
            <a href="/" className="flex shrink-0 flex-col items-center gap-1">
              <GradientRing size={56} />
              <span className="text-[12px] font-bold tracking-[0.06em] text-text">Peter Luke Digital</span>
            </a>
            <a href="/" className="text-sm text-muted transition hover:text-text">← Back to home</a>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-text shadow-[0_0_40px_-8px_rgba(0,102,255,0.45)] transition hover:bg-[#3385FF]"
            >
              Get Free Website
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[1200px] px-5 py-14 md:px-7 md:py-[80px]">

        {/* Hero */}
        <MotionDiv>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[rgba(0,212,255,0.35)] bg-[rgba(0,212,255,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan">
              Real Client
            </span>
            <span className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              Launched April 2026
            </span>
          </div>
          <h1 className="mt-5 text-[clamp(30px,6vw,54px)] font-bold leading-[1.08] tracking-[-0.025em] text-text">
            From invisible to generating leads<br className="hidden sm:block" /> in under 72 hours.
          </h1>
          <p className="mt-3 text-[16px] text-muted">
            Juvenis Medical &mdash; Fort Lauderdale, FL &nbsp;&bull;&nbsp; Dr. Paul Goodkin, DC
          </p>
        </MotionDiv>

        {/* Metrics */}
        <MotionDiv className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { stat: "< 72 hrs", label: "Site built & live" },
            { stat: "Day 1", label: "First CRM lead" },
            { stat: "$0", label: "Upfront cost" },
            { stat: "2×/mo", label: "SEO articles, ongoing" },
          ].map(({ stat, label }) => (
            <div key={stat} className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-surface-elevated p-5 text-center md:p-6">
              <p className="text-[28px] font-bold tracking-[-0.02em] text-text md:text-[32px]">{stat}</p>
              <p className="mt-1 text-[12px] text-muted">{label}</p>
            </div>
          ))}
        </MotionDiv>

        {/* Divider */}
        <div className="my-14 h-px bg-[rgba(255,255,255,0.06)] md:my-16" />

        {/* Situation */}
        <MotionDiv>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan">The Situation</p>
          <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
            He had a site. It just wasn&apos;t working.
          </h2>
          <div className="mt-5 max-w-[800px] space-y-4 text-[15px] leading-[1.85] text-text-bright">
            <p>
              Dr. Paul Goodkin, DC had already built something real — a functional medicine and hormone optimization practice in Fort Lauderdale treating conditions most primary care doctors don&apos;t even screen for. His patients loved him. His digital presence told a different story.
            </p>
            <p>
              His WordPress site had generic branding that signaled &ldquo;chiropractor&rdquo; when his practice had evolved far beyond that — into cutting-edge testosterone optimization, peptide therapy, GLP-1 weight loss, and bioidentical hormone replacement. He thought his SEO was in decent shape. A quick audit revealed the opposite: the wrong Google Business Profile category, irrelevant content getting indexed, and a contact form that looked functional but wasn&apos;t delivering leads anywhere. Every patient who tried to reach out was falling through the floor.
            </p>
            <p>
              He didn&apos;t need a patch. He needed a complete rebuild — one that matched where his practice actually was.
            </p>
          </div>
        </MotionDiv>

                {/* Divider */}
        <div className="my-14 h-px bg-[rgba(255,255,255,0.06)] md:my-16" />

        {/* What we built */}
        <MotionDiv>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan">What We Built</p>
          <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
            A complete rebuild. Zero downtime. Zero upfront cost.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Custom site from scratch",
                desc: "Dark, premium brand built specifically for Juvenis Medical — positioning Dr. Paul as the specialist he actually is. Fast, mobile-first, and SEO-ready out of the box. Not a template. Not a theme. Built to convert.",
              },
              {
                title: "Live CRM integration",
                desc: "Every form submission now lands directly in Zoho CRM and triggers an instant email notification to Dr. Paul's inbox. No middleman. No black hole. Every lead accounted for from the moment it comes in.",
              },
              {
                title: "SEO blog + content engine",
                desc: "Professionally written, clinically accurate blog articles targeting the exact terms patients search — testosterone, peptides, GLP-1, BHRT. Published, indexed, and building domain authority with every post.",
              },
              {
                title: "Google Business Profile cleanup",
                desc: "Corrected the GBP category, updated practice photos and description, and began flagging reviews left over from a previous chiropractic chapter. Local search signals rebuilt from the ground up.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-surface-elevated p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-[3px] inline-flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[rgba(0,212,255,0.55)] text-[11px] text-cyan">✓</span>
                  <div>
                    <p className="font-semibold text-text">{title}</p>
                    <p className="mt-2 text-[13.5px] leading-[1.7] text-text-bright">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>

        {/* After screenshots */}
        <MotionDiv className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12">
          <div className="overflow-hidden rounded-2xl border border-[rgba(0,212,255,0.3)]">
            <div className="border-b border-[rgba(0,212,255,0.15)] bg-[rgba(0,212,255,0.06)] px-4 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan">After — New Homepage</p>
            </div>
            <img
              src="/assets/images/case-study/juvenis-after-1.jpg"
              alt="New Juvenis Medical website after redesign"
              className="w-full h-auto"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-[rgba(0,212,255,0.3)]">
            <div className="border-b border-[rgba(0,212,255,0.15)] bg-[rgba(0,212,255,0.06)] px-4 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan">After — SEO Blog</p>
            </div>
            <img
              src="/assets/images/case-study/juvenis-blog-desktop.jpg"
              alt="Juvenis Medical SEO blog with sidebar CTA"
              className="w-full h-auto"
            />
          </div>
        </MotionDiv>

        {/* Divider */}
        <div className="my-14 h-px bg-[rgba(255,255,255,0.06)] md:my-16" />

        {/* Content engine */}
        <MotionDiv>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan">The Content Engine</p>
          <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
            Every blog post works three jobs at once.
          </h2>
          <p className="mt-4 max-w-[720px] text-[15px] leading-[1.8] text-text-bright">
            Google rewards sites that publish fresh, relevant content — and penalizes the ones that go quiet. But the real power isn&apos;t just the ranking. Each article we write for Dr. Paul runs a three-part play:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                num: "01",
                title: "Ranks on Google",
                desc: "Patients in Fort Lauderdale searching for low testosterone treatment, peptide therapy, or GLP-1 weight loss find Dr. Paul — not a competitor. Every article is a permanent asset that compounds over time.",
              },
              {
                num: "02",
                title: "Becomes 15 social posts",
                desc: "Each article is repurposed into a month of social content across his platforms. One piece of writing, dozens of touchpoints. Zero extra work for Dr. Paul — he just shows up consistently.",
              },
              {
                num: "03",
                title: "Builds authority before the first call",
                desc: "Patients read his content, understand his approach, and arrive at consultations already educated and already trusting him. The selling is done before the conversation starts.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-surface-elevated p-5 md:p-6">
                <p className="text-[14px] font-bold tracking-[0.1em] text-cyan">{num}</p>
                <p className="mt-2 font-semibold text-text">{title}</p>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-text-bright">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-surface-elevated px-6 py-5">
            <p className="text-[15px] font-semibold text-text">
              Dr. Paul doesn&apos;t write a word. He sees patients.{" "}
              <span className="text-text-bright font-normal">We handle everything else — the writing, the publishing, the social repurposing, the SEO. His site is a Ferrari under the hood, and it runs itself.</span>
            </p>
          </div>
        </MotionDiv>

        {/* Divider */}
        <div className="my-14 h-px bg-[rgba(255,255,255,0.06)] md:my-16" />

        {/* Dr. Paul quote */}
        <MotionDiv>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan">In His Own Words</p>
          <div className="mt-6 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-surface-elevated p-6 md:p-10">
            <p className="text-[16px] leading-[1.85] text-muted italic md:text-[17px]">
              &ldquo;Pete put together a brand-new, aesthetically pleasing, and technically superior site for me in less than 72 hours. We had a conversation about what I was looking for and within hours he was presenting me with rough outlines. He made the desired changes within minutes, and the site was live and generating leads/revenues within a day.&rdquo;
            </p>
            <p className="mt-8 text-[22px] font-bold leading-[1.4] text-text italic md:text-[28px]">
              &ldquo;I have never worked with any web firm that is this responsive, this fast, this proficient and this professional.&rdquo;
            </p>
            <div className="mt-8 flex flex-col gap-1 border-t border-[rgba(255,255,255,0.08)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-text">Dr. Paul Goodkin, DC</p>
                <p className="text-[13px] text-muted">Founder & CEO, Juvenis Medical LLC</p>
              </div>
              <a href="https://peptidesandhormones.com" target="_blank" rel="noreferrer" className="mt-2 text-[13px] text-cyan hover:underline sm:mt-0">
                peptidesandhormones.com →
              </a>
            </div>
          </div>
        </MotionDiv>

        {/* Final CTA */}
        <MotionDiv className="mt-14 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-surface-elevated p-8 text-center md:mt-16 md:p-12">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute -right-[10%] -top-[50%] h-[200%] w-[55%] bg-[radial-gradient(ellipse,rgba(0,212,255,0.2),transparent_65%)] blur-[50px]" />
            <div className="pointer-events-none absolute -left-[10%] bottom-[-50%] h-[200%] w-[55%] bg-[radial-gradient(ellipse,rgba(138,43,255,0.2),transparent_65%)] blur-[50px]" />
            <p className="relative text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">Ready to see what this looks like for your practice?</p>
            <h2 className="relative mt-4 text-2xl font-bold text-text sm:text-3xl">
              Let&apos;s build yours next.
            </h2>
            <p className="relative mx-auto mt-3 max-w-[500px] text-[15px] text-muted">
              Free 20-minute audit. We&apos;ll look at your current site, your search presence, and tell you exactly what&apos;s holding you back.
            </p>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="relative mt-8 inline-flex rounded-md border border-transparent bg-primary px-[22px] py-[14px] text-[15px] font-bold tracking-[-0.01em] text-text shadow-[0_0_40px_-8px_rgba(0,102,255,0.45)] transition-all duration-[180ms] hover:bg-[#3385FF]"
            >
              Book Your Free Audit
            </a>
          </div>
        </MotionDiv>

      </main>

      <footer className="mt-14 border-t border-[rgba(255,255,255,0.08)] bg-[#0F0F18]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-7 py-8 text-sm text-muted">
          <div className="flex items-center gap-3">
            <GradientRing size={32} />
            <p className="font-semibold text-text">Peter Luke Digital</p>
          </div>
          <a href="mailto:peter@peterlukedigital.com" className="hover:text-text">peter@peterlukedigital.com</a>
          <a href="https://peterlukedigital.com" target="_blank" rel="noreferrer" className="hover:text-text">peterlukedigital.com</a>
          <p>Copyright 2026 Peter Luke Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
