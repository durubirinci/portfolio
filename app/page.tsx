import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Nav from '@/components/Nav'
import IconLinks from '@/components/IconLinks'
import PhotoStack from '@/components/PhotoStack'

const skills = [
  'Python', 'Java', 'C#', 'React', 'SQL', 'Scikit-learn', 'Pandas', 'C++', 'JavaScript', '.NET', 'Streamlit', 'Azure',
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* ========= HERO ========= */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-16 sm:px-10 sm:pt-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              newark, nj
            </div>

            <h1 className="font-display text-4xl font-normal sm:text-5xl">
              hi, i&apos;m duru <span className="align-middle">✿</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              i&apos;m a senior at njit studying computer science. i build data tools and ml systems, mostly in the energy and fintech space.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-500">
              say hi below ↓
            </p>

            <div className="mt-6 space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <div>→ cs @ njit, class of &apos;27</div>
              <div>→ software engineer intern @ fiserv, summer &apos;26</div>
            </div>

            <div className="mt-8">
              <IconLinks />
            </div>
          </div>

          <div className="mx-auto shrink-0 lg:mx-0 lg:mt-2">
            <PhotoStack />
          </div>
        </div>
      </section>

      {/* ========= SKILLS ========= */}
      <section className="border-y border-gray-200 py-8 dark:border-gray-800">
        <div className="mx-auto flex max-w-3xl flex-wrap gap-2 px-6 sm:px-10">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* ========= PROJECTS ========= */}
      <Projects />

      {/* ========= EXPERIENCE (tabs) ========= */}
      <Experience />

      {/* ========= ABOUT ========= */}
      <section id="about" className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <h2 className="font-display text-3xl sm:text-4xl">about me.</h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          <p>
            i&apos;m a senior studying cs at njit. most of what i build ends up touching real infrastructure: energy data, financial systems, stuff that actually has to work.
          </p>
          <p>
            i spent last summer interning at a nuclear plant, and it changed how i think about engineering. the good stuff is invisible, and that&apos;s the bar i hold my own work to now.
          </p>
          <p>
            lately i&apos;ve been getting into fraud detection and risk modeling, the fintech side of ml.
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-gray-200 p-5 dark:border-gray-800">
          <div className="mb-3 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
            currently learning
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div>operating systems</div>
            <div>networking</div>
            <div>ml engineering</div>
            <div>system design</div>
          </div>
        </div>
      </section>

      {/* ========= CONTACT ========= */}
      <section id="contact" className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
          <h2 className="font-display text-3xl sm:text-4xl">contact me.</h2>
          <p className="mt-4 max-w-md text-base text-gray-600 dark:text-gray-400">
            reach out for new grad roles, internships, collaborations, or just to say hi.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="mailto:db662@njit.edu"
              className="flex items-center justify-between rounded-lg border border-gray-200 px-5 py-4 text-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
            >
              <span className="text-gray-500 dark:text-gray-400">email</span>
              <span className="font-medium">db662@njit.edu</span>
            </a>
            <a
              href="https://github.com/durubirinci"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-gray-200 px-5 py-4 text-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
            >
              <span className="text-gray-500 dark:text-gray-400">github</span>
              <span className="font-medium">@durubirinci ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/duru-birinci/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-gray-200 px-5 py-4 text-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
            >
              <span className="text-gray-500 dark:text-gray-400">linkedin</span>
              <span className="font-medium">in/duru-birinci ↗</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-6 dark:border-gray-800 sm:px-10">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 text-xs text-gray-400 dark:text-gray-500">
            <span>© 2026 duru birinci</span>
            <span>last updated: september 2, 2026</span>
          </div>
        </div>
      </section>
    </main>
  )
}
