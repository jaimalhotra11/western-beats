'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const SHOW_MS = 2800   // how long to stay visible before fading

export default function Loader() {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'gone'>('in')
  const doneRef = useRef(false)

  useEffect(() => {
    // Lock scroll while loader is up
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // in → hold (after 400ms intro)
    const t1 = setTimeout(() => setPhase('hold'), 400)
    // hold → out
    const t2 = setTimeout(() => {
      if (doneRef.current) return
      doneRef.current = true
      setPhase('out')
    }, SHOW_MS)
    // out → gone (unmount after fade)
    const t3 = setTimeout(() => {
      setPhase('gone')
      document.body.style.overflow = prev
    }, SHOW_MS + 800)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      document.body.style.overflow = prev
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <div
      style={{
        position:   'fixed',
        inset:      0,
        zIndex:     9999,
        display:    'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#060C18',
        opacity:    phase === 'out' ? 0 : 1,
        transition: phase === 'out' ? 'opacity 0.8s cubic-bezier(0.22,1,0.36,1)' : 'none',
        pointerEvents: phase === 'out' ? 'none' : 'auto',
      }}
    >
      {/* ── Ambient glow ─────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(10,100,195,0.18) 0%, transparent 70%)',
        animation: 'wb-glow-pulse 2.4s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* ── Orbit ring ───────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        width: 200, height: 200,
        borderRadius: '50%',
        border: '1px solid rgba(10,100,195,0.25)',
        animation: 'wb-spin 6s linear infinite',
        pointerEvents: 'none',
      }}>
        {/* orbit dot */}
        <div style={{
          position: 'absolute', top: -4, left: '50%',
          transform: 'translateX(-50%)',
          width: 8, height: 8, borderRadius: '50%',
          background: '#0A64C3',
          boxShadow: '0 0 10px 2px rgba(10,100,195,0.8)',
        }} />
      </div>

      {/* second orbit ring */}
      <div style={{
        position: 'absolute',
        width: 260, height: 260,
        borderRadius: '50%',
        border: '1px solid rgba(196,18,48,0.15)',
        animation: 'wb-spin-rev 9s linear infinite',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', bottom: -4, left: '50%',
          transform: 'translateX(-50%)',
          width: 6, height: 6, borderRadius: '50%',
          background: '#C41230',
          boxShadow: '0 0 8px 2px rgba(196,18,48,0.7)',
        }} />
      </div>

      {/* ── Logo ─────────────────────────────────────────────────────── */}
      <div style={{
        position: 'relative',
        width: 96, height: 96,
        animation: 'wb-logo-in 0.6s cubic-bezier(0.22,1,0.36,1) both',
      }}>
        <Image
          src="/partners/westernbeats-BpLvGE3e.png"
          alt="Western Beats"
          fill
          sizes="96px"
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* ── Brand name ───────────────────────────────────────────────── */}
      <div style={{
        marginTop: 24,
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 900,
        fontSize: 22,
        letterSpacing: '0.18em',
        color: '#ffffff',
        animation: 'wb-fade-up 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both',
        textAlign: 'center',
      }}>
        WESTERN BEATS
      </div>

      {/* ── Tagline ──────────────────────────────────────────────────── */}
      <div style={{
        marginTop: 6,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: '0.2em',
        color: 'rgba(107,122,141,1)',
        textTransform: 'uppercase',
        animation: 'wb-fade-up 0.6s 0.35s cubic-bezier(0.22,1,0.36,1) both',
        textAlign: 'center',
      }}>
        Official GMJ & Warner Music India Partner
      </div>

      {/* ── Dot bar ──────────────────────────────────────────────────── */}
      <div style={{
        display: 'flex', gap: 6, marginTop: 36,
        animation: 'wb-fade-up 0.6s 0.5s cubic-bezier(0.22,1,0.36,1) both',
      }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#0A64C3',
            animation: `wb-dot-bounce 1.1s ${i * 0.18}s ease-in-out infinite`,
          }} />
        ))}
      </div>

      {/* ── Bottom progress bar ──────────────────────────────────────── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 3,
        background: 'rgba(10,100,195,0.15)',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #0A64C3, #5CB2DC)',
          transformOrigin: 'left',
          animation: `wb-progress ${SHOW_MS}ms linear both`,
        }} />
      </div>

      {/* ── Bottom label ─────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', bottom: 24,
        fontFamily: "'Inter', sans-serif",
        fontSize: 9,
        letterSpacing: '0.18em',
        color: 'rgba(107,122,141,0.7)',
        textTransform: 'uppercase',
        animation: 'wb-fade-up 0.6s 0.6s cubic-bezier(0.22,1,0.36,1) both',
      }}>
        WHERE INDEPENDENT MEETS MAJOR
      </div>

      {/* ── Keyframes injected inline so they work without globals ── */}
      <style>{`
        @keyframes wb-glow-pulse {
          0%,100% { opacity: 0.6; transform: translate(-50%,-50%) scale(1); }
          50%      { opacity: 1;   transform: translate(-50%,-50%) scale(1.15); }
        }
        @keyframes wb-spin     { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
        @keyframes wb-spin-rev { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
        @keyframes wb-logo-in  { from { opacity:0; transform:scale(0.7); } to { opacity:1; transform:scale(1); } }
        @keyframes wb-fade-up  { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes wb-dot-bounce {
          0%,80%,100% { transform: scale(1);   opacity: 0.5; }
          40%          { transform: scale(1.5); opacity: 1;   }
        }
        @keyframes wb-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  )
}
