'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Nav from '../components/Nav'

const GENRES = ['Haryanvi', 'Punjabi', 'Hindi / Bollywood', 'Tamil', 'Telugu', 'Marathi', 'Bengali', 'Kannada', 'Malayalam', 'Bhojpuri', 'Folk / Regional', 'Pop', 'Hip-Hop / Rap', 'Electronic / EDM', 'Other']

export default function SignUpPage() {
  const router = useRouter()
  const [step, setStep] = useState<'form' | 'otp'>('form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [otp, setOtp] = useState('')

  const [form, setForm] = useState({ name: '', email: '', phone: '', artistName: '', genre: '' })

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSendOTP(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, mode: 'signup' }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error); return }
      setSuccess(`OTP sent to ${form.email}`)
      setStep('otp')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleVerifyOTP(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, code: otp, mode: 'signup' }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error); return }
      router.push('/submit')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = { width: '100%', background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '13px 16px', color: '#fff', fontSize: 15, outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: 12, color: '#8899AA', marginBottom: 6, fontWeight: 600, letterSpacing: 0.5 }

  return (
    <>
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px' }}>
        <div style={{ width: '100%', maxWidth: 480 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', marginBottom: 16 }}>Free Account</div>
            <h1 style={{ fontSize: 32, fontWeight: 900, color: '#fff', margin: '0 0 8px', fontFamily: 'var(--font-outfit, sans-serif)' }}>Start Distributing Free</h1>
            <p style={{ color: '#8899AA', fontSize: 15, margin: 0 }}>Join 10,000+ independent artists on Western Beats</p>
          </div>

          <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: '36px 32px' }}>
            {step === 'form' ? (
              <form onSubmit={handleSendOTP} style={{ display: 'flex', flexDirection: 'column' as const, gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your Name" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#0A64C3')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Artist / Stage Name *</label>
                    <input required value={form.artistName} onChange={e => update('artistName', e.target.value)} placeholder="Artist Name" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#0A64C3')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input type="email" required value={form.email} onChange={e => update('email', e.target.value)} placeholder="your@email.com" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = '#0A64C3')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input type="tel" required value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+91 98765 43210" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = '#0A64C3')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                </div>
                <div>
                  <label style={labelStyle}>Primary Genre</label>
                  <select value={form.genre} onChange={e => update('genre', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => (e.target.style.borderColor = '#0A64C3')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}>
                    <option value="">Select genre (optional)</option>
                    {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '12px 16px', color: '#F87171', fontSize: 14 }}>{error}</div>}
                <button type="submit" disabled={loading} style={{ background: loading ? '#0A3A7A' : '#0A64C3', color: '#fff', border: 'none', borderRadius: 12, padding: '15px', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', marginTop: 4 }}>
                  {loading ? 'Sending OTP...' : 'Get OTP & Create Account →'}
                </button>
                <p style={{ margin: 0, fontSize: 12, color: '#4A5568', textAlign: 'center' as const }}>
                  By signing up you agree to our <Link href="/terms" style={{ color: '#5CB2DC' }}>Terms</Link>. 100% free — no credit card needed.
                </p>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
                {success && <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 10, padding: '12px 16px', color: '#34D399', fontSize: 14 }}>{success}</div>}
                <div>
                  <label style={{ display: 'block', fontSize: 12, color: '#8899AA', marginBottom: 8, fontWeight: 600, letterSpacing: 0.5 }}>Enter 6-digit OTP</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otp}
                    onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
                    placeholder="000000"
                    autoFocus
                    style={{ width: '100%', background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 16px', color: '#fff', fontSize: 28, fontWeight: 900, letterSpacing: 10, outline: 'none', boxSizing: 'border-box' as const, textAlign: 'center' as const, fontFamily: 'monospace' }}
                    onFocus={e => (e.target.style.borderColor = '#0A64C3')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                  <p style={{ margin: '8px 0 0', fontSize: 12, color: '#4A5568', textAlign: 'center' as const }}>
                    Sent to {form.email} · <button type="button" onClick={() => { setStep('form'); setError(''); setOtp('') }} style={{ background: 'none', border: 'none', color: '#5CB2DC', cursor: 'pointer', fontSize: 12, padding: 0 }}>Go back</button>
                  </p>
                  <p style={{ margin: '6px 0 0', fontSize: 12, color: '#F59E0B', textAlign: 'center' as const }}>⚠️ Can&apos;t find it? Check your <strong>Spam / Junk</strong> folder.</p>
                </div>
                {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '12px 16px', color: '#F87171', fontSize: 14 }}>{error}</div>}
                <button type="submit" disabled={loading || otp.length !== 6} style={{ background: loading || otp.length !== 6 ? '#0A3A7A' : '#0A64C3', color: '#fff', border: 'none', borderRadius: 12, padding: '15px', fontSize: 15, fontWeight: 700, cursor: loading || otp.length !== 6 ? 'not-allowed' : 'pointer' }}>
                  {loading ? 'Creating Account...' : 'Verify & Start Distributing →'}
                </button>
                <button type="button" onClick={handleSendOTP} disabled={loading} style={{ background: 'none', border: 'none', color: '#5CB2DC', cursor: 'pointer', fontSize: 13, padding: 0 }}>
                  Didn&apos;t receive it? Resend OTP
                </button>
              </form>
            )}

            <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' as const }}>
              <p style={{ margin: 0, color: '#8899AA', fontSize: 14 }}>
                Already have an account?{' '}
                <Link href="/sign-in" style={{ color: '#5CB2DC', fontWeight: 600, textDecoration: 'none' }}>Sign in →</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
