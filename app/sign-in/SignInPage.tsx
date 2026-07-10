'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Nav from '../components/Nav'

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'email' | 'otp'>('email')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleSendOTP(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, mode: 'signin' }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error); return }
      setSuccess(`OTP sent to ${email}`)
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
        body: JSON.stringify({ email, code: otp, mode: 'signin' }),
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

  return (
    <>
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px' }}>
        <div style={{ width: '100%', maxWidth: 440 }}>
          {/* Logo / Brand */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', marginBottom: 16 }}>Artist Login</div>
            <h1 style={{ fontSize: 32, fontWeight: 900, color: '#fff', margin: '0 0 8px', fontFamily: 'var(--font-outfit, sans-serif)' }}>Welcome Back</h1>
            <p style={{ color: '#8899AA', fontSize: 15, margin: 0 }}>Sign in to your Western Beats account</p>
          </div>

          <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: '36px 32px' }}>
            {step === 'email' ? (
              <form onSubmit={handleSendOTP} style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, color: '#8899AA', marginBottom: 8, fontWeight: 600, letterSpacing: 0.5 }}>Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    style={{ width: '100%', background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 16px', color: '#fff', fontSize: 15, outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit' }}
                    onFocus={e => (e.target.style.borderColor = '#0A64C3')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
                {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '12px 16px', color: '#F87171', fontSize: 14 }}>{error}</div>}
                <button type="submit" disabled={loading} style={{ background: loading ? '#0A3A7A' : '#0A64C3', color: '#fff', border: 'none', borderRadius: 12, padding: '15px', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}>
                  {loading ? 'Sending OTP...' : 'Send OTP →'}
                </button>
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
                    style={{ width: '100%', background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 16px', color: '#fff', fontSize: 24, fontWeight: 900, letterSpacing: 8, outline: 'none', boxSizing: 'border-box' as const, textAlign: 'center' as const, fontFamily: 'monospace' }}
                    onFocus={e => (e.target.style.borderColor = '#0A64C3')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                  <p style={{ margin: '8px 0 0', fontSize: 12, color: '#4A5568', textAlign: 'center' as const }}>Sent to {email} · <button type="button" onClick={() => { setStep('email'); setError(''); setOtp('') }} style={{ background: 'none', border: 'none', color: '#5CB2DC', cursor: 'pointer', fontSize: 12, padding: 0 }}>Change email</button></p>
                  <p style={{ margin: '6px 0 0', fontSize: 12, color: '#F59E0B', textAlign: 'center' as const }}>⚠️ Can&apos;t find it? Check your <strong>Spam / Junk</strong> folder.</p>
                </div>
                {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '12px 16px', color: '#F87171', fontSize: 14 }}>{error}</div>}
                <button type="submit" disabled={loading || otp.length !== 6} style={{ background: loading || otp.length !== 6 ? '#0A3A7A' : '#0A64C3', color: '#fff', border: 'none', borderRadius: 12, padding: '15px', fontSize: 15, fontWeight: 700, cursor: loading || otp.length !== 6 ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}>
                  {loading ? 'Verifying...' : 'Verify & Sign In →'}
                </button>
                <button type="button" onClick={handleSendOTP} disabled={loading} style={{ background: 'none', border: 'none', color: '#5CB2DC', cursor: 'pointer', fontSize: 13, padding: 0 }}>
                  Didn&apos;t receive it? Resend OTP
                </button>
              </form>
            )}

            <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' as const }}>
              <p style={{ margin: 0, color: '#8899AA', fontSize: 14 }}>
                Don&apos;t have an account?{' '}
                <Link href="/sign-up" style={{ color: '#5CB2DC', fontWeight: 600, textDecoration: 'none' }}>Sign up free →</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
