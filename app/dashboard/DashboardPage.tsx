'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Nav from '../components/Nav'

interface UserData {
  name: string
  email: string
  artistName: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/auth/me')
      .then(r => r.json())
      .then(data => {
        if (!data.isLoggedIn) { router.push('/sign-in'); return }
        setUser({ name: data.name, email: data.email, artistName: data.artistName })
      })
      .finally(() => setLoading(false))
  }, [router])

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
  }

  if (loading) {
    return (
      <>
        <Nav />
        <main style={{ background: '#040A14', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#8899AA', fontSize: 16 }}>Loading your dashboard...</div>
        </main>
      </>
    )
  }

  if (!user) return null

  const stats = [
    { val: '0', lbl: 'Releases Submitted', icon: '🎵' },
    { val: '0', lbl: 'Platforms Live', icon: '📡' },
    { val: '₹0', lbl: 'Total Royalties', icon: '💰' },
    { val: '0', lbl: 'Total Streams', icon: '▶️' },
  ]

  return (
    <>
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white', padding: '100px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
            <div>
              <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '5px 14px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', marginBottom: 12 }}>Artist Dashboard</div>
              <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, margin: '0 0 6px', fontFamily: 'var(--font-outfit, sans-serif)' }}>
                Welcome, {user.artistName} 👋
              </h1>
              <p style={{ color: '#8899AA', fontSize: 15, margin: 0 }}>{user.email}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '12px 24px', borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                + New Release
              </Link>
              <button onClick={handleLogout} style={{ background: 'rgba(255,255,255,0.06)', color: '#8899AA', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 20px', fontSize: 14, cursor: 'pointer', fontWeight: 600 }}>
                Sign Out
              </button>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 40 }}>
            {stats.map(s => (
              <div key={s.lbl} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px 24px' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#0A64C3', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 13, color: '#8899AA', marginTop: 6 }}>{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'start' }}>

            {/* Releases */}
            <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>My Releases</h2>
                <Link href="/submit" style={{ background: 'rgba(10,100,195,0.15)', color: '#5CB2DC', padding: '8px 16px', borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(10,100,195,0.3)' }}>
                  + Submit New
                </Link>
              </div>
              <div style={{ textAlign: 'center' as const, padding: '60px 24px', color: '#4A5568' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎶</div>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#8899AA', margin: '0 0 8px' }}>No releases yet</p>
                <p style={{ fontSize: 14, margin: '0 0 24px' }}>Submit your first track and go live on 150+ platforms within 72 hours.</p>
                <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '12px 28px', borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                  Distribute Your First Song →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>

              {/* Profile card */}
              <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '24px' }}>
                <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700 }}>Your Profile</h3>
                {[
                  { lbl: 'Name', val: user.name },
                  { lbl: 'Artist', val: user.artistName },
                  { lbl: 'Email', val: user.email },
                ].map(row => (
                  <div key={row.lbl} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: 14 }}>
                    <span style={{ color: '#8899AA' }}>{row.lbl}</span>
                    <span style={{ color: '#fff', fontWeight: 600, textAlign: 'right' as const, maxWidth: '60%', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.val}</span>
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '24px' }}>
                <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700 }}>Quick Links</h3>
                {[
                  { href: '/submit', label: '🎵 Submit a Release' },
                  { href: '/pricing', label: '💎 View Pricing' },
                  { href: '/how-it-works', label: '📖 How It Works' },
                  { href: '/contact', label: '📞 Contact Support' },
                ].map(l => (
                  <Link key={l.href} href={l.href} style={{ display: 'block', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#8899AA', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8899AA')}>
                    {l.label}
                  </Link>
                ))}
              </div>

              {/* Warner badge */}
              <div style={{ background: 'linear-gradient(135deg, rgba(10,100,195,0.15) 0%, rgba(6,12,24,0) 100%)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '20px', textAlign: 'center' as const }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', marginBottom: 6 }}>Official Partner</div>
                <div style={{ fontSize: 14, color: '#8899AA' }}>Warner Music India Partner — your releases get editorial consideration on all major platforms.</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
