# Zumra 11 — Innovation Hub Landing Page

> منصة الابتكار في تجربة الزائر · Innovation platform for visitor experience in Mecca

Premium dark-cinematic Arabic (RTL) landing page for **Zumra 11**, an innovation hub connecting entrepreneurs, companies, investors, and solution providers in Mecca's pilgrim experience ecosystem.

---

## ✨ المميزات · Features

- 🎬 **Cinematic dark design** with a copper × teal accent system
- 🇸🇦 **Native RTL Arabic** typography (Tajawal display + Inter for numbers)
- 🌊 **Smooth Lenis scrolling** synced with GSAP ScrollTrigger reveals
- 🚀 **Smart scroll-aware animations** — gracefully skip on fast scroll instead of "popping in"
- 🖼️ **Image-optimized** — went from ~50 MB → ~3 MB total via JPEG conversion + resize
- 📝 **3-step concierge registration** with copper/teal animated stepper
- 🎴 **Bento grid programs section** — composition locked LTR inside RTL page
- 💎 **Cream luxury closing CTA** with building aerial backdrop
- 📱 **Fully responsive** desktop / tablet / mobile breakpoints
- ♿ **Accessibility-aware** — respects `prefers-reduced-motion`, semantic HTML, keyboard nav

---

## 🎨 Design System

### Color tokens

| Role | Primary | Light / Soft |
|---|---|---|
| **Teal** (Zamzam) | `#0D5B5A` | `#4A8B8E` · `#5FB3B1` |
| **Copper** (Clay) | `#C46A36` | `#D4844F` · `#A85525` |
| **Limestone** (Cream) | `#D9CDB8` | `#E4DCC9` · `#F7F5F1` |
| **Ink** | `#0B0D10` (dark) | `#1A1410` (warm dark) |

### Typography

- **Arabic / Display** — Tajawal (300, 400, 500, 700, 900)
- **English / Numbers** — Inter (300, 400, 500)

---

## 🛠️ Tech Stack

- **HTML5** — semantic, RTL, no frameworks
- **CSS3** — custom properties, grid, flex, `backdrop-filter`, custom corner-tick frames
- **Vanilla JavaScript** — ES modules, no bundler
- **GSAP 3.12** + **ScrollTrigger** — reveal animations
- **Lenis** — smooth scrolling
- **No build step** — open `index.html` and you're done

---

## 📁 Project Structure

```
.
├── index.html                         # Single-page entry
├── README.md
├── .gitignore
│
├── images/                            # All visual assets, optimized
│   ├── logo.png
│   ├── hero.jpg                       # Hero photo (~300 KB)
│   ├── building-map.jpg               # Open Graph / meta image
│   ├── closing-aerial.jpg             # Closing CTA backdrop
│   ├── space-events.jpg               # Spaces card 1
│   ├── space-coworking.jpeg           # Spaces card 2
│   ├── space-innovation-room.jpg      # Spaces card 3
│   ├── space-private-offices.jpg      # Spaces card 4
│   └── programs/
│       ├── 01_innovation_pulse.jpg
│       ├── 02_workshop_chamber.jpg
│       ├── 03_field_flow.jpg
│       ├── 04_knowledge_hall.jpg
│       ├── 05_solution_showcase.jpg
│       └── 06_partnership_grid.jpg
│
└── assets/
    ├── css/
    │   ├── tokens.css                 # Design tokens (colors, fonts, sizes)
    │   ├── base.css                   # Reset + base typography
    │   ├── components.css             # Buttons, nav, cursor, common UI
    │   ├── ambient.css                # Global ambient background
    │   ├── section-identities.css     # Per-section atmospheric decor
    │   └── sections.css               # All section-specific styles
    │
    └── js/
        ├── main.js                    # Bootstrap + Lenis + ScrollTrigger glue
        ├── lib/
        │   └── lenis.min.js
        └── modules/
            ├── loader.js
            ├── nav.js
            ├── hero.js
            ├── animations.js
            ├── particles.js
            ├── reveal.js              # ⚡ Smart scroll-aware reveal helper
            ├── spotlight.js
            ├── spotlight-features.js
            ├── spaces.js
            ├── roadmap.js
            ├── programs.js
            ├── closing.js
            └── register.js
```

---

## 🚀 Getting Started

No build step. Pick any static server.

**Python:**
```bash
python -m http.server 8000
```

**Node:**
```bash
npx serve .
```

**VS Code:** install *Live Server* extension → right-click `index.html` → *Open with Live Server*

Then open <http://localhost:8000>.

---

## 📄 Sections

| # | Section | What it is |
|---|---|---|
| 1 | **Hero** | Cinematic intro — building photo, animated headline, brand tagline |
| 2 | **Spotlight** | "عالمية في الرؤية، محلية في الأثر" + 4 luxury feature cards |
| 3 | **Spaces** | 4 physical spaces in an asymmetric premium showcase |
| 4 | **Roadmap** | 4-station journey diagram (التعاون · التجربة · العرض · النمو) |
| 5 | **Programs** | Bento grid (1 tall + 1 wide + 4 small), 6 programs |
| 6 | **Closing CTA** | Cream luxury full-screen "كن جزءًا من مجتمع زمرة 11" |
| 7 | **Registration** | 3-step concierge intake (role → interests → contact) |
| 8 | **Footer** | Brand, links, social, contact |

---

## ⚡ Performance Notes

The site was tuned for **smooth scroll without jank** on mid-range hardware:

- **Images** — every source asset is JPEG-optimized and resized to web-sensible dimensions (~3 MB total instead of ~50 MB)
- **Lazy loading** — `loading="lazy"` + `decoding="async"` on every below-fold image
- **CSS containment** — `contain: layout paint` on card-style elements isolates repaint scope
- **No backdrop-filter on animated cards** — only on static panels (closing card, register card)
- **`reveal.js` smart skipper** — when Lenis velocity is high or the section is already past viewport, reveals snap to final state instantly instead of playing late
- **rAF-queued ScrollTrigger updates** — Lenis scroll events update ScrollTrigger at most once per frame

---

## 🌐 Browser Support

Modern evergreen browsers — Chrome, Edge, Firefox, Safari (latest 2 versions).

Uses: CSS Grid, Custom Properties, `backdrop-filter`, `mask-image`, `inset-inline-*` logical properties, ES modules.

---

## 📜 License

© 2026 **Zumra 11**. All rights reserved.

Built by **EVC** — شركة رؤية الخبراء الاستشارية.
