'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

/* Page links navigate to dedicated pages; others scroll in-page */
const links: { href: string; label: string; page?: boolean }[] = [
  { href: '/about',        label: 'About',        page: true },
  { href: '/services',     label: 'Services',     page: true },
  { href: '/how-it-works', label: 'How It Works', page: true },
  { href: '/pricing',      label: 'Pricing',      page: true },
  { href: '/submit',       label: 'Submit',       page: true },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScroll = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#060C18]/95 backdrop-blur-xl border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleScroll('#hero')} className="flex items-center gap-3 group">
            <div className="relative w-10 h-9 rounded-lg overflow-hidden bg-white p-0.5 flex-shrink-0 group-hover:shadow-[0_0_12px_rgba(10,100,195,0.5)] transition-all duration-300">
              <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats" fill sizes="40px" className="object-contain" />
            </div>
            <div>
              <div className="font-outfit font-black text-[15px] tracking-[0.04em] text-white leading-none">WESTERN BEATS</div>
              <div className="font-inter text-[9px] text-mut tracking-[0.12em] uppercase">Official Warner Music India Partner</div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l =>
              l.page ? (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 text-[13px] font-semibold text-mut hover:text-white tracking-wide transition-colors duration-200 relative group"
                >
                  {l.label}
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
              ) : (
                <button
                  key={l.href}
                  onClick={() => handleScroll(l.href)}
                  className="px-4 py-2 text-[13px] font-semibold text-mut hover:text-white tracking-wide transition-colors duration-200 relative group"
                >
                  {l.label}
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </button>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleScroll('#distribution')}
              className="px-5 py-2.5 bg-blu rounded-lg font-outfit font-bold text-[13px] text-white hover:bg-[#0D77E0] transition-colors duration-200"
            >
              Distribute Free
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#060C18]/98 backdrop-blur-xl flex flex-col justify-center items-center gap-6"
          >
            {links.map((l, i) =>
              l.page ? (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-outfit font-extrabold text-3xl text-white hover:text-blu transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleScroll(l.href)}
                  className="font-outfit font-extrabold text-3xl text-white hover:text-blu transition-colors"
                >
                  {l.label}
                </motion.button>
              )
            )}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              onClick={() => handleScroll('#distribution')}
              className="mt-6 px-8 py-3 bg-blu rounded-xl font-outfit font-bold text-lg text-white"
            >
              Distribute Free →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
