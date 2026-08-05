'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NOTES = ['♩', '♪', '♫', '♬', '𝄞', '♭', '♯']

function FloatingNote({ note, style }: { note: string; style: React.CSSProperties }) {
  return (
    <span className="floating-note" style={{ position: 'absolute', fontSize: 20, color: 'rgba(92,178,220,0.6)', fontWeight: 900, pointerEvents: 'none', ...style }}>
      {note}
    </span>
  )
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <>
      <style>{`
        @keyframes spin-record {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes needle-bob {
          0%, 100% { transform: rotate(-28deg); }
          50%       { transform: rotate(-22deg); }
        }
        @keyframes float-note-1 {
          0%   { transform: translateY(0px) rotate(-10deg); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.8; }
          100% { transform: translateY(-140px) rotate(15deg); opacity: 0; }
        }
        @keyframes float-note-2 {
          0%   { transform: translateY(0px) rotate(8deg); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.7; }
          100% { transform: translateY(-120px) rotate(-12deg); opacity: 0; }
        }
        @keyframes float-note-3 {
          0%   { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-160px) rotate(20deg); opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.08); }
        }
        @keyframes eq-bar-1 {
          0%,100% { height: 14px; } 20% { height: 40px; } 40% { height: 22px; } 60% { height: 50px; } 80% { height: 18px; }
        }
        @keyframes eq-bar-2 {
          0%,100% { height: 30px; } 20% { height: 14px; } 40% { height: 48px; } 60% { height: 20px; } 80% { height: 42px; }
        }
        @keyframes eq-bar-3 {
          0%,100% { height: 44px; } 20% { height: 22px; } 40% { height: 16px; } 60% { height: 36px; } 80% { height: 52px; }
        }
        @keyframes eq-bar-4 {
          0%,100% { height: 20px; } 20% { height: 52px; } 40% { height: 30px; } 60% { height: 14px; } 80% { height: 40px; }
        }
        @keyframes eq-bar-5 {
          0%,100% { height: 36px; } 20% { height: 18px; } 40% { height: 54px; } 60% { height: 26px; } 80% { height: 12px; }
        }
        @keyframes eq-bar-6 {
          0%,100% { height: 16px; } 20% { height: 44px; } 40% { height: 28px; } 60% { height: 56px; } 80% { height: 22px; }
        }
        @keyframes eq-bar-7 {
          0%,100% { height: 48px; } 20% { height: 20px; } 40% { height: 36px; } 60% { height: 14px; } 80% { height: 46px; }
        }
        @keyframes eq-bar-8 {
          0%,100% { height: 22px; } 20% { height: 46px; } 40% { height: 14px; } 60% { height: 40px; } 80% { height: 28px; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(10,100,195,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(10,100,195,0); }
        }
        @keyframes waveform {
          0%   { d: path("M0,20 Q10,5 20,20 Q30,35 40,20 Q50,5 60,20 Q70,35 80,20 Q90,5 100,20"); }
          50%  { d: path("M0,20 Q10,35 20,20 Q30,5 40,20 Q50,35 60,20 Q70,5 80,20 Q90,35 100,20"); }
          100% { d: path("M0,20 Q10,5 20,20 Q30,35 40,20 Q50,5 60,20 Q70,35 80,20 Q90,5 100,20"); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(200px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
        }
        @keyframes shimmer-text {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes dot-blink {
          0%, 80%, 100% { opacity: 0; }
          40%            { opacity: 1; }
        }
        @keyframes card-hover {
          from { transform: translateY(0); }
          to   { transform: translateY(-4px); }
        }
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: #fff !important; }
        .action-card { transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease; }
        .action-card:hover { transform: translateY(-5px); border-color: rgba(10,100,195,0.4) !important; background: #0A1535 !important; }
        .btn-primary { transition: background 0.2s, transform 0.15s; }
        .btn-primary:hover { background: #0D77E0 !important; transform: translateY(-2px); }
        .btn-ghost { transition: all 0.2s; }
        .btn-ghost:hover { background: rgba(255,255,255,0.1) !important; color: #fff !important; }
        .floating-note { animation-fill-mode: forwards; }
      `}</style>

      <div style={{ background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

        {/* ── Ambient background glows ── */}
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(10,100,195,0.12) 0%, transparent 65%)', animation: 'pulse-glow 6s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', top: '40%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 65%)' }} />
          {/* Subtle grid */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        {/* ── Minimal navbar ── */}
        <nav style={{ position: 'relative', zIndex: 10, padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{ position: 'relative', width: 36, height: 36 }}>
              <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats" fill sizes="36px" style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(10,100,195,0.5))' }} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 900, letterSpacing: '0.06em', color: '#fff' }}>WESTERN BEATS</span>
          </Link>
          <div style={{ display: 'flex', gap: 8 }}>
            <Link href="/sign-in" className="btn-ghost" style={{ padding: '8px 20px', borderRadius: 10, fontSize: 13, fontWeight: 700, color: '#8899AA', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', background: 'transparent' }}>Log In</Link>
            <Link href="/sign-up" className="btn-primary" style={{ padding: '8px 20px', borderRadius: 10, fontSize: 13, fontWeight: 700, color: '#fff', background: '#0A64C3', textDecoration: 'none' }}>Distribute Free</Link>
          </div>
        </nav>

        {/* ── Main content ── */}
        <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px 60px', position: 'relative', zIndex: 1 }}>
          <div style={{ width: '100%', maxWidth: 1100, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 64, alignItems: 'center' }}>

            {/* ── LEFT: Vinyl + Animations ── */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

              {/* Floating music notes */}
              {mounted && (
                <>
                  <FloatingNote note="♪" style={{ bottom: '60%', left: '10%', animationName: 'float-note-1', animationDuration: '3.2s', animationIterationCount: 'infinite', animationDelay: '0s' }} />
                  <FloatingNote note="♫" style={{ bottom: '50%', left: '18%', animationName: 'float-note-2', animationDuration: '4s', animationIterationCount: 'infinite', animationDelay: '0.8s', fontSize: 16 }} />
                  <FloatingNote note="♬" style={{ bottom: '55%', right: '12%', animationName: 'float-note-3', animationDuration: '3.6s', animationIterationCount: 'infinite', animationDelay: '0.4s', color: 'rgba(52,211,153,0.6)' }} />
                  <FloatingNote note="𝄞" style={{ bottom: '40%', right: '8%', animationName: 'float-note-1', animationDuration: '4.4s', animationIterationCount: 'infinite', animationDelay: '1.2s', fontSize: 24, color: 'rgba(167,139,250,0.5)' }} />
                  <FloatingNote note="♩" style={{ bottom: '65%', left: '35%', animationName: 'float-note-2', animationDuration: '2.8s', animationIterationCount: 'infinite', animationDelay: '0.2s', color: 'rgba(245,158,11,0.5)' }} />
                  <FloatingNote note="♭" style={{ bottom: '45%', right: '30%', animationName: 'float-note-3', animationDuration: '3.8s', animationIterationCount: 'infinite', animationDelay: '1.6s', color: 'rgba(92,178,220,0.5)' }} />
                </>
              )}

              {/* Glow rings behind record */}
              <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(10,100,195,0.18) 0%, transparent 70%)', animation: 'pulse-glow 4s ease-in-out infinite' }} />
              <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(10,100,195,0.15)', animation: 'pulse-glow 4s ease-in-out infinite 0.5s' }} />
              <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', border: '1px dashed rgba(10,100,195,0.08)', animation: 'pulse-glow 6s ease-in-out infinite 1s' }} />

              {/* Vinyl record wrapper with needle */}
              <div style={{ position: 'relative', width: 280, height: 280 }}>

                {/* Spinning record */}
                <div style={{ width: 280, height: 280, borderRadius: '50%', animation: 'spin-record 5s linear infinite', position: 'relative' }}>
                  {/* Outer record body */}
                  <svg viewBox="0 0 280 280" width="280" height="280" style={{ position: 'absolute', inset: 0 }}>
                    <defs>
                      <radialGradient id="record-grad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#1A1A2E"/>
                        <stop offset="100%" stopColor="#050508"/>
                      </radialGradient>
                      <radialGradient id="label-grad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#0D2244"/>
                        <stop offset="100%" stopColor="#060F22"/>
                      </radialGradient>
                      <radialGradient id="shine" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.04)"/>
                        <stop offset="100%" stopColor="transparent"/>
                      </radialGradient>
                    </defs>
                    {/* Base record */}
                    <circle cx="140" cy="140" r="138" fill="url(#record-grad)"/>
                    <circle cx="140" cy="140" r="138" fill="url(#shine)"/>
                    {/* Groove rings */}
                    {[130,118,106,94,82,70,58].map(r => (
                      <circle key={r} cx="140" cy="140" r={r} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6"/>
                    ))}
                    {/* Slightly brighter accent grooves */}
                    {[124,100,76].map(r => (
                      <circle key={`a${r}`} cx="140" cy="140" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.4"/>
                    ))}
                    {/* Outer rim highlight */}
                    <circle cx="140" cy="140" r="136" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5"/>
                    {/* Center label */}
                    <circle cx="140" cy="140" r="46" fill="url(#label-grad)" stroke="rgba(10,100,195,0.4)" strokeWidth="1"/>
                    {/* Label detail lines */}
                    <circle cx="140" cy="140" r="42" fill="none" stroke="rgba(10,100,195,0.15)" strokeWidth="0.5"/>
                    {/* WB text on label */}
                    <text x="140" y="134" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11" fontWeight="900" fontFamily="sans-serif" letterSpacing="3">WB</text>
                    <text x="140" y="148" textAnchor="middle" fill="rgba(92,178,220,0.7)" fontSize="6" fontFamily="sans-serif" letterSpacing="1.5">WESTERN BEATS</text>
                    {/* Center hole */}
                    <circle cx="140" cy="140" r="5" fill="#040A14"/>
                    {/* Blue arc highlight on label */}
                    <path d="M 115 135 A 26 26 0 0 1 165 135" fill="none" stroke="rgba(10,100,195,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Needle arm — not spinning */}
                <div style={{ position: 'absolute', top: -24, right: -20, width: 120, height: 120, transformOrigin: '10px 10px', animation: 'needle-bob 3s ease-in-out infinite', zIndex: 10 }}>
                  <svg viewBox="0 0 120 120" width="120" height="120">
                    {/* Needle pivot */}
                    <circle cx="10" cy="10" r="8" fill="#1A2D48" stroke="rgba(92,178,220,0.5)" strokeWidth="1.5"/>
                    <circle cx="10" cy="10" r="3" fill="#5CB2DC"/>
                    {/* Needle arm */}
                    <line x1="10" y1="10" x2="92" y2="88" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                    {/* Cartridge */}
                    <rect x="84" y="82" width="14" height="8" rx="2" fill="#1A2D48" stroke="rgba(92,178,220,0.4)" strokeWidth="1" transform="rotate(45 91 86)"/>
                    {/* Stylus tip */}
                    <circle cx="97" cy="96" r="2.5" fill="#5CB2DC" opacity="0.9"/>
                    {/* Tiny glow on tip */}
                    <circle cx="97" cy="96" r="4" fill="rgba(92,178,220,0.2)"/>
                  </svg>
                </div>
              </div>

              {/* Equalizer bars below the record */}
              <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'flex-end', gap: 4, height: 60, paddingBottom: 0 }}>
                {[1,2,3,4,5,6,7,8].map((i) => {
                  const anims = ['eq-bar-1','eq-bar-2','eq-bar-3','eq-bar-4','eq-bar-5','eq-bar-6','eq-bar-7','eq-bar-8']
                  const colors = ['#0A64C3','#1070D0','#5CB2DC','#0A64C3','#34D399','#5CB2DC','#0A64C3','#1070D0']
                  return (
                    <div key={i} style={{
                      width: 5, borderRadius: 3,
                      background: colors[i-1],
                      animationName: anims[i-1],
                      animationDuration: `${0.6 + i * 0.08}s`,
                      animationIterationCount: 'infinite',
                      animationTimingFunction: 'ease-in-out',
                      opacity: 0.8,
                      boxShadow: `0 0 6px ${colors[i-1]}60`,
                    }} />
                  )
                })}
              </div>
            </div>

            {/* ── RIGHT: Content ── */}
            <div style={{ animation: mounted ? 'slide-up 0.8s ease forwards' : 'none', opacity: mounted ? undefined : 0 }}>

              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(10,100,195,0.12)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 40, padding: '8px 18px', marginBottom: 28, animation: 'badge-pulse 3s ease-in-out infinite' }}>
                <span style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  {[0,1,2].map(i => <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: '#5CB2DC', animation: `dot-blink 1.4s ease-in-out ${i * 0.2}s infinite` }} />)}
                </span>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2.5, textTransform: 'uppercase' as const, color: '#5CB2DC' }}>// 404 · TRACK NOT FOUND</span>
              </div>

              {/* Headline */}
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 900, lineHeight: 1.08, margin: '0 0 20px', letterSpacing: '-0.02em' }}>
                Looks like this track{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #0A64C3, #5CB2DC, #34D399, #0A64C3)',
                  backgroundSize: '300% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer-text 4s linear infinite',
                }}>
                  never dropped.
                </span>
              </h1>

              <p style={{ fontSize: 16, color: '#8899AA', lineHeight: 1.8, margin: '0 0 40px', maxWidth: 460 }}>
                The URL you're looking for isn't on any of our platforms — maybe it moved, maybe it got pulled from the setlist. Either way, let&apos;s get you somewhere with better signal.
              </p>

              {/* Waveform divider */}
              <div style={{ marginBottom: 36, opacity: 0.4 }}>
                <svg viewBox="0 0 300 24" width="280" height="24" style={{ display: 'block' }}>
                  <polyline
                    points="0,12 18,4 30,20 42,8 54,16 66,4 78,18 90,8 102,14 114,6 126,18 138,4 150,16 162,8 174,20 186,4 198,14 210,6 222,18 234,8 246,16 258,4 270,18 282,8 300,12"
                    fill="none"
                    stroke="url(#wave-grad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0A64C3" stopOpacity="0"/>
                      <stop offset="30%" stopColor="#5CB2DC"/>
                      <stop offset="70%" stopColor="#34D399"/>
                      <stop offset="100%" stopColor="#0A64C3" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 48 }}>
                <Link href="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0A64C3', color: '#fff', padding: '14px 32px', borderRadius: 14, fontSize: 15, fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 32px rgba(10,100,195,0.35)' }}>
                  <span>←</span> Back to Home
                </Link>
                <Link href="/sign-up" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.05)', color: '#E2E8F0', padding: '14px 32px', borderRadius: 14, fontSize: 15, fontWeight: 700, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>
                  Distribute Free →
                </Link>
              </div>

              {/* Quick links */}
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#4A5568', marginBottom: 14 }}>Or try one of these</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
                {[
                  { href: '/submit',       emoji: '🎵', label: 'Submit Music',     desc: 'Distribute to 150+ platforms' },
                  { href: '/pricing',      emoji: '💎', label: 'Pricing',          desc: 'Free forever, no commission' },
                  { href: '/how-it-works', emoji: '⚡', label: 'How It Works',     desc: 'From upload to streaming' },
                  { href: '/resources',    emoji: '📖', label: 'Artist Resources',  desc: 'Guides, research & ebooks' },
                ].map(card => (
                  <Link key={card.href} href={card.href} style={{ textDecoration: 'none' }}>
                    <div className="action-card" style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '14px 16px', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 20, width: 36, height: 36, borderRadius: 10, background: 'rgba(10,100,195,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{card.emoji}</span>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', margin: 0 }}>{card.label}</p>
                          <p style={{ fontSize: 11, color: '#4A5568', margin: '2px 0 0', fontWeight: 500 }}>{card.desc}</p>
                        </div>
                        <span style={{ color: '#4A5568', fontSize: 14, marginLeft: 'auto' }}>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* ── Footer strip ── */}
        <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.05)', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' as const, gap: 8 }}>
          <span style={{ fontSize: 12, color: '#4A5568' }}>© 2026 Western Beats Private Limited</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {[['/', 'Home'], ['/contact', 'Contact'], ['/terms', 'Terms'], ['/privacy', 'Privacy']].map(([href, label]) => (
              <Link key={href} href={href} className="nav-link" style={{ fontSize: 12, color: '#4A5568', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
