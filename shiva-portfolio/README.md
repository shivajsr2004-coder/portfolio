# Shiva Vaitunathan — Creative Portfolio Website

A pixel-faithful recreation of Shiva's PDF portfolio as a production-ready Next.js 15 website.

## Tech Stack
- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle premium animations)

## Project Structure
```
/app
  layout.tsx         # Root layout + SEO metadata
  page.tsx           # Assembles all sections
  globals.css        # Base styles + scroll progress
/components
  ScrollProgress.tsx       # Thin gradient top progress bar
  GradientBlob.tsx         # Floating animated gradient blobs
  FadeIn.tsx               # Section entry animation wrapper
  HeroSection.tsx          # Cover page (PDF page 1)
  TableOfContents.tsx      # TOC (PDF page 2)
  IntroductionSection.tsx  # Introduction (PDF page 3)
  AboutSection.tsx         # About / SHIVA (PDF page 4)
  SkillsSection.tsx        # Personal Skills (PDF page 5)
  CreationsSection.tsx     # My Creations (PDF pages 6-7)
  ContactSection.tsx       # Contact Me (PDF page 8)
  ThankYouSection.tsx      # Thank You (PDF page 9)
/public
  (place extracted images here — see Asset Placement below)
```

## Installation & Running Locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import the repo → Vercel auto-detects Next.js
4. Click **Deploy** — done in ~60 seconds

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

## 📌 Asset Placement Guide

The PDF contains images that must be manually extracted and placed in `/public/`:

| File | Where to get it | Section |
|------|----------------|---------|
| `public/intro-hero.png` | PDF page 3 — illustrated character waving with blue+orange circle background | Introduction section right panel |
| `public/about-neon.png` | PDF page 4 — neon "Break rules. Keep taste." photo | About section right panel |
| `public/skills-character.png` | PDF page 5 — illustrated designer at laptop with gradient bg | Skills section right panel |
| `public/creation-astronaut.png` | PDF page 6 — yellow poster with astronaut | Creations grid slot 1 |
| `public/creation-controlx.png` | PDF page 6 — control.x gaming UI dark screenshot | Creations grid slot 2 |
| `public/creation-sam.png` | PDF page 7 — Sam. web designer portfolio screenshot | Creations grid slot 3 |
| `public/creation-monk.png` | PDF page 7 — monk. meditation platform screenshot | Creations grid slot 4 |

**How to extract:** Open the PDF in Adobe Acrobat or any PDF viewer → right-click each image → Save as PNG → place in `/public/` with the above filenames.

Once placed, replace the placeholder divs in each component with:
```jsx
import Image from 'next/image';
<Image src="/intro-hero.png" alt="Shiva Vaitunathan" fill className="object-cover" />
```

---

## Animations (as per spec)
- **Hero/ThankYou**: Title fades in and rises 15px on load
- **Gradient blobs**: 25-second floating loop, barely perceptible
- **Section entry**: fade + translateY(20px), 0.6s, triggered by scroll into viewport
- **Hover – contact cards**: translateX(4px) slide
- **Hover – project cards**: scale(1.01)
- **Scroll progress bar**: gradient orange→purple, top of viewport

## SEO
- Title + description meta tags set
- Open Graph tags configured
- Semantic HTML with proper heading hierarchy (h1 → h2)
- All placeholder images have alt text

## Accessibility
- Keyboard-navigable TOC links (scroll to section)
- Semantic `<section>`, `<main>`, `<a>` elements
- Alt text on all image placeholders
- Focus-visible styles from Tailwind

