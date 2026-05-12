'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FaInstagram, FaYoutube, FaSpotify, FaMapMarkerAlt } from 'react-icons/fa'
import { ARTISTS } from './artistsData'

const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

export default function Artists() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="artists" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(10,100,195,0.08) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <motion.div variants={fadeUp} className="platform-pill mb-5 inline-flex">
            Recording Artists
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
          >
            <span className="text-white">Meet Our</span>{' '}
            <span style={{ color: '#0A64C3' }}>Roster.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed">
            From Haryanvi folk to Punjabi hip-hop, Rajasthani heritage to urban fusion — WB Digital
            distributes some of India&apos;s most loved regional voices to 150+ platforms worldwide.
          </motion.p>
        </motion.div>

        {/* Artist grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {ARTISTS.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
              className="group rounded-2xl overflow-hidden relative"
              style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 40%, rgba(8,15,26,0.75) 80%, #080F1A 100%)',
                  }}
                />
                {/* Followers badge */}
                <div className="absolute top-4 right-4">
                  <div
                    className="px-2.5 py-1 rounded-full font-outfit font-bold text-[10px] text-white"
                    style={{ background: 'rgba(10,100,195,0.9)', backdropFilter: 'blur(6px)' }}
                  >
                    {a.followers}
                  </div>
                </div>
                {/* Name + genre overlay */}
                <div className="absolute left-0 right-0 bottom-0 p-5">
                  <div className="font-outfit font-black text-white text-[22px] leading-tight">
                    {a.name}
                  </div>
                  <div className="font-inter text-[11.5px] text-blu mt-0.5 uppercase tracking-[0.08em]">
                    {a.genre}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-mut font-inter text-[11px] mb-3">
                  <FaMapMarkerAlt size={11} />
                  <span>{a.location}</span>
                  <span className="opacity-40">·</span>
                  <span>{a.experience}</span>
                </div>
                <p className="font-inter text-[12.5px] text-ice/85 leading-relaxed mb-4 line-clamp-3">
                  {a.description}
                </p>
                {/* Hits */}
                <div className="mb-4">
                  <div className="font-outfit font-semibold text-white text-[10px] uppercase tracking-[0.1em] mb-2 opacity-70">
                    Popular Hits
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {a.hits.map(h => (
                      <span
                        key={h}
                        className="px-2 py-0.5 rounded-full font-inter text-[10.5px] text-ice"
                        style={{ background: 'rgba(10,100,195,0.14)', border: '1px solid rgba(10,100,195,0.25)' }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Socials */}
                <div className="flex items-center gap-2 pt-3 border-t border-white/[0.07]">
                  {a.instagram && (
                    <a
                      href={a.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center text-mut hover:text-white transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                      aria-label={`${a.name} Instagram`}
                    >
                      <FaInstagram size={14} />
                    </a>
                  )}
                  {a.youtube && (
                    <a
                      href={a.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center text-mut hover:text-white transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                      aria-label={`${a.name} YouTube`}
                    >
                      <FaYoutube size={14} />
                    </a>
                  )}
                  {a.spotify && (
                    <a
                      href={a.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center text-mut hover:text-white transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                      aria-label={`${a.name} Spotify`}
                    >
                      <FaSpotify size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
