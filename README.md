# PETRONEXUS LIMITED — Corporate Website

Premium dark-luxury corporate website for Petronexus Limited, an oil & gas engineering, scientific and technical consulting company.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Typography**: Cormorant Garamond (display) + Barlow (body) + Barlow Condensed (mono)
- **Deployment**: Vercel-ready

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, about teaser, services grid, CTA |
| `/about` | Company history, values, leadership team |
| `/services` | Full services catalogue with deliverables |
| `/industries` | Industry sectors with capabilities |
| `/contact` | Contact form + office locations |

## Design System

- **Palette**: Obsidian black `#0A0A0B` · Carbon `#111113` · Gold `#C9A84C` · Platinum `#B8BCC8`
- **Style**: Dark luxury — grid background texture, gold accents, serif display type, noise overlay
- **Animations**: Scroll-reveal fade-ups, hover state transitions, gold underline links

## Getting Started

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — zero-config deployment.

## Customisation

- **Content**: Edit page files in `app/` directory
- **Brand colours**: Update `tailwind.config.ts` color tokens
- **Fonts**: Swap Google Fonts import in `app/globals.css`
- **Company details**: Update contact info in `app/contact/page.tsx` and `components/Footer.tsx`
