'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const STATUS_CONFIG: Record<string, { emoji: string; color: string; bg: string; desc: string; step: number }> = {
  'Submitted':    { emoji: '📬', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)',    desc: 'We received your submission. Our team will review it within 24 hours.', step: 1 },
  'Under Review': { emoji: '🔍', color: '#5CB2DC', bg: 'rgba(92,178,220,0.1)',    desc: 'Our team is reviewing your audio, artwork and metadata.', step: 2 },
  'Approved':     { emoji: '✅', color: '#34D399', bg: 'rgba(52,211,153,0.1)',     desc: 'Your track is approved! We are preparing it for distribution.', step: 3 },
  'Distributing': { emoji: '🚀', color: '#0A64C3', bg: 'rgba(10,100,195,0.1)',    desc: 'Your music is being pushed to all 150+ platforms.', step: 4 },
  'Live':         { emoji: '🎉', color: '#34D399', bg: 'rgba(52,211,153,0.15)',   desc: 'Your track is live! Search for it on JioSaavn, Spotify and more.', step: 5 },
  'Rejected':     { emoji: '❌', color: '#F87171', bg: 'rgba(248,113,113,0.1)',   desc: 'Your submission was not accepted. See the note below for details.', step: 0 },
}

const STEPS = ['Submitted', 'Under Review', 'Approved', 'Distributing', 'Live']

interface Submission {
  _id: string
  trackName: string
  artistName: string
  genre: string
  language: string
  releaseDate: string
  status: string
  statusNote: string
  artworkUrl: string
  submittedAt: string
  updatedAt: string
}

export default function MySubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [user, setUser] = useState<{ email: string; name: string } | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const meRes = await fetch('/api/auth/me')
        if (!meRes.ok) { window.location.href = '/sign-in?next=/my-submissions'; return }
        const meData = await meRes.json()
        setUser(meData.user)

        const subRes = await fetch('/api/submissions/mine')
        const subData = await subRes.json()
        if (subRes.ok) setSubmissions(subData.submissions || [])
        else setError(subData.error || 'Failed to load submissions')
      } catch {
        setError('Something went wrong. Please refresh.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const S = {
    page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
    hero: { padding: '100px 24px 40px', maxWidth: 900, margin: '0 auto' },
    card: { background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '28px', marginBottom: 20 },
  }

  return (
    <div style={S.page}>
      <Nav />
      <div style={S.hero}>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 8px' }}>My Submissions</h1>
        {user && <p style={{ color: '#8899AA', fontSize: 15, margin: '0 0 40px' }}>Logged in as {user.email}</p>}

        {loading && <p style={{ color: '#8899AA' }}>Loading your submissions…</p>}
        {error && <p style={{ color: '#F87171' }}>{error}</p>}

        {!loading && submissions.length === 0 && (
          <div style={S.card}>
            <p style={{ color: '#8899AA', margin: '0 0 16px' }}>You haven&apos;t submitted any music yet.</p>
            <Link href="/submit" style={{ display: 'inline-block', background: '#0A64C3', color: '#fff', padding: '12px 24px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
              Submit Your First Track →
            </Link>
          </div>
        )}

        {submissions.map(sub => {
          const cfg = STATUS_CONFIG[sub.status] || STATUS_CONFIG['Submitted']
          const currentStep = cfg.step

          return (
            <div key={sub._id} style={S.card}>
              {/* Header */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24, flexWrap: 'wrap' as const }}>
                {sub.artworkUrl && (
                  <img src={sub.artworkUrl} alt="artwork" style={{ width: 72, height: 72, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
                )}
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 4px' }}>{sub.trackName}</h2>
                  <p style={{ color: '#8899AA', fontSize: 14, margin: '0 0 8px' }}>{sub.artistName} · {sub.genre} · {sub.language}</p>
                  <span style={{ display: 'inline-block', background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.color}44`, borderRadius: 20, padding: '4px 12px', fontSize: 13, fontWeight: 700 }}>
                    {cfg.emoji} {sub.status}
                  </span>
                </div>
                <div style={{ textAlign: 'right' as const, fontSize: 12, color: '#4A5568' }}>
                  <p style={{ margin: '0 0 2px' }}>Submitted</p>
                  <p style={{ margin: 0 }}>{new Date(sub.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                </div>
              </div>

              {/* Progress bar */}
              {sub.status !== 'Rejected' && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    {STEPS.map((step, i) => {
                      const done = currentStep > i + 1
                      const active = currentStep === i + 1
                      return (
                        <div key={step} style={{ textAlign: 'center' as const, flex: 1 }}>
                          <div style={{
                            width: 28, height: 28, borderRadius: '50%', margin: '0 auto 4px',
                            background: done ? '#34D399' : active ? '#0A64C3' : 'rgba(255,255,255,0.08)',
                            border: active ? '2px solid #5CB2DC' : 'none',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 13, fontWeight: 700,
                            color: done || active ? '#fff' : '#4A5568',
                          }}>
                            {done ? '✓' : i + 1}
                          </div>
                          <p style={{ fontSize: 10, color: active ? '#5CB2DC' : done ? '#34D399' : '#4A5568', margin: 0, fontWeight: active ? 700 : 400 }}>
                            {step}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                  <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, position: 'relative' as const }}>
                    <div style={{ height: '100%', background: 'linear-gradient(90deg,#0A64C3,#34D399)', borderRadius: 2, width: `${Math.max(0, (currentStep - 1) / 4) * 100}%`, transition: 'width 0.5s ease' }} />
                  </div>
                </div>
              )}

              {/* Status description */}
              <div style={{ background: cfg.bg, border: `1px solid ${cfg.color}33`, borderRadius: 12, padding: '14px 18px' }}>
                <p style={{ color: cfg.color, fontSize: 14, margin: 0, fontWeight: 500 }}>{cfg.desc}</p>
                {sub.statusNote && (
                  <p style={{ color: '#E2E8F0', fontSize: 13, margin: '10px 0 0', paddingTop: 10, borderTop: `1px solid ${cfg.color}22` }}>
                    <strong>Note from our team:</strong> {sub.statusNote}
                  </p>
                )}
              </div>

              {/* Release date */}
              {sub.releaseDate && (
                <p style={{ color: '#4A5568', fontSize: 12, margin: '14px 0 0' }}>
                  Preferred Release Date: <span style={{ color: '#8899AA' }}>{sub.releaseDate}</span>
                  {sub.updatedAt && <> · Last updated: {new Date(sub.updatedAt).toLocaleDateString('en-IN')}</>}
                </p>
              )}
            </div>
          )
        })}

        <div style={{ marginTop: 32 }}>
          <Link href="/submit" style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', color: '#5CB2DC', padding: '12px 24px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
            + Submit Another Track
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
