'use client'
import Image from 'next/image'
import { Mail, Globe, Phone, ArrowUp } from 'lucide-react'

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const LINKS = {
  Company:  ['About Us','Warner Music India Partnership','Careers','Press & Media'],
  Services: ['Music Distribution','Event Management','Talent Management','Audio & Video Production'],
  Artists:  ['How It Works','Royalties & Payments','Platform Coverage','Artist Stories'],
  Legal:    ['Terms of Service','Privacy Policy','Distribution Agreement','Contact Us'],
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
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blu/40">
                <Image src="/logo.jpg" alt="WB Digital" width={40} height={40} className="object-cover" />
              </div>
              <div>
                <div className="font-outfit font-black text-white text-[15px] tracking-[0.06em]">WB DIGITAL</div>
                <div className="font-inter text-[9px] text-mut tracking-[0.12em] uppercase">Western Beats Private Limited</div>
              </div>
            </div>
            <p className="font-inter text-[14px] text-mut leading-relaxed mb-6 max-w-xs">
              India's most credible music distribution platform. Officially backed by Warner Music India. Where independent meets major.
            </p>
            <div className="platform-pill mb-6 inline-flex text-[10px]">Warner Music India · Official Partner</div>
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
                  <li key={item}>
                    <a href="#" className="font-inter text-[13px] text-mut hover:text-white transition-colors duration-200">{item}</a>
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
