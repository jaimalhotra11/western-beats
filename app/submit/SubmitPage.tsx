'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, FormEvent, useEffect, useRef } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'
import {
  Mail, CheckCircle, ArrowRight, Upload, Clock,
  Globe2, DollarSign, Loader2, Music, FileImage,
  Info, Tag, ShieldCheck, AtSign
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

const GENRES = [
  'Bollywood / Film','Punjabi','Hip-Hop / Rap','Pop','Indie Pop',
  'Electronic / EDM','R&B / Soul','Classical Fusion','Devotional',
  'Haryanvi','Bhojpuri','Tamil','Telugu','Kannada','Malayalam','Other',
]
const SUB_GENRES: Record<string, string[]> = {
  'Bollywood / Film': ['Romantic','Item Song','Sad Song','Patriotic','Party','Dance','Ghazal','Qawwali'],
  'Punjabi': ['Bhangra','Sufi','Sad Punjabi','Desi Pop','Party Punjabi'],
  'Hip-Hop / Rap': ['Desi Hip-Hop','Trap','Conscious Rap','Battle Rap','Boom Bap'],
  'Pop': ['Indie Pop','Dance Pop','Electropop','Synth Pop','Dream Pop'],
  'Indie Pop': ['Acoustic','Alt-Pop','Lo-Fi Pop','Bedroom Pop'],
  'Electronic / EDM': ['House','Techno','Trance','Dubstep','Drum & Bass','Ambient'],
  'R&B / Soul': ['Contemporary R&B','Neo Soul','Funk','Gospel'],
  'Classical Fusion': ['Hindustani','Carnatic','Indo-Jazz','Sufi Fusion'],
  'Devotional': ['Bhajan','Aarti','Kirtan','Qawwali','Mantra'],
  'Haryanvi': ['Haryanvi Dance','Haryanvi Folk','Haryanvi Sad'],
  'Bhojpuri': ['Bhojpuri Film','Bhojpuri Folk','Bhojpuri Dance'],
  'Tamil': ['Tamil Film','Tamil Folk','Tamil Pop','Kollywood'],
  'Telugu': ['Telugu Film','Telugu Folk','Telugu Pop','Tollywood'],
  'Kannada': ['Kannada Film','Kannada Folk','Sandalwood'],
  'Malayalam': ['Malayalam Film','Malayalam Folk','Mollywood'],
  'Other': ['Folk','Regional','World Music','Experimental'],
}
const MOODS = [
  'Happy','Sad','Romantic','Energetic','Melancholic','Chill','Party','Motivational',
  'Devotional','Angry','Nostalgic','Dreamy','Dark','Peaceful','Empowering','Heartbreak',
]
const LANGUAGES = [
  'Hindi','Punjabi','English','Tamil','Telugu','Kannada',
  'Malayalam','Bengali','Marathi','Gujarati','Bhojpuri','Other',
]

const STEPS = [
  { Icon: Mail,        color: '#0A64C3', num: '01', title: 'We Review in 24 Hours',     desc: 'Our team checks your metadata, artwork, and audio quality against platform standards.' },
  { Icon: CheckCircle, color: '#5CB2DC', num: '02', title: 'Approval & Onboarding',     desc: 'We confirm distribution details, assign your ISRC/UPC, and finalise your release profile.' },
  { Icon: Globe2,      color: '#0A64C3', num: '03', title: 'Live on 150+ Platforms',    desc: 'Your music goes live on 150+ platforms within 72 hrs. Music uploaded Friday goes live Monday.' },
  { Icon: DollarSign,  color: '#C41230', num: '04', title: 'Earn 100% Every Month',      desc: '100% of every stream goes directly to you. Track it all on your real-time analytics dashboard.' },
]

const INCLUDE = [
  { Icon: Music,       title: 'Audio File',       note: 'WAV (preferred) or 320kbps MP3' },
  { Icon: FileImage,   title: 'Album Artwork',     note: 'Square JPG/PNG, min 3000×3000px' },
  { Icon: Info,        title: 'Track Details',     note: 'Artist name & track name exactly as you want them' },
  { Icon: Tag,         title: 'Genre & Language',  note: 'For accurate platform categorisation' },
  { Icon: ShieldCheck, title: 'Ownership Proof',   note: 'Confirm you own 100% of the recording rights' },
  { Icon: AtSign,      title: 'Active Email',      note: 'So we can send approval & royalty updates' },
]

type FormFields = {
  artistName: string; trackName: string; albumName: string; email: string; phone: string;
  genre: string; subGenre: string; language: string; releaseDate: string;
  singer: string; lyricWriter: string; musicDirector: string; musicArranger: string;
  director: string; mixer: string; producer: string; moods: string;
  driveLink: string; spotifyLink: string; message: string;
}
const EMPTY: FormFields = {
  artistName: '', trackName: '', albumName: '', email: '', phone: '',
  genre: '', subGenre: '', language: '', releaseDate: '',
  singer: '', lyricWriter: '', musicDirector: '', musicArranger: '',
  director: '', mixer: '', producer: '', moods: '',
  driveLink: '', spotifyLink: '', message: '',
}

export default function SubmitPage() {
  const [fields, setFields] = useState<FormFields>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.page-hero-line', {
        y: 80, opacity: 0, skewY: 3, stagger: 0.12,
        duration: 1.0, ease: 'power4.out', delay: 0.1,
      })
      gsap.from('.page-badge', {
        y: -20, opacity: 0, duration: 0.6, ease: 'power3.out',
      })
      gsap.from('.page-subtext', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.5,
      })
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => {
        gsap.from(el, {
          y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        })
      })
      gsap.utils.toArray<HTMLElement>('.gsap-card').forEach((el) => {
        const cards = el.querySelectorAll<HTMLElement>('.card-item')
        if (!cards.length) return
        gsap.from(cards, {
          y: 50, opacity: 0, scale: 0.95, stagger: 0.1, duration: 0.7,
          ease: 'back.out(1.4)',
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const set = (k: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFields(f => ({ ...f, [k]: e.target.value }))

  const setGenre = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFields(f => ({ ...f, genre: e.target.value, subGenre: '' }))

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('https://formspree.io/f/xwkgnezb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Artist Name': fields.artistName,
          'Track Name': fields.trackName,
          'Album Name': fields.albumName,
          'Email': fields.email,
          'Phone': fields.phone,
          'Genre': fields.genre,
          'Sub Genre': fields.subGenre,
          'Language': fields.language,
          'Preferred Release Date': fields.releaseDate,
          'Singer': fields.singer,
          'Lyric Writer': fields.lyricWriter,
          'Music Director': fields.musicDirector,
          'Music Arranger': fields.musicArranger,
          'Director': fields.director,
          'Mixer': fields.mixer,
          'Producer': fields.producer,
          'Moods': fields.moods,
          'Drive / WeTransfer Link': fields.driveLink,
          'Spotify / Social Profile': fields.spotifyLink,
          'Message': fields.message,
        }),
      })
      if (res.ok) { setStatus('success') }
      else {
        const d = await res.json().catch(() => ({}))
        throw new Error((d as { error?: string }).error || 'Submission failed')
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      setErrorMsg(message)
      setStatus('error')
      const sub = encodeURIComponent(`Music Submission: ${fields.trackName} by ${fields.artistName}`)
      const body = encodeURIComponent(`Artist: ${fields.artistName}\nTrack: ${fields.trackName}\nAlbum: ${fields.albumName}\nEmail: ${fields.email}\nPhone: ${fields.phone}\nGenre: ${fields.genre}\nSub Genre: ${fields.subGenre}\nLanguage: ${fields.language}\nRelease Date: ${fields.releaseDate}\nSinger: ${fields.singer}\nLyric Writer: ${fields.lyricWriter}\nMusic Director: ${fields.musicDirector}\nMusic Arranger: ${fields.musicArranger}\nDirector: ${fields.director}\nMixer: ${fields.mixer}\nProducer: ${fields.producer}\nMoods: ${fields.moods}\nDrive Link: ${fields.driveLink}\nSpotify: ${fields.spotifyLink}\nMessage: ${fields.message}`)
      window.location.href = `mailto:contact@westernbeats.com?subject=${sub}&body=${body}`
    }
  }

  const inputCls = `w-full bg-[#060D1F] border border-white/[0.09] rounded-xl px-4 py-3 font-inter text-[14px] text-white placeholder:text-[#4A5568] focus:outline-none focus:border-[#0A64C3] focus:ring-1 focus:ring-[#0A64C3]/40 transition-all duration-200`
  const labelCls = `block font-outfit font-semibold text-[12px] text-[#8899AA] tracking-[0.08em] uppercase mb-1.5`

  const subGenreOptions = fields.genre ? (SUB_GENRES[fields.genre] || []) : []

  return (
    <div ref={sectionRef} className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

      {/* ── NAV ────────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060C18]/95 backdrop-blur-xl border-b border-white/[0.06] py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-9 flex-shrink-0">
              <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats" fill sizes="40px" className="object-contain" />
            </div>
            <div>
              <div className="font-outfit font-black text-[15px] tracking-[0.04em] text-white leading-none">WESTERN BEATS</div>
              <div className="font-inter text-[9px] text-mut tracking-[0.12em] uppercase">Official Warner Music Partner</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/submit', label: 'Submit Music', active: true },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className={`px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 relative group ${l.active ? 'text-white' : 'text-mut hover:text-white'}`}>
                {l.label}
                {l.active
                  ? <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu rounded-full" />
                  : <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />}
              </Link>
            ))}
          </div>
          <a href="mailto:contact@westernbeats.com?subject=Music Distribution Submission"
            className="hidden md:flex px-5 py-2.5 bg-blu rounded-lg font-outfit font-bold text-[13px] text-white hover:bg-[#0D77E0] transition-colors duration-200">
            Email Us
          </a>
        </div>
      </nav>

      {/* ── HERO + FORM ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/4 w-[700px] h-[500px] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.13) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Submit Your Music</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">

            {/* LEFT: Headline + info */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
              <div className="platform-pill page-badge mb-6 inline-flex">✦ Free. Fast. Warner Music Partner Backed.</div>
              <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(36px, 5.5vw, 70px)' }}>
                <span className="page-hero-line block text-white">Submit Your</span>
                <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Music Free.</span>
                <span className="page-hero-line block text-white">Go Live in</span>
                <span className="page-hero-line block text-white">72 Hours.</span>
              </h1>
              <p className="page-subtext font-inter text-[16px] text-mut leading-relaxed mb-8 max-w-lg">
                Reach 150+ streaming platforms worldwide: JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and more.
                <strong className="text-white"> Always free. 100% ownership of your masters.</strong>
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
                {[
                  { val: 'FREE', lbl: 'To Submit' },
                  { val: '24hrs', lbl: 'Review Time' },
                  { val: '72hrs', lbl: 'Go-Live Time' },
                  { val: '100%', lbl: 'Ownership Yours' },
                ].map(s => (
                  <div key={s.val} className="flex flex-col">
                    <span className="font-outfit font-black text-[26px] sm:text-[30px] leading-none" style={{ color: '#0A64C3' }}>{s.val}</span>
                    <span className="font-inter text-[11px] text-mut tracking-[0.08em] uppercase mt-1">{s.lbl}</span>
                  </div>
                ))}
              </div>

              {/* What happens next */}
              <div className="rounded-2xl p-6" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="font-outfit font-extrabold text-white text-[15px] mb-5">What Happens After You Submit?</div>
                <div className="flex flex-col gap-5">
                  {STEPS.map((s, i) => {
                    const Icon = s.Icon
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}22` }}>
                          <Icon size={15} style={{ color: s.color }} />
                        </div>
                        <div>
                          <div className="font-outfit font-bold text-white text-[13px]">{s.num}: {s.title}</div>
                          <div className="font-inter text-[12px] text-mut leading-relaxed mt-0.5">{s.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* WMI badge */}
              <div className="flex items-center gap-4 rounded-xl p-4 mt-5"
                style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
                <div className="relative w-10 h-9 rounded-lg overflow-hidden bg-white p-0.5 flex-shrink-0">
                  <Image src="/partners/warnermusicindia-3pJs86tg.png" alt="Warner Music Partner" fill sizes="40px" className="object-contain" />
                </div>
                <div>
                  <div className="font-outfit font-extrabold text-white text-[13px]">Warner Music Partner</div>
                  <div className="font-inter text-[11px] text-mut">Major-label credibility. Priority DSP placement.</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="lg:sticky lg:top-24"
            >
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="rounded-2xl p-10 text-center"
                  style={{ background: '#0A1535', border: '1px solid rgba(10,100,195,0.3)' }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(10,100,195,0.15)' }}>
                    <CheckCircle size={32} style={{ color: '#0A64C3' }} />
                  </div>
                  <h2 className="font-outfit font-black text-white text-[26px] mb-3">Submission Received!</h2>
                  <p className="font-inter text-[14px] text-mut leading-relaxed mb-8 max-w-sm mx-auto">
                    We&apos;ve received your music submission. Our team will review it and get back to you within <strong className="text-white">24 hours</strong>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button onClick={() => { setFields(EMPTY); setStatus('idle') }}
                      className="px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white bg-blu hover:bg-[#0D77E0] transition-colors duration-200">
                      Submit Another Track
                    </button>
                    <Link href="/"
                      className="px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white border border-white/10 hover:bg-white/[0.05] transition-colors duration-200 flex items-center justify-center gap-2">
                      Back to Home <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}
                  className="rounded-2xl p-7 sm:p-8"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(10,100,195,0.15)' }}>
                      <Upload size={18} style={{ color: '#0A64C3' }} />
                    </div>
                    <div>
                      <div className="font-outfit font-extrabold text-white text-[17px]">Submit Your Music</div>
                      <div className="font-inter text-[12px] text-mut">Fill in the details below, takes 2 minutes</div>
                    </div>
                  </div>

                  {/* Row 1: Artist + Email */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Artist Name *</label>
                      <input required value={fields.artistName} onChange={set('artistName')}
                        placeholder="Your artist name" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Email Address *</label>
                      <input required type="email" value={fields.email} onChange={set('email')}
                        placeholder="you@example.com" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 2: Phone + Release Date */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Phone / WhatsApp *</label>
                      <input required type="tel" value={fields.phone} onChange={set('phone')}
                        placeholder="+91 98765 43210" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Release Date *</label>
                      <input required type="date" value={fields.releaseDate} onChange={set('releaseDate')} className={inputCls} />
                    </div>
                  </div>

                  {/* Section divider */}
                  <div className="flex items-center gap-3 mb-4 mt-6">
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase" style={{ color: '#4A5568' }}>Release Details</span>
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  </div>

                  {/* Row 3: Language + Track */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Language *</label>
                      <select required value={fields.language} onChange={set('language')} className={inputCls}>
                        <option value="" disabled>Select Language</option>
                        {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Track *</label>
                      <input required value={fields.trackName} onChange={set('trackName')}
                        placeholder="ex: (Tum Ho)" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 4: Album + Singer */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Album <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input value={fields.albumName} onChange={set('albumName')}
                        placeholder="ex: (Heartbreak Hits)" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Singer *</label>
                      <input required value={fields.singer} onChange={set('singer')}
                        placeholder="ex: (Arijit Singh)" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 5: Lyric Writer + Music Director */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Lyric Writer *</label>
                      <input required value={fields.lyricWriter} onChange={set('lyricWriter')}
                        placeholder="ex: (Irshad Kamil)" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Music Director *</label>
                      <input required value={fields.musicDirector} onChange={set('musicDirector')}
                        placeholder="ex: (Pritam)" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 6: Music Arranger + Director */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Music Arranger <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input value={fields.musicArranger} onChange={set('musicArranger')}
                        placeholder="ex: (A.R. Rahman)" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Director <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input value={fields.director} onChange={set('director')}
                        placeholder="ex: (Rohit Shetty)" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 7: Mixer + Producer */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Mixer <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input value={fields.mixer} onChange={set('mixer')}
                        placeholder="ex: (Eric Pillai)" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Producer <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input value={fields.producer} onChange={set('producer')}
                        placeholder="ex: (Bhushan Kumar)" className={inputCls} />
                    </div>
                  </div>

                  {/* Section divider */}
                  <div className="flex items-center gap-3 mb-4 mt-6">
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase" style={{ color: '#4A5568' }}>Classification</span>
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  </div>

                  {/* Row 8: Genre + Sub Genre */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Genre *</label>
                      <select required value={fields.genre} onChange={setGenre} className={inputCls}>
                        <option value="" disabled>Select Genre</option>
                        {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Sub Genre *</label>
                      <select required value={fields.subGenre} onChange={set('subGenre')} className={inputCls} disabled={!fields.genre}>
                        <option value="" disabled>Select Sub Genre</option>
                        {subGenreOptions.map(sg => <option key={sg} value={sg}>{sg}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Row 9: Moods */}
                  <div className="mb-4">
                    <label className={labelCls}>Moods *</label>
                    <select required value={fields.moods} onChange={set('moods')} className={inputCls}>
                      <option value="" disabled>Select Moods</option>
                      {MOODS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>

                  {/* Section divider */}
                  <div className="flex items-center gap-3 mb-4 mt-6">
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase" style={{ color: '#4A5568' }}>Upload & Links</span>
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  </div>

                  {/* Drive link */}
                  <div className="mb-4">
                    <label className={labelCls}>Google Drive / WeTransfer Link *</label>
                    <input required type="url" value={fields.driveLink} onChange={set('driveLink')}
                      placeholder="https://drive.google.com/..." className={inputCls} />
                    <p className="font-inter text-[11px] text-mut mt-1.5">Upload your WAV/MP3 audio + square artwork to Drive and share the link here.</p>
                  </div>

                  {/* Spotify / social */}
                  <div className="mb-4">
                    <label className={labelCls}>Spotify / Social Profile Link <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                    <input type="url" value={fields.spotifyLink} onChange={set('spotifyLink')}
                      placeholder="https://open.spotify.com/artist/..." className={inputCls} />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className={labelCls}>Anything Else? <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                    <textarea value={fields.message} onChange={set('message')} rows={3}
                      placeholder="Mood, references, special instructions, event tie-ins..."
                      className={`${inputCls} resize-none`} />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="mb-5 rounded-xl px-4 py-3 font-inter text-[13px]"
                      style={{ background: 'rgba(196,18,48,0.1)', border: '1px solid rgba(196,18,48,0.25)', color: '#f87171' }}>
                      {errorMsg || 'Something went wrong.'} We&apos;ve opened your email client as a fallback.
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-outfit font-bold text-[15px] text-white transition-all duration-200 disabled:opacity-60"
                    style={{ background: '#0A64C3', boxShadow: '0 8px 32px rgba(10,100,195,0.35)' }}
                    onMouseEnter={e => { if (status !== 'loading') (e.currentTarget as HTMLButtonElement).style.background = '#0D77E0' }}
                    onMouseLeave={e => { if (status !== 'loading') (e.currentTarget as HTMLButtonElement).style.background = '#0A64C3' }}
                  >
                    {status === 'loading'
                      ? <><Loader2 size={18} className="animate-spin" /> Submitting…</>
                      : <><Upload size={17} /> Submit My Music <ArrowRight size={15} /></>
                    }
                  </button>

                  <p className="font-inter text-[11px] text-mut text-center mt-4">
                    Free forever · No upfront fees · You keep 100% ownership of your masters
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO INCLUDE ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: '#040810' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="platform-pill mb-4 inline-flex">✦ Submission Checklist</div>
            <h2 className="font-outfit font-black text-white tracking-[-0.02em]" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
              What to Include in Your Upload
            </h2>
          </div>
          <div className="gsap-card grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INCLUDE.map((item, i) => {
              const Icon = item.Icon
              return (
                <motion.div key={item.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                  className="rounded-xl p-5 flex items-start gap-4"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(10,100,195,0.15)' }}>
                    <Icon size={17} style={{ color: '#0A64C3' }} />
                  </div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[14px]">{item.title}</div>
                    <div className="font-inter text-[12px] text-mut mt-1 leading-relaxed">{item.note}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-10" style={{ background: '#040810' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-inter text-[12px] text-mut">© 2026 Western Beats Private Limited · Western Beats</div>
          <div className="flex items-center gap-5">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/pricing', label: 'Pricing' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="font-inter text-[12px] text-mut hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
