'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { PARTNERS } from './artistsData'

const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

export default function Partners() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="partners" className="py-24 sm:py-28 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div variants={fadeUp} className="platform-pill mb-5 inline-flex">
            Association Partners
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
          >
            <span className="text-white">Trusted by India&apos;s</span>{' '}
            <span style={{ color: '#0A64C3' }}>Biggest Names.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-inter text-[15px] text-mut leading-relaxed">
            Officially backed by Warner Music India and partnered with the labels and platforms
            shaping the future of Indian music.
          </motion.p>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: EASE }}
              className="rounded-2xl flex items-center justify-center p-6 lg:p-7 aspect-[3/2] relative group"
              style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute bottom-2 left-0 right-0 text-center font-inter text-[10px] text-mut opacity-0 group-hover:opacity-100 transition-opacity">
                {p.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
