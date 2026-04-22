import Link from 'next/link'

export const metadata = {
  title: 'Credit Card Fraud Detection — Duru Birinci',
  description: 'End-to-end ML pipeline detecting fraud in 284,807 credit card transactions with 96.3% ROC-AUC.',
}

export default function FraudDetection() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* NAV */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: 'blur(12px)',
        background: 'rgba(250, 246, 239, 0.7)',
        borderBottom: '1px solid rgba(26, 24, 22, 0.08)',
      }}>
        <Link href="/" style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontSize: '20px',
          letterSpacing: '-0.02em',
        }}>
          duru<span style={{ color: 'var(--rose)' }}>.</span>
        </Link>
        <Link href="/" style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          ← back
        </Link>
      </nav>

      {/* HERO */}
      <section style={{
        paddingTop: '160px',
        paddingBottom: '80px',
        paddingLeft: '40px',
        paddingRight: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'var(--ink-soft)',
          marginBottom: '32px',
        }}>
          Project 02 / Machine Learning
        </div>
        <h1 style={{
          fontSize: 'clamp(48px, 8vw, 104px)',
          fontWeight: 300,
          letterSpacing: '-0.04em',
          lineHeight: '0.95',
          marginBottom: '40px',
        }}>
          Credit Card
          <br />
          <span className="italic" style={{ color: 'var(--rose)' }}>Fraud Detection</span>
        </h1>
        <p style={{
          fontSize: '24px',
          lineHeight: '1.4',
          color: 'var(--ink-soft)',
          maxWidth: '800px',
          marginBottom: '48px',
        }}>
          End-to-end ML pipeline detecting fraudulent transactions in a highly imbalanced dataset — 284,807 transactions with a 0.17% fraud rate.
        </p>
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          {['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Random Forest'].map(t => (
            <span key={t} style={{
              padding: '6px 16px',
              background: 'var(--lavender)',
              borderRadius: '100px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
            }}>
              {t}
            </span>
          ))}
        </div>
        <a href="https://github.com/durubirinci" target="_blank" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '14px 24px',
          background: 'var(--ink)',
          color: 'var(--paper)',
          borderRadius: '100px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          View on GitHub ↗
        </a>
      </section>

      {/* KEY STATS */}
      <section style={{
        padding: '80px 40px',
        background: 'var(--cream)',
        borderTop: '1px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
        }}>
          {[
            { num: '96.3%', label: 'ROC-AUC score' },
            { num: '81.6%', label: 'fraud detection rate' },
            { num: '94%', label: 'precision' },
            { num: '284K', label: 'transactions processed' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{
                fontSize: 'clamp(48px, 8vw, 88px)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                lineHeight: '1',
                color: 'var(--rose)',
                marginBottom: '12px',
              }} className="italic">
                {stat.num}
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--ink-soft)',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section style={{
        padding: '120px 40px',
        maxWidth: '900px',
        margin: '0 auto',
        fontSize: '19px',
        lineHeight: '1.7',
        color: 'var(--ink-soft)',
      }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: 400,
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
          marginBottom: '24px',
          marginTop: '40px',
        }}>
          The <span className="italic" style={{ color: 'var(--rose)' }}>problem</span>
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Fraud detection is the textbook imbalanced-classification problem. Out of 284,807 credit card transactions, only 492 were fraudulent — a 0.17% fraud rate. Train a model naively and it'll hit 99.8% accuracy by just predicting "not fraud" for everything. Useless.
        </p>
        <p style={{ marginBottom: '40px' }}>
          The real goal: catch as much fraud as possible without drowning banks in false positives that annoy legitimate customers. That tradeoff is the whole ballgame in fintech ML.
        </p>

        <h2 style={{
          fontSize: '40px',
          fontWeight: 400,
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
          marginBottom: '24px',
          marginTop: '60px',
        }}>
          The <span className="italic" style={{ color: 'var(--rose)' }}>approach</span>
        </h2>
        <p style={{ marginBottom: '20px' }}>
          I built a full pipeline in Python: data exploration, feature scaling, stratified train/test splits, and a comparison of logistic regression against Random Forest. Random Forest won on the evaluation metrics that actually matter here — ROC-AUC and precision-recall balance rather than raw accuracy.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Tuning the classification threshold was where the interesting decisions happened. The default 0.5 threshold was too permissive; I moved it up to prioritize precision, accepting slightly lower recall in exchange for drastically fewer false alarms.
        </p>

        <h2 style={{
          fontSize: '40px',
          fontWeight: 400,
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
          marginBottom: '24px',
          marginTop: '60px',
        }}>
          The <span className="italic" style={{ color: 'var(--rose)' }}>result</span>
        </h2>
        <p style={{ marginBottom: '20px' }}>
          The final model caught <strong style={{ color: 'var(--ink)' }}>81.6% of actual fraud</strong> while keeping precision at <strong style={{ color: 'var(--ink)' }}>94%</strong> — meaning when the model flagged a transaction, it was right 94% of the time. ROC-AUC landed at 0.963.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Beyond the metrics, the project was my first real taste of what ML engineering looks like in fintech: the stakes of getting it wrong, the importance of explaining model decisions, and how much of the work is in preprocessing rather than model choice.
        </p>

        <div style={{
          marginTop: '80px',
          padding: '40px',
          background: 'var(--lavender)',
          borderRadius: '24px',
          fontSize: '22px',
          lineHeight: '1.4',
          color: 'var(--ink)',
          letterSpacing: '-0.01em',
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            display: 'block',
            marginBottom: '12px',
            color: 'var(--ink-soft)',
          }}>
            Takeaway
          </span>
          In imbalanced domains, the metric you optimize for is a business decision, not a technical one. <span className="italic">The math serves the product, not the other way around.</span>
        </div>
      </section>

      {/* BACK TO ALL */}
      <section style={{
        padding: '80px 40px',
        background: 'var(--ink)',
        color: 'var(--paper)',
      }}>
        <Link href="/" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--blush)',
              marginBottom: '8px',
            }}>
              ← back to all
            </div>
            <div style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
            }}>
              See more <span className="italic" style={{ color: 'var(--blush)' }}>work</span>
            </div>
          </div>
          <span style={{ fontSize: '48px', color: 'var(--blush)' }}>↗</span>
        </Link>
      </section>
    </main>
  )
}
