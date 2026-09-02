import type { Metadata } from 'next'
import { Inter, Calistoga } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const calistoga = Calistoga({ subsets: ['latin'], weight: '400', variable: '--font-calistoga' })

export const metadata: Metadata = {
  title: 'Duru Birinci — Software Engineer',
  description: 'Computer Science student at NJIT building data-driven tools and ML systems at the intersection of energy, finance, and AI.',
  openGraph: {
    title: 'Duru Birinci',
    description: 'Software engineer · NJIT · Building at the intersection of energy, finance, and AI.',
  },
}

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${calistoga.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        suppressHydrationWarning
        className="bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50 transition-colors"
      >
        {children}
      </body>
    </html>
  )
}
