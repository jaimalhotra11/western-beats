import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Music Distribution Resources, Research & Case Studies 2026 | Western Beats',
  description: 'Free guides, case studies, research reports and infographics for independent artists worldwide. Learn how to distribute music to Spotify, JioSaavn, Apple Music and earn 100% royalties.',
  keywords: ['music distribution guide 2026','music distribution case study','how to distribute music India free','music streaming royalties India','Indian music distribution research','music distribution ebook free','Spotify distribution guide India','JioSaavn distribution guide','music royalties India 2026','NRI artist music distribution'],
  alternates: { canonical: 'https://www.westernbeats.com/resources' },
  openGraph: {
    title: 'Music Distribution Resources, Research & Case Studies 2026 | Western Beats',
    description: 'Free guides, case studies, research and infographics for artists distributing music to 150+ platforms.',
    url: 'https://www.westernbeats.com/resources',
    siteName: 'Western Beats', type: 'website',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Western Beats Resource Hub — Music Distribution Guides, Case Studies & Research',
  url: 'https://www.westernbeats.com/resources',
  description: 'Free resources for independent artists: case studies, research reports, ebooks and infographics on music distribution, royalties and streaming platforms.',
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
}

// SVG cover art components for each resource type
function CaseStudyCover({ gradient, icon, label }: { gradient: string; icon: string; label: string }) {
  return (
    <div style={{ background: gradient, height: 160, borderRadius: '16px 16px 0 0', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px 24px' }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ position: 'absolute', top: 20, right: 40, width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
      {/* Grid lines for depth */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }} viewBox="0 0 300 160" preserveAspectRatio="none">
        <line x1="0" y1="40" x2="300" y2="40" stroke="white" strokeWidth="0.5"/>
        <line x1="0" y1="80" x2="300" y2="80" stroke="white" strokeWidth="0.5"/>
        <line x1="0" y1="120" x2="300" y2="120" stroke="white" strokeWidth="0.5"/>
        <line x1="75" y1="0" x2="75" y2="160" stroke="white" strokeWidth="0.5"/>
        <line x1="150" y1="0" x2="150" y2="160" stroke="white" strokeWidth="0.5"/>
        <line x1="225" y1="0" x2="225" y2="160" stroke="white" strokeWidth="0.5"/>
      </svg>
      <span style={{ fontSize: 36, position: 'relative', zIndex: 1, display: 'block', marginBottom: 8 }}>{icon}</span>
      <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 1 }}>{label}</span>
    </div>
  )
}

function ResearchCover({ accent }: { accent: string }) {
  return (
    <div style={{ background: `linear-gradient(135deg, #060F22 0%, #0B1A35 100%)`, height: 160, borderRadius: '16px 16px 0 0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${accent}30` }}>
      {/* Bar chart illustration */}
      <svg viewBox="0 0 200 100" style={{ width: '70%', height: '70%', opacity: 0.9 }}>
        <rect x="10" y="60" width="24" height="30" rx="3" fill={accent} opacity="0.5"/>
        <rect x="44" y="35" width="24" height="55" rx="3" fill={accent} opacity="0.7"/>
        <rect x="78" y="20" width="24" height="70" rx="3" fill={accent} opacity="0.9"/>
        <rect x="112" y="45" width="24" height="45" rx="3" fill={accent} opacity="0.6"/>
        <rect x="146" y="10" width="24" height="80" rx="3" fill={accent} opacity="1"/>
        <line x1="5" y1="92" x2="195" y2="92" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        {/* Trend line */}
        <polyline points="22,75 56,50 90,30 124,60 158,20" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5"/>
      </svg>
      <div style={{ position: 'absolute', top: 16, left: 20, fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color: accent }}>Research Report</div>
      <div style={{ position: 'absolute', top: 16, right: 20, fontSize: 10, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>2026</div>
    </div>
  )
}

function EbookCover({ color }: { color: string }) {
  return (
    <div style={{ background: `linear-gradient(160deg, #0D1B2E 0%, #162238 100%)`, height: 160, borderRadius: '16px 16px 0 0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Book illustration */}
      <svg viewBox="0 0 160 120" style={{ width: '55%', height: '55%' }}>
        {/* Book body */}
        <rect x="30" y="10" width="90" height="100" rx="4" fill="#1A2D48" stroke={color} strokeWidth="1.5" strokeOpacity="0.6"/>
        {/* Spine */}
        <rect x="30" y="10" width="14" height="100" rx="4" fill={color} opacity="0.7"/>
        {/* Lines */}
        <line x1="55" y1="35" x2="110" y2="35" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="55" y1="50" x2="110" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="55" y1="65" x2="95" y2="65" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="55" y1="80" x2="105" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Star/badge */}
        <circle cx="110" cy="95" r="14" fill={color} opacity="0.9"/>
        <text x="110" y="99" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">FREE</text>
      </svg>
      <div style={{ position: 'absolute', top: 16, left: 20, fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color }}>Free Ebook</div>
    </div>
  )
}

function InfographicCover({ colors }: { colors: string[] }) {
  return (
    <div style={{ background: 'linear-gradient(135deg, #0A0F1E 0%, #111827 100%)', height: 160, borderRadius: '16px 16px 0 0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Pie / donut chart illustration */}
      <svg viewBox="0 0 160 120" style={{ width: '65%', height: '65%' }}>
        {/* Donut segments */}
        <circle cx="60" cy="60" r="45" fill="none" stroke={colors[0]} strokeWidth="18" strokeDasharray="85 198" strokeDashoffset="0" opacity="0.9"/>
        <circle cx="60" cy="60" r="45" fill="none" stroke={colors[1]} strokeWidth="18" strokeDasharray="60 223" strokeDashoffset="-85" opacity="0.8"/>
        <circle cx="60" cy="60" r="45" fill="none" stroke={colors[2] || colors[0]} strokeWidth="18" strokeDasharray="53 230" strokeDashoffset="-145" opacity="0.6"/>
        <circle cx="60" cy="60" r="28" fill="#0A0F1E"/>
        <text x="60" y="63" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" opacity="0.7">2026</text>
        {/* Legend */}
        <rect x="120" y="25" width="8" height="8" rx="2" fill={colors[0]}/>
        <line x1="130" y1="29" x2="155" y2="29" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
        <rect x="120" y="45" width="8" height="8" rx="2" fill={colors[1]}/>
        <line x1="130" y1="49" x2="155" y2="49" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
        <rect x="120" y="65" width="8" height="8" rx="2" fill={colors[2] || colors[0]} opacity="0.6"/>
        <line x1="130" y1="69" x2="148" y2="69" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
      </svg>
      <div style={{ position: 'absolute', top: 16, left: 20, fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color: colors[0] }}>Infographic</div>
    </div>
  )
}

const CASE_STUDIES = [
  {
    slug: 'case-studies/independent-hindi-artist-1m-streams',
    gradient: 'linear-gradient(135deg, #0A2A1A 0%, #0D3D24 50%, #0F4D2C 100%)',
    icon: '🇮🇳',
    label: 'Case Study · India',
    title: 'From 0 to 1M Streams: How an Independent Hindi Artist Went Global',
    excerpt: 'A Delhi-based indie artist used Western Beats to reach listeners in 47 countries with zero upfront cost.',
    stat: '1M+', statLabel: 'Streams in 6 months',
    read: '6 min read',
    tagColor: '#34D399',
  },
  {
    slug: 'case-studies/british-indian-artist-dual-market',
    gradient: 'linear-gradient(135deg, #1A0A2E 0%, #2D0F4A 50%, #3D1560 100%)',
    icon: '🇬🇧',
    label: 'Case Study · UK + India',
    title: 'British Indian Artist Cracks Both Markets: Spotify UK + JioSaavn India',
    excerpt: 'A London-based South Asian artist\'s blueprint for releasing music in two markets simultaneously — one submission, for free.',
    stat: '2 Markets', statLabel: 'One submission',
    read: '7 min read',
    tagColor: '#A78BFA',
  },
  {
    slug: 'case-studies/punjabi-artist-canada-diaspora',
    gradient: 'linear-gradient(135deg, #1A1000 0%, #2D1C00 50%, #3D2800 100%)',
    icon: '🇨🇦',
    label: 'Case Study · Canada',
    title: 'Punjabi Artist in Canada: Reaching India, UK & North America Simultaneously',
    excerpt: 'How a Toronto-based Punjabi artist distributed to 3 countries in one submission — without paying DistroKid\'s annual fee.',
    stat: '3 Countries', statLabel: 'Zero annual fee',
    read: '5 min read',
    tagColor: '#F59E0B',
  },
]

const RESEARCH = [
  {
    slug: 'research/state-of-indian-music-streaming-2026',
    accent: '#5CB2DC',
    title: 'State of Indian Music Streaming 2026: Royalties, Platforms & Global Reach',
    excerpt: 'Original data on per-stream royalty rates across 8 platforms, market share, and diaspora audience sizes across UK, USA, Canada, UAE and Australia.',
    stat: '150+ Data Points',
    statLabel: 'Original research',
    read: '12 min read',
    highlights: ['JioSaavn vs Spotify royalty rates', 'Diaspora market sizing', '8 platforms compared'],
  },
  {
    slug: 'research/indian-diaspora-music-market-2026',
    accent: '#34D399',
    title: 'The $2.4B Indian Diaspora Music Market: Where Artists Are Leaving Money Behind',
    excerpt: 'Data analysis of 30M+ South Asian diaspora listeners in UK, USA, Canada, Australia and UAE — and the royalty opportunity independent artists are missing.',
    stat: '$2.4B',
    statLabel: 'Diaspora market size',
    read: '10 min read',
    highlights: ['5 diaspora markets', '10–30x royalty multiplier', 'Country-by-country breakdown'],
  },
]

const EBOOKS = [
  {
    slug: 'ebooks/complete-guide-music-distribution-india-2026',
    color: '#F59E0B',
    title: 'The Complete Guide to Music Distribution in India 2026',
    excerpt: '62-page definitive guide: platforms, royalties, ISRC codes, cover art specs, metadata, playlist pitching and global strategy — completely free.',
    pages: '62 Pages',
    pageLabel: 'Free PDF guide',
    chapters: ['Choosing your distributor', 'ISRC & rights', 'Metadata & cover art', 'Release strategy', 'Reading royalty statements', 'Going global'],
  },
  {
    slug: 'ebooks/music-distribution-nri-artists-guide',
    color: '#0A64C3',
    title: 'NRI Artist Playbook: Distributing Indian Music from UK, USA & Canada',
    excerpt: '45-page step-by-step playbook for South Asian artists abroad — reach both your local diaspora audience and India simultaneously.',
    pages: '45 Pages',
    pageLabel: 'Free PDF guide',
    chapters: ['Understanding your dual audience', 'Right distributor from abroad', 'Bilingual metadata', 'Territory editorial pitching', 'International royalties', 'Building press for two markets'],
  },
]

const INFOGRAPHICS = [
  {
    slug: 'infographics/streaming-royalties-india-2026',
    colors: ['#0A64C3', '#34D399', '#F59E0B'],
    title: 'How Much Do Streaming Platforms Pay in India? [2026 Royalty Rates]',
    excerpt: 'Visual breakdown of per-stream royalty rates on JioSaavn, Spotify India, Apple Music, Gaana, Wynk and YouTube Music — side by side.',
    type: 'Royalty Comparison',
    share: 'Shareable · Updated 2026',
  },
  {
    slug: 'infographics/music-distribution-comparison-india',
    colors: ['#0A64C3', '#7C3AED', '#F59E0B'],
    title: 'Western Beats vs DistroKid vs TuneCore vs CD Baby [India 2026]',
    excerpt: 'The definitive visual comparison — fees, JioSaavn coverage, royalty splits, platform count and India support for every major distributor.',
    type: 'Distributor Comparison',
    share: 'Shareable · Updated July 2026',
  },
]

const STATS = [
  { n: '10,000+', label: 'Artists distributing' },
  { n: '150+', label: 'Platforms covered' },
  { n: '₹0', label: 'Annual fee' },
  { n: '100%', label: 'Royalties kept' },
]

export default function ResourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <style>{`
        .res-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .res-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,0.4); }
        .res-card-sm { transition: transform 0.2s ease, border-color 0.2s ease; }
        .res-card-sm:hover { transform: translateY(-3px); border-color: rgba(10,100,195,0.35) !important; }
        .tab-chip { transition: all 0.2s ease; }
        .tab-chip:hover { background: rgba(10,100,195,0.2) !important; color: #fff !important; border-color: rgba(10,100,195,0.4) !important; }
        .read-link { transition: color 0.2s ease; }
        .read-link:hover { color: #fff !important; }
        .cta-btn { transition: background 0.2s ease, transform 0.15s ease; }
        .cta-btn:hover { background: #0D77E0 !important; transform: translateY(-1px); }
        .cta-btn-ghost { transition: all 0.2s ease; }
        .cta-btn-ghost:hover { background: rgba(255,255,255,0.08) !important; color: #fff !important; }
      `}</style>

      <div style={{ background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' }}>
        <Nav />

        {/* ── HERO ───────────────────────────────────────────────── */}
        <section style={{ position: 'relative', padding: '140px 24px 100px', textAlign: 'center', overflow: 'hidden' }}>
          {/* Background radial glows */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(10,100,195,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '30%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '20%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(10,100,195,0.12)', border: '1px solid rgba(10,100,195,0.25)', borderRadius: 40, padding: '8px 20px', marginBottom: 32 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399', flexShrink: 0, boxShadow: '0 0 8px #34D399' }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#5CB2DC' }}>Free Resources · Artists Worldwide</span>
            </div>

            <h1 style={{ fontSize: 'clamp(38px,6vw,72px)', fontWeight: 900, lineHeight: 1.05, margin: '0 0 24px', letterSpacing: '-0.02em' }}>
              Everything You Need to<br />
              <span style={{ background: 'linear-gradient(90deg, #0A64C3 0%, #34D399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Grow Your Music Career.
              </span>
            </h1>

            <p style={{ fontSize: 18, color: '#8899AA', lineHeight: 1.75, margin: '0 0 48px', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Case studies, original research, free ebooks and infographics — built for independent artists and NRI artists who want to distribute smarter and earn every rupee they deserve.
            </p>

            {/* Category tabs */}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' as const }}>
              {[
                { label: 'Case Studies', href: '#case-studies', emoji: '📁' },
                { label: 'Research', href: '#research', emoji: '📊' },
                { label: 'Free Ebooks', href: '#ebooks', emoji: '📖' },
                { label: 'Infographics', href: '#infographics', emoji: '📈' },
                { label: 'Blog', href: '#blog', emoji: '✍️' },
              ].map(t => (
                <a key={t.label} href={t.href} className="tab-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 40, padding: '10px 20px', color: '#8899AA', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                  <span>{t.emoji}</span> {t.label}
                </a>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div style={{ maxWidth: 800, margin: '72px auto 0', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{ background: '#060C18', padding: '28px 20px', textAlign: 'center' as const, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <p style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, margin: '0 0 4px', background: 'linear-gradient(135deg,#fff 0%,#8899AA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.n}</p>
                <p style={{ fontSize: 12, color: '#4A5568', margin: 0, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CASE STUDIES ──────────────────────────────────────── */}
        <section id="case-studies" style={{ maxWidth: 1120, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap' as const, gap: 16 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>📁</div>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#34D399' }}>Real Artists · Real Results</span>
              </div>
              <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 900, margin: 0, letterSpacing: '-0.01em' }}>Case Studies</h2>
              <p style={{ fontSize: 15, color: '#8899AA', margin: '10px 0 0', maxWidth: 480 }}>How independent artists from India, UK, Canada and beyond grew their streams and royalties with Western Beats.</p>
            </div>
            <Link href="/resources/case-studies/independent-hindi-artist-1m-streams" className="read-link" style={{ fontSize: 13, color: '#34D399', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' as const }}>
              View all case studies →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
            {CASE_STUDIES.map(cs => (
              <Link key={cs.slug} href={`/resources/${cs.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <article className="res-card" style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, overflow: 'hidden', height: '100%', cursor: 'pointer' }}>
                  <CaseStudyCover gradient={cs.gradient} icon={cs.icon} label={cs.label} />
                  <div style={{ padding: '24px 24px 28px' }}>
                    <h3 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 12px', lineHeight: 1.35, color: '#fff' }}>{cs.title}</h3>
                    <p style={{ fontSize: 14, color: '#8899AA', lineHeight: 1.7, margin: '0 0 24px' }}>{cs.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div>
                        <p style={{ fontSize: 26, fontWeight: 900, color: cs.tagColor, margin: 0, lineHeight: 1 }}>{cs.stat}</p>
                        <p style={{ fontSize: 11, color: '#4A5568', margin: '3px 0 0', textTransform: 'uppercase' as const, letterSpacing: 0.8, fontWeight: 600 }}>{cs.statLabel}</p>
                      </div>
                      <span style={{ fontSize: 12, color: '#5CB2DC', fontWeight: 700, background: 'rgba(92,178,220,0.08)', padding: '6px 12px', borderRadius: 20, border: '1px solid rgba(92,178,220,0.15)' }}>{cs.read}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* ── RESEARCH ──────────────────────────────────────────── */}
        <section id="research" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(10,100,195,0.04) 50%, transparent 100%)', padding: '80px 0' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap' as const, gap: 16 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(92,178,220,0.15)', border: '1px solid rgba(92,178,220,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>📊</div>
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC' }}>Original Data · Cited by Artists & Labels</span>
                </div>
                <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 900, margin: 0, letterSpacing: '-0.01em' }}>Research Reports</h2>
                <p style={{ fontSize: 15, color: '#8899AA', margin: '10px 0 0', maxWidth: 480 }}>Data-backed analysis of the Indian and global music streaming market — written for artists, managers and labels.</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(480px,1fr))', gap: 24 }}>
              {RESEARCH.map(r => (
                <Link key={r.slug} href={`/resources/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <article className="res-card" style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, overflow: 'hidden', cursor: 'pointer' }}>
                    <ResearchCover accent={r.accent} />
                    <div style={{ padding: '28px 28px 32px' }}>
                      <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 12px', lineHeight: 1.3, color: '#fff' }}>{r.title}</h3>
                      <p style={{ fontSize: 14, color: '#8899AA', lineHeight: 1.7, margin: '0 0 20px' }}>{r.excerpt}</p>
                      {/* Highlight pills */}
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 20 }}>
                        {r.highlights.map(h => (
                          <span key={h} style={{ fontSize: 11, fontWeight: 600, color: r.accent, background: `${r.accent}12`, border: `1px solid ${r.accent}25`, padding: '4px 10px', borderRadius: 20 }}>{h}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <div>
                          <p style={{ fontSize: 24, fontWeight: 900, color: r.accent, margin: 0, lineHeight: 1 }}>{r.stat}</p>
                          <p style={{ fontSize: 11, color: '#4A5568', margin: '3px 0 0', textTransform: 'uppercase' as const, letterSpacing: 0.8, fontWeight: 600 }}>{r.statLabel}</p>
                        </div>
                        <span style={{ fontSize: 12, color: '#5CB2DC', fontWeight: 700, background: 'rgba(92,178,220,0.08)', padding: '6px 12px', borderRadius: 20, border: '1px solid rgba(92,178,220,0.15)' }}>{r.read}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── EBOOKS ────────────────────────────────────────────── */}
        <section id="ebooks" style={{ maxWidth: 1120, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap' as const, gap: 16 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>📖</div>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#F59E0B' }}>100% Free · No Email Required</span>
              </div>
              <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 900, margin: 0, letterSpacing: '-0.01em' }}>Free Ebooks & Guides</h2>
              <p style={{ fontSize: 15, color: '#8899AA', margin: '10px 0 0', maxWidth: 480 }}>Comprehensive playbooks for distributing your music — whether you're in India or anywhere in the world.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(460px,1fr))', gap: 24 }}>
            {EBOOKS.map(e => (
              <Link key={e.slug} href={`/resources/${e.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <article className="res-card" style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' as const }}>
                  <EbookCover color={e.color} />
                  <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' as const }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${e.color}15`, border: `1px solid ${e.color}30`, borderRadius: 20, padding: '4px 12px', marginBottom: 16, alignSelf: 'flex-start' }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: e.color }}>{e.pages}</span>
                      <span style={{ fontSize: 10, color: '#4A5568' }}>·</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#8899AA' }}>{e.pageLabel}</span>
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 12px', lineHeight: 1.3, color: '#fff' }}>{e.title}</h3>
                    <p style={{ fontSize: 14, color: '#8899AA', lineHeight: 1.7, margin: '0 0 20px', flex: 1 }}>{e.excerpt}</p>
                    {/* Chapter list */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 20 }}>
                      {e.chapters.map(ch => (
                        <div key={ch} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ width: 4, height: 4, borderRadius: '50%', background: e.color, flexShrink: 0 }} />
                          <span style={{ fontSize: 12, color: '#8899AA' }}>{ch}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 13, color: e.color, fontWeight: 800 }}>Free Download →</span>
                      <span style={{ fontSize: 11, color: '#4A5568', fontWeight: 600 }}>Sign up to access</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* ── INFOGRAPHICS ──────────────────────────────────────── */}
        <section id="infographics" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(167,139,250,0.04) 50%, transparent 100%)', padding: '80px 0' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap' as const, gap: 16 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>📈</div>
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#A78BFA' }}>Shareable Visual Data</span>
                </div>
                <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 900, margin: 0, letterSpacing: '-0.01em' }}>Infographics</h2>
                <p style={{ fontSize: 15, color: '#8899AA', margin: '10px 0 0', maxWidth: 480 }}>Visual guides on royalties, platform comparisons and the Indian music market — built for artists and managers.</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(460px,1fr))', gap: 24 }}>
              {INFOGRAPHICS.map(inf => (
                <Link key={inf.slug} href={`/resources/${inf.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <article className="res-card" style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, overflow: 'hidden', cursor: 'pointer' }}>
                    <InfographicCover colors={inf.colors} />
                    <div style={{ padding: '24px 24px 28px' }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#A78BFA', background: 'rgba(167,139,250,0.1)', padding: '4px 10px', borderRadius: 20, border: '1px solid rgba(167,139,250,0.2)' }}>{inf.type}</span>
                        <span style={{ fontSize: 11, color: '#4A5568', fontWeight: 600, padding: '4px 0' }}>{inf.share}</span>
                      </div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 10px', lineHeight: 1.35, color: '#fff' }}>{inf.title}</h3>
                      <p style={{ fontSize: 14, color: '#8899AA', lineHeight: 1.7, margin: '0 0 20px' }}>{inf.excerpt}</p>
                      <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 13, color: '#A78BFA', fontWeight: 700 }}>View Infographic →</span>
                        <span style={{ fontSize: 11, color: '#4A5568', fontWeight: 600 }}>Free · Shareable</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG ──────────────────────────────────────────────── */}
        <section id="blog" style={{ maxWidth: 1120, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(92,178,220,0.15)', border: '1px solid rgba(92,178,220,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>✍️</div>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC' }}>Deep-Dive Articles</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 900, margin: '0 0 10px', letterSpacing: '-0.01em' }}>Blog & Guides</h2>
            <p style={{ fontSize: 15, color: '#8899AA', margin: 0, maxWidth: 480 }}>Platforms, royalties, distribution strategy and the business of music — explained clearly for independent artists.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 16 }}>
            {[
              { href: '/blog/distrokid-vs-tunecore-vs-western-beats', title: 'DistroKid vs TuneCore vs Western Beats India 2026', tag: 'Comparison', color: '#0A64C3', emoji: '⚔️' },
              { href: '/blog/free-music-distribution-no-fees-india', title: 'Free Music Distribution With No Fees India 2026', tag: 'Guide', color: '#34D399', emoji: '🆓' },
              { href: '/blog/how-to-get-isrc-code-free-india', title: 'How to Get an ISRC Code Free in India', tag: 'How-To', color: '#F59E0B', emoji: '🔢' },
              { href: '/blog/youtube-music-royalties-india-2026', title: 'YouTube Music Royalties India 2026: Full Breakdown', tag: 'Research', color: '#EF4444', emoji: '▶️' },
              { href: '/blog/music-distribution-mistakes-to-avoid-india', title: '10 Music Distribution Mistakes to Avoid India', tag: 'Listicle', color: '#A78BFA', emoji: '⚠️' },
              { href: '/blog/indian-music-distribution-uk-usa-canada-2026', title: 'Music Distribution for NRI Artists: UK, USA & Canada', tag: 'International', color: '#5CB2DC', emoji: '✈️' },
            ].map(b => (
              <Link key={b.href} href={b.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className="res-card-sm" style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 22px', display: 'flex', gap: 16, alignItems: 'flex-start', cursor: 'pointer' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${b.color}15`, border: `1px solid ${b.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                    {b.emoji}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: b.color, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>{b.tag}</span>
                    <p style={{ fontSize: 14, fontWeight: 700, margin: '5px 0 0', lineHeight: 1.4, color: '#E2E8F0' }}>{b.title}</p>
                  </div>
                  <span style={{ color: '#4A5568', fontSize: 16, flexShrink: 0, marginTop: 2 }}>→</span>
                </article>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 32, textAlign: 'center' as const }}>
            <Link href="/blog" className="read-link" style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>View all blog posts →</Link>
          </div>
        </section>

        {/* ── CTA BANNER ────────────────────────────────────────── */}
        <section style={{ padding: '0 24px 100px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', borderRadius: 28, overflow: 'hidden' }}>
            {/* Background */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #060F24 0%, #0A1535 50%, #060F24 100%)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 28 }} />
            <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(10,100,195,0.15) 0%, transparent 70%)' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)' }} />

            <div style={{ position: 'relative', zIndex: 1, padding: '64px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 32 }}>
              <div style={{ maxWidth: 500 }}>
                <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', margin: '0 0 12px' }}>Free Forever</p>
                <h2 style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 900, margin: '0 0 14px', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
                  Ready to distribute your music — and keep 100% of royalties?
                </h2>
                <p style={{ fontSize: 15, color: '#8899AA', margin: 0, lineHeight: 1.7 }}>
                  Join 10,000+ artists on Western Beats. Free forever — no annual fee, no commission. JioSaavn, Spotify, Apple Music and 150+ platforms in one submission.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                <Link href="/sign-up" className="cta-btn" style={{ display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 14, padding: '16px 40px', fontSize: 15, fontWeight: 800, textDecoration: 'none', textAlign: 'center' as const, whiteSpace: 'nowrap' as const }}>
                  Start Distributing Free →
                </Link>
                <Link href="/how-it-works" className="cta-btn-ghost" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', color: '#8899AA', borderRadius: 14, padding: '14px 40px', fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center' as const, border: '1px solid rgba(255,255,255,0.08)' }}>
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
