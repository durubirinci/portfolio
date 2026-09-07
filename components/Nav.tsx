import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Nav({ back }: { back?: boolean }) {
  return (
    <nav className="sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center border-b border-gray-200 bg-white/80 px-6 py-3 text-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80 sm:px-10">
      <div />

      {back ? (
        <Link
          href="/#work"
          className="text-sm text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
        >
          ← back
        </Link>
      ) : (
        <div className="hidden items-center gap-5 text-base text-gray-500 sm:flex">
          <a href="#" className="transition-colors hover:text-gray-950 dark:hover:text-white">home</a>
          <a href="#work" className="transition-colors hover:text-gray-950 dark:hover:text-white">work</a>
          <a href="#about" className="transition-colors hover:text-gray-950 dark:hover:text-white">about</a>
          <a href="#contact" className="transition-colors hover:text-gray-950 dark:hover:text-white">contact</a>
        </div>
      )}

      <div className="justify-self-end">{!back && <ThemeToggle />}</div>
    </nav>
  )
}
