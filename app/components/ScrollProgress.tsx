'use client'
import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[999] pointer-events-none"
      aria-hidden
    >
      <div className="w-full h-full" style={{
        background: 'linear-gradient(90deg, #C41230 0%, #0A64C3 50%, #5CB2DC 100%)',
        boxShadow: '0 0 12px rgba(10,100,195,0.6)',
      }} />
    </motion.div>
  )
}
