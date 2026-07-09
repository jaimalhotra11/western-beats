import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Free Music Distribution India 2026 | Western Beats',
  description: 'Free music distribution India to Spotify, JioSaavn, Gaana, Apple Music & 150+ platforms in 72 hours. 100% ownership, Warner Music India Partner. Submit free.',
  keywords: [
    'free music distribution india',
    'free music distribution india 2026',
    'distribute music online free india',
    'best free music distribution india',
    'how to distribute music for free in india',
    'free song distribution platform india',
    'upload song to spotify free india',
    'free music distribution jiosaavn',
    'free music distribution gaana',
    'independent artist music distribution india',
    'no cost music distribution india',
    'music distribution company india',
    'distribute music to all platforms free',
    'free music release india',
    'indian music distributor free',
    'upload music online free india',
    'music distribution without label india',
    'free music aggregator india',
    'distrokid alternative india',
    'tunecore alternative india',
  ],
  alternates: { canonical: 'https://westernbeats.com/free-music-distribution-india' },
  openGraph: {
    title: 'Free Music Distribution India 2026 | Western Beats',
    description: 'Distribute your music free to Spotify, JioSaavn, Gaana, Apple Music and 150+ platforms in 72 hours. 100% ownership, Warner Music India Partner.',
    url: 'https://westernbeats.com/free-music-distribution-india',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free Music Distribution India 2026 | Western Beats' },
  robots: { index: true, follow: true },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://westernbeats.com/free-music-distribution-india',
      name: 'Free Music Distribution India 2026',
      description: 'Free music distribution India to Spotify, JioSaavn, Gaana, Apple Music and 150+ platforms in 72 hours, with 100% ownership retained.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Music Distribution India', item: 'https://westernbeats.com/free-music-distribution-india' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Distribute Music Free in India with Western Beats',
      step: [
        { '@type': 'HowToStep', name: 'Create Account', text: 'Sign up for a free Western Beats account in minutes — no credit card or payment details required.' },
        { '@type': 'HowToStep', name: 'Upload Track & Metadata', text: 'Upload your audio file and cover art, then enter accurate metadata including song title, artist name, genre, language, and release date.' },
        { '@type': 'HowToStep', name: 'Select Platforms', text: 'Choose which of the 150+ supported platforms you want your release distributed to, including Spotify, JioSaavn, Gaana, Apple Music, and caller tune services.' },
        { '@type': 'HowToStep', name: 'Submit for Review', text: 'Submit your release for quality and compliance review, typically completed within 24 hours.' },
        { '@type': 'HowToStep', name: 'Go Live', text: 'Once approved, your music goes live across all selected platforms within 72 hours, fully owned by you.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is Western Beats really free for music distribution in India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes your music to Spotify, JioSaavn, Gaana, Apple Music and 150+ platforms with zero upfront cost and no mandatory annual subscription. You can submit and release music without paying anything to get started.' } },
        { '@type': 'Question', name: 'How is Western Beats different from DistroKid or TuneCore?', acceptedAnswer: { '@type': 'Answer', text: 'DistroKid and TuneCore are built primarily for Western markets and charge recurring subscription fees, and neither distributes to JioSaavn or Gaana. Western Beats is built specifically for Indian artists, includes JioSaavn, Gaana, and caller tune distribution as standard, and has no mandatory annual fee.' } },
        { '@type': 'Question', name: 'Which platforms are included in free music distribution with Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Western Beats distributes to 150+ platforms including Spotify, JioSaavn, Gaana, Apple Music, YouTube Music, Wynk, Hungama, Amazon Music, Resso, Deezer, Tidal, SoundCloud, and many more in a single submission.' } },
        { '@type': 'Question', name: 'Does Western Beats distribute to JioSaavn and Gaana?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. JioSaavn and Gaana are India’s two largest streaming platforms and are included free with every Western Beats distribution, unlike most global distributors that skip them entirely.' } },
        { '@type': 'Question', name: 'Does Western Beats support caller tune distribution?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Jio and Airtel caller tune (CRBT) distribution is included free, giving your music an additional revenue and discovery channel that most distributors do not offer.' } },
        { '@type': 'Question', name: 'Do I keep ownership of my music with Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You retain 100% ownership of your masters and publishing rights at all times. Western Beats never takes ownership or rights to your music.' } },
        { '@type': 'Question', name: 'How long does it take for my music to go live?', acceptedAnswer: { '@type': 'Answer', text: 'After review approval, which typically takes within 24 hours, your music goes live across all selected platforms within 72 hours total.' } },
        { '@type': 'Question', name: 'Is there a limit on how many songs I can submit?', acceptedAnswer: { '@type': 'Answer', text: 'No. Independent artists and labels can submit unlimited singles, EPs, and albums through Western Beats.' } },
        { '@type': 'Question', name: 'What does it mean that Western Beats is a Warner Music India Partner?', acceptedAnswer: { '@type': 'Answer', text: 'Western Beats operates as an official Warner Music India Partner, which provides additional credibility, editorial consideration, and playlist pitching support for artists distributing through the platform.' } },
        { '@type': 'Question', name: 'How do royalties and payouts work with Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'When your music streams on platforms like Spotify or JioSaavn, those platforms pay royalties which Western Beats collects and passes through to you, the artist, who retains 100% ownership of the underlying music throughout.' } },
      ],
    },
  ],
}

const PLATFORMS = [
  'Spotify', 'JioSaavn', 'Gaana', 'Apple Music', 'YouTube Music', 'Wynk Music', 'Hungama', 'Amazon Music',
  'Resso', 'Jio Caller Tune', 'Airtel Caller Tune', 'Deezer', 'Tidal', 'iHeartRadio', 'Pandora', 'SoundCloud',
  'Tencent Music', 'Anghami', 'NetEase Cloud Music', 'Boomplay', 'Audiomack',
]

const COMPARISON_ROWS = [
  { label: 'Cost to Distribute', wb: '₹0 — Free', dk: 'Annual subscription required', tc: 'Annual subscription required' },
  { label: 'JioSaavn Coverage', wb: 'Included free', dk: 'Not supported', tc: 'Not supported' },
  { label: 'Gaana Coverage', wb: 'Included free', dk: 'Not supported', tc: 'Not supported' },
  { label: 'Caller Tune Support', wb: 'Jio & Airtel CRBT included', dk: 'Not offered', tc: 'Not offered' },
  { label: 'Ownership', wb: '100% retained by artist', dk: '100% retained by artist', tc: '100% retained by artist' },
  { label: 'Warner Music India Partner', wb: 'Yes', dk: 'No', tc: 'No' },
  { label: 'Time to Go Live', wb: '~72 hours', dk: 'Varies, 1-7 days', tc: 'Varies, 1-7 days' },
]

const HOW_TO_STEPS = [
  { step: '01', title: 'Create Account', desc: 'Sign up for a free Western Beats account in minutes — no credit card or payment details required to get started.' },
  { step: '02', title: 'Upload Track & Metadata', desc: 'Upload your audio file and cover art, then enter accurate metadata: song title, artist name, genre, language, and release date.' },
  { step: '03', title: 'Select Platforms', desc: 'Choose from 150+ supported platforms — Spotify, JioSaavn, Gaana, Apple Music, caller tunes, and more — or select all at once.' },
  { step: '04', title: 'Submit for Review', desc: 'Submit your release for a quality and compliance review, typically completed within 24 hours of submission.' },
  { step: '05', title: 'Go Live', desc: 'Once approved, your music goes live across every selected platform within 72 hours — fully owned by you, the artist.' },
]

const FAQS = [
  { q: 'Is Western Beats really free for music distribution in India?', a: 'Yes. Western Beats distributes your music to Spotify, JioSaavn, Gaana, Apple Music and 150+ platforms with zero upfront cost and no mandatory annual subscription. You can submit and release music without paying anything to get started.' },
  { q: 'How is Western Beats different from DistroKid or TuneCore?', a: 'DistroKid and TuneCore are built primarily for Western markets and charge recurring subscription fees, and neither distributes to JioSaavn or Gaana. Western Beats is built specifically for Indian artists, includes JioSaavn, Gaana, and caller tune distribution as standard, and has no mandatory annual fee.' },
  { q: 'Which platforms are included in free music distribution with Western Beats?', a: 'Western Beats distributes to 150+ platforms including Spotify, JioSaavn, Gaana, Apple Music, YouTube Music, Wynk, Hungama, Amazon Music, Resso, Deezer, Tidal, SoundCloud, and many more in a single submission.' },
  { q: 'Does Western Beats distribute to JioSaavn and Gaana?', a: 'Yes. JioSaavn and Gaana are India’s two largest streaming platforms and are included free with every Western Beats distribution, unlike most global distributors that skip them entirely.' },
  { q: 'Does Western Beats support caller tune distribution?', a: 'Yes. Jio and Airtel caller tune (CRBT) distribution is included free, giving your music an additional revenue and discovery channel that most distributors do not offer.' },
  { q: 'Do I keep ownership of my music with Western Beats?', a: 'Yes. You retain 100% ownership of your masters and publishing rights at all times. Western Beats never takes ownership or rights to your music.' },
  { q: 'How long does it take for my music to go live?', a: 'After review approval, which typically takes within 24 hours, your music goes live across all selected platforms within 72 hours total.' },
  { q: 'Is there a limit on how many songs I can submit?', a: 'No. Independent artists and labels can submit unlimited singles, EPs, and albums through Western Beats.' },
  { q: 'What does it mean that Western Beats is a Warner Music India Partner?', a: 'Western Beats operates as an official Warner Music India Partner, which provides additional credibility, editorial consideration, and playlist pitching support for artists distributing through the platform.' },
  { q: 'How do royalties and payouts work with Western Beats?', a: 'When your music streams on platforms like Spotify or JioSaavn, those platforms pay royalties which Western Beats collects and passes through to you, the artist, who retains 100% ownership of the underlying music throughout.' },
]

export default function FreeMusicDistributionIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white' }}>

        <section style={{ padding: '120px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0 }}>
              <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>Free Music Distribution India</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>India&apos;s #1 Free Distributor</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, fontFamily: 'var(--font-outfit, sans-serif)' }}>
            Free Music Distribution India<br />— Spotify, JioSaavn &amp; <span style={{ color: '#0A64C3' }}>150+ Platforms</span>
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 680, lineHeight: 1.7, marginBottom: 36, fontFamily: 'var(--font-inter, sans-serif)' }}>
            Western Beats is India&apos;s free music distribution company, built for Indian independent artists and labels. Distribute your music to Spotify, JioSaavn, Gaana, Apple Music, YouTube Music and 150+ platforms worldwide — completely free, with 100% ownership retained and your music live in approximately 72 hours.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Submit Your Music Free →</Link>
            <Link href="/how-it-works" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>How It Works</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 28 }}>
            {[
              { val: '150+', lbl: 'Platforms Covered' },
              { val: '₹0', lbl: 'Distribution Cost' },
              { val: '72hr', lbl: 'Time to Go Live' },
              { val: '100%', lbl: 'Ownership Retained' },
              { val: 'WMI', lbl: 'Warner Music India Partner' },
            ].map(s => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: '#0A64C3' }}>{s.val}</div>
                <div style={{ fontSize: 14, color: '#8899AA', marginTop: 6 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust signals */}
        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>Backed by Warner Music India</h2>
          <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.8, marginBottom: 40, maxWidth: 820 }}>
            Western Beats is an official Warner Music India Partner — a credibility marker that most free or low-cost distributors in India cannot claim. This partnership gives artists distributing through Western Beats additional editorial consideration on Indian platforms, support for playlist pitching, and access to industry relationships that purely self-serve distribution tools simply don&apos;t offer. Combined with zero distribution cost, this makes Western Beats one of the most credible free options available to Indian independent artists today.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { title: 'Warner Music India Partner', desc: 'Official partnership status gives Western Beats releases additional credibility and editorial consideration across Indian platforms.' },
              { title: 'JioSaavn & Gaana Native', desc: 'Built specifically for the Indian market — JioSaavn and Gaana are included free, not an afterthought like with global distributors.' },
              { title: '100% Ownership', desc: 'You retain full ownership of your masters and publishing at all times. Western Beats never takes rights to your music.' },
              { title: 'No Subscription Required', desc: 'Unlike DistroKid or TuneCore, there is no mandatory annual fee just to keep your music live.' },
              { title: 'Caller Tune Distribution', desc: 'Jio and Airtel caller tune (CRBT) distribution is included free — a revenue channel most distributors skip entirely.' },
              { title: '72 Hour Turnaround', desc: 'Submit your single, EP, or album and it goes live across all selected platforms within 72 hours of approval.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                <div style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 8 }}>{f.title}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Western Beats vs DistroKid vs TuneCore</h2>
            <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 40, maxWidth: 760 }}>
              See exactly how Western Beats compares to the two most popular global distributors when it comes to serving Indian artists. Full breakdown available on our <Link href="/compare" style={{ color: '#5CB2DC' }}>comparison page</Link>.
            </p>
            <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#0A1535', minWidth: 640 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '18px 20px', color: '#8899AA', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>Feature</th>
                    <th style={{ textAlign: 'left', padding: '18px 20px', color: '#0A64C3', fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>Western Beats</th>
                    <th style={{ textAlign: 'left', padding: '18px 20px', color: '#8899AA', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>DistroKid</th>
                    <th style={{ textAlign: 'left', padding: '18px 20px', color: '#8899AA', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>TuneCore</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      <td style={{ padding: '16px 20px', color: 'white', fontWeight: 600, fontSize: 14, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{row.label}</td>
                      <td style={{ padding: '16px 20px', color: '#5CB2DC', fontWeight: 700, fontSize: 14, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{row.wb}</td>
                      <td style={{ padding: '16px 20px', color: '#8899AA', fontSize: 14, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{row.dk}</td>
                      <td style={{ padding: '16px 20px', color: '#8899AA', fontSize: 14, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{row.tc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: '#4A5568', fontSize: 13, marginTop: 16 }}>See full <Link href="/pricing" style={{ color: '#5CB2DC' }}>pricing details</Link> for complete transparency on the model.</p>
          </div>
        </section>

        {/* Platform list */}
        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>150+ Platforms, One Free Submission</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32, maxWidth: 760 }}>
            A single Western Beats submission distributes your music to every major streaming platform worldwide — see the <Link href="/platforms" style={{ color: '#5CB2DC' }}>full platform list</Link>. Highlights include:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {PLATFORMS.map(p => (
              <span key={p} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 999, padding: '8px 18px', fontSize: 13, color: 'white', fontWeight: 600 }}>{p}</span>
            ))}
            <span style={{ background: 'rgba(196,18,48,0.12)', border: '1px solid rgba(196,18,48,0.3)', borderRadius: 999, padding: '8px 18px', fontSize: 13, color: '#C41230', fontWeight: 700 }}>and 130+ more</span>
          </div>
        </section>

        {/* How To / Process */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12, textAlign: 'center' }}>How Free Music Distribution Works</h2>
            <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 48, textAlign: 'center', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
              Five simple steps from upload to streaming on every major platform.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
              {HOW_TO_STEPS.map(s => (
                <div key={s.step} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px 24px' }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#5CB2DC', letterSpacing: 2, marginBottom: 12 }}>STEP {s.step}</div>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 18, marginBottom: 10 }}>{s.title}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body copy */}
        <section style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>Why Free Music Distribution Matters for Indian Artists</h2>
          <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
            India has one of the fastest-growing independent music scenes in the world, with hundreds of thousands of artists releasing original music every year across Hindi, Punjabi, Tamil, Telugu, Bengali, Marathi, and dozens of other languages. Yet most of the world&apos;s best-known music distributors — DistroKid, TuneCore, CD Baby — were built for Western markets and charge recurring subscription fees regardless of whether an artist&apos;s music earns anything. For an independent artist releasing several singles a year, those fees add up fast and create a real barrier to simply getting music online.
          </p>
          <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
            Western Beats was built to remove that barrier entirely. As India&apos;s free music distribution company, Western Beats lets artists and labels upload unlimited releases without paying anything upfront, while still reaching every platform that matters — including the platforms that international distributors routinely ignore, like JioSaavn, Gaana, and Jio or Airtel caller tunes. These platforms represent enormous reach within India specifically, and skipping them means missing a huge share of the domestic audience.
          </p>
          <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
            The free distribution model works because Western Beats focuses on scale and platform relationships rather than charging artists a subscription just to participate. Every release submitted goes through a quality and compliance review — checking metadata accuracy, audio quality, and rights information — before being pushed live across all selected platforms. This review process, combined with Western Beats&apos; status as an official <Link href="/how-it-works" style={{ color: '#5CB2DC' }}>Warner Music India Partner</Link>, means artists get a level of credibility and editorial support that purely automated, self-serve tools cannot offer.
          </p>
          <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
            Crucially, free distribution through Western Beats does not mean giving up control of your music. Every artist retains 100% ownership of their masters and publishing rights at all times — Western Beats never claims any rights to the music it distributes. When your music streams on a platform like Spotify, Apple Music, or JioSaavn, that platform calculates and pays royalties, which Western Beats collects and passes through to you. The distribution itself — getting your music onto every platform listeners actually use — is the part that&apos;s free.
          </p>
          <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.8 }}>
            Whether you&apos;re releasing a debut single, a full album, or distributing music in a regional language like <Link href="/marathi-music-distribution" style={{ color: '#5CB2DC' }}>Marathi</Link>, Western Beats gives Indian independent artists a path to professional, wide-reaching distribution without the upfront cost that has historically kept so many artists off the platforms where their audience already is. Compare the full feature set on our <Link href="/compare" style={{ color: '#5CB2DC' }}>distributor comparison page</Link>, review <Link href="/pricing" style={{ color: '#5CB2DC' }}>pricing details</Link>, or see the complete <Link href="/platforms" style={{ color: '#5CB2DC' }}>platform list</Link> before you submit.
          </p>
        </section>

        {/* FAQ */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 36 }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {FAQS.map(faq => (
                <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Distribute Your Music Free — Today</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Spotify + JioSaavn + Gaana + Apple Music + Caller Tune + 145 more. 100% ownership. Live in 72 hours.
          </p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
          <div style={{ marginTop: 24, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/how-it-works" style={{ color: '#5CB2DC', fontSize: 14 }}>How It Works →</Link>
            <Link href="/platforms" style={{ color: '#5CB2DC', fontSize: 14 }}>All Platforms →</Link>
            <Link href="/compare" style={{ color: '#5CB2DC', fontSize: 14 }}>Compare Distributors →</Link>
            <Link href="/pricing" style={{ color: '#5CB2DC', fontSize: 14 }}>See Pricing →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
