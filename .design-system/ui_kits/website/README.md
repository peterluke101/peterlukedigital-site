# Peter Luke Digital — Website UI Kit

A dark-mode, premium homepage prototype for Peter Luke Digital. Built from the brand card as the source of truth — NOT from the existing `peterluke101/peterlukedigital-site` Next.js codebase, which predates the rebrand.

## Files
- `index.html` — full desktop homepage (11 sections)
- `mobile.html` — mobile hero + mobile nav (open state)
- `styles.css` — kit-specific styles layered on top of `../../colors_and_type.css` tokens
- `*.jsx` — modular React components (one per section)

## Structure
Nav → Hero → ProofBar → Problems → Services → HowItWorks → CaseStudy → WhoWeHelp → AboutPete → FinalCTA → Footer

## Components
Each section is a self-contained JSX component attached to `window`, loaded via Babel-standalone in `index.html`. They read design tokens from `colors_and_type.css`. Reuse them by copying the `.jsx` file + a `<script type="text/babel" src="...">` tag into your host HTML.

## Assets used
- `../../assets/logo-primary.png` — hero ring
- `../../assets/logo-icon.png` — nav, footer, final-CTA
- `../../assets/pete-selfie.png` — about section

## Copy tone rules followed
- Sentence case, short declarative titles, periods at end
- "We" (PLD) / "you" (practice), "I" only inside Pete's bio
- Numerals always — "24 hrs", "20-min", "+312%"
- No emoji. No hype words. Specific numbers over adjectives.
