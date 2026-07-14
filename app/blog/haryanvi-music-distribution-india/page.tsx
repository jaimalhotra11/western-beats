import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Haryanvi Music Distribution India Free 2026 — JioSaavn, Gaana, Spotify | Western Beats',
  description: 'Distribute your Haryanvi songs free to JioSaavn, Gaana, Spotify, Jio Caller Tune and 150+ platforms in 72 hours. Haryanvi music is India\'s fastest-growing genre at +35% YoY.',
  keywords: [
    'Haryanvi music distribution India free',
    'Haryanvi song distribution India 2026',
    'distribute Haryanvi music JioSaavn',
    'Haryanvi music distribution Gaana',
    'best Haryanvi music distribution India',
    'upload Haryanvi song online India',
    'free Haryanvi music distribution platform',
    'Haryanvi song distribution free',
    'distribute Haryanvi music Spotify',
    'Haryanvi singer music distribution',
    'Haryanvi music distribution 2026',
    'music distribution Haryanvi',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/haryanvi-music-distribution-india' },
  openGraph: {
    title: 'Haryanvi Music Distribution India Free 2026 — JioSaavn, Gaana, Caller Tune',
    description: 'Distribute Haryanvi songs to 150+ platforms free in 72 hours. India\'s fastest-growing music genre.',
    url: 'https://www.westernbeats.com/blog/haryanvi-music-distribution-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Haryanvi Music Distribution India Free 2026 | Western Beats' },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Haryanvi Music Distribution India Free 2026 — JioSaavn, Gaana, Spotify',
  description: 'Complete guide to distributing Haryanvi music in India free to all platforms.',
  datePublished: '2026-06-21',
  dateModified: '2026-06-21',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', logo: { '@type': 'ImageObject', url: 'https://www.westernbeats.com/partners/westernbeats-BpLvGE3e.png' } },
  image: 'https://www.westernbeats.com/og-image.jpg',
  about: { '@type': 'Thing', name: 'Haryanvi Music Distribution India' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.westernbeats.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Haryanvi Music Distribution', item: 'https://www.westernbeats.com/blog/haryanvi-music-distribution-india' },
  ]},
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I distribute my Haryanvi song to JioSaavn free?', acceptedAnswer: { '@type': 'Answer', text: 'Submit your Haryanvi song through Western Beats at westernbeats.com/submit. Select "Haryanvi" as the language and your sub-genre (Haryanvi Dance, Haryanvi Folk, Haryanvi Sad, etc.). Your song will go live on JioSaavn within 72 hours, completely free.' } },
    { '@type': 'Question', name: 'Which platform is best for Haryanvi music in India?', acceptedAnswer: { '@type': 'Answer', text: 'JioSaavn and Gaana are the top platforms for Haryanvi music due to their large North Indian user bases. Jio Caller Tune is also significant — Haryanvi songs are among the most popular caller tunes in Haryana, Delhi NCR, and UP.' } },
    { '@type': 'Question', name: 'How much can a Haryanvi artist earn from streaming?', acceptedAnswer: { '@type': 'Answer', text: 'At 1 lakh streams per month across platforms, a Haryanvi artist can earn approximately ₹8,000–₹20,000/month from streaming alone. Adding Jio Caller Tune royalties can significantly increase this number.' } },
    { '@type': 'Question', name: 'Is Haryanvi music growing on streaming platforms?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Haryanvi music is the fastest-growing regional genre in India at +35% YoY. Artists like Masoom Sharma, Raju Punjabi, and Sapna Choudhary have brought massive streaming audiences. It\'s an excellent time for independent Haryanvi artists to distribute their music.' } },
  ],
}

export default function HaryanviPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white' }}>
        <article style={{ maxWidth: 780, margin: '0 auto', padding: '120px 24px 80px' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0 }}>
              <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li><Link href="/blog" style={{ color: '#4A5568', textDecoration: 'none' }}>Blog</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>Haryanvi Music Distribution</li>
            </ol>
          </nav>

          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '5px 14px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>Regional Music</div>
          <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>Haryanvi Music Distribution India Free 2026 — JioSaavn, Gaana, Caller Tune</h1>
          <div style={{ color: '#4A5568', fontSize: 13, marginBottom: 40 }}>By Western Beats · June 21, 2026 · 6 min read</div>

          <div style={{ fontSize: 17, color: '#8899AA', lineHeight: 1.8, marginBottom: 32, padding: '20px 24px', background: '#0A1535', borderRadius: 16, borderLeft: '4px solid #0A64C3' }}>
            Haryanvi music is India&apos;s fastest-growing genre at <strong style={{ color: '#5CB2DC' }}>+35% YoY</strong> — outpacing Bollywood and Punjabi. If you&apos;re a Haryanvi artist, this is the best time to distribute your music and capture the streaming wave.
          </div>

          <div style={{ background: '#060C18', borderRadius: 20, padding: '24px 28px', marginBottom: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 20 }}>
            {[
              { val: '+35%', lbl: 'YoY Growth' },
              { val: '#2', lbl: 'Fastest Growing Genre' },
              { val: '150M+', lbl: 'Potential Listeners' },
              { val: '₹0', lbl: 'Distribution Cost' },
            ].map(s => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#0A64C3' }}>{s.val}</div>
                <div style={{ fontSize: 12, color: '#4A5568', marginTop: 4 }}>{s.lbl}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 16, color: '#8899AA', lineHeight: 1.9 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 0, marginBottom: 16 }}>Why Haryanvi Music is Booming</h2>
            <p>Haryanvi music has exploded from a regional genre to a pan-India phenomenon. Here&apos;s what&apos;s driving the growth:</p>
            <ul style={{ paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
              <li><strong style={{ color: 'white' }}>YouTube virality:</strong> Haryanvi dance and remix videos routinely hit 100M+ views on YouTube, driving listeners to streaming platforms</li>
              <li><strong style={{ color: 'white' }}>Delhi NCR listener base:</strong> 30M+ people in Delhi NCR with Haryana roots consume Haryanvi music heavily on JioSaavn and Gaana</li>
              <li><strong style={{ color: 'white' }}>Caller tune dominance:</strong> Haryanvi folk and dance songs are among the top CRBT choices for Jio users in Haryana, Delhi, and western UP</li>
              <li><strong style={{ color: 'white' }}>Independent artist rise:</strong> Unlike Bollywood, Haryanvi has no gatekeepers — independent artists regularly go viral without label backing</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 40, marginBottom: 16 }}>Haryanvi Music Sub-Genres You Can Distribute</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
              {[
                { genre: 'Haryanvi Dance', desc: 'High-energy tracks popular at weddings and events' },
                { genre: 'Haryanvi Folk', desc: 'Traditional Haryanvi folk songs, seasonal songs' },
                { genre: 'Haryanvi Sad', desc: 'Emotional tracks with huge CRBT potential' },
                { genre: 'Haryanvi Ragni', desc: 'Traditional competitive folk singing style' },
                { genre: 'Haryanvi DJ Remix', desc: 'Remix versions of popular Haryanvi tracks' },
                { genre: 'Haryanvi Devotional', desc: 'Bhajan and devotional content in Haryanvi' },
              ].map(g => (
                <div key={g.genre} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px 20px' }}>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 15, marginBottom: 6 }}>{g.genre}</div>
                  <div style={{ color: '#4A5568', fontSize: 13 }}>{g.desc}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 40, marginBottom: 16 }}>Best Platforms for Haryanvi Music</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ background: '#0A64C3', color: 'white' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Platform</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Why Important for Haryanvi</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>Included Free</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['JioSaavn', '150M users, huge North India audience, Haryanvi playlists', '✅'],
                    ['Gaana', '200M users, popular in Tier 2/3 cities with Haryana audiences', '✅'],
                    ['Jio Caller Tune', 'Haryanvi songs top caller tune charts in Haryana & Delhi NCR', '✅'],
                    ['YouTube Music', 'Haryanvi music is viral on YouTube — music sync matters', '✅'],
                    ['Wynk Music', 'Airtel users across North India, large Haryanvi listener base', '✅'],
                    ['Spotify', 'Growing in India, good for global reach of Haryanvi content', '✅'],
                  ].map(([platform, why, included], i) => (
                    <tr key={platform} style={{ background: i % 2 === 0 ? '#0A1535' : '#060D1F' }}>
                      <td style={{ padding: '12px 16px', color: 'white', fontWeight: 600 }}>{platform}</td>
                      <td style={{ padding: '12px 16px', color: '#8899AA', fontSize: 13 }}>{why}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'center', color: '#4ade80' }}>{included}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 40, marginBottom: 16 }}>How to Distribute Your Haryanvi Song Free</h2>
            <p>Western Beats is the only distributor that includes JioSaavn, Gaana, Jio Caller Tune, Airtel Hello Tune, and 147 other platforms in one free submission. Here&apos;s how:</p>
            {[
              { n: '1', title: 'Go to westernbeats.com/submit', desc: 'Fill in your artist name, track title, and release date.' },
              { n: '2', title: 'Select Language: Haryanvi', desc: 'Choose "Haryanvi" as your primary language and select your sub-genre (Dance, Folk, Sad, Ragni, etc.).' },
              { n: '3', title: 'Upload audio + artwork', desc: 'WAV file (recommended) or high-quality MP3. Cover art 3000×3000px square.' },
              { n: '4', title: 'Live in 72 hours', desc: 'Your Haryanvi song goes live on all 150+ platforms within 72 hours of approval.' },
            ].map(s => (
              <div key={s.n} style={{ display: 'flex', gap: 16, marginBottom: 20, marginTop: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#0A64C3', color: 'white', fontWeight: 900, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.n}</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: 4 }}>{s.title}</div>
                  <div style={{ color: '#8899AA', fontSize: 14 }}>{s.desc}</div>
                </div>
              </div>
            ))}

            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 40, marginBottom: 16 }}>DistroKid vs Western Beats for Haryanvi Artists</h2>
            <p>Many Haryanvi artists make the mistake of using DistroKid. Here&apos;s why it&apos;s the wrong choice:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
              <div style={{ background: 'rgba(196,18,48,0.08)', border: '1px solid rgba(196,18,48,0.2)', borderRadius: 16, padding: '20px' }}>
                <div style={{ fontWeight: 700, color: '#f87171', marginBottom: 12 }}>DistroKid</div>
                <ul style={{ paddingLeft: 20, color: '#4A5568', fontSize: 13, lineHeight: 1.8 }}>
                  <li>❌ No JioSaavn</li>
                  <li>❌ No Gaana</li>
                  <li>❌ No Jio Caller Tune</li>
                  <li>❌ No Airtel Hello Tune</li>
                  <li>❌ Costs $22.99/year</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 16, padding: '20px' }}>
                <div style={{ fontWeight: 700, color: '#5CB2DC', marginBottom: 12 }}>Western Beats</div>
                <ul style={{ paddingLeft: 20, color: '#8899AA', fontSize: 13, lineHeight: 1.8 }}>
                  <li>✅ JioSaavn included</li>
                  <li>✅ Gaana included</li>
                  <li>✅ Jio Caller Tune included</li>
                  <li>✅ Airtel Hello Tune included</li>
                  <li>✅ ₹0 forever</li>
                </ul>
              </div>
            </div>

            <div style={{ background: '#0A1535', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '32px', marginTop: 48, textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 12 }}>Distribute Your Haryanvi Song — Free</div>
              <p style={{ color: '#8899AA', fontSize: 15, marginBottom: 24 }}>JioSaavn + Gaana + Jio Caller Tune + 147 more. ₹0. 72 hours. 100% ownership.</p>
              <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '13px 28px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>Submit Your Haryanvi Song Free →</Link>
            </div>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 48, marginBottom: 24 }}>Frequently Asked Questions</h2>
            {[
              { q: 'How do I distribute my Haryanvi song to JioSaavn free?', a: 'Submit at westernbeats.com/submit. Select "Haryanvi" as the language. Your song goes live on JioSaavn (plus 150+ other platforms) within 72 hours, completely free.' },
              { q: 'Which platform is best for Haryanvi music?', a: 'JioSaavn and Gaana are best for Indian reach. Jio Caller Tune is a must for CRBT revenue — Haryanvi songs are extremely popular as caller tunes in North India.' },
              { q: 'How much can a Haryanvi artist earn from streaming?', a: 'At 1 lakh streams/month across platforms, approximately ₹8,000–₹20,000/month from streaming. Jio Caller Tune adds additional revenue on top.' },
              { q: 'Is Haryanvi music growing on streaming?', a: 'Yes. Haryanvi music is India\'s fastest-growing regional genre at +35% YoY. Independent Haryanvi artists regularly go viral without any label backing.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px', marginBottom: 16 }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}

            <div style={{ marginTop: 40, padding: '20px 24px', background: '#060D1F', borderRadius: 12, fontSize: 13, color: '#4A5568' }}>
              Related: <Link href="/regional-music-distribution" style={{ color: '#0A64C3' }}>Regional Music Distribution India</Link> · <Link href="/punjabi-music-distribution" style={{ color: '#0A64C3' }}>Punjabi Music Distribution</Link> · <Link href="/caller-tune-distribution" style={{ color: '#0A64C3' }}>Caller Tune Distribution India</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
