import type { Metadata } from 'next'
import Image from 'next/image'
import IconLinks from '@/components/IconLinks'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Duru Birinci — Links',
  description: 'Resume, website, and LinkedIn for Duru Birinci.',
}

const links = [
  {
    label: 'resume',
    detail: 'view / download pdf',
    href: 'https://drive.google.com/file/d/1UD4Ia-1tcy6hvQkBtCAy7VJl7mEeQ0HS/view?usp=sharing',
    external: true,
  },
  {
    label: 'website',
    detail: 'duru.dev',
    href: '/',
    external: false,
  },
  {
    label: 'linkedin',
    detail: 'in/duru-birinci',
    href: 'https://www.linkedin.com/in/duru-birinci/',
    external: true,
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
              <span className="font-medium">{link.label}</span>
              <span className="text-gray-500 dark:text-gray-400">
                {link.detail} {link.external ? '↗' : '→'}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <IconLinks />
        </div>
      </div>
    </main>
  )
}
