# Implementation Notes: InspectPro Forklift Inspection Checklist

This document details the engineering and design decisions made to recreate the InspectPro reference landing page with pixel-level responsiveness.

---

## 1. High-Fidelity Mobile View Matching (393 × 852 iPhone 16)

1. **Dark Teal Backdrop Shape Removed on Mobile**:
   - The dark teal accent block (`#0c4c5a`) in the hero section is now set to `hidden md:block`.
   - On mobile screens (such as 393 × 852), this shape is completely hidden so that it never overlaps behind the "Forklift Inspection Checklist" title or paragraph text.
   - On tablet and laptop viewports (`md:` and `lg:`), it remains visible behind the floating inspection preview card.

2. **Trusted Logos Mobile Layout**:
   - In mobile view (393px width):
     - **Line 1**: `Apex Logistics`, `Sterling Manufacturing`, and `BuildRight Construction` are placed in a single row with compact sizing (`text-[10px] font-bold`, `w-3.5 h-3.5` icons) and clean spacing to eliminate text overlapping.
     - **Line 2**: `Global Warehousing Solutions` and `Prime Distribution` are centered on the second line with clean gap spacing.
   - On desktop and tablet screens (`md:` and above), all 5 logos are presented horizontally in a 5-column grid.

3. **Streamlined Mobile Page Flow**:
   - As shown in the phone mockup on the far right of the reference image, mobile view displays:
     1. Navbar (with hamburger toggle)
     2. Hero (with preview card and vertically straight ticks)
     3. TrustBar (Line 1: 3 logos, Line 2: 2 logos)
     4. FAQ (accordion with expanded first question)
     5. CTA (dark navy closing banner)
     6. Footer (collapsible accordions and contact details)
   - The desktop-only sections (`AboutChecklist`, `Checklist`, `FeatureCards`, `HowItWorks`, and `Industries`) are wrapped in `hidden md:block`.

4. **Next.js Dev Indicator Removed**:
   - Configured `devIndicators: false` in `next.config.mjs` and added CSS rules in `globals.css` so no floating "N" button appears in the browser during development.

---

## 2. Technology & Code Architecture

- **Next.js 16 (App Router)** with pure JavaScript (`.js` and `.jsx`).
- **React 19** with beginner-friendly `useState`.
- **Tailwind CSS v4** for clean utility styling and media queries.
- **Lucide React** & inline SVGs for lightweight, reliable assets with no broken URLs.
