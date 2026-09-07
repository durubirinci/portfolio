'use client'

import { useState } from 'react'

type TimelineItem = {
  period: string
  role: string
  company: string
  initials: string
  logo?: string
  location: string
  bullets: string[]
}

const work: TimelineItem[] = [
  {
    period: 'May — Aug 2026',
    role: 'Software Engineer Intern',
    company: 'Fiserv',
    initials: 'FI',
    logo: '/images/logo-fiserv.png',
    location: 'Berkeley Heights, NJ',
    bullets: [
      'Built and shipped to production an internal Python log analysis tool for banking workstations, parsing hundreds of files at once, each thousands of lines, and returning results in seconds while cutting triage time for support engineers by over 50%.',
      'Designed a SQLite-backed analysis layer that flags failure-inducing errors and generates plain-language causes, recommendations, and next steps.',
      'Engineered a C# / .NET desktop launcher that orchestrates startup, environment setup, and dashboard delivery, giving non-technical users one-click access to the full tool.',
      "Integrated an OpenAI-powered chatbot for natural-language querying of parsed log data, built to Fiserv's Responsible AI Guidelines.",
      'Engineered a two-stage PII pipeline using regex detection and HMAC-SHA256 tokenization, ensuring account data is tokenized before it reaches storage or the language model.',
    ],
  },
  {
    period: 'May — Aug 2025',
    role: 'Nuclear Information Technology Intern',
    company: 'PSEG',
    initials: 'PS',
    logo: '/images/logo-pseg.png',
    location: 'Salem, NJ',
    bullets: [
      'Built a SQL-backed reporting system tracking 500+ hardware assets by age, last user, and last known location, giving leadership weekly visibility for replacement planning.',
      'Digitized hundreds of hard-copy operating procedures into a Microsoft SharePoint library and deployed kiosks across multiple plant sites, modernizing their current process.',
      'Delivered a 3D scanning solution letting supervisors virtually inspect the plant, cutting physical inspection time by 30% while maintaining safety compliance.',
      "Established the plant's first ServiceNow-powered support desk, delivering real-time IT support for 200+ employees across departments.",
    ],
  },
]

const education: TimelineItem[] = [
  {
    period: '2023 — 2027 (expected)',
    role: 'B.S. Computer Science',
    company: 'New Jersey Institute of Technology',
    initials: 'NJ',
    logo: '/images/logo-njit.svg',
    location: 'Newark, NJ',
    bullets: [
      'Relevant coursework: Data Structures and Algorithms, Foundations of Computer Science, Programming Language Concepts, Intensive Programming in Linux, Principles of Operating Systems, Cybersecurity, Networking.',
    ],
  },
  {
    period: '2019 — 2023',
    role: 'Technical Certificate, Information Technology',
    company: 'Cumberland County Technical Education Center',
    initials: 'CC',
    logo: '/images/logo-cctec.jpg',
    location: 'Vineland, NJ',
    bullets: [
      'Four-year technical program focused on IT fundamentals, networking, and foundational programming.',
    ],
  },
]

export default function Experience() {
  const [tab, setTab] = useState<'work' | 'education'>('work')
  const items = tab === 'work' ? work : education

  return (
    <section className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-3xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="mb-6">
          <div className="inline-flex rounded-lg bg-gray-100 p-1 text-sm font-medium dark:bg-gray-800">
            <button
              onClick={() => setTab('work')}
              className={`rounded-md px-3 py-1 transition-colors ${
                tab === 'work'
                  ? 'bg-white text-gray-950 shadow-sm dark:bg-gray-950 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setTab('education')}
              className={`rounded-md px-3 py-1 transition-colors ${
                tab === 'education'
                  ? 'bg-white text-gray-950 shadow-sm dark:bg-gray-950 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        <ul className="ml-6 border-l border-gray-200 pl-8 dark:border-gray-800">
          {items.map((item, i) => (
            <li key={`${tab}-${i}`} className="relative py-4 first:pt-0 last:pb-0">
              <span className="absolute -left-14 top-0 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white text-xs font-semibold text-gray-600 dark:border-gray-800">
                {item.logo ? (
                  <img src={item.logo} alt={item.company} className="h-full w-full object-cover" />
                ) : (
                  item.initials
                )}
              </span>

              <h3 className="text-sm font-semibold leading-none">
                {item.company}
                <span className="ml-2 text-xs font-normal text-gray-400 dark:text-gray-500">
                  · {item.location}
                </span>
              </h3>

              <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.role}</p>
                <time className="whitespace-nowrap text-xs tabular-nums text-gray-400 dark:text-gray-500">
                  {item.period}
                </time>
              </div>

              <ul className="ml-4 mt-1.5 list-outside list-disc space-y-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
