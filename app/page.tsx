import Link from 'next/link'

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
          duru<span style={{ color: 'var(--rose)' }}>.</span>
        </Link>
        <div style={{
          display: 'flex',
          gap: '32px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          <a href="#work" style={{ position: 'relative' }}>work</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
          <a href="/resume.pdf" target="_blank" style={{
            padding: '4px 12px',
            background: 'var(--ink)',
            color: 'var(--paper)',
            borderRadius: '100px',
          }}>resume ↗</a>
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
        {/* Rotating badge decoration */}
        <div style={{
          position: 'absolute',
          top: '140px',
          right: '60px',
          width: '140px',
          height: '140px',
          animation: 'spin-slow 24s linear infinite',
        }} aria-hidden>
          <svg viewBox="0 0 200 200" width="140" height="140">
            <defs>
              <path id="circle" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text fill="var(--ink)" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', letterSpacing: '0.3em' }}>
              <textPath href="#circle">
                OPEN FOR WORK · SUMMER 2026 · OPEN FOR WORK ·
              </textPath>
            </text>
            <circle cx="100" cy="100" r="6" fill="var(--rose)" />
          </svg>
        </div>

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
            marginBottom: '40px',
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--sage)',
              boxShadow: '0 0 0 4px rgba(138, 154, 122, 0.2)',
            }} />
            Newark, NJ — est. 2023
          </span>
        </div>

        <h1 className="fade-up" style={{
          fontSize: 'clamp(60px, 12vw, 180px)',
          lineHeight: '0.9',
          fontWeight: 300,
          letterSpacing: '-0.04em',
          marginBottom: '40px',
          animationDelay: '0.2s',
        }}>
          Duru
          <br />
          <span style={{
            fontStyle: 'italic',
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            color: 'var(--rose)',
          }}>
            Birinci
          </span>
          <span style={{ color: 'var(--blush-deep)' }}>.</span>
        </h1>

        <div className="fade-up" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          maxWidth: '1000px',
          animationDelay: '0.4s',
        }}>
          <div>
            <p style={{
              fontSize: '26px',
              lineHeight: '1.3',
              letterSpacing: '-0.02em',
              color: 'var(--ink-soft)',
            }}>
              Software engineer building <span className="italic" style={{ color: 'var(--rose)' }}>data-driven tools</span> and <span className="italic" style={{ color: 'var(--rose)' }}>ML systems</span> at the intersection of energy, finance, and AI.
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
              <span style={{ color: 'var(--rose)' }}>→</span> B.S. Computer Science, NJIT
            </div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ color: 'var(--rose)' }}>→</span> Class of 2027
            </div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ color: 'var(--rose)' }}>→</span> Previously @ PSEG Nuclear
            </div>
            <div>
              <span style={{ color: 'var(--rose)' }}>→</span> Currently @ NJIT IST
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
        position: 'relative',
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
              <span>Python</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>Java</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>React</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>SQL</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>Scikit-learn</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>Pandas</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>C++</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>JavaScript</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>Streamlit</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
              <span>Azure</span>
              <span style={{ color: 'var(--rose)' }} className="italic">✿</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========= SELECTED WORK ========= */}
      <section id="work" style={{
        padding: '120px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '80px',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <h2 style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            lineHeight: '1',
          }}>
            Selected <span className="italic" style={{ color: 'var(--rose)' }}>work</span>
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

        {/* PROJECT 1 */}
        <Link href="/projects/nuclear-renewable" style={{
          display: 'block',
          padding: '60px 0',
          borderTop: '1px solid rgba(26, 24, 22, 0.15)',
          position: 'relative',
          cursor: 'pointer',
          transition: 'background 0.3s',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 2fr 80px',
            gap: '40px',
            alignItems: 'start',
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px',
              color: 'var(--ink-soft)',
              paddingTop: '12px',
            }}>
              01 /
            </span>
            <div>
              <h3 style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: '1.05',
                marginBottom: '16px',
              }}>
                Nuclear vs Renewable <span className="italic" style={{ color: 'var(--rose)' }}>Energy Dashboard</span>
              </h3>
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '20px',
              }}>
                {['Python', 'Streamlit', 'Plotly', 'Pandas'].map(t => (
                  <span key={t} style={{
                    padding: '4px 14px',
                    background: 'var(--blush)',
                    color: 'var(--ink)',
                    borderRadius: '100px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '0.05em',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ paddingTop: '12px' }}>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.5',
                color: 'var(--ink-soft)',
                marginBottom: '16px',
              }}>
                Interactive data visualization platform analyzing global energy trends across <strong style={{ color: 'var(--ink)' }}>314 countries</strong> from 1990–2025 using <strong style={{ color: 'var(--ink)' }}>23,000+ rows</strong> of real-world data from Our World in Data.
              </p>
              <div style={{
                display: 'flex',
                gap: '24px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--ink-soft)',
              }}>
                <span>Data Viz</span>
                <span>·</span>
                <span>Energy Policy</span>
                <span>·</span>
                <span>2025</span>
              </div>
            </div>
            <span style={{
              fontSize: '32px',
              paddingTop: '12px',
              color: 'var(--rose)',
              textAlign: 'right',
            }}>
              ↗
            </span>
          </div>
        </Link>

        {/* PROJECT 2 */}
        <Link href="/projects/credit-card-fraud" style={{
          display: 'block',
          padding: '60px 0',
          borderTop: '1px solid rgba(26, 24, 22, 0.15)',
          borderBottom: '1px solid rgba(26, 24, 22, 0.15)',
          position: 'relative',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 2fr 80px',
            gap: '40px',
            alignItems: 'start',
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px',
              color: 'var(--ink-soft)',
              paddingTop: '12px',
            }}>
              02 /
            </span>
            <div>
              <h3 style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: '1.05',
                marginBottom: '16px',
              }}>
                Credit Card <span className="italic" style={{ color: 'var(--rose)' }}>Fraud Detection</span>
              </h3>
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '20px',
              }}>
                {['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'].map(t => (
                  <span key={t} style={{
                    padding: '4px 14px',
                    background: 'var(--lavender)',
                    color: 'var(--ink)',
                    borderRadius: '100px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '0.05em',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ paddingTop: '12px' }}>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.5',
                color: 'var(--ink-soft)',
                marginBottom: '16px',
              }}>
                End-to-end ML pipeline detecting fraud in <strong style={{ color: 'var(--ink)' }}>284,807 transactions</strong> (0.17% fraud rate). Achieved <strong style={{ color: 'var(--ink)' }}>96.3% ROC-AUC</strong> and 81.6% recall using Random Forest while holding precision at 94%.
              </p>
              <div style={{
                display: 'flex',
                gap: '24px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--ink-soft)',
              }}>
                <span>Machine Learning</span>
                <span>·</span>
                <span>Fintech</span>
                <span>·</span>
                <span>2024</span>
              </div>
            </div>
            <span style={{
              fontSize: '32px',
              paddingTop: '12px',
              color: 'var(--rose)',
              textAlign: 'right',
            }}>
              ↗
            </span>
          </div>
        </Link>
      </section>

      {/* ========= EXPERIENCE ========= */}
      <section style={{
        padding: '120px 40px',
        background: 'var(--cream)',
        borderTop: '1px solid var(--ink)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            lineHeight: '1',
            marginBottom: '80px',
          }}>
            <span className="italic" style={{ color: 'var(--rose)' }}>Where</span> I've been
          </h2>

          {/* Experience 1 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: '60px',
            paddingBottom: '60px',
            marginBottom: '60px',
            borderBottom: '1px solid rgba(26, 24, 22, 0.15)',
          }}>
            <div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--ink-soft)',
                marginBottom: '8px',
              }}>
                May — Aug 2025
              </div>
              <div style={{
                padding: '4px 10px',
                background: 'var(--rose)',
                color: 'var(--paper)',
                display: 'inline-block',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderRadius: '2px',
              }}>
                Internship
              </div>
            </div>
            <div>
              <h3 style={{
                fontSize: '36px',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                marginBottom: '4px',
              }}>
                Nuclear Information Technology Intern
              </h3>
              <div style={{
                fontSize: '20px',
                marginBottom: '24px',
              }}>
                <span className="italic" style={{ color: 'var(--rose)' }}>PSEG</span>
                <span style={{ color: 'var(--ink-soft)', marginLeft: '12px', fontSize: '16px' }}>
                  · Salem, NJ
                </span>
              </div>
              <ul style={{
                listStyle: 'none',
                fontSize: '17px',
                lineHeight: '1.6',
                color: 'var(--ink-soft)',
              }}>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '12px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rose)' }}>✿</span>
                  Automated enterprise asset tracking with a DBMS-driven reporting system generating weekly analytics on <strong style={{ color: 'var(--ink)' }}>500+ hardware assets</strong>.
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '12px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rose)' }}>✿</span>
                  Delivered a 3D scanning solution letting nuclear maintenance supervisors virtually inspect the plant, reducing physical inspection time by <strong style={{ color: 'var(--ink)' }}>30%</strong>.
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '12px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rose)' }}>✿</span>
                  Resolved a month-long software deployment roadblock within <strong style={{ color: 'var(--ink)' }}>72 hours</strong> through custom troubleshooting protocols.
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rose)' }}>✿</span>
                  Established the plant's first technical support desk, supporting <strong style={{ color: 'var(--ink)' }}>200+ employees</strong> via ServiceNow.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: '60px',
          }}>
            <div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--ink-soft)',
                marginBottom: '8px',
              }}>
                Sep 2024 — Now
              </div>
              <div style={{
                padding: '4px 10px',
                background: 'var(--sage)',
                color: 'var(--paper)',
                display: 'inline-block',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderRadius: '2px',
              }}>
                Current
              </div>
            </div>
            <div>
              <h3 style={{
                fontSize: '36px',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                marginBottom: '4px',
              }}>
                IST Service Desk Attendant
              </h3>
              <div style={{
                fontSize: '20px',
                marginBottom: '24px',
              }}>
                <span className="italic" style={{ color: 'var(--rose)' }}>New Jersey Institute of Technology</span>
                <span style={{ color: 'var(--ink-soft)', marginLeft: '12px', fontSize: '16px' }}>
                  · Newark, NJ
                </span>
              </div>
              <ul style={{
                listStyle: 'none',
                fontSize: '17px',
                lineHeight: '1.6',
                color: 'var(--ink-soft)',
              }}>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '12px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rose)' }}>✿</span>
                  Lead liaison between IST leadership and <strong style={{ color: 'var(--ink)' }}>8 student employees</strong>, managing knowledge base documentation projects.
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '12px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rose)' }}>✿</span>
                  Resolve <strong style={{ color: 'var(--ink)' }}>60+ technical tickets monthly</strong> with a high first-time resolution rate.
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rose)' }}>✿</span>
                  Provide enterprise support across Microsoft Azure, Office 365, and hybrid file systems for NJIT's computing infrastructure.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========= ABOUT ========= */}
      <section id="about" style={{
        padding: '120px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
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
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--blush) 0%, var(--lavender) 100%)',
              marginTop: '24px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                inset: '-8px',
                borderRadius: '50%',
                border: '1px dashed var(--rose)',
              }} />
            </div>
          </div>
          <div>
            <p style={{
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: '1.3',
              letterSpacing: '-0.02em',
              fontWeight: 300,
              marginBottom: '40px',
            }}>
              I'm a junior studying Computer Science at <span className="italic" style={{ color: 'var(--rose)' }}>NJIT</span>, drawn to problems where technology meets real infrastructure — energy grids, financial systems, the quiet tools that keep the world running.
            </p>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: 'var(--ink-soft)',
              marginBottom: '24px',
            }}>
              My summer at a nuclear power plant taught me that the best engineering is invisible: the DBMS report nobody notices because it just arrives on Monday morning, the deployment pipeline that doesn't break at 2am. That's the work I want to do.
            </p>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: 'var(--ink-soft)',
              marginBottom: '48px',
            }}>
              Lately I've been obsessed with how AI is reshaping fintech — fraud detection, personalized guidance, risk modeling — and how to build those systems so they're actually trustworthy at scale.
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
                Currently learning
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                fontSize: '16px',
              }}>
                <div>✿ Operating systems</div>
                <div>✿ Networking</div>
                <div>✿ ML engineering</div>
                <div>✿ System design</div>
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
            (say hi)
          </div>
          <h2 style={{
            fontSize: 'clamp(56px, 10vw, 140px)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            lineHeight: '0.95',
            marginBottom: '60px',
          }}>
            Let's build <span className="italic" style={{ color: 'var(--blush)' }}>something</span>
            <br />
            <span className="italic" style={{ color: 'var(--blush)' }}>together</span>
            <span style={{ color: 'var(--rose)' }}>.</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '80px',
          }}>
            <a href="mailto:db662@njit.edu" style={{
              padding: '32px',
              border: '1px solid rgba(245, 238, 228, 0.2)',
              borderRadius: '16px',
              transition: 'all 0.3s',
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
                Email →
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
                GitHub ↗
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
                LinkedIn ↗
              </div>
              <div style={{ fontSize: '22px', letterSpacing: '-0.01em' }}>
                in/durubirinci
              </div>
            </a>
            <a href="/resume.pdf" target="_blank" style={{
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
                Resume ↗
              </div>
              <div style={{ fontSize: '22px', letterSpacing: '-0.01em' }}>
                Download PDF
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
            <span>© 2026 Duru Birinci — made with ✿ in Newark</span>
            <span>Last updated: April 2026</span>
          </div>
        </div>

        {/* Decorative large text */}
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
