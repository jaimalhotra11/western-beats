'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, LayoutDashboard, LogOut } from 'lucide-react'

const links: { href: string; label: string; page?: boolean }[] = [
  { href: '/about',        label: 'About',        page: true },
  { href: '/services',     label: 'Services',     page: true },
  { href: '/how-it-works', label: 'How It Works', page: true },
  { href: '/pricing',      label: 'Pricing',      page: true },
  { href: '/submit',       label: 'Submit',       page: true },
  { href: '/contact',      label: 'Contact',      page: true },
]

interface AuthState {
  checked: boolean
  isLoggedIn: boolean
  artistName?: string
  email?: string
}

export default function Nav() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [auth, setAuth] = useState<AuthState>({ checked: false, isLoggedIn: false })
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    fetch('/api/auth/me')
      .then(r => r.json())
      .then(d => setAuth({ checked: true, isLoggedIn: !!d.isLoggedIn, artistName: d.artistName || d.name, email: d.email }))
      .catch(() => setAuth({ checked: true, isLoggedIn: false }))
  }, [])

  // Close user menu on outside click
  useEffect(() => {
    if (!userMenuOpen) return
    const handler = () => setUserMenuOpen(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [userMenuOpen])

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    setAuth({ checked: true, isLoggedIn: false })
    setMenuOpen(false)
    setUserMenuOpen(false)
    router.push('/')
    router.refresh()
  }

  const initial = auth.artistName ? auth.artistName.charAt(0).toUpperCase() : '?'

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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats" fill sizes="40px" className="object-contain drop-shadow-[0_0_8px_rgba(10,100,195,0.4)]" />
            </div>
            <div className="font-outfit font-black text-[15px] tracking-[0.04em] text-white leading-none">WESTERN BEATS</div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-[13px] font-semibold text-mut hover:text-white tracking-wide transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}
          </div>

          {/* CTA — auth-aware */}
          <div className="hidden md:flex items-center gap-2">
            {!auth.checked ? (
              // Skeleton while checking
              <div style={{ width: 80, height: 36, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }} />
            ) : auth.isLoggedIn ? (
              // Logged-in state
              <div style={{ position: 'relative' }}>
                <button
                  onClick={e => { e.stopPropagation(); setUserMenuOpen(o => !o) }}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 10, padding: '7px 14px', cursor: 'pointer', color: '#fff' }}
                >
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#0A64C3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900, color: '#fff', flexShrink: 0 }}>
                    {initial}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-outfit, sans-serif)', maxWidth: 110, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {auth.artistName || 'Artist'}
                  </span>
                  <span style={{ fontSize: 10, color: '#5CB2DC' }}>▾</span>
                </button>

                {userMenuOpen && (
                  <div
                    onClick={e => e.stopPropagation()}
                    style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, background: '#060C18', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: 8, minWidth: 200, boxShadow: '0 20px 60px rgba(0,0,0,0.5)', zIndex: 100 }}
                  >
                    <div style={{ padding: '8px 12px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 6 }}>
                      <p style={{ color: '#fff', fontSize: 13, fontWeight: 700, margin: '0 0 2px' }}>{auth.artistName}</p>
                      <p style={{ color: '#4A5568', fontSize: 12, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{auth.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setUserMenuOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, color: '#E2E8F0', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(10,100,195,0.15)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <LayoutDashboard size={15} style={{ color: '#5CB2DC' }} /> Dashboard
                    </Link>
                    <Link
                      href="/submit"
                      onClick={() => setUserMenuOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, color: '#E2E8F0', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(10,100,195,0.15)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <span style={{ fontSize: 15 }}>🎵</span> Submit Track
                    </Link>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 6, paddingTop: 6 }}>
                      <button
                        onClick={handleLogout}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, color: '#F87171', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', width: '100%', transition: 'background 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(248,113,113,0.1)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <LogOut size={14} /> Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Logged-out state
              <>
                <Link
                  href="/sign-in"
                  className="px-4 py-2.5 rounded-lg font-outfit font-bold text-[13px] text-mut hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  Log In
                </Link>
                <Link
                  href="/sign-up"
                  className="px-5 py-2.5 bg-blu rounded-lg font-outfit font-bold text-[13px] text-white hover:bg-[#0D77E0] transition-colors duration-200"
                >
                  Distribute Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
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
            className="fixed inset-0 z-40 bg-[#060C18]/98 backdrop-blur-xl flex flex-col justify-center items-center gap-5"
          >
            <button className="absolute top-5 right-5 text-white" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>

            {links.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Link href={l.href} onClick={() => setMenuOpen(false)} className="font-outfit font-extrabold text-3xl text-white hover:text-blu transition-colors">
                  {l.label}
                </Link>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }} className="mt-6 flex flex-col items-center gap-3 w-64">
              {auth.isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center px-8 py-3 bg-blu rounded-xl font-outfit font-bold text-lg text-white"
                  >
                    My Dashboard →
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center px-8 py-3 border border-white/20 rounded-xl font-outfit font-bold text-lg text-white"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/sign-in" onClick={() => setMenuOpen(false)} className="block w-full text-center px-8 py-3 border border-white/20 rounded-xl font-outfit font-bold text-lg text-white">
                    Log In
                  </Link>
                  <Link href="/sign-up" onClick={() => setMenuOpen(false)} className="block w-full text-center px-8 py-3 bg-blu rounded-xl font-outfit font-bold text-lg text-white">
                    Distribute Free →
                  </Link>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
