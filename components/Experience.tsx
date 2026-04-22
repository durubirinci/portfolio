'use client'

import { useState } from 'react'

const work = [
  {
    period: 'May — Aug 2025',
    role: 'Nuclear Information Technology Intern',
    company: 'PSEG',
    location: 'Salem, NJ',
    tag: 'Internship',
    tagColor: 'var(--rose)',
    bullets: [
      'Automated enterprise asset tracking with a DBMS-driven reporting system generating weekly analytics on 500+ hardware assets.',
      'Delivered a 3D scanning solution letting nuclear maintenance supervisors virtually inspect the plant, reducing physical inspection time by 30%.',
      'Resolved a month-long software deployment roadblock within 72 hours through custom troubleshooting protocols.',
      "Established the plant's first technical support desk, supporting 200+ employees via ServiceNow.",
    ],
  },
  {
    period: 'Sep 2024 — Now',
    role: 'IST Service Desk Attendant',
    company: 'New Jersey Institute of Technology',
    location: 'Newark, NJ',
    tag: 'Current',
    tagColor: 'var(--sage)',
    bullets: [
      'Lead liaison between IST leadership and 8 student employees, managing knowledge base documentation projects.',
      'Resolve 60+ technical tickets monthly with a high first-time resolution rate.',
      "Provide enterprise support across Microsoft Azure, Office 365, and hybrid file systems for NJIT's computing infrastructure.",
    ],
  },
]

const education = [
  {
    period: '2023 — 2027 (expected)',
    role: 'B.S. Computer Science',
    company: 'New Jersey Institute of Technology',
    location: 'Newark, NJ',
    tag: 'Current',
    tagColor: 'var(--sage)',
    bullets: [
      'Relevant coursework: Data Structures and Algorithms, Foundations of Computer Science, Programming Language Concepts, Intensive Programming in Linux.',
      'Principles of Operating Systems, Cybersecurity, Networking.',
    ],
  },
  {
    period: '2019 — 2023',
    role: 'Technical Certificate, Information Technology',
    company: 'Cumberland County Technical Education Center',
    location: 'Vineland, NJ',
    tag: 'Completed',
    tagColor: 'var(--lavender)',
    bullets: [
      'Four-year technical program focused on IT fundamentals, networking, and foundational programming.',
    ],
  },
]

export default function Experience() {
  const [tab, setTab] = useState<'work' | 'education'>('work')
  const items = tab === 'work' ? work : education

  return (
    <section style={{
      padding: '120px 40px',
      background: 'var(--cream)',
      borderTop: '1px solid var(--ink)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '60px',
        }}>
          <h2 style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            lineHeight: '1',
          }}>
            <span className="italic" style={{ color: 'var(--rose)' }}>where</span> i've been
          </h2>

          {/* Tab toggle */}
          <div style={{
            display: 'inline-flex',
            padding: '4px',
            background: 'var(--paper)',
            border: '1px solid rgba(26, 24, 22, 0.15)',
            borderRadius: '100px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            <button
              onClick={() => setTab('work')}
              style={{
                padding: '10px 24px',
                background: tab === 'work' ? 'var(--ink)' : 'transparent',
                color: tab === 'work' ? 'var(--paper)' : 'var(--ink)',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                letterSpacing: 'inherit',
                textTransform: 'inherit',
                transition: 'all 0.25s',
              }}
            >
              work
            </button>
            <button
              onClick={() => setTab('education')}
              style={{
                padding: '10px 24px',
                background: tab === 'education' ? 'var(--ink)' : 'transparent',
                color: tab === 'education' ? 'var(--paper)' : 'var(--ink)',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                letterSpacing: 'inherit',
                textTransform: 'inherit',
                transition: 'all 0.25s',
              }}
            >
              education
            </button>
          </div>
        </div>

        {items.map((item, i) => (
          <div key={`${tab}-${i}`} style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: '60px',
            paddingBottom: '60px',
            marginBottom: '60px',
            borderBottom: i < items.length - 1 ? '1px solid rgba(26, 24, 22, 0.15)' : 'none',
            animation: 'fade-up 0.4s ease-out',
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
                {item.period}
              </div>
              <div style={{
                padding: '4px 10px',
                background: item.tagColor,
                color: 'var(--paper)',
                display: 'inline-block',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderRadius: '2px',
              }}>
                {item.tag}
              </div>
            </div>
            <div>
              <h3 style={{
                fontSize: '32px',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                marginBottom: '4px',
                lineHeight: '1.15',
              }}>
                {item.role}
              </h3>
              <div style={{
                fontSize: '18px',
                marginBottom: '24px',
              }}>
                <span className="italic" style={{ color: 'var(--rose)' }}>{item.company}</span>
                <span style={{ color: 'var(--ink-soft)', marginLeft: '12px', fontSize: '15px' }}>
                  · {item.location}
                </span>
              </div>
              <ul style={{
                listStyle: 'none',
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'var(--ink-soft)',
              }}>
                {item.bullets.map((b, j) => (
                  <li key={j} style={{ paddingLeft: '24px', position: 'relative', marginBottom: '10px' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--rose)' }}>✿</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
