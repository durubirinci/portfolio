import Link from 'next/link'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* ========= NAVIGATION ========= */}
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
          duru birinci<span style={{ color: 'var(--rose)' }}>.</span>
        </Link>
        <div style={{
          display: 'flex',
          gap: '32px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          alignItems: 'center',
        }}>
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a href="#contact" style={{
            padding: '4px 12px',
            background: 'var(--ink)',
            color: 'var(--paper)',
            borderRadius: '100px',
          }}>contact  ↓</a>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '120px',
        paddingLeft: '40px',
        paddingRight: '40px',
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div className="fade-up" style={{ animationDelay: '0.1s' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--ink-soft)',
            marginBottom: '32px',
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--sage)',
              boxShadow: '0 0 0 4px rgba(138, 154, 122, 0.2)',
            }} />
            newark, nj
          </span>
        </div>

        <h1 className="fade-up" style={{
          fontSize: 'clamp(56px, 11vw, 160px)',
          lineHeight: '0.95',
          fontWeight: 300,
          letterSpacing: '-0.04em',
          marginBottom: '32px',
          animationDelay: '0.2s',
        }}>
          hi, i'm <span style={{
            fontStyle: 'italic',
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            color: 'var(--rose)',
          }}>duru</span> <span style={{ color: 'var(--blush-deep)' }}>✿</span>
        </h1>

        <div className="fade-up" style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '60px',
          maxWidth: '1100px',
          animationDelay: '0.4s',
        }}>
          <div>
            <p style={{
              fontSize: 'clamp(20px, 2.4vw, 28px)',
              lineHeight: '1.3',
              letterSpacing: '-0.01em',
              color: 'var(--ink-soft)',
              marginBottom: '32px',
            }}>
              i'm a junior at njit studying computer science. i build <span className="italic" style={{ color: 'var(--rose)' }}>data tools</span> and <span className="italic" style={{ color: 'var(--rose)' }}>ml systems</span>, mostly in the energy and fintech space.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: 'var(--ink-soft)',
              maxWidth: '540px',
            }}>
              in my free time i'm usually deep in a dataset or debugging something at 2am. say hi below ↓
            </p>
          </div>
          <div style={{
            borderLeft: '1px solid rgba(26, 24, 22, 0.15)',
            paddingLeft: '40px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            lineHeight: '1.8',
            color: 'var(--ink-soft)',
          }}>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ color: 'var(--rose)' }}>→</span> cs @ njit, class of '27
            </div>
            <div>
              <span style={{ color: 'var(--rose)' }}>→</span> incoming @ ???
            </div>
          </div>
        </div>
      </section>

      {/* ========= MARQUEE ========= */}
      <section style={{
        borderTop: '1px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
        padding: '24px 0',
        overflow: 'hidden',
        background: 'var(--cream)',
      }}>
        <div style={{
          display: 'flex',
          gap: '60px',
          animation: 'marquee 40s linear infinite',
          whiteSpace: 'nowrap',
          fontFamily: "'Fraunces', serif",
          fontSize: '28px',
          fontWeight: 400,
        }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '60px' }}>
              <span>python</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>java</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>react</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>sql</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>scikit-learn</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>pandas</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>c++</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>javascript</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>streamlit</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>azure</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========= PROJECTS ========= */}
      <Projects />

      {/* ========= EXPERIENCE (tabs) ========= */}
      <Experience />

      {/* ========= ABOUT ========= */}
      <section id="about" style={{
        padding: '120px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '80px',
          alignItems: 'start',
        }}>
          <div style={{
            position: 'sticky',
            top: '120px',
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--ink-soft)',
            }}>
              (about)
            </span>
          </div>
          <div>
            <p style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: '1.3',
              letterSpacing: '-0.02em',
              fontWeight: 300,
              marginBottom: '32px',
            }}>
              i'm a junior studying cs at <span className="italic" style={{ color: 'var(--rose)' }}>njit</span>. i like building software that touches real infrastructure, energy data, financial systems, tools that quietly do their job.
            </p>
            <p style={{
              fontSize: '19px',
              lineHeight: '1.6',
              color: 'var(--ink-soft)',
              marginBottom: '20px',
            }}>
              interning at a nuclear plant last summer showed me the best engineering is often invisible. the report that always arrives on time. the pipeline that never breaks overnight. that's what i want to build.
            </p>
            <p style={{
              fontSize: '19px',
              lineHeight: '1.6',
              color: 'var(--ink-soft)',
              marginBottom: '48px',
            }}>
              right now i'm focused on ai in fintech: fraud detection, risk modeling, and making those systems trustworthy at scale.
            </p>

            <div style={{
              padding: '32px',
              background: 'var(--cream)',
              borderRadius: '24px',
              border: '1px solid rgba(26, 24, 22, 0.1)',
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--ink-soft)',
                marginBottom: '20px',
              }}>
                currently learning
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                fontSize: '16px',
              }}>
                <div>✿ operating systems</div>
                <div>✿ networking</div>
                <div>✿ ml engineering</div>
                <div>✿ system design</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= CONTACT ========= */}
      <section id="contact" style={{
        padding: '120px 40px',
        background: 'var(--ink)',
        color: 'var(--paper)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--blush)',
            marginBottom: '40px',
          }}>
            (contact)
          </div>
          <h2 style={{
            fontSize: 'clamp(48px, 10vw, 140px)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            lineHeight: '0.95',
            marginBottom: '60px',
          }}>
            contact <span className="italic" style={{ color: 'var(--blush)' }}>me</span>
            <span style={{ color: 'var(--rose)' }}>.</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '80px',
          }}>
            <a href="mailto:db662@njit.edu" style={{
              padding: '32px',
              border: '1px solid var(--blush)',
              background: 'var(--blush)',
              color: 'var(--ink)',
              borderRadius: '16px',
              display: 'block',
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--ink-soft)',
                marginBottom: '12px',
              }}>
                email →
              </div>
              <div style={{ fontSize: '22px', letterSpacing: '-0.01em' }}>
                db662@njit.edu
              </div>
            </a>
            <a href="https://github.com/durubirinci" target="_blank" style={{
              padding: '32px',
              border: '1px solid rgba(245, 238, 228, 0.2)',
              borderRadius: '16px',
              display: 'block',
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--blush)',
                marginBottom: '12px',
              }}>
                github ↗
              </div>
              <div style={{ fontSize: '22px', letterSpacing: '-0.01em' }}>
                @durubirinci
              </div>
            </a>
            <a href="https://linkedin.com/in/durubirinci" target="_blank" style={{
              padding: '32px',
              border: '1px solid rgba(245, 238, 228, 0.2)',
              borderRadius: '16px',
              display: 'block',
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--blush)',
                marginBottom: '12px',
              }}>
                linkedin ↗
              </div>
              <div style={{ fontSize: '22px', letterSpacing: '-0.01em' }}>
                in/durubirinci
              </div>
            </a>
          </div>

          <div style={{
            paddingTop: '40px',
            borderTop: '1px solid rgba(245, 238, 228, 0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'rgba(245, 238, 228, 0.6)',
          }}>
            <span>© 2026 duru birinci</span>
            <span>last updated: april 2026</span>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-20px',
          fontSize: '280px',
          fontFamily: "'Instrument Serif', serif",
          fontStyle: 'italic',
          color: 'rgba(242, 197, 184, 0.05)',
          lineHeight: '1',
          pointerEvents: 'none',
          zIndex: 1,
        }}>
          duru.
        </div>
      </section>
    </main>
  )
}
