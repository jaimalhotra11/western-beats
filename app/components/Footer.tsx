'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Globe, Phone, ArrowUp } from 'lucide-react'

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const LINKS: Record<string, { label: string; href: string }[]> = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Warner Music India Partnership', href: '/wmi-partnership' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press & Media', href: '/press' },
  ],
  Services: [
    { label: 'Music Distribution', href: '/services' },
    { label: 'Event Management', href: '/services' },
    { label: 'Talent Management', href: '/services' },
    { label: 'Audio & Video Production', href: '/services' },
  ],
  Artists: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Royalties & Payments', href: '/royalties' },
    { label: 'Platform Coverage', href: '/platforms' },
    { label: 'Artist Stories', href: '/artist-stories' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Distribution Agreement', href: '/terms' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

const SOCIALS = [
  { Icon: IgIcon,  href: 'https://instagram.com/wb_digital_', label: 'Instagram' },
  { Icon: Mail,    href: 'mailto:contact@westernbeats.com',   label: 'Email' },
  { Icon: Globe,   href: 'https://westernbeats.com',          label: 'Website' },
  { Icon: Phone,   href: 'tel:+919319910662',                 label: 'Phone' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#040810] border-t border-white/[0.06]">
      <div className="crm-stripe" />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats" width={48} height={48} className="object-contain w-full h-full drop-shadow-[0_0_8px_rgba(10,100,195,0.4)]" />
              </div>
              <div>
                <div className="font-outfit font-black text-white text-[15px] tracking-[0.04em]">WESTERN BEATS</div>
                <div className="font-inter text-[9px] text-mut tracking-[0.12em] uppercase">Western Beats Private Limited</div>
              </div>
            </div>
            <p className="font-inter text-[14px] text-mut leading-relaxed mb-4 max-w-xs">
              India&apos;s most credible full-service music company. Our platform WB Digital is officially backed by Warner Music India. Where independent meets major.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-7 flex-shrink-0">
                <Image src="/partners/warnermusicindia-3pJs86tg.png" alt="Warner Music India" width={32} height={28} className="object-contain w-full h-full" />
              </div>
              <span className="font-inter text-[10px] text-sky tracking-[0.08em] uppercase font-semibold">Official Warner Music India Partner</span>
            </div>
            <div className="flex items-center gap-3">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-mut hover:text-white hover:bg-blu/20 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <s.Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <div className="font-outfit font-bold text-white text-[13px] tracking-[0.08em] uppercase mb-5">{category}</div>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link href={item.href} className="font-inter text-[13px] text-mut hover:text-white transition-colors duration-200">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-inter text-[12px] text-mut">
            © 2026 Western Beats Private Limited. All rights reserved. · Official Distribution Partner @warnermusicindia
          </div>
          <button onClick={scrollTop}
            className="flex items-center gap-2 font-inter text-[12px] text-mut hover:text-white transition-colors duration-200 group">
            Back to top
            <div className="w-6 h-6 rounded-full flex items-center justify-center group-hover:bg-blu/20 transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)' }}>
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
