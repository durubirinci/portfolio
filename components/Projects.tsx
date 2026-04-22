// Illustrated card — Energy Dashboard (bar chart + sun + atom)
function EnergyIllustration() {
  return (
    <svg viewBox="0 0 400 240" width="100%" height="100%" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2c5b8" />
          <stop offset="100%" stopColor="#f5eee4" />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="400" height="240" fill="url(#skyGrad)" />

      {/* Sun */}
      <circle cx="320" cy="70" r="28" fill="#c9a668" opacity="0.9" />
      <g stroke="#c9a668" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <line x1="320" y1="28" x2="320" y2="18" />
        <line x1="320" y1="122" x2="320" y2="112" />
        <line x1="278" y1="70" x2="268" y2="70" />
        <line x1="372" y1="70" x2="362" y2="70" />
        <line x1="290" y1="40" x2="283" y2="33" />
        <line x1="357" y1="107" x2="350" y2="100" />
        <line x1="350" y1="40" x2="357" y2="33" />
        <line x1="283" y1="107" x2="290" y2="100" />
      </g>

      {/* Atom / Nuclear */}
      <g transform="translate(80, 80)" stroke="#d4837a" strokeWidth="2" fill="none">
        <ellipse cx="0" cy="0" rx="32" ry="12" />
        <ellipse cx="0" cy="0" rx="32" ry="12" transform="rotate(60)" />
        <ellipse cx="0" cy="0" rx="32" ry="12" transform="rotate(-60)" />
        <circle cx="0" cy="0" r="5" fill="#d4837a" />
      </g>

      {/* Bar chart */}
      <g transform="translate(130, 200)">
        <rect x="0" y="-50" width="22" height="50" fill="#8a9a7a" rx="2" />
        <rect x="30" y="-70" width="22" height="70" fill="#d4837a" rx="2" />
        <rect x="60" y="-40" width="22" height="40" fill="#8a9a7a" rx="2" />
        <rect x="90" y="-90" width="22" height="90" fill="#d4837a" rx="2" />
        <rect x="120" y="-60" width="22" height="60" fill="#8a9a7a" rx="2" />
        <rect x="150" y="-80" width="22" height="80" fill="#d4837a" rx="2" />
      </g>

      {/* Ground line */}
      <line x1="0" y1="200" x2="400" y2="200" stroke="#1a1816" strokeWidth="1.5" />

      {/* Tiny flower accent */}
      <g transform="translate(50, 190)">
        <circle cx="0" cy="0" r="3" fill="#c8b5d9" />
        <circle cx="-5" cy="-3" r="3" fill="#c8b5d9" />
        <circle cx="5" cy="-3" r="3" fill="#c8b5d9" />
        <circle cx="-3" cy="-7" r="3" fill="#c8b5d9" />
        <circle cx="3" cy="-7" r="3" fill="#c8b5d9" />
        <circle cx="0" cy="-4" r="2" fill="#c9a668" />
      </g>
    </svg>
  )
}

// Illustrated card — Credit card fraud (credit card + shield + flower)
function FraudIllustration() {
  return (
    <svg viewBox="0 0 400 240" width="100%" height="100%" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="purpGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8b5d9" />
          <stop offset="100%" stopColor="#f5eee4" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#purpGrad)" />

      {/* Credit card — tilted */}
      <g transform="translate(200, 120) rotate(-8)">
        <rect x="-80" y="-48" width="160" height="96" rx="10" fill="#1a1816" />
        <rect x="-80" y="-30" width="160" height="16" fill="#3a342e" />
        <circle cx="-52" cy="20" r="10" fill="#c9a668" opacity="0.9" />
        <circle cx="-38" cy="20" r="10" fill="#d4837a" opacity="0.9" />
        <rect x="-68" y="-10" width="30" height="20" rx="2" fill="#c9a668" />
        {/* Dotted numbers */}
        <g fill="#f5eee4">
          <circle cx="-52" cy="0" r="1.5" />
          <circle cx="-46" cy="0" r="1.5" />
          <circle cx="-40" cy="0" r="1.5" />
          <circle cx="-34" cy="0" r="1.5" />
          <circle cx="-20" cy="0" r="1.5" />
          <circle cx="-14" cy="0" r="1.5" />
          <circle cx="-8" cy="0" r="1.5" />
          <circle cx="-2" cy="0" r="1.5" />
          <circle cx="12" cy="0" r="1.5" />
          <circle cx="18" cy="0" r="1.5" />
          <circle cx="24" cy="0" r="1.5" />
          <circle cx="30" cy="0" r="1.5" />
        </g>
      </g>

      {/* Shield with checkmark */}
      <g transform="translate(320, 60)">
        <path d="M 0,-24 L 20,-16 L 20,8 Q 20,20 0,28 Q -20,20 -20,8 L -20,-16 Z" fill="#d4837a" />
        <path d="M -8,2 L -2,8 L 10,-6" stroke="#f5eee4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Alert / fraud x */}
      <g transform="translate(70, 60)">
        <circle cx="0" cy="0" r="22" fill="#1a1816" />
        <path d="M -8,-8 L 8,8 M 8,-8 L -8,8" stroke="#f2c5b8" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Decorative flowers */}
      <g transform="translate(50, 200)">
        <circle cx="0" cy="0" r="3" fill="#d4837a" />
        <circle cx="-5" cy="-3" r="3" fill="#d4837a" />
        <circle cx="5" cy="-3" r="3" fill="#d4837a" />
        <circle cx="-3" cy="-7" r="3" fill="#d4837a" />
        <circle cx="3" cy="-7" r="3" fill="#d4837a" />
        <circle cx="0" cy="-4" r="2" fill="#c9a668" />
      </g>
      <g transform="translate(350, 210)">
        <circle cx="0" cy="0" r="3" fill="#8a9a7a" />
        <circle cx="-5" cy="-3" r="3" fill="#8a9a7a" />
        <circle cx="5" cy="-3" r="3" fill="#8a9a7a" />
        <circle cx="-3" cy="-7" r="3" fill="#8a9a7a" />
        <circle cx="3" cy="-7" r="3" fill="#8a9a7a" />
        <circle cx="0" cy="-4" r="2" fill="#c9a668" />
      </g>

      {/* Ground */}
      <line x1="0" y1="200" x2="400" y2="200" stroke="#1a1816" strokeWidth="1.5" />
    </svg>
  )
}

const projects = [
  {
    slug: 'nuclear-renewable',
    number: '01',
    title: 'Nuclear vs Renewable',
    titleAccent: 'Energy Dashboard',
    bulletPoints: [
      'Interactive data viz platform for global energy trends',
      '314 countries, 1990-2025 coverage',
      'Built on 23,000+ rows of real-world data',
    ],
    tags: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    tagBg: 'var(--blush)',
    category: 'Data Viz · 2025',
    illustration: <EnergyIllustration />,
  },
  {
    slug: 'credit-card-fraud',
    number: '02',
    title: 'Credit Card',
    titleAccent: 'Fraud Detection',
    bulletPoints: [
      'ML fraud detection pipeline on 284,807 transactions',
      '96.3% ROC-AUC with Random Forest',
      '81.6% recall at 94% precision',
    ],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    tagBg: 'var(--lavender)',
    category: 'Machine Learning · 2024',
    illustration: <FraudIllustration />,
  },
]

export default function Projects() {
  return (
    <section id="work" style={{
      padding: '120px 40px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '60px',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        <h2 style={{
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 300,
          letterSpacing: '-0.04em',
          lineHeight: '1',
        }}>
          my <span className="italic" style={{ color: 'var(--rose)' }}>projects</span>
        </h2>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'var(--ink-soft)',
        }}>
          (02) projects · 2024—2025
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
        gap: '32px',
      }}>
        {projects.map((p) => (
          <article
            key={p.slug}
            style={{
              display: 'block',
              background: 'var(--paper)',
              border: '1px solid rgba(26, 24, 22, 0.15)',
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
          >
            {/* Illustration header */}
            <div style={{
              aspectRatio: '400 / 240',
              borderBottom: '1px solid rgba(26, 24, 22, 0.15)',
              position: 'relative',
            }}>
              {p.illustration}
              <span style={{
                position: 'absolute',
                top: '16px',
                left: '20px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--ink)',
                background: 'var(--paper)',
                padding: '4px 10px',
                borderRadius: '100px',
                border: '1px solid rgba(26, 24, 22, 0.15)',
              }}>
                {p.number} / {p.category}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: '32px' }}>
              <h3 style={{
                fontSize: 'clamp(28px, 3vw, 36px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
                marginBottom: '16px',
              }}>
                {p.title}{' '}
                <span className="italic" style={{ color: 'var(--rose)' }}>
                  {p.titleAccent}
                </span>
              </h3>
              <ul style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: 'var(--ink-soft)',
                marginBottom: '20px',
                paddingLeft: '20px',
              }}>
                {p.bulletPoints.map((point) => (
                  <li key={point} style={{ marginBottom: '8px' }}>
                    {point}
                  </li>
                ))}
              </ul>
              <div style={{
                display: 'flex',
                gap: '6px',
                flexWrap: 'wrap',
                marginBottom: '20px',
              }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '4px 12px',
                      background: p.tagBg,
                      color: 'var(--ink)',
                      borderRadius: '100px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
