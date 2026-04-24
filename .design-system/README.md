# Peter Luke Digital — Design System

A premium, dark-mode design system for **Peter Luke Digital** (PLD), a web design + digital marketing agency serving medical and wellness practices (hormone therapy, TRT, peptides, GLP-1, longevity, functional medicine).

The visual standard is **high-end fintech × medical precision × premium digital agency** — confident, credible, restrained. Not loud. Not trendy. Every element earns its place.

---

## Sources used

| Source | Path / URL | Status |
|---|---|---|
| Brand identity card | `assets/brand-card.png` (originally `uploads/1a4a6a16-e67d-4c33-94b3-97ac795f3438.png`) | ✅ source of truth |
| Primary logo | `assets/logo-primary.png` | ✅ used |
| Icon-only logo | `assets/logo-icon.png` | ✅ used |
| Mono / Reversed / Wordmark variants | `assets/logo-*.png` | ✅ imported |
| Pete headshot | `assets/pete-selfie.png` | ✅ used |
| Website codebase | `github.com/peterluke101/peterlukedigital-site` (Next 14, Tailwind 4, Framer Motion) | 🔎 read for copy + structure only — the live site predates the brand-card direction, so visuals come from the brand card, not `app/page.tsx`. |

---

## Index — what's in this project

```
├── README.md                  ← you are here
├── SKILL.md                   ← Agent SKill front-matter, for Claude Code
├── colors_and_type.css        ← CSS vars: color, type, spacing, radii, shadows, motion
├── assets/                    ← logo variants, brand card, Pete headshot
├── preview/                   ← small cards populating the Design System tab
│     ├── colors-*.html        ← palette / semantic / gradient swatches
│     ├── type-*.html          ← type scale, weights, specimen
│     ├── spacing-*.html       ← spacing, radii, shadow tokens
│     ├── buttons.html         ← button variants + CTA rule
│     ├── cards.html           ← service / stat / step / case-study
│     ├── forms.html           ← inputs, textarea, select, checkbox
│     ├── nav.html             ← sticky nav + footer
│     ├── badges-tags.html     ← pills, badges, tags
│     └── logo-*.html          ← logo usage, clearspace, min-size, do-not
└── ui_kits/
      └── website/
            ├── index.html     ← full desktop homepage prototype
            ├── mobile.html    ← mobile nav + mobile hero breakpoint
            └── *.jsx          ← modular React components
```

---

## CONTENT FUNDAMENTALS

**Tone.** Premium, confident, concise, medically credible. Short declarative sentences. Results-first. Specific numbers over adjectives.

**Voice.** "We" when speaking as PLD. "You" when addressing the practice. Never "I" in body copy — Pete shows up only in the About section where his first-person voice is intentional.

**Casing.**
- Headings and section titles: **sentence case** ("What we do." not "What We Do."). Often ends with a period to feel declarative.
- Buttons / CTA labels: **Title Case** ("Book a Free 20-Min Audit").
- Micro-labels above sections: **ALL CAPS**, tracked +120, 12px, muted.

**Length.** Hero headline ≤ 12 words. Subhead ≤ 24 words. Card descriptions ≤ 20 words. Ruthless.

**No-go language.** No hype ("game-changer", "revolutionary", "10x", "unlock"). No emoji in production copy — the logo's gradient ring is the visual energy, copy stays clinical. No stacked exclamation marks. No "synergy / solutions / leverage" agency-speak.

**Examples.**
- ✅ "We build websites that bring patients to medical and wellness practices."
- ✅ "No contracts. No fluff. First lead usually within 30 days."
- ✅ "Real results for real practices."
- ❌ "Unlock explosive growth with our revolutionary digital solutions! 🚀"

**Emoji.** **No.** Only exception: the checkmark glyph (✓) in the Who-We-Help list, which reads as a medical / verified signal, not an emoji.

**Numbers.** Always numerals ("30 days", "20-min audit", "First lead in 24 hrs"). Units attached ("30 days" not "30 d"). Ranges use en-dash ("10–15 hrs").

---

## VISUAL FOUNDATIONS

### Color
Dark mode throughout. Background is `#0B0B12` near-black — warmer than pure black, reads as considered, not stark. Five brand hues (cyan, blue, green, purple, magenta) are saturated and vivid, but used as **accents and glow**, never fill large areas. The signature 45° gradient is reserved for premium emphasis: logo ring, section dividers, headline accents, hero halos. Solid `#0066FF` (brand blue) is the single CTA color. Green, cyan, purple, magenta are available for status + data-viz but should appear sparingly.

### Type
Primary family is **Neurial Grotesk** (licensed). Substituted here with **Space Grotesk** (Google Fonts) until the real files ship — same geometric neo-grotesque silhouette, wide weight range. Five weights in play (Light 300 / Regular 400 / Medium 500 / Bold 700 / Black 700 — Space Grotesk caps at 700). Generous hierarchy: H1 clamp(44→64px), H2 clamp(32→44px), body 16/27.

### Spacing
4-pixel base grid. Sections are tall — 96–128px vertical padding on desktop, 64–80px on tablet. Content max-width 1200px. Generous negative space is part of the premium feel; never dense.

### Backgrounds
- Base: solid `#0B0B12`.
- Section variation comes from surface layers (`surface` `#14141F`, `surface-elevated` `#1C1C28`) and the occasional soft radial glow (cyan or purple at < 35% opacity) used to anchor heroes and final CTAs. No noise, no grain, no patterns, no full-bleed photography (other than the brand logo).

### Imagery
The PLD ring logo is the hero visual. Otherwise, imagery is minimal — photos (like Pete's headshot) appear contained in rounded rectangles, cool-toned, desaturated enough to sit in the dark palette. No stock photography of doctors / stethoscopes.

### Animation
Restrained. On section reveal: 400ms fade + 16px Y translate, `cubic-bezier(0.22, 1, 0.36, 1)`. Logo ring has a slow (8–12s) hue-shift or rotation at < 40% opacity; never attention-grabbing. Hovers are 160ms. No bounces, no elastic, no scroll-jacking, no parallax.

### Hover / press
- **Primary CTA:** hover lightens `#0066FF → #3385FF`, adds a soft blue glow (`box-shadow: 0 0 40px -8px rgba(0,102,255,0.6)`).
- **Secondary / ghost:** hover fills at 8% white.
- **Cards:** hover lifts border from 8% white → 14% white + subtle elevation bump (no transform translate on hover — too bouncy).
- **Press:** scale(0.98) for 100ms. No darker fills on press — we brighten (adds energy).
- **Links:** 160ms color transition `text-secondary → white`, underline-offset 4px when active.

### Borders
Hairline `rgba(255,255,255,0.08)` default; `rgba(255,255,255,0.14)` on hover / focused cards. Never black borders in dark mode.

### Shadows
Subtle and mostly downward. Elevation comes from surface-lift, not big drop shadows. Glow shadows (blue/cyan/purple) are reserved for CTAs and the logo ring.

### Corner radii
- Buttons: **8px** (brand rule — not pills).
- Inputs / tags: 8px.
- Cards: 12–16px.
- Large surfaces / image frames: 24px.
- Never fully rounded except for the logo ring and status dots.

### Cards
Flat surface-elevated fill (`#1C1C28`), 1px hairline border, 12–16px radius, 24–32px interior padding. Optional top-border gradient accent (1–2px 45° gradient strip) on featured cards — the restrained way to apply brand color.

### Transparency / blur
The nav uses `backdrop-filter: blur(20px) saturate(140%)` over `rgba(11,11,18,0.7)`. That's the only place blur appears. Keep the rest opaque.

### Layout rules
- Desktop content: 1200px max, centered, 24px gutter.
- 12-col implicit grid; most sections are 3- or 4-col.
- Vertical rhythm: sections alternate between `bg` and `surface` occasionally to structure the page without relying on lines.
- One primary CTA per section. Never two side-by-side fighting for attention.

---

## ICONOGRAPHY

The brand system does not ship a proprietary icon set. PLD uses **[Lucide](https://lucide.dev/)** (CDN-linked) across all digital surfaces — thin 1.5px stroke, rounded joins, 24×24. This matches the precise / medical / fintech feel.

**Rules.**
- Stroke 1.5px, never filled.
- Color: `currentColor`, tinted to `--text-secondary` by default. The brand accent (cyan / purple / magenta) appears in icons only when indicating status (success, attention, gradient-outline featured item).
- Size 16, 20, 24, 32. Nothing in between.
- Icons sit inside a 40×40 rounded-12 container with `surface-elevated` fill for service cards.
- Checkmarks in the Who-We-Help list use the `Check` glyph inside a 20×20 ring with cyan stroke.

**Emoji.** Not used.

**Unicode chars.** Only `·` (middle dot) as a separator in footers, and `→` (rightwards arrow) in "Learn more →" links.

Import:
```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="check" class="pld-icon"></i>
<script>lucide.createIcons();</script>
```

---

## Font substitution flag

> **Neurial Grotesk is a licensed font.** This system ships with **Space Grotesk** (Google Fonts) as the nearest free equivalent — same geometric neo-grotesque DNA, same 5-weight range (300/400/500/700, with 700 standing in for both Bold and Black since Space Grotesk tops out at 700). If you have the Neurial Grotesk `.woff2` files, drop them into `fonts/` and replace the `@import` line at the top of `colors_and_type.css` with `@font-face` declarations. The rest of the system — sizes, line-heights, tokens — is already calibrated to the geometry so nothing else needs to change.

---

## CAVEATS

- **Neurial Grotesk** substituted with Space Grotesk. Ask the licensee for `.woff2` files and replace.
- The **live site codebase** on GitHub still uses the older light-mode blue/slate palette — it predates the brand-card rebrand. This design system reflects the brand card, not the current site.
- **Logo PNGs** are large (1100×1100, ~1MB each). For production, export optimized SVGs or smaller WebP versions. We use them directly here because the ring / chrome effects are not trivial to recreate faithfully in SVG.
- **Merch / print applications** from the brand card are not included in this system (out of scope — digital only).
