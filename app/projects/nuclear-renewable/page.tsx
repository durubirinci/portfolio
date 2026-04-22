import Link from 'next/link'

export const metadata = {
  title: 'Nuclear vs Renewable Energy Dashboard — Duru Birinci',
  description: 'Interactive data visualization analyzing global energy trends across 314 countries from 1990–2025.',
}

export default function NuclearRenewable() {
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
          Project 01 / Data Visualization
        </div>
        <h1 style={{
          fontSize: 'clamp(48px, 8vw, 104px)',
          fontWeight: 300,
          letterSpacing: '-0.04em',
          lineHeight: '0.95',
          marginBottom: '40px',
        }}>
          Nuclear vs Renewable
          <br />
          <span className="italic" style={{ color: 'var(--rose)' }}>Energy Dashboard</span>
        </h1>
        <p style={{
          fontSize: '24px',
          lineHeight: '1.4',
          color: 'var(--ink-soft)',
          maxWidth: '800px',
          marginBottom: '48px',
        }}>
          Interactive data visualization platform analyzing global energy trends across 314 countries from 1990–2025, built to compare nuclear and renewable generation side by side.
        </p>
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          {['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy'].map(t => (
            <span key={t} style={{
              padding: '6px 16px',
              background: 'var(--blush)',
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
            { num: '314', label: 'countries analyzed' },
            { num: '23K+', label: 'rows of real-world data' },
            { num: '35', label: 'years of history' },
            { num: '5+', label: 'interactive visualizations' },
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

      {/* CASE STUDY CONTENT */}
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
          The <span className="italic" style={{ color: 'var(--rose)' }}>context</span>
        </h2>
        <p style={{ marginBottom: '20px' }}>
          After spending a summer inside a nuclear power plant at PSEG, I came back to campus with a lot of half-formed questions. How does nuclear actually stack up against solar and wind over time? What does "clean energy transition" look like when you pull the numbers country by country?
        </p>
        <p style={{ marginBottom: '40px' }}>
          The answers existed — scattered across CSVs from Our World in Data — but nowhere was there a single place to explore them interactively. So I built one.
        </p>

        <h2 style={{
          fontSize: '40px',
          fontWeight: 400,
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
          marginBottom: '24px',
          marginTop: '60px',
        }}>
          What I <span className="italic" style={{ color: 'var(--rose)' }}>built</span>
        </h2>
        <p style={{ marginBottom: '20px' }}>
          A Streamlit dashboard that pulls together 23,000+ rows covering nuclear and renewable electricity generation, carbon intensity, capacity factors, and cost metrics across 314 countries from 1990 to 2025.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Users can filter by country or region, toggle between generation sources, and see real-time comparisons across five custom Plotly visualizations. I styled the front-end with custom CSS to feel less like a default Streamlit app and more like a proper analytics tool.
        </p>

        <h2 style={{
          fontSize: '40px',
          fontWeight: 400,
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
          marginBottom: '24px',
          marginTop: '60px',
        }}>
          What I <span className="italic" style={{ color: 'var(--rose)' }}>learned</span>
        </h2>
        <p style={{ marginBottom: '20px' }}>
          The interesting technical challenge wasn't the plotting — it was data cleaning. Energy data is messy: countries change names, units shift mid-decade, some regions report annually while others report monthly. Building a reliable comparison meant writing a lot of careful Pandas transformations and explicit assumptions.
        </p>
        <p style={{ marginBottom: '20px' }}>
          The bigger lesson: policy debates about energy feel very different when you've actually touched the numbers. Nuclear's capacity factor story is much stronger than the renewables discourse implies, and cost trajectories are more nuanced than either side usually admits.
        </p>

        <div style={{
          marginTop: '80px',
          padding: '40px',
          background: 'var(--blush)',
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
          Data work is persuasive only when the cleaning is as considered as the visualization. <span className="italic">Honest numbers beat pretty charts.</span>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section style={{
        padding: '80px 40px',
        background: 'var(--ink)',
        color: 'var(--paper)',
      }}>
        <Link href="/projects/credit-card-fraud" style={{
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
              Next project →
            </div>
            <div style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
            }}>
              Credit Card <span className="italic" style={{ color: 'var(--blush)' }}>Fraud Detection</span>
            </div>
          </div>
          <span style={{ fontSize: '48px', color: 'var(--blush)' }}>↗</span>
        </Link>
      </section>
    </main>
  )
}
