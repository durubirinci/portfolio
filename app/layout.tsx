import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Duru Birinci — Software Engineer',
  description: 'Computer Science student at NJIT building data-driven tools and ML systems at the intersection of energy, finance, and AI.',
  openGraph: {
    title: 'Duru Birinci',
    description: 'Software engineer · NJIT · Building at the intersection of energy, finance, and AI.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
