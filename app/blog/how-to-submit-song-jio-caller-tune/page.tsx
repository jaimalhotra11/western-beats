import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'How to Submit Your Song to Jio Caller Tune (CRBT) 2026 — Free | Western Beats',
  description: 'Step-by-step guide to get your song as a Jio Caller Tune (CRBT) in India free. How much Jio pays for caller tunes, submission process, and which distributor to use.',
  keywords: [
    'how to submit song to Jio caller tune',
    'how to get song on Jio caller tune India',
    'submit music Jio CRBT India',
    'Jio caller tune submission India',
    'how to set song as caller tune Jio India',
    'CRBT distribution India free 2026',
    'Jio Hello Tune how to get',
    'Jio caller tune royalty India',
    'how to earn from Jio caller tune',
    'caller tune distribution India free',
    'how to add song to caller tune India',
    'Jio caller tune music submission',
  ],
  alternates: { canonical: 'https://westernbeats.com/blog/how-to-submit-song-jio-caller-tune' },
  openGraph: {
    title: 'How to Submit Your Song to Jio Caller Tune (CRBT) Free 2026',
    description: 'Step-by-step: get your song on Jio Caller Tune. Free submission through Western Beats.',
    url: 'https://westernbeats.com/blog/how-to-submit-song-jio-caller-tune',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'How to Submit Song to Jio Caller Tune 2026 | Western Beats' },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Submit Your Song to Jio Caller Tune (CRBT) 2026 — Free',
  datePublished: '2026-06-21',
  dateModified: '2026-06-21',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', logo: { '@type': 'ImageObject', url: 'https://westernbeats.com/partners/westernbeats-BpLvGE3e.png' } },
  image: 'https://westernbeats.com/og-image.jpg',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://westernbeats.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Jio Caller Tune Submission', item: 'https://westernbeats.com/blog/how-to-submit-song-jio-caller-tune' },
  ]},
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Submit Your Song to Jio Caller Tune (CRBT)',
  description: 'Get your song as a Jio Caller Tune (CRBT) through Western Beats music distribution.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Prepare your audio file', text: 'Ensure your song is in WAV or MP3 format (minimum 320kbps). Cover art must be 3000×3000px JPG.' },
    { '@type': 'HowToStep', position: 2, name: 'Submit through Western Beats', text: 'Go to westernbeats.com/submit and fill out the form. Select "Caller Tune / CRBT" in the additional distribution options.' },
    { '@type': 'HowToStep', position: 3, name: 'Review and approval', text: 'Western Beats reviews your submission within 24 hours for quality and metadata compliance.' },
    { '@type': 'HowToStep', position: 4, name: 'Go live on Jio CRBT', text: 'Within 72 hours, your song is available as a Jio Caller Tune. Jio users can set it as their CRBT by dialing 56789.' },
    { '@type': 'HowToStep', position: 5, name: 'Earn royalties', text: 'Every time a Jio user sets or renews your song as their caller tune, you earn a royalty. Payments come quarterly through Western Beats.' },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I get my song on Jio Caller Tune for free?', acceptedAnswer: { '@type': 'Answer', text: 'Submit your music through Western Beats at westernbeats.com/submit. Western Beats distributes your song to Jio CRBT (along with 150+ other platforms) completely free. Your song will be available as a Jio Caller Tune within 72 hours.' } },
    { '@type': 'Question', name: 'How much does Jio pay for caller tunes?', acceptedAnswer: { '@type': 'Answer', text: 'Jio pays a flat fee per caller tune subscription, typically ₹1.50–₹3.00 per CRBT subscription per month. If thousands of Jio users set your song as their caller tune, this becomes a significant revenue stream.' } },
    { '@type': 'Question', name: 'Can I submit any type of music to Jio Caller Tune?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Jio Caller Tune accepts all genres — Bollywood, Punjabi, Haryanvi, Tamil, Telugu, devotional, and more. Punjabi and Bollywood songs are the most popular CRBT genres in India.' } },
    { '@type': 'Question', name: 'Does DistroKid distribute to Jio Caller Tune?', acceptedAnswer: { '@type': 'Answer', text: 'No. DistroKid does not distribute to Jio CRBT, Airtel Hello Tune, or any Indian telecom caller tune platform. For CRBT distribution, you need an Indian distributor like Western Beats.' } },
    { '@type': 'Question', name: 'How many people use Jio Caller Tune in India?', acceptedAnswer: { '@type': 'Answer', text: 'Jio has 450+ million subscribers in India, making it the largest telecom network. CRBT (Caller Ring Back Tone) is extremely popular in India — millions of subscribers set and change their caller tunes regularly.' } },
  ],
}

export default function JioCallerTunePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
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
              <li style={{ color: '#5CB2DC' }}>Jio Caller Tune Submission</li>
            </ol>
          </nav>

          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '5px 14px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>CRBT / Caller Tune</div>
          <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>How to Submit Your Song to Jio Caller Tune (CRBT) in India — Free 2026</h1>
          <div style={{ color: '#4A5568', fontSize: 13, marginBottom: 40 }}>By Western Beats · June 21, 2026 · 7 min read</div>

          <div style={{ fontSize: 17, color: '#8899AA', lineHeight: 1.8, marginBottom: 32, padding: '20px 24px', background: '#0A1535', borderRadius: 16, borderLeft: '4px solid #0A64C3' }}>
            Jio has 450+ million subscribers. When your song becomes a caller tune, every incoming call becomes a stream — and a revenue opportunity. Here&apos;s how to get on Jio CRBT free.
          </div>

          <div style={{ fontSize: 16, color: '#8899AA', lineHeight: 1.9 }}>
            <p>CRBT (Caller Ring Back Tone) — also called Caller Tune — is one of the most underrated revenue streams for Indian artists. While streaming royalties require millions of plays, caller tunes pay a per-subscription fee that can add up quickly on a platform with 450 million users.</p>
            <p>The problem: most global distributors (DistroKid, TuneCore, CD Baby) don&apos;t include Jio CRBT distribution. This guide explains exactly how to get your song on Jio Caller Tune for free.</p>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 40, marginBottom: 16 }}>What is Jio Caller Tune (CRBT)?</h2>
            <p>When someone calls a Jio number, the caller hears music instead of a regular ring tone. The person receiving the call has chosen a song (called Caller Ring Back Tone or CRBT) to play for their callers.</p>
            <p style={{ marginTop: 12 }}>As the artist whose song is chosen as a CRBT, you earn a royalty for every subscription. This is separate from streaming royalties — it&apos;s a different revenue stream entirely.</p>
            <div style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px', marginTop: 20 }}>
              <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>Key Jio CRBT Facts</div>
              <ul style={{ paddingLeft: 20, color: '#8899AA', fontSize: 14, lineHeight: 1.8 }}>
                <li>Jio has 450M+ subscribers — India&apos;s largest telecom</li>
                <li>CRBT subscription costs ₹5–₹10/month per user</li>
                <li>Artist earns ₹1.50–₹3.00 per subscriber per month</li>
                <li>Punjabi music is India&apos;s #1 CRBT genre</li>
                <li>CRBT revenue is separate from and in addition to streaming royalties</li>
              </ul>
            </div>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 40, marginBottom: 16 }}>Step-by-Step: How to Get Your Song on Jio Caller Tune</h2>
            {[
              { step: '1', title: 'Prepare Your Audio File', desc: 'Your song must be in WAV format (recommended) or high-quality MP3 (320kbps minimum). Cover art must be square, 3000×3000 pixels, JPG format. Make sure all artist names, track names, and release dates are accurate — these cannot be changed after submission.' },
              { step: '2', title: 'Submit Through Western Beats', desc: 'Go to westernbeats.com/submit and fill in the distribution form. Western Beats automatically includes Jio CRBT (Caller Tune), Airtel Hello Tune, Vi Tune, and BSNL Tune distribution as part of every free submission — you don\'t need to select it separately.' },
              { step: '3', title: 'Review (24 Hours)', desc: 'Western Beats reviews your submission within 24 hours. They check audio quality, metadata completeness, and content compliance (no copyright issues). If anything needs correction, they contact you directly.' },
              { step: '4', title: 'Go Live on Jio CRBT (72 Hours)', desc: 'Within 72 hours of approval, your song is live across all 150+ platforms — including Jio Caller Tune. Jio users can search your song name on the MyJio app or dial 56789 from their Jio number to set it as their caller tune.' },
              { step: '5', title: 'Earn and Track Royalties', desc: 'Every month users pay ₹5–₹10 to keep your song as their caller tune, and you earn ₹1.50–₹3.00 per subscriber. Royalties are paid quarterly through Western Beats with a transparent dashboard showing your earnings.' },
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', gap: 20, marginBottom: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#0A64C3', color: 'white', fontWeight: 900, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 800, color: 'white', marginBottom: 6 }}>{s.title}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</div>
                </div>
              </div>
            ))}

            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 40, marginBottom: 16 }}>How Much Does Jio Pay for Caller Tunes?</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ background: '#0A64C3', color: 'white' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Scenario</th>
                    <th style={{ padding: '12px 16px', textAlign: 'right' }}>Monthly Earnings</th>
                    <th style={{ padding: '12px 16px', textAlign: 'right' }}>Annual Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1,000 CRBT subscribers', '₹1,500–₹3,000', '₹18,000–₹36,000'],
                    ['5,000 CRBT subscribers', '₹7,500–₹15,000', '₹90,000–₹1,80,000'],
                    ['10,000 CRBT subscribers', '₹15,000–₹30,000', '₹1,80,000–₹3,60,000'],
                    ['50,000 CRBT subscribers', '₹75,000–₹1,50,000', '₹9,00,000–₹18,00,000'],
                  ].map(([scenario, monthly, annual], i) => (
                    <tr key={scenario} style={{ background: i % 2 === 0 ? '#0A1535' : '#060D1F' }}>
                      <td style={{ padding: '12px 16px', color: 'white' }}>{scenario}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'right', color: '#5CB2DC', fontWeight: 700 }}>{monthly}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'right', color: '#4A5568' }}>{annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 40, marginBottom: 16 }}>Which Distributors Include Jio Caller Tune?</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ background: '#0A1535', color: '#4A5568', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Distributor</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>Jio CRBT</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Western Beats', '✅ Yes (free)', '₹0'],
                    ['DistroKid', '❌ No', '$22.99/year'],
                    ['TuneCore', '❌ No', '$14.99/release'],
                    ['CD Baby', '❌ No', '$9.95/release + 9%'],
                    ['Deliver My Tune', '✅ Yes', '₹899/year'],
                  ].map(([dist, crbt, cost], i) => (
                    <tr key={dist} style={{ background: i % 2 === 0 ? '#0A1535' : '#060D1F' }}>
                      <td style={{ padding: '12px 16px', color: 'white', fontWeight: 600 }}>{dist}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'center', color: crbt.includes('✅') ? '#4ade80' : '#f87171' }}>{crbt}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'center', color: '#4A5568' }}>{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ background: '#0A1535', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '32px', marginTop: 48, textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 12 }}>Get Your Song on Jio Caller Tune — Free</div>
              <p style={{ color: '#8899AA', fontSize: 15, marginBottom: 24 }}>Western Beats distributes to Jio CRBT, Airtel Hello Tune, Vi Tune, and 150+ more platforms. ₹0 forever.</p>
              <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '13px 28px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>Submit Your Music Free →</Link>
            </div>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 48, marginBottom: 24 }}>Frequently Asked Questions</h2>
            {[
              { q: 'How do I get my song on Jio Caller Tune for free?', a: 'Submit your music through Western Beats at westernbeats.com/submit. Jio CRBT distribution is included in every free submission. Your song will be available on Jio Caller Tune within 72 hours of approval.' },
              { q: 'How much does Jio pay for caller tunes?', a: 'Jio pays approximately ₹1.50–₹3.00 per CRBT subscriber per month. This means if 5,000 Jio users set your song as their caller tune, you earn ₹7,500–₹15,000/month from CRBT alone.' },
              { q: 'Can any type of music be set as a Jio Caller Tune?', a: 'Yes. All genres — Bollywood, Punjabi, Haryanvi, Tamil, Telugu, devotional, instrumental — can be set as Jio caller tunes. The content must be original music with no third-party copyright claims.' },
              { q: 'Does DistroKid distribute to Jio Caller Tune?', a: 'No. DistroKid does not distribute to Jio CRBT or any Indian telecom caller tune platforms. For CRBT distribution, you need an India-focused distributor like Western Beats.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px', marginBottom: 16 }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}

            <div style={{ marginTop: 40, padding: '20px 24px', background: '#060D1F', borderRadius: 12, fontSize: 13, color: '#4A5568' }}>
              Related: <Link href="/caller-tune-distribution" style={{ color: '#0A64C3' }}>Caller Tune Distribution India</Link> · <Link href="/blog/caller-tune-crbt-distribution-india" style={{ color: '#0A64C3' }}>CRBT Distribution Guide</Link> · <Link href="/blog/how-much-jiosaavn-pays-per-stream" style={{ color: '#0A64C3' }}>JioSaavn Pay Per Stream</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
