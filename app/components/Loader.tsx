'use client'
import { useEffect, useRef, useState } from 'react'

const MIN_MS  = 2200
const MAX_MS  = 3500

/**
 * Full-screen loading overlay.
 *
 * Deliberately avoids AnimatePresence / framer-motion for the
 * show/hide cycle — those APIs have SSR-hydration edge-cases in
 * Next.js App Router that can cause the overlay to vanish before
 * the user ever sees it.  Plain CSS transitions are 100% reliable.
 *
 * This component must be dynamically imported with { ssr: false }
 * in page.tsx so it is never server-rendered at all.
 */
export default function Loader() {
  const [exiting, setExiting] = useState(false)
  const [gone,    setGone]    = useState(false)
  const videoRef  = useRef<HTMLVideoElement>(null)
  const startRef  = useRef(Date.now())
  const calledRef = useRef(false)

  useEffect(() => {
    startRef.current = Date.now()
    document.body.style.overflow = 'hidden'

    // Hard cap — never block user past MAX_MS
    const cap = setTimeout(triggerExit, MAX_MS)
    return () => {
      clearTimeout(cap)
      document.body.style.overflow = ''
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function triggerExit() {
    if (calledRef.current) return
    calledRef.current = true

    const elapsed = Date.now() - startRef.current
    const wait    = Math.max(0, MIN_MS - elapsed)

    setTimeout(() => {
      setExiting(true)                          // start CSS fade-out
      setTimeout(() => {
        setGone(true)                           // unmount after fade
        document.body.style.overflow = ''
      }, 850)
    }, wait)
  }

  const onTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 2.8) triggerExit()
  }

  if (gone) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{
        background: '#ffffff',
        opacity:    exiting ? 0 : 1,
        transition: exiting ? 'opacity 0.85s cubic-bezier(0.22,1,0.36,1)' : 'none',
        pointerEvents: exiting ? 'none' : 'auto',
        willChange: 'opacity',
      }}
    >
      {/* ── Logo animation video ───────────────────────────────────── */}
      <video
        ref={videoRef}
        src="/wb-logo-animation.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={triggerExit}
        onError={triggerExit}
        onTimeUpdate={onTimeUpdate}
        className="relative z-10 w-[300px] sm:w-[420px] lg:w-[540px] h-auto"
      />

      {/* ── Progress bar ───────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
        style={{
          background: '#0A64C3',
          animation: `wb-loader-bar ${MAX_MS}ms linear forwards`,
        }}
      />

      {/* ── Bottom brand copy ──────────────────────────────────────── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
        style={{ animation: 'wb-loader-fade 0.6s 0.4s both' }}
      >
        <div
          className="font-outfit font-black tracking-[0.22em] text-[11px] sm:text-[12px]"
          style={{ color: '#040A14' }}
        >
          WB DIGITAL
        </div>
        <div
          className="font-inter text-[9px] sm:text-[10px] tracking-[0.18em] mt-1"
          style={{ color: 'rgba(4,10,20,0.55)' }}
        >
          WHERE INDEPENDENT MEETS MAJOR
        </div>
      </div>
    </div>
  )
}
