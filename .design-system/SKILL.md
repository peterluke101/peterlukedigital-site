---
name: peter-luke-digital-design
description: Use this skill to generate well-branded interfaces and assets for Peter Luke Digital (PLD), a premium digital agency for medical and wellness practices. Contains brand guidelines, colors, typography, logo assets, and a homepage UI kit for dark-mode, medically credible, high-end fintech-grade design.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — full brand system overview, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — all design tokens (colors, type, spacing, radii, shadows, motion). Import this first.
- `assets/` — all brand imagery (logos, brand card, Pete headshot)
- `preview/` — small HTML cards showing each foundation (colors, type, components)
- `ui_kits/website/` — the homepage prototype + modular React components

When creating visual artifacts (slides, mocks, throwaway prototypes, websites), copy assets out of `assets/` and import `colors_and_type.css` into a static HTML file the user can view directly.

When working on production code, read the tokens from `colors_and_type.css` and apply them to the codebase's styling layer (Tailwind theme, CSS modules, etc). Lift exact hex values and sizes.

If the user invokes this skill without any other guidance, ask them what they want to build or design (landing section, email, slide deck, ad creative, new page, etc), ask 3–5 focused questions about audience / length / tone, then act as an expert designer — output either HTML artifacts or production code, whichever fits.

Hard brand rules (never violate):
- Dark mode only. Background is `#0B0B12`.
- Primary CTA is always solid `#0066FF`, white text, 8px radius, bold. Label: "Book a Free 20-Min Audit" unless the user specifies otherwise.
- Typography is Neurial Grotesk (or Space Grotesk fallback).
- Use the 45° brand gradient sparingly — for logo, thin section dividers, occasional headline accents. Never as a large fill.
- No emoji in production copy. No stock-photo doctors.
- Tone is confident, concise, medically credible. No hype words.
