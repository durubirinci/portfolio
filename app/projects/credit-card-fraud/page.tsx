import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Credit Card Fraud Detection — Duru Birinci',
  description: 'End-to-end ML pipeline detecting fraud in 284,807 credit card transactions with 96.3% ROC-AUC.',
}

const stats = [
  { num: '96.3%', label: 'ROC-AUC score' },
  { num: '81.6%', label: 'fraud detection rate' },
  { num: '94%', label: 'precision' },
  { num: '284K', label: 'transactions processed' },
]

export default function FraudDetection() {
  return (
    <main className="min-h-screen">
      <Nav back />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <div className="mb-3 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
          Project 02 / Machine Learning
        </div>
        <h1 className="font-display text-2xl sm:text-4xl">
          Credit Card Fraud Detection
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
          End-to-end ML pipeline detecting fraudulent transactions in a highly imbalanced dataset: 284,807 transactions with a 0.17% fraud rate.
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Random Forest'].map((t) => (
            <span key={t} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {t}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/durubirinci/Credit_Card_Fraud_Detection_ml"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-gray-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        >
          View on GitHub ↗
        </a>
      </section>

      {/* KEY STATS */}
      <section className="border-y border-gray-200 py-8 dark:border-gray-800">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 px-6 sm:grid-cols-4 sm:px-10">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-display text-2xl sm:text-3xl">{stat.num}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="mx-auto max-w-3xl px-6 py-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:px-10 sm:py-14">
        <h2 className="font-display mt-0 mb-3 text-xl text-gray-950 dark:text-white sm:text-2xl">
          The problem
        </h2>
        <p className="mb-4">
          Fraud detection is the textbook imbalanced-classification problem. Out of 284,807 credit card transactions, only 492 were fraudulent, a 0.17% fraud rate. Train a model naively and it&apos;ll hit 99.8% accuracy by just predicting &quot;not fraud&quot; for everything. Useless.
        </p>
        <p className="mb-8">
          The real goal: catch as much fraud as possible without drowning banks in false positives that annoy legitimate customers. That tradeoff is the whole ballgame in fintech ML.
        </p>

        <h2 className="font-display mb-3 mt-10 text-xl text-gray-950 dark:text-white sm:text-2xl">
          The approach
        </h2>
        <p className="mb-4">
          I built a full pipeline in Python: data exploration, feature scaling, stratified train/test splits, and a comparison of logistic regression against Random Forest. Random Forest won on the evaluation metrics that actually matter here: ROC-AUC and precision-recall balance rather than raw accuracy.
        </p>
        <p className="mb-4">
          Tuning the classification threshold was where the interesting decisions happened. The default 0.5 threshold was too permissive; I moved it up to prioritize precision, accepting slightly lower recall in exchange for drastically fewer false alarms.
        </p>

        <h2 className="font-display mb-3 mt-10 text-xl text-gray-950 dark:text-white sm:text-2xl">
          The result
        </h2>
        <p className="mb-4">
          The final model caught <strong className="text-gray-950 dark:text-white">81.6% of actual fraud</strong> while keeping precision at <strong className="text-gray-950 dark:text-white">94%</strong>, meaning when the model flagged a transaction, it was right 94% of the time. ROC-AUC landed at 0.963.
        </p>
        <p className="mb-4">
          Beyond the metrics, the project was my first real taste of what ML engineering looks like in fintech: the stakes of getting it wrong, the importance of explaining model decisions, and how much of the work is in preprocessing rather than model choice.
        </p>

        <div className="mt-10 rounded-lg border border-gray-200 p-5 text-base leading-relaxed text-gray-950 dark:border-gray-800 dark:text-white">
          <span className="mb-2 block text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Takeaway
          </span>
          In imbalanced domains, the metric you optimize for is a business decision, not a technical one. The math serves the product, not the other way around.
        </div>
      </section>

      {/* BACK TO ALL */}
      <section className="border-t border-gray-200 dark:border-gray-800">
        <Link
          href="/#work"
          className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 sm:px-10"
        >
          <div>
            <div className="mb-1.5 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
              ← back to all
            </div>
            <div className="font-display text-xl sm:text-2xl">See more work</div>
          </div>
          <span className="text-xl text-gray-400 dark:text-gray-500">↗</span>
        </Link>
      </section>
    </main>
  )
}
