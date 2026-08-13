'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const STATUS_CONFIG: Record<string, { emoji: string; color: string; bg: string; desc: string; step: number }> = {
  'Submitted':    { emoji: '📬', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)',   desc: 'Received. Our team reviews within 24 hours.', step: 1 },
  'Under Review': { emoji: '🔍', color: '#5CB2DC', bg: 'rgba(92,178,220,0.1)',   desc: 'Our team is reviewing your audio, artwork and metadata.', step: 2 },
  'Approved':     { emoji: '✅', color: '#34D399', bg: 'rgba(52,211,153,0.1)',    desc: 'Approved! Preparing for distribution.', step: 3 },
  'Distributing': { emoji: '🚀', color: '#0A64C3', bg: 'rgba(10,100,195,0.1)',   desc: 'Pushing to all 150+ platforms now.', step: 4 },
  'Live':         { emoji: '🎉', color: '#34D399', bg: 'rgba(52,211,153,0.15)',  desc: 'Your track is live on all platforms!', step: 5 },
  'Rejected':     { emoji: '❌', color: '#F87171', bg: 'rgba(248,113,113,0.1)',  desc: 'Not accepted. See note below for details.', step: 0 },
}

const STEPS = ['Submitted', 'Under Review', 'Approved', 'Distributing', 'Live']

interface Submission {
  _id: string
  trackName: string
  artistName: string
  language: string
  releaseDate: string
  status: string
  statusNote: string
  artworkUrl: string
  submittedAt: string
  updatedAt: string
  agreementStatus?: string
}

interface User {
  email: string
  name: string
  artistName: string
}

const AGREEMENT_COLOR: Record<string, string> = {
  'Not Sent': '#4A5568',
  'In Process': '#5CB2DC',
  'Sent': '#F59E0B',
  'Signed': '#34D399',
}

export default function DashboardPage() {
  const router = useRouter()
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      const meRes = await fetch('/api/auth/me')
      if (!meRes.ok) { router.replace('/sign-in?next=/dashboard'); return }
      const meData = await meRes.json()
      if (!meData.isLoggedIn) { router.replace('/sign-in?next=/dashboard'); return }
      setUser(meData)

      const subRes = await fetch('/api/submissions/mine')
      const subData = await subRes.json()
      if (subRes.ok) setSubmissions(subData.submissions || [])
      else setError(subData.error || 'Failed to load submissions')
      setLoading(false)
    }
    load()
  }, [router])

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
  }

  const live = submissions.filter(s => s.status === 'Live').length
  const inProgress = submissions.filter(s => !['Live', 'Rejected'].includes(s.status)).length
  const rejected = submissions.filter(s => s.status === 'Rejected').length

  if (loading) return (
    <div style={{ background: '#040A14', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 40, height: 40, border: '3px solid rgba(10,100,195,0.3)', borderTop: '3px solid #0A64C3', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }} />
        <p style={{ color: '#8899AA', fontSize: 14 }}>Loading your dashboard…</p>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    </div>
  )

  return (
    <div style={{ background: '#040A14', minHeight: '100vh', color: '#fff' }}>
      <Nav />

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #060C18 0%, #0A1535 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingTop: 88 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 24px 36px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '4px 14px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', marginBottom: 12 }}>Artist Dashboard</div>
              <h1 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 900, margin: '0 0 6px', fontFamily: 'var(--font-outfit, sans-serif)' }}>
                Welcome back, {user?.artistName || user?.name || 'Artist'} 👋
              </h1>
              <p style={{ color: '#8899AA', fontSize: 14, margin: 0 }}>{user?.email}</p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>
              <Link href="/submit" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0A64C3', color: '#fff', padding: '10px 20px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 13, fontFamily: 'var(--font-outfit, sans-serif)' }}>
                + Submit New Track
              </Link>
              <button onClick={handleLogout} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#8899AA', padding: '10px 18px', borderRadius: 10, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
                Log Out
              </button>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginTop: 32 }}>
            {[
              { label: 'Total Tracks', value: submissions.length, color: '#5CB2DC' },
              { label: 'Live Now', value: live, color: '#34D399' },
              { label: 'In Progress', value: inProgress, color: '#F59E0B' },
              { label: 'Rejected', value: rejected, color: '#F87171' },
            ].map(s => (
              <div key={s.label} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px 20px' }}>
                <p style={{ color: s.color, fontSize: 28, fontWeight: 900, margin: '0 0 4px', fontFamily: 'var(--font-outfit, sans-serif)' }}>{s.value}</p>
                <p style={{ color: '#4A5568', fontSize: 12, margin: 0, fontWeight: 600, letterSpacing: 0.5 }}>{s.label.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Submissions */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '36px 24px 60px' }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 20px', fontFamily: 'var(--font-outfit, sans-serif)' }}>Your Submissions</h2>

        {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: '16px 20px', color: '#F87171', marginBottom: 20 }}>{error}</div>}

        {submissions.length === 0 && (
          <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '48px 32px', textAlign: 'center' as const }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎵</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>No tracks yet</h3>
            <p style={{ color: '#8899AA', fontSize: 15, margin: '0 0 24px' }}>Submit your first track and get live on 150+ platforms in 72 hours.</p>
            <Link href="/submit" style={{ display: 'inline-block', background: '#0A64C3', color: '#fff', padding: '13px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
              Submit Your First Track →
            </Link>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
          {submissions.map(sub => {
            const cfg = STATUS_CONFIG[sub.status] || STATUS_CONFIG['Submitted']
            const isOpen = expanded === sub._id
            const agrColor = AGREEMENT_COLOR[sub.agreementStatus || 'Not Sent'] || '#4A5568'

            return (
              <div key={sub._id} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, overflow: 'hidden' }}>
                {/* Summary row — always visible */}
                <div
                  onClick={() => setExpanded(isOpen ? null : sub._id)}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 22px', cursor: 'pointer' }}
                >
                  {sub.artworkUrl && (
                    <img src={sub.artworkUrl} alt="artwork" style={{ width: 52, height: 52, borderRadius: 8, objectFit: 'cover' as const, flexShrink: 0 }} />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 16, fontWeight: 800, margin: '0 0 3px', fontFamily: 'var(--font-outfit, sans-serif)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{sub.trackName}</p>
                    <p style={{ color: '#8899AA', fontSize: 13, margin: 0 }}>{sub.artistName} · {sub.language}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                    <span style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.color}44`, borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' as const }}>
                      {cfg.emoji} {sub.status}
                    </span>
                    <span style={{ color: '#4A5568', fontSize: 18, transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', display: 'block' }}>▾</span>
                  </div>
                </div>

                {/* Expanded detail */}
                {isOpen && (
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '22px 22px 24px' }}>
                    {/* Progress */}
                    {sub.status !== 'Rejected' && (
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                          {STEPS.map((step, i) => {
                            const done = cfg.step > i + 1
                            const active = cfg.step === i + 1
                            return (
                              <div key={step} style={{ textAlign: 'center' as const, flex: 1 }}>
                                <div style={{
                                  width: 30, height: 30, borderRadius: '50%', margin: '0 auto 5px',
                                  background: done ? '#34D399' : active ? '#0A64C3' : 'rgba(255,255,255,0.07)',
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
                        <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                          <div style={{ height: '100%', background: 'linear-gradient(90deg,#0A64C3,#34D399)', borderRadius: 2, width: `${Math.max(0, (cfg.step - 1) / 4) * 100}%`, transition: 'width 0.5s' }} />
                        </div>
                      </div>
                    )}

                    {/* Status note */}
                    <div style={{ background: cfg.bg, border: `1px solid ${cfg.color}33`, borderRadius: 12, padding: '13px 18px', marginBottom: 16 }}>
                      <p style={{ color: cfg.color, fontSize: 14, margin: 0, fontWeight: 500 }}>{cfg.emoji} {cfg.desc}</p>
                      {sub.statusNote && (
                        <p style={{ color: '#E2E8F0', fontSize: 13, margin: '10px 0 0', paddingTop: 10, borderTop: `1px solid ${cfg.color}22` }}>
                          <strong>Note from our team:</strong> {sub.statusNote}
                        </p>
                      )}
                    </div>

                    {/* Agreement + dates row */}
                    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 10 }}>
                      {sub.agreementStatus && sub.agreementStatus !== 'Not Sent' && (
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '8px 14px' }}>
                          <p style={{ color: '#4A5568', fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' as const, margin: '0 0 3px' }}>Agreement</p>
                          <p style={{ color: agrColor, fontSize: 13, fontWeight: 700, margin: 0 }}>{sub.agreementStatus}</p>
                        </div>
                      )}
                      {sub.releaseDate && (
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '8px 14px' }}>
                          <p style={{ color: '#4A5568', fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' as const, margin: '0 0 3px' }}>Release Date</p>
                          <p style={{ color: '#E2E8F0', fontSize: 13, fontWeight: 700, margin: 0 }}>{sub.releaseDate}</p>
                        </div>
                      )}
                      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '8px 14px' }}>
                        <p style={{ color: '#4A5568', fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' as const, margin: '0 0 3px' }}>Submitted</p>
                        <p style={{ color: '#E2E8F0', fontSize: 13, fontWeight: 700, margin: 0 }}>{new Date(sub.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                      </div>
                      {sub.updatedAt && (
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '8px 14px' }}>
                          <p style={{ color: '#4A5568', fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' as const, margin: '0 0 3px' }}>Last Updated</p>
                          <p style={{ color: '#E2E8F0', fontSize: 13, fontWeight: 700, margin: 0 }}>{new Date(sub.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {submissions.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <Link href="/submit" style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', color: '#5CB2DC', padding: '12px 24px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
              + Submit Another Track
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
