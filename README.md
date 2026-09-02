# duru.dev — Portfolio

A personal portfolio site built with Next.js, designed in a minimal neutral aesthetic — Inter body text, Calistoga display headings, gray-scale palette with light/dark mode.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (body), Calistoga (display headings)
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

## Customizing

- **Colors**: Tailwind gray scale utility classes, used directly throughout components
- **Content**: Edit `app/page.tsx` for the home page
- **Project case studies**: `app/projects/[project-name]/page.tsx`
- **Add a project**: Copy one of the project folders, rename, update content, then add a card in `components/Projects.tsx`

## Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout + fonts + theme init
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind import + base styles
│   └── projects/
│       ├── nuclear-renewable/page.tsx
│       └── credit-card-fraud/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── ThemeToggle.tsx
│   ├── IconLinks.tsx
│   ├── Experience.tsx
│   └── Projects.tsx
├── next.config.js
└── package.json
```

Made with ✿ in Newark.
