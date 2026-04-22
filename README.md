# duru.dev — Portfolio

A personal portfolio site built with Next.js, designed in a "Swiss grid brutalist with feminine touches" aesthetic — bold serif typography, warm cream/blush/ink palette, asymmetric layouts, and thoughtful details.

## 🌸 Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Pure CSS + inline styles (no Tailwind, no framework — full control)
- **Fonts**: Fraunces (display), Instrument Serif (italic accent), JetBrains Mono (mono)
- **Deploy**: Vercel

## 🚀 Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

## 📦 Deploying to Vercel (first time)

1. Push this project to a new GitHub repo (see below)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Sign in with GitHub
4. Import the repo
5. Leave all settings default — Vercel auto-detects Next.js
6. Click **Deploy**

You'll get a URL like `duru-portfolio.vercel.app` in ~30 seconds.

## 🎨 Customizing

- **Colors**: Edit CSS variables in `app/globals.css`
- **Content**: Edit `app/page.tsx` for the home page
- **Project case studies**: `app/projects/[project-name]/page.tsx`
- **Add a project**: Copy one of the project folders, rename, update content, then add a card on `app/page.tsx`

## 📁 Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout + fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design system / fonts / variables
│   └── projects/
│       ├── nuclear-renewable/page.tsx
│       └── credit-card-fraud/page.tsx
├── next.config.js
└── package.json
```

Made with ✿ in Newark.
