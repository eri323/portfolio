# Design System: QA & Dev Portfolio

## 1. Visual Theme & Atmosphere
A restrained, cockpit-dense interface with confident asymmetric layouts and fluid spring-physics motion. The atmosphere is professional yet highly technical — like a modern IDE or developer tools suite. Designed for a QA Analyst and Junior Developer, it communicates precision, reliability, and modern coding aesthetics.

## 2. Color Palette & Roles
- **Canvas Dark** (#09090B) — Primary background surface (Zinc-950)
- **Code Surface** (#18181B) — Card and container fill (Zinc-900)
- **Terminal Silver** (#F4F4F5) — Primary text, headings (Zinc-100)
- **Muted Steel** (#A1A1AA) — Secondary text, descriptions, metadata (Zinc-400)
- **Whisper Border** (rgba(255,255,255,0.1)) — Card borders, 1px structural lines
- **Electric Cyan** (#06B6D4) — Single accent for CTAs, active states, focus rings
(Max 1 accent. Saturation < 80%. No purple/neon.)

## 3. Typography Rules
- **Display:** Outfit — Track-tight, controlled scale, weight-driven hierarchy
- **Body:** Outfit — Relaxed leading, 65ch max-width, neutral secondary color
- **Mono:** JetBrains Mono — For code, metadata, timestamps, high-density numbers
- **Banned:** Inter, generic system fonts for premium contexts. Serif fonts banned in dashboards.

## 4. Component Stylings
* **Buttons:** Flat, no outer glow. Tactile -1px translate on active. Accent fill for primary, ghost/outline for secondary.
* **Cards:** Generously rounded corners (1.5rem). Diffused whisper shadow. Used only when elevation serves hierarchy. High-density: replace with border-top dividers.
* **Inputs:** Label above, error below. Focus ring in accent color. No floating labels.
* **Loaders:** Skeletal shimmer matching exact layout dimensions. No circular spinners.
* **Empty States:** Composed, illustrated compositions — not just "No data" text.

## 5. Layout Principles
Grid-first responsive architecture. Asymmetric splits for Hero sections.
Strict single-column collapse below 768px. Max-width containment (1200px).
No flexbox percentage math. Generous internal padding. Centered Hero layouts BANNED. Every element occupies its own clean spatial zone.

## 6. Motion & Interaction
Spring physics for all interactive elements. Staggered cascade reveals.
Perpetual micro-loops on active dashboard components. Hardware-accelerated transforms only. 

## 7. Anti-Patterns (Banned)
Explicit list of forbidden patterns: no emojis, no Inter, no pure black (#000000), no neon glows, no 3-column equal grids, no AI copywriting clichés ("Elevate", "Seamless"), no generic placeholder names, no broken image links. No overlapping text on images.
