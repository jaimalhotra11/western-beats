'use client'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MIN_DURATION_MS = 2200
const MAX_DURATION_MS = 3500 // cap loader so it never blocks users too long

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const startRef = useRef<number>(0)

  useEffect(() => {
    startRef.current = performance.now()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // Hard cap — always dismiss by MAX_DURATION even if the video stalls.
    const cap = setTimeout(() => setVisible(false), MAX_DURATION_MS)
    return () => {
      document.body.style.overflow = prev
      clearTimeout(cap)
    }
  }, [])

  const finish = () => {
    const elapsed = performance.now() - startRef.current
    const wait = Math.max(0, MIN_DURATION_MS - elapsed)
    setTimeout(() => setVisible(false), wait)
  }

  // Dismiss when the video reaches ~2.8s of playback (the full logo-lock
  // moment in the WB animation); we don't need the whole 9s tail.
  const onTimeUpdate = () => {
    const v = videoRef.current
    if (v && v.currentTime >= 2.8) finish()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: '#ffffff' }}
        >
          {/* Video plays full-bleed on the matching white canvas so the
              clip's own background blends seamlessly into the loader. */}
          <video
            ref={videoRef}
            src="/wb-logo-animation.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={finish}
            onError={finish}
            onTimeUpdate={onTimeUpdate}
            className="relative z-10 w-[320px] sm:w-[440px] lg:w-[560px] h-auto"
          />

          {/* Thin accent bar at the bottom that fills as the logo plays */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: MAX_DURATION_MS / 1000, ease: 'linear' }}
            className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
            style={{ background: '#0A64C3' }}
          />

          {/* Bottom brand label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
