'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa'
import { ARTISTS } from './artistsData'

const EASE = [0.22, 1, 0.36, 1] as const

/* ─── Artist Card ───────────────────────────────────────────────────── */
function ArtistCard({ a }: { a: typeof ARTISTS[number] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex-shrink-0 w-[190px] sm:w-[210px] rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '3/4' }}
    >
      <div className="absolute inset-0 bg-[#0A1535]">
        <Image
          src={a.image}
          alt={a.name}
          fill
          sizes="210px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="eager"
          unoptimized
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(4,10,20,0.05) 0%, rgba(4,10,20,0.55) 55%, rgba(4,10,20,0.98) 100%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#0A64C3' }} />

      <div
        className="absolute top-3 left-3 font-inter text-[8px] font-bold tracking-[0.14em] uppercase px-2 py-1 rounded-full backdrop-blur-sm"
        style={{ background: 'rgba(10,100,195,0.3)', color: '#5CB2DC', border: '1px solid rgba(10,100,195,0.5)' }}
      >
        WB Artist
      </div>
      <div
        className="absolute top-3 right-3 font-outfit font-bold text-[9px] text-white px-2 py-1 rounded-full backdrop-blur-sm"
        style={{ background: 'rgba(10,100,195,0.9)' }}
      >
        {a.followers}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="font-outfit font-extrabold text-white text-[15px] leading-tight mb-0.5">{a.name}</div>
        <div className="font-inter text-[11px] tracking-wide mb-2" style={{ color: '#5CB2DC' }}>{a.genre}</div>
        <div className="flex items-center gap-2">
          {a.instagram && (
            <a href={a.instagram} target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
              <FaInstagram size={13} />
            </a>
          )}
          {a.youtube && (
            <a href={a.youtube} target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors" aria-label="YouTube">
              <FaYoutube size={13} />
            </a>
          )}
          {a.spotify && (
            <a href={a.spotify} target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors" aria-label="Spotify">
              <FaSpotify size={13} />
            </a>
          )}
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(10,100,195,0.5)' }}
      />
    </motion.div>
  )
}

/* ─── Seamless ticker hook ──────────────────────────────────────────── */
function useSeamlessTicker(
  fwdRef: React.RefObject<HTMLDivElement | null>,
  revRef: React.RefObject<HTMLDivElement | null>,
  pxPerSec: number
) {
  useEffect(() => {
    const fwd = fwdRef.current
    const rev = revRef.current
    if (!fwd || !rev) return

    let rafId: number
    let fwdX = 0
    let revX = 0
    let lastTime = -1
    let paused = false

    fwd.style.willChange = 'transform'
    rev.style.willChange = 'transform'

    const init = () => {
      /*
       * Both rows contain identical doubled content, so their scrollWidth
       * should be the same. Measure from fwd only and share the value —
       * this guarantees both rows wrap at exactly the same content boundary
       * and appear to move at exactly the same visual speed.
       */
      const halfW = fwd.scrollWidth / 2

      /* Reverse row starts at -halfW so it moves rightward from the start */
      revX = -halfW

      const tick = (now: number) => {
        if (lastTime === -1) lastTime = now
        /* Cap dt to 2 frames so a backgrounded tab doesn't cause a jump */
        const dt = Math.min(now - lastTime, 66)
        lastTime = now

        if (!paused) {
          const step = pxPerSec * (dt / 1000)

          fwdX -= step
          if (fwdX <= -halfW) fwdX += halfW   // seamless: content at -halfW === content at 0

          revX += step
          if (revX >= 0) revX -= halfW          // seamless: content at 0 === content at -halfW
        }

        fwd.style.transform = `translate3d(${fwdX}px,0,0)`
        rev.style.transform = `translate3d(${revX}px,0,0)`

        rafId = requestAnimationFrame(tick)
      }

      rafId = requestAnimationFrame(tick)
    }

    const onEnter = () => { paused = true }
    const onLeave = () => { paused = false }
    fwd.addEventListener('mouseenter', onEnter)
    fwd.addEventListener('mouseleave', onLeave)
    rev.addEventListener('mouseenter', onEnter)
    rev.addEventListener('mouseleave', onLeave)

    /* Wait one frame so scrollWidth is settled after first paint */
    const initRaf = requestAnimationFrame(init)

    return () => {
      cancelAnimationFrame(initRaf)
      cancelAnimationFrame(rafId)
      fwd.removeEventListener('mouseenter', onEnter)
      fwd.removeEventListener('mouseleave', onLeave)
      rev.removeEventListener('mouseenter', onEnter)
      rev.removeEventListener('mouseleave', onLeave)
    }
  }, [fwdRef, revRef, pxPerSec])
}

/* ─── Main section ──────────────────────────────────────────────────── */
export default function Artists() {
  const ref    = useRef<HTMLElement>(null)
  const fwdRef = useRef<HTMLDivElement>(null)
  const revRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  /* ~100 px/s — smooth, natural scroll speed */
  useSeamlessTicker(fwdRef, revRef, 100)

  const double = [...ARTISTS, ...ARTISTS]

  return (
    <section id="artists" ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#040A14]" />
      <div
        className="absolute top-1/2 left-1/4 w-[600px] h-[400px] -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.1) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="platform-pill mb-5 inline-flex"
          >
            ✦ WB Recording Artists
          </motion.div>

          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: 80, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: EASE }}
              className="font-outfit font-black tracking-[-0.03em] leading-[0.95] text-white"
              style={{ fontSize: 'clamp(32px, 5.5vw, 64px)' }}
            >
              Meet Our
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 80, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
              className="font-outfit font-black tracking-[-0.03em] leading-[0.95]"
              style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', color: '#0A64C3' }}
            >
              Roster.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed max-w-2xl"
          >
            From Haryanvi folk icons to Punjabi hip-hop stars, WB distributes India&apos;s most
            loved regional voices to 150+ platforms worldwide.
          </motion.p>
        </div>
      </div>

      {/* ── Forward row — plain div, no framer wrapper ─────────────────── */}
      <div className="relative overflow-hidden mb-5">
        {/* Track — transform set by RAF ticker, NOT CSS animation */}
        <div ref={fwdRef} className="flex gap-4 py-2" style={{ willChange: 'transform' }}>
          {double.map((a, i) => <ArtistCard key={`fwd-${a.name}-${i}`} a={a} />)}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(90deg,#040A14 0%,transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(270deg,#040A14 0%,transparent 100%)' }} />
      </div>

      {/* ── Reverse row ────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <div ref={revRef} className="flex gap-4 py-2" style={{ willChange: 'transform' }}>
          {[...double].reverse().map((a, i) => <ArtistCard key={`rev-${a.name}-${i}`} a={a} />)}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(90deg,#040A14 0%,transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(270deg,#040A14 0%,transparent 100%)' }} />
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
        className="max-w-7xl mx-auto px-6 mt-10"
      >
        <div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-8 py-5 rounded-2xl"
          style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}
        >
          {[
            { num: '13+',       lbl: 'WB Roster Artists' },
            { num: '150+',      lbl: 'Platforms Worldwide' },
            { num: '72 hrs',    lbl: 'Go-Live Time' },
            { num: '100%',      lbl: 'Ownership (T&C apply)' },
          ].map((s, i) => (
            <motion.div key={i} className="flex flex-col items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: EASE }}
            >
              <span className="font-outfit font-black text-[22px] sm:text-[26px] text-blu leading-none">{s.num}</span>
              <span className="font-inter text-[10px] text-mut tracking-[0.08em] uppercase mt-1 text-center">{s.lbl}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
