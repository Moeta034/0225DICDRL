# 謝國瑋 — Personal Portfolio Page

A bold, neo-brutalist personal webpage inspired by the [Adelina template](https://builder.hostinger.com/templates?preview=adelina&hideRating=1) from Hostinger. Built with pure HTML, CSS, and JavaScript — no frameworks required. Fully responsive across all devices.

---

## 🌐 Live Demo

👉 **[https://moeta034.github.io/0225DICDRL/](https://moeta034.github.io/0225DICDRL/)**

Or open `index.html` locally in any modern browser.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Neo-Brutalist Design** | Dark charcoal background with vibrant neon purple accents |
| 🕐 **Live Clock** | Real-time clock updating every second, displayed prominently in the hero section |
| 🔤 **Bold Typography** | Archivo Black for headings, Space Grotesk for body, Caveat for script accents |
| 🏷️ **Sticker Elements** | Floating badge-style labels ("HELLO!", "RIGHT NOW", "WELCOME") with animations |
| 📜 **Scrolling Ticker** | Continuous horizontal ticker bar with name and keywords |
| 🖱️ **Parallax Effect** | Mouse-tracking parallax on the hero section (desktop only) |
| 👁️ **Scroll Reveal** | Elements animate into view as the user scrolls down |
| 📱 **Fully Responsive (RWD)** | 5 breakpoints covering desktop → small phone, plus landscape & reduced-motion support |
| 🍔 **Hamburger Menu** | Animated ☰ → ✕ toggle with full-screen nav overlay on mobile/tablet |
| 🌫️ **Grain Texture** | Subtle film-grain overlay for a tactile, print-like aesthetic |
| ⭐ **Spinning Stars** | Decorative star elements with continuous rotation animations |
| ♿ **Accessibility** | `prefers-reduced-motion` support and touch-friendly interactions |

---

## 📱 Responsive Web Design (RWD)

The page adapts seamlessly across all screen sizes with **5 breakpoints**:

| Breakpoint | Target Device | Key Adaptations |
|-----------|---------------|-----------------|
| **≤1200px** | Large desktop | Fluid padding with `clamp()`, tighter content gaps |
| **≤968px** | Tablet | Hamburger menu, single-column hero, 2-column about cards, centered layout |
| **≤768px** | Small tablet | Single-column cards, scaled typography, smaller decorative elements |
| **≤600px** | Phone | Compact spacing, touch-sized buttons, scaled-down stars & badges |
| **≤400px** | Small phone | Minimum sizes for very narrow screens |

### Additional RWD Features

- **🍔 Hamburger Menu** — 3-line icon animates to ✕ on open; full-screen blurred overlay; closes on link click or outside tap
- **👆 Touch Devices** — `@media (hover: none)` swaps hover effects for active/tap states; parallax disabled for performance
- **📐 Landscape Mode** — `@media (max-height: 500px) and (orientation: landscape)` restores side-by-side layout on rotated phones
- **♿ Reduced Motion** — `@media (prefers-reduced-motion: reduce)` disables all animations and transitions
- **📏 Fluid Units** — `clamp()`, `dvh`, and viewport-relative units ensure smooth scaling between breakpoints

---

## 📁 Project Structure

```
L1/
├── index.html   # Main HTML structure (hero, ticker, about, contact, footer)
├── style.css    # All styling — layout, colors, animations, 5 responsive breakpoints
├── script.js    # Live clock, scroll reveal, parallax, hamburger menu, navbar effects, ticker loop
└── README.md    # This file
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Background | `#0e0e0e` | Page background |
| Card Background | `#1a1a1a` | Card surfaces |
| Purple Primary | `#a855f7` | Accents, stickers, highlights |
| Purple Light | `#c084fc` | Gradients, script text |
| Purple Deep | `#7c3aed` | Secondary accents |
| White | `#ffffff` | Primary text |
| White Muted | `#b0b0b0` | Secondary text |

### Fonts (Google Fonts)

- **Archivo Black** — Ultra-bold headings
- **Space Grotesk** — Clean body text
- **Caveat** — Handwritten script accents

---

## 🧩 Page Sections

1. **Navigation** — Fixed top bar with blur backdrop, shrinks on scroll; hamburger menu on mobile
2. **Hero** — Full-viewport section with name (謝國瑋), subtitle, live clock, and decorative gradient card
3. **Ticker** — High-contrast white horizontal bar scrolling keywords in a seamless loop
4. **About** — Three feature cards (Passion, Vision, Craft) with hover effects and stat counters (∞, 24/7, 100%)
5. **Contact** — Call-to-action section with gradient background glow and animated button
6. **Footer** — Minimal footer with name and dynamic copyright year

---

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/Moeta034/0225DICDRL.git
   ```
2. Open `index.html` in your browser — no build step needed.

---

## 🛠️ Technologies

- **HTML5** — Semantic structure with `<nav>`, `<section>`, `<footer>`
- **CSS3** — Custom properties, `clamp()`, `dvh`, grid, flexbox, `backdrop-filter`, keyframe animations, 5 media query breakpoints
- **JavaScript (ES6)** — DOM manipulation, IntersectionObserver, event delegation, touch detection
- **Google Fonts** — Archivo Black, Space Grotesk, Caveat

---

## 📝 License

© 2026 謝國瑋. All rights reserved.
