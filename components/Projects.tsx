const projects = [
  {
    slug: 'nuclear-renewable',
    title: 'Nuclear vs Renewable Energy Dashboard',
    period: 'Data Viz · 2025',
    description: 'Interactive data viz platform for global energy trends across 314 countries, built on 23,000+ rows of real-world data (1990–2025).',
    tags: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    github: 'https://github.com/durubirinci/energy_analytics_dashboard',
  },
  {
    slug: 'credit-card-fraud',
    title: 'Credit Card Fraud Detection',
    period: 'Machine Learning · 2024',
    description: 'ML fraud detection pipeline on 284,807 transactions, hitting 96.3% ROC-AUC with Random Forest and 81.6% recall at 94% precision.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/durubirinci/Credit_Card_Fraud_Detection_ml',
  },
]

export default function Projects() {
  return (
    <section id="work" className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl sm:text-4xl">featured projects</h2>
        </div>

        <div className="space-y-4">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="rounded-lg border border-gray-200 p-5 transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold">{p.title}</h3>
                <span className="text-xs text-gray-400 dark:text-gray-500">{p.period}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-500 underline-offset-4 hover:text-gray-950 hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  Source ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
