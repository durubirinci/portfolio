import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Nuclear vs Renewable Energy Dashboard - Duru Birinci',
  description: 'Interactive data visualization analyzing global energy trends across 314 countries from 1990–2025.',
}

const stats = [
  { num: '314', label: 'countries analyzed' },
  { num: '23K+', label: 'rows of real-world data' },
  { num: '35', label: 'years of history' },
  { num: '5+', label: 'interactive visualizations' },
]

export default function NuclearRenewable() {
  return (
    <main className="min-h-screen">
      <Nav back />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-16 sm:px-10 sm:pt-24">
        <div className="mb-4 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
          Project 01 / Data Visualization
        </div>
        <h1 className="font-display text-3xl sm:text-5xl">
          Nuclear vs Renewable Energy Dashboard
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Interactive data visualization platform analyzing global energy trends across 314 countries from 1990–2025, built to compare nuclear and renewable generation side by side.
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy'].map((t) => (
            <span key={t} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {t}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/durubirinci/energy_analytics_dashboard"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-gray-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        >
          View on GitHub ↗
        </a>
      </section>

      {/* KEY STATS */}
      <section className="border-y border-gray-200 py-12 dark:border-gray-800">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 sm:px-10">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-display text-3xl sm:text-4xl">{stat.num}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY CONTENT */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:px-10 sm:py-24">
        <h2 className="font-display mt-0 mb-4 text-2xl text-gray-950 dark:text-white sm:text-3xl">
          The context
        </h2>
        <p className="mb-5">
          After spending a summer inside a nuclear power plant at PSEG, I came back to campus with a lot of half-formed questions. How does nuclear actually stack up against solar and wind over time? What does &quot;clean energy transition&quot; look like when you pull the numbers country by country?
        </p>
        <p className="mb-10">
          The answers existed, scattered across CSVs from Our World in Data, but nowhere was there a single place to explore them interactively. So I built one.
        </p>

        <h2 className="font-display mb-4 mt-14 text-2xl text-gray-950 dark:text-white sm:text-3xl">
          What I built
        </h2>
        <p className="mb-5">
          A Streamlit dashboard that pulls together 23,000+ rows covering nuclear and renewable electricity generation, carbon intensity, capacity factors, and cost metrics across 314 countries from 1990 to 2025.
        </p>
        <p className="mb-5">
          Users can filter by country or region, toggle between generation sources, and see real-time comparisons across five custom Plotly visualizations. I styled the front-end with custom CSS to feel less like a default Streamlit app and more like a proper analytics tool.
        </p>

        <h2 className="font-display mb-4 mt-14 text-2xl text-gray-950 dark:text-white sm:text-3xl">
          What I learned
        </h2>
        <p className="mb-5">
          The interesting technical challenge wasn&apos;t the plotting. It was data cleaning. Energy data is messy: countries change names, units shift mid-decade, some regions report annually while others report monthly. Building a reliable comparison meant writing a lot of careful Pandas transformations and explicit assumptions.
        </p>
        <p className="mb-5">
          The bigger lesson: policy debates about energy feel very different when you&apos;ve actually touched the numbers. Nuclear&apos;s capacity factor story is much stronger than the renewables discourse implies, and cost trajectories are more nuanced than either side usually admits.
        </p>

        <div className="mt-16 rounded-lg border border-gray-200 p-6 text-lg leading-relaxed text-gray-950 dark:border-gray-800 dark:text-white">
          <span className="mb-3 block text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Takeaway
          </span>
          Data work is persuasive only when the cleaning is as considered as the visualization. Honest numbers beat pretty charts.
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-gray-200 dark:border-gray-800">
        <Link
          href="/projects/credit-card-fraud"
          className="mx-auto flex max-w-3xl items-center justify-between px-6 py-12 sm:px-10"
        >
          <div>
            <div className="mb-2 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Next project
            </div>
            <div className="font-display text-2xl sm:text-3xl">Credit Card Fraud Detection</div>
          </div>
          <span className="text-2xl text-gray-400 dark:text-gray-500">↗</span>
        </Link>
      </section>
    </main>
  )
}
