import type { Metadata } from 'next'
import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Duru Birinci — Links',
  description: 'Resume, website, LinkedIn, and email for Duru Birinci.',
}

const links = [
  {
    label: 'resume',
    detail: 'view / download pdf',
    href: '/duru-birinci-resume.pdf',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
  },
  {
    label: 'email',
    detail: 'db662@njit.edu',
    href: 'mailto:db662@njit.edu',
    external: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
  },
  {
    label: 'linkedin',
    detail: 'in/duru-birinci',
    href: 'https://www.linkedin.com/in/duru-birinci/',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: 'website',
    detail: 'durubirinci.vercel.app',
    href: '/',
    external: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
      </svg>
    ),
  },
]

export default function LinksPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center px-6 py-14 sm:py-20">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <div className="h-20 w-20 overflow-hidden rounded-full border border-gray-200 dark:border-gray-800">
            <Image
              src="/images/duru-selfie.jpg"
              alt="Duru Birinci"
              width={80}
              height={80}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <h1 className="mt-4 font-display text-2xl">duru birinci</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            software engineer · cs @ njit
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3.5 text-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-200 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  {link.icon}
                </span>
                <span className="font-medium">{link.label}</span>
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {link.detail} {link.external ? '↗' : '→'}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
