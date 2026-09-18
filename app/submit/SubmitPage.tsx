'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import { useState, FormEvent, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { gsap, registerGSAP } from '../lib/gsapUtils'
import {
  Mail, CheckCircle, ArrowRight, Upload, Clock,
  Globe2, DollarSign, Loader2, Music, FileImage,
  Info, Tag, ShieldCheck, AtSign
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const


const MOODS = [
  'Happy','Sad','Romantic','Energetic','Melancholic','Chill','Party','Motivational',
  'Devotional','Angry','Nostalgic','Dreamy','Dark','Peaceful','Empowering','Heartbreak',
]

const STEPS = [
  { Icon: Mail,        color: '#0A64C3', num: '01', title: 'We Review in 24 Hours',     desc: 'Our team checks your metadata, artwork, and audio quality against platform standards.' },
  { Icon: CheckCircle, color: '#5CB2DC', num: '02', title: 'Approval & Onboarding',     desc: 'We confirm distribution details, assign your ISRC/UPC, and finalise your release profile.' },
  { Icon: Globe2,      color: '#0A64C3', num: '03', title: 'Live on 150+ Platforms',    desc: 'Your music goes live on 150+ platforms within 72 hrs. Music uploaded Friday goes live Monday.' },
  { Icon: DollarSign,  color: '#C41230', num: '04', title: 'Earn 100% Every Month',      desc: '100% of every stream goes directly to you. Track it all on your real-time analytics dashboard.' },
]

const INCLUDE = [
  { Icon: Music,       title: 'Audio File',       note: 'WAV format only' },
  { Icon: FileImage,   title: 'Album Artwork',     note: 'JPG or PNG, exactly 3000×3000px' },
  { Icon: Info,        title: 'Track Details',     note: 'Artist name & track name exactly as you want them' },
  { Icon: Tag,         title: 'Language',  note: 'For accurate platform categorisation' },
  { Icon: ShieldCheck, title: 'Ownership Proof',   note: 'Confirm you own 100% of the recording rights' },
  { Icon: AtSign,      title: 'Active Email',      note: 'So we can send approval & royalty updates' },
]

const LABELS = [
  'Western Beats', 'Self-Released / Independent', 'Other',
]

const YOUTUBE_CONTENT_ID_OPTIONS = [
  'No Action',
  'Monetize',
  'Block',
  'Track',
]

type FormFields = {
  artistName: string; trackName: string; albumName: string; email: string; phone: string;
  language: string; releaseDate: string;
  singer: string; lyricWriter: string; musicDirector: string; musicArranger: string;
  director: string; mixer: string; producer: string; moods: string;
  labelName: string; upc: string; isrc: string;
  youtubeLink: string; instagramLink: string; spotifyLink: string; createSpotify: boolean;
  songLyrics: string; youtubeContentId: string;
  driveLink: string; message: string;
  legalName: string; address: string; clientType: 'India' | 'International';
}
const EMPTY: FormFields = {
  artistName: '', trackName: '', albumName: '', email: '', phone: '',
  language: '', releaseDate: '',
  singer: '', lyricWriter: '', musicDirector: '', musicArranger: '',
  director: '', mixer: '', producer: '', moods: '',
  labelName: '', upc: '', isrc: '',
  youtubeLink: '', instagramLink: '', spotifyLink: '', createSpotify: false,
  songLyrics: '', youtubeContentId: 'No Action',
  driveLink: '', message: '',
  legalName: '', address: '', clientType: 'India',
}

export default function SubmitPage() {
  const router = useRouter()
  const [fields, setFields] = useState<FormFields>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [termsError, setTermsError] = useState('')
  const [confirmedNotAI, setConfirmedNotAI] = useState(false)
  const [aiError, setAiError] = useState('')
  const [showTnC, setShowTnC] = useState(false)
  const [pendingSubmit, setPendingSubmit] = useState(false)
  const [tncAgreed, setTncAgreed] = useState(false)
  const [instagramError, setInstagramError] = useState('')
  const [spotifyError, setSpotifyError] = useState('')
  const [releaseDateError, setReleaseDateError] = useState('')
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [artworkFile, setArtworkFile] = useState<File | null>(null)
  const [panCardFile, setPanCardFile] = useState<File | null>(null)
  const [aadhaarFrontFile, setAadhaarFrontFile] = useState<File | null>(null)
  const [aadhaarBackFile, setAadhaarBackFile] = useState<File | null>(null)
  const [gstFile, setGstFile] = useState<File | null>(null)
  const [passportFile, setPassportFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState('')
  const [authChecked, setAuthChecked] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const todayISO = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)

  // Check auth on mount — show nothing until confirmed logged in
  useEffect(() => {
    fetch('/api/auth/me').then(res => {
      if (!res.ok) router.replace('/sign-up?next=/submit')
      else setAuthChecked(true)
    })
  }, [router])

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


  async function uploadFile(file: File, type: 'audio' | 'artwork' | 'document') {
    const fd = new FormData()
    fd.append('file', file)
    fd.append('upload_preset', 'wb_submissions')
    fd.append('folder', 'western-beats/submissions')
    const resourceType = type === 'audio' ? 'video' : type === 'document' ? 'image' : 'image'
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/sxbb8x9x/${resourceType}/upload`,
      { method: 'POST', body: fd }
    )
    const data = await res.json()
    if (!res.ok) throw new Error(data.error?.message || 'Upload failed')
    return { url: data.secure_url as string, publicId: data.public_id as string }
  }


  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Check auth before doing anything — redirect to sign-up if not logged in
    const meRes = await fetch('/api/auth/me')
    if (!meRes.ok) {
      router.push('/sign-up?next=/submit')
      return
    }
    setReleaseDateError(''); setTermsError(''); setAiError(''); setInstagramError(''); setSpotifyError('')
    if (fields.releaseDate < todayISO) { setReleaseDateError('Release Date cannot be in the past. Please choose today or a future date.'); return }
    if (!confirmedNotAI) { setAiError('You must confirm that your track is not AI-generated before submitting.'); return }
    if (fields.instagramLink && !fields.instagramLink.includes('instagram.com')) { setInstagramError('Only instagram.com links are allowed.'); return }
    if (fields.spotifyLink && !fields.spotifyLink.includes('spotify.com')) { setSpotifyError('Only spotify.com links are allowed.'); return }
    if (!audioFile) { setErrorMsg('Please upload your audio file (WAV format required).'); return }
    if (!artworkFile) { setErrorMsg('Please upload your cover artwork (3000×3000px or 1500×1500px JPG/PNG required).'); return }
    if (fields.clientType === 'India' && !panCardFile) { setErrorMsg('PAN Card is required. Please upload a JPG or PNG of your PAN card.'); return }
    if (fields.clientType === 'India' && !aadhaarFrontFile) { setErrorMsg('Aadhaar Card Front is required. Please upload a JPG or PNG.'); return }
    if (fields.clientType === 'India' && !aadhaarBackFile) { setErrorMsg('Aadhaar Card Back is required. Please upload a JPG or PNG.'); return }
    if (fields.clientType === 'International' && !passportFile) { setErrorMsg('Please upload your passport (photo page).'); return }
    // Show T&C popup — actual upload happens inside the modal
    setShowTnC(true)
    setPendingSubmit(true)
  }

  const inputCls = `w-full bg-[#060D1F] border border-white/[0.09] rounded-xl px-4 py-3 font-inter text-[14px] text-white placeholder:text-[#4A5568] focus:outline-none focus:border-[#0A64C3] focus:ring-1 focus:ring-[#0A64C3]/40 transition-all duration-200`
  const labelCls = `block font-outfit font-semibold text-[12px] text-[#8899AA] tracking-[0.08em] uppercase mb-1.5`


  if (!authChecked) {
    return (
      <div style={{ background: '#040A14', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 size={32} style={{ color: '#0A64C3', animation: 'spin 1s linear infinite' }} />
      </div>
    )
  }

  return (
    <div ref={sectionRef} className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

      <Nav />

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
              <div className="platform-pill page-badge mb-6 inline-flex">✦ Free. Fast. Warner Music India Partner Backed.</div>
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
                  <Image src="/partners/warnermusicindia-3pJs86tg.png" alt="Warner Music India Partner" fill sizes="40px" className="object-contain" />
                </div>
                <div>
                  <div className="font-outfit font-extrabold text-white text-[13px]">Warner Music India Partner</div>
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
                  style={{ background: '#0A1535', border: '1px solid rgba(52,211,153,0.25)' }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(52,211,153,0.12)' }}>
                    <CheckCircle size={32} style={{ color: '#34D399' }} />
                  </div>
                  <h2 className="font-outfit font-black text-white text-[26px] mb-3">Submission Received! 🎵</h2>
                  <p className="font-inter text-[14px] text-mut leading-relaxed mb-2 max-w-sm mx-auto">
                    We&apos;ve received your music. Our team will review it within <strong className="text-white">24 hours</strong>.
                  </p>
                  <p className="font-inter text-[13px] leading-relaxed mb-7 max-w-sm mx-auto" style={{ color: '#5CB2DC' }}>
                    A confirmation email has been sent to your inbox with a link to track your progress.
                  </p>

                  {/* Progress steps */}
                  <div className="flex items-center justify-center gap-1 mb-8 flex-wrap">
                    {['Submitted', 'Under Review', 'Approved', 'Distributing', 'Live'].map((step, i, arr) => (
                      <div key={step} className="flex items-center gap-1">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold"
                            style={{ background: i === 0 ? '#34D399' : 'rgba(255,255,255,0.07)', color: i === 0 ? '#040A14' : '#4A5568' }}>
                            {i === 0 ? '✓' : i + 1}
                          </div>
                          <span className="font-inter text-[9px] tracking-wide" style={{ color: i === 0 ? '#34D399' : '#4A5568' }}>{step}</span>
                        </div>
                        {i < arr.length - 1 && <div className="w-6 h-[2px] mb-4 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }} />}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/my-submissions"
                      className="px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white flex items-center justify-center gap-2"
                      style={{ background: '#0A64C3' }}>
                      Track My Submission <ArrowRight size={13} />
                    </Link>
                    <button onClick={() => { setFields(EMPTY); setAgreedToTerms(false); setTermsError(''); setReleaseDateError(''); setStatus('idle'); setPanCardFile(null); setGstFile(null); setPassportFile(null); setAudioFile(null); setArtworkFile(null); setConfirmedNotAI(false); setAiError('') }}
                      className="px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white border border-white/10 hover:bg-white/[0.05] transition-colors duration-200">
                      Submit Another Track
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}
                  className="rounded-2xl p-7 sm:p-8"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(10,100,195,0.15)' }}>
                      <Upload size={18} style={{ color: '#0A64C3' }} />
                    </div>
                    <div>
                      <div className="font-outfit font-extrabold text-white text-[17px]">Submit Your Music</div>
                      <div className="font-inter text-[12px] text-mut">Fill in the details below, takes 2 minutes</div>
                    </div>
                  </div>

                  {/* AI Rejection Warning Banner */}
                  <div className="mb-6 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(196,18,48,0.5)', background: 'rgba(196,18,48,0.07)' }}>
                    <div className="flex items-center gap-2 px-4 py-2" style={{ background: 'rgba(196,18,48,0.2)', borderBottom: '1px solid rgba(196,18,48,0.3)' }}>
                      <span style={{ fontSize: 15 }}>🚫</span>
                      <span className="font-outfit font-black text-[12px] tracking-[0.12em] uppercase" style={{ color: '#F87171' }}>AI-Generated Music Will Be Rejected</span>
                    </div>
                    <div className="px-4 py-3">
                      <p className="font-inter text-[12px] leading-relaxed" style={{ color: '#E2E8F0' }}>
                        We <strong style={{ color: '#fff' }}>do not accept</strong> AI-generated songs, AI vocals, AI beats, or any track created using tools like Suno, Udio, Boomy, or similar AI music generators.
                        All submitted music must be <strong style={{ color: '#fff' }}>100% original</strong> and created by a human artist.
                        AI-detected submissions will be <strong style={{ color: '#F87171' }}>immediately rejected</strong> without refund or appeal.
                      </p>
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
                      <input required type="date" min={todayISO} value={fields.releaseDate}
                        onChange={e => {
                          set('releaseDate')(e)
                          setReleaseDateError(e.target.value && e.target.value < todayISO
                            ? 'Release Date cannot be in the past. Please choose today or a future date.'
                            : '')
                        }}
                        className={inputCls} style={{ borderColor: releaseDateError ? '#C41230' : undefined }} />
                      {releaseDateError && <p className="font-inter text-[11px] mt-1.5" style={{ color: '#f87171' }}>{releaseDateError}</p>}
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
                      <input required value={fields.language} onChange={set('language')}
                        placeholder="e.g. Hindi, Punjabi, English..." className={inputCls} />
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
                        placeholder="ex: Ed Sheeran" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 5: Lyric Writer + Music Director */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Lyric Writer *</label>
                      <input required value={fields.lyricWriter} onChange={set('lyricWriter')}
                        placeholder="ex: Max Martin" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Music Director *</label>
                      <input required value={fields.musicDirector} onChange={set('musicDirector')}
                        placeholder="ex: Hans Zimmer" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 6: Music Arranger + Director */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Music Arranger *</label>
                      <input required value={fields.musicArranger} onChange={set('musicArranger')}
                        placeholder="ex: Quincy Jones" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Director *</label>
                      <input required value={fields.director} onChange={set('director')}
                        placeholder="ex: Martin Scorsese" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 7: Mixer + Producer */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Mixer *</label>
                      <input required value={fields.mixer} onChange={set('mixer')}
                        placeholder="ex: Andrew Scheps" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Producer *</label>
                      <input required value={fields.producer} onChange={set('producer')}
                        placeholder="ex: Interscope Records" className={inputCls} />
                    </div>
                  </div>

                  {/* Section divider */}
                  <div className="flex items-center gap-3 mb-4 mt-6">
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase" style={{ color: '#4A5568' }}>Classification</span>
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  </div>

                  {/* Row 8: Moods */}
                  <div className="mb-4">
                    <label className={labelCls}>Moods *</label>
                    <select required value={fields.moods} onChange={set('moods')} className={inputCls}>
                      <option value="" disabled>Select Moods</option>
                      {MOODS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>

                  {/* Section divider — Labels & Codes */}
                  <div className="flex items-center gap-3 mb-4 mt-6">
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase" style={{ color: '#4A5568' }}>Labels &amp; Codes</span>
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  </div>

                  {/* Label Name + UPC */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Label Name (P&amp;C Owner) *</label>
                      <input required type="text" value={fields.labelName} onChange={set('labelName')} className={inputCls} placeholder="e.g. Western Beats, Self-Released" />
                    </div>
                    <div>
                      <label className={labelCls}>UPC <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input type="text" value={fields.upc} onChange={set('upc')}
                        placeholder="upc" className={inputCls} />
                    </div>
                  </div>

                  {/* ISRC */}
                  <div className="mb-4">
                    <label className={labelCls}>ISRC <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                    <input type="text" value={fields.isrc} onChange={set('isrc')}
                      placeholder="ex: (ING642300741)" className={inputCls} />
                  </div>

                  {/* Section divider — Upload & Links */}
                  <div className="flex items-center gap-3 mb-4 mt-6">
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase" style={{ color: '#4A5568' }}>KYC &amp; Identity</span>
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  </div>

                  {/* Client Type toggle */}
                  <div className="mb-4">
                    <label className={labelCls}>Artist Location *</label>
                    <div className="flex gap-3">
                      {(['India', 'International'] as const).map(t => (
                        <button key={t} type="button"
                          onClick={() => setFields(f => ({ ...f, clientType: t }))}
                          className={`flex-1 py-3 rounded-xl font-outfit font-bold text-[13px] border transition-all duration-200 ${fields.clientType === t ? 'border-[#0A64C3] bg-[#0A64C3]/20 text-white' : 'border-white/10 bg-[#060D1F] text-[#8899AA]'}`}>
                          {t === 'India' ? '🇮🇳 India' : '🌍 International'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Legal Name + Address */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Legal Name *</label>
                      <input required value={fields.legalName} onChange={set('legalName')}
                        placeholder="Full legal name as per ID" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Full Address *</label>
                      <input required value={fields.address} onChange={set('address')}
                        placeholder="Street, City, State, PIN" className={inputCls} />
                    </div>
                  </div>

                  {/* KYC — India: PAN + Aadhaar required; International: Passport only */}
                  {fields.clientType === 'India' && (
                    <>
                      <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: '12px 16px', marginBottom: 16 }}>
                        <p className="font-inter text-[13px]" style={{ color: '#F87171', margin: 0, fontWeight: 600 }}>⚠️ PAN Card and Aadhaar Card (front + back) are mandatory. You cannot submit without uploading all three.</p>
                      </div>
                      <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className={labelCls}>PAN Card <span style={{ color: '#F87171' }}>*</span> <span className="normal-case tracking-normal font-normal text-[#4A5568]">(JPG or PNG only)</span></label>
                          <div onClick={() => document.getElementById('pan-upload')?.click()}
                            style={{ border: `1.5px dashed ${panCardFile ? '#34D399' : '#F8717155'}`, borderRadius: 12, padding: '14px 16px', cursor: 'pointer', background: '#060D1F', transition: 'border-color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = '#0A64C3')}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = panCardFile ? '#34D399' : '#F8717155')}>
                            <p className="font-inter text-[13px]" style={{ color: panCardFile ? '#34D399' : '#F87171', margin: 0 }}>
                              {panCardFile ? `✓ ${panCardFile.name}` : '+ Upload PAN Card (required)'}
                            </p>
                            <p className="font-inter text-[11px]" style={{ color: '#4A5568', margin: '4px 0 0' }}>JPG or PNG · Colour scan preferred</p>
                          </div>
                          <input id="pan-upload" type="file" accept="image/jpeg,image/png,image/jpg" className="hidden"
                            onChange={e => {
                              const f = e.target.files?.[0] || null
                              if (f && !f.type.startsWith('image/')) { alert('Please upload JPG or PNG only — PDF is not accepted.'); return }
                              setPanCardFile(f)
                            }} />
                        </div>
                        <div>
                          <label className={labelCls}>Aadhaar Card — Front <span style={{ color: '#F87171' }}>*</span> <span className="normal-case tracking-normal font-normal text-[#4A5568]">(JPG or PNG only)</span></label>
                          <div onClick={() => document.getElementById('aadhaar-front-upload')?.click()}
                            style={{ border: `1.5px dashed ${aadhaarFrontFile ? '#34D399' : '#F8717155'}`, borderRadius: 12, padding: '14px 16px', cursor: 'pointer', background: '#060D1F', transition: 'border-color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = '#0A64C3')}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = aadhaarFrontFile ? '#34D399' : '#F8717155')}>
                            <p className="font-inter text-[13px]" style={{ color: aadhaarFrontFile ? '#34D399' : '#F87171', margin: 0 }}>
                              {aadhaarFrontFile ? `✓ ${aadhaarFrontFile.name}` : '+ Upload Aadhaar Front (required)'}
                            </p>
                            <p className="font-inter text-[11px]" style={{ color: '#4A5568', margin: '4px 0 0' }}>JPG or PNG · Front side with photo</p>
                          </div>
                          <input id="aadhaar-front-upload" type="file" accept="image/jpeg,image/png,image/jpg" className="hidden"
                            onChange={e => {
                              const f = e.target.files?.[0] || null
                              if (f && !f.type.startsWith('image/')) { alert('Please upload JPG or PNG only.'); return }
                              setAadhaarFrontFile(f)
                            }} />
                        </div>
                        <div>
                          <label className={labelCls}>Aadhaar Card — Back <span style={{ color: '#F87171' }}>*</span> <span className="normal-case tracking-normal font-normal text-[#4A5568]">(JPG or PNG only)</span></label>
                          <div onClick={() => document.getElementById('aadhaar-back-upload')?.click()}
                            style={{ border: `1.5px dashed ${aadhaarBackFile ? '#34D399' : '#F8717155'}`, borderRadius: 12, padding: '14px 16px', cursor: 'pointer', background: '#060D1F', transition: 'border-color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = '#0A64C3')}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = aadhaarBackFile ? '#34D399' : '#F8717155')}>
                            <p className="font-inter text-[13px]" style={{ color: aadhaarBackFile ? '#34D399' : '#F87171', margin: 0 }}>
                              {aadhaarBackFile ? `✓ ${aadhaarBackFile.name}` : '+ Upload Aadhaar Back (required)'}
                            </p>
                            <p className="font-inter text-[11px]" style={{ color: '#4A5568', margin: '4px 0 0' }}>JPG or PNG · Back side with address</p>
                          </div>
                          <input id="aadhaar-back-upload" type="file" accept="image/jpeg,image/png,image/jpg" className="hidden"
                            onChange={e => {
                              const f = e.target.files?.[0] || null
                              if (f && !f.type.startsWith('image/')) { alert('Please upload JPG or PNG only.'); return }
                              setAadhaarBackFile(f)
                            }} />
                        </div>
                      </div>
                      <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className={labelCls}>GST Certificate <span className="normal-case tracking-normal font-normal text-[#4A5568]">(optional)</span></label>
                          <div onClick={() => document.getElementById('gst-upload')?.click()}
                            style={{ border: '1.5px dashed rgba(255,255,255,0.12)', borderRadius: 12, padding: '14px 16px', cursor: 'pointer', background: '#060D1F', transition: 'border-color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = '#0A64C3')}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}>
                            <p className="font-inter text-[13px]" style={{ color: gstFile ? '#34D399' : '#4A5568', margin: 0 }}>
                              {gstFile ? `✓ ${gstFile.name}` : '+ Upload GST Certificate'}
                            </p>
                          </div>
                          <input id="gst-upload" type="file" accept="image/*,application/pdf" className="hidden"
                            onChange={e => setGstFile(e.target.files?.[0] || null)} />
                        </div>
                      </div>
                    </>
                  )}

                  {/* International KYC — Passport only */}
                  {fields.clientType === 'International' && (
                    <>
                      <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: '12px 16px', marginBottom: 16 }}>
                        <p className="font-inter text-[13px]" style={{ color: '#F87171', margin: 0, fontWeight: 600 }}>⚠️ Passport is mandatory for international artists. You cannot submit without uploading it.</p>
                      </div>
                    <div className="gsap-card mb-4">
                      <label className={labelCls}>Passport <span style={{ color: '#F87171' }}>*</span> <span className="normal-case tracking-normal font-normal text-[#4A5568]">(Photo page — JPG/PNG/PDF)</span></label>
                      <div onClick={() => document.getElementById('passport-upload')?.click()}
                        style={{ border: `1.5px dashed ${passportFile ? '#34D399' : '#F8717155'}`, borderRadius: 12, padding: '14px 16px', cursor: 'pointer', background: '#060D1F', transition: 'border-color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = '#0A64C3')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = passportFile ? '#34D399' : '#F8717155')}>
                        <p className="font-inter text-[13px]" style={{ color: passportFile ? '#34D399' : '#F87171', margin: 0 }}>
                          {passportFile ? `✓ ${passportFile.name}` : '+ Upload Passport (photo page)'}
                        </p>
                      </div>
                      <input id="passport-upload" type="file" accept="image/*,application/pdf" className="hidden"
                        onChange={e => setPassportFile(e.target.files?.[0] || null)} />
                    </div>
                    </>
                  )}

                  {/* Section divider — Upload */}
                  <div className="flex items-center gap-3 mb-4 mt-6">
                    <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase" style={{ color: '#4A5568' }}>Upload &amp; Links</span>
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  </div>

                  {/* Audio File Upload */}
                  <div className="mb-4">
                    <label className={labelCls}>Audio File * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(WAV only)</span></label>
                    <div
                      onClick={() => document.getElementById('audio-upload')?.click()}
                      style={{
                        border: `2px dashed ${audioFile ? '#34D399' : 'rgba(255,255,255,0.12)'}`,
                        borderRadius: 12, padding: '20px 16px', cursor: 'pointer',
                        background: audioFile ? 'rgba(16,185,129,0.06)' : 'rgba(10,20,50,0.4)',
                        textAlign: 'center', transition: 'all 0.2s',
                      }}
                    >
                      <input
                        id="audio-upload"
                        type="file"
                        accept=".wav,audio/wav,audio/x-wav"
                        style={{ display: 'none' }}
                        onChange={e => {
                          const f = e.target.files?.[0]
                          if (!f) return
                          const isWav = f.type === 'audio/wav' || f.type === 'audio/x-wav' || f.name.toLowerCase().endsWith('.wav')
                          if (!isWav) {
                            alert('Only WAV files are accepted. Please convert your audio to WAV format and try again.')
                            e.target.value = ''
                            return
                          }
                          setAudioFile(f)
                        }}
                      />
                      {audioFile ? (
                        <p style={{ color: '#34D399', fontSize: 14, fontWeight: 600, margin: 0 }}>
                          ✓ {audioFile.name} ({(audioFile.size / 1024 / 1024).toFixed(1)} MB)
                        </p>
                      ) : (
                        <>
                          <p style={{ color: '#8899AA', fontSize: 14, margin: '0 0 4px' }}>🎵 Click to upload audio file</p>
                          <p style={{ color: '#4A5568', fontSize: 12, margin: 0 }}>WAV only · Max 500MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Artwork Upload */}
                  <div className="mb-4">
                    <label className={labelCls}>Cover Artwork * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(Square JPG/PNG, min 3000×3000px)</span></label>
                    <div
                      onClick={() => document.getElementById('artwork-upload')?.click()}
                      style={{
                        border: `2px dashed ${artworkFile ? '#5CB2DC' : 'rgba(255,255,255,0.12)'}`,
                        borderRadius: 12, padding: '20px 16px', cursor: 'pointer',
                        background: artworkFile ? 'rgba(92,178,220,0.06)' : 'rgba(10,20,50,0.4)',
                        textAlign: 'center', transition: 'all 0.2s',
                      }}
                    >
                      <input
                        id="artwork-upload"
                        type="file"
                        accept="image/jpeg,image/png,image/jpg,.jpg,.jpeg,.png"
                        style={{ display: 'none' }}
                        onChange={e => {
                          const f = e.target.files?.[0]
                          if (!f) return
                          const isJpgPng = f.type === 'image/jpeg' || f.type === 'image/png' || f.type === 'image/jpg'
                          if (!isJpgPng) {
                            alert('Cover artwork must be a JPG or PNG file.')
                            e.target.value = ''
                            return
                          }
                          const url = URL.createObjectURL(f)
                          const img = new window.Image() as HTMLImageElement
                          img.onload = () => {
                            URL.revokeObjectURL(url)
                            if (!((img.width === 3000 && img.height === 3000) || (img.width === 1500 && img.height === 1500))) {
                              alert(`Cover artwork must be exactly 3000×3000px or 1500×1500px. Your image is ${img.width}×${img.height}px. Please resize and re-upload.`)
                              e.target.value = ''
                              return
                            }
                            setArtworkFile(f)
                          }
                          img.onerror = () => { URL.revokeObjectURL(url); alert('Could not read image. Please try again.'); e.target.value = '' }
                          img.src = url
                        }}
                      />
                      {artworkFile ? (
                        <p style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 600, margin: 0 }}>
                          ✓ {artworkFile.name} ({(artworkFile.size / 1024 / 1024).toFixed(1)} MB)
                        </p>
                      ) : (
                        <>
                          <p style={{ color: '#8899AA', fontSize: 14, margin: '0 0 4px' }}>🖼️ Click to upload cover artwork</p>
                          <p style={{ color: '#4A5568', fontSize: 12, margin: 0 }}>JPG or PNG · 3000×3000px or 1500×1500px</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* YouTube + Instagram */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>YouTube Link <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input type="url" value={fields.youtubeLink} onChange={set('youtubeLink')}
                        placeholder="https://youtube.com/..." className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Instagram Link *</label>
                      <input required type="url" value={fields.instagramLink}
                        onChange={e => { set('instagramLink')(e); setInstagramError('') }}
                        onBlur={e => {
                          if (e.target.value && !e.target.value.includes('instagram.com'))
                            setInstagramError('Only instagram.com links are allowed.')
                        }}
                        placeholder="https://www.instagram.com/yourprofile"
                        className={inputCls} style={{ borderColor: instagramError ? '#C41230' : undefined }} />
                      {instagramError && <p className="font-inter text-[11px] mt-1.5" style={{ color: '#f87171' }}>{instagramError}</p>}
                    </div>
                  </div>

                  {/* Spotify */}
                  <div className="mb-4">
                    <label className={labelCls}>Spotify Profile Link <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                    {!fields.createSpotify && (
                      <>
                        <input type="url" value={fields.spotifyLink}
                          onChange={e => { set('spotifyLink')(e); setSpotifyError('') }}
                          onBlur={e => {
                            if (e.target.value && !e.target.value.includes('spotify.com'))
                              setSpotifyError('Only spotify.com links are allowed.')
                          }}
                          placeholder="https://open.spotify.com/artist/..."
                          className={inputCls} style={{ borderColor: spotifyError ? '#C41230' : undefined }} />
                        {spotifyError && <p className="font-inter text-[11px] mt-1.5" style={{ color: '#f87171' }}>{spotifyError}</p>}
                      </>
                    )}
                    {fields.createSpotify && (
                      <div className="mt-2 rounded-xl px-4 py-3 font-inter text-[13px]"
                        style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)', color: '#34D399' }}>
                        ✅ We'll create a Spotify artist profile on your behalf after approval.
                      </div>
                    )}
                    <label className="flex items-center gap-2.5 mt-3 cursor-pointer select-none w-fit">
                      <input type="checkbox" checked={fields.createSpotify}
                        onChange={e => {
                          setFields(f => ({ ...f, createSpotify: e.target.checked, spotifyLink: '' }))
                          setSpotifyError('')
                        }}
                        className="w-4 h-4 rounded accent-blu cursor-pointer" />
                      <span className="font-inter text-[13px] text-ice">I don't have a Spotify profile — please create one for me</span>
                    </label>
                  </div>

                  {/* YouTube Content ID */}
                  <div className="mb-4">
                    <label className={labelCls}>YouTube Content ID <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                    <select value={fields.youtubeContentId} onChange={set('youtubeContentId')} className={inputCls}>
                      {YOUTUBE_CONTENT_ID_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  {/* Song Lyrics */}
                  <div className="mb-4">
                    <label className={labelCls}>Song Lyrics <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                    <textarea value={fields.songLyrics} onChange={set('songLyrics')} rows={4}
                      placeholder="Paste your song lyrics here..."
                      className={`${inputCls} resize-none`} />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className={labelCls}>Anything Else? <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                    <textarea value={fields.message} onChange={set('message')} rows={3}
                      placeholder="Mood, references, special instructions, event tie-ins..."
                      className={`${inputCls} resize-none`} />
                  </div>

                  {/* AI Confirmation Checkbox */}
                  <div className="mb-4 rounded-xl px-4 py-3" style={{ background: 'rgba(196,18,48,0.06)', border: '1px solid rgba(196,18,48,0.25)' }}>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={confirmedNotAI}
                        onChange={e => { setConfirmedNotAI(e.target.checked); if (e.target.checked) setAiError('') }}
                        className="mt-0.5 w-4 h-4 flex-shrink-0"
                        style={{ accentColor: '#F87171' }}
                      />
                      <span className="font-inter text-[13px] leading-relaxed" style={{ color: '#E2E8F0' }}>
                        <strong style={{ color: '#F87171' }}>I confirm</strong> that this track is <strong style={{ color: '#fff' }}>100% human-created</strong> and contains no AI-generated music, vocals, or beats. I understand that AI-detected tracks will be <strong style={{ color: '#F87171' }}>immediately rejected</strong>. *
                      </span>
                    </label>
                    {aiError && <p className="font-inter text-[11px] mt-2" style={{ color: '#f87171' }}>⚠ {aiError}</p>}
                  </div>

                  <p className="font-inter text-[12px] text-mut mb-5">
                    By clicking Submit, you will be asked to review and accept our{' '}
                    <Link href="/terms" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: '#5CB2DC' }}>
                      Terms &amp; Conditions
                    </Link>.
                  </p>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="mb-5 rounded-xl px-4 py-3 font-inter text-[13px]"
                      style={{ background: 'rgba(196,18,48,0.1)', border: '1px solid rgba(196,18,48,0.25)', color: '#f87171' }}>
                      {errorMsg || 'Something went wrong. Please try again.'}
                    </div>
                  )}

                  {/* Upload progress */}
                  {status === 'loading' && uploadProgress && (
                    <div className="mb-4 rounded-xl px-4 py-3 font-inter text-[13px]"
                      style={{ background: 'rgba(10,100,195,0.1)', border: '1px solid rgba(10,100,195,0.25)', color: '#5CB2DC' }}>
                      <Loader2 size={14} className="inline animate-spin mr-2" />{uploadProgress}
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-outfit font-bold text-[15px] text-white transition-all duration-200 disabled:opacity-60"
                    style={{ background: '#0A64C3', boxShadow: '0 8px 32px rgba(10,100,195,0.35)' }}
                    onMouseEnter={e => { if (status !== 'loading') (e.currentTarget as HTMLButtonElement).style.background = '#0D77E0' }}
                    onMouseLeave={e => { if (status !== 'loading') (e.currentTarget as HTMLButtonElement).style.background = '#0A64C3' }}
                  >
                    {status === 'loading'
                      ? <><Loader2 size={18} className="animate-spin" /> {uploadProgress ? 'Uploading…' : 'Submitting…'}</>
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

      {/* T&C Modal */}
      {showTnC && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
          onClick={e => { if (e.target === e.currentTarget) { setShowTnC(false); setPendingSubmit(false) } }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }} />
          <div style={{
            position: 'relative', zIndex: 1, background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20, width: '100%', maxWidth: 700, maxHeight: '88vh', display: 'flex', flexDirection: 'column',
            boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
          }}>
            {/* Header */}
            <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div className="font-outfit font-black text-white text-[17px]">Terms &amp; Conditions</div>
                  <div className="font-inter text-[12px] text-mut mt-0.5">Western Beats Private Limited · Standard Distribution Agreement</div>
                </div>
                <button type="button" onClick={() => { setShowTnC(false); setPendingSubmit(false) }}
                  style={{ background: 'rgba(255,255,255,0.07)', border: 'none', borderRadius: 8, width: 32, height: 32, cursor: 'pointer', color: '#8899AA', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
              </div>
            </div>

            {/* Scrollable content */}
            <div style={{ overflowY: 'auto', padding: '20px 24px', flex: 1 }}>
              {[
                { title: 'ARTICLE 1 — DEFINITIONS', body: 'This Agreement means the Principal Terms and these Standard Terms & Conditions. Content means all music, audio, and visual entertainment content owned/aggregated by the Licensor during the Term. Territory means the World. Net Revenue means all amounts received less applicable taxes and third-party costs.' },
                { title: 'ARTICLE 2 — GRANT OF RIGHTS', body: 'The Licensor grants the Licensee a royalty-free licence to distribute, publish, stream, sub-license, exploit, market, synchronise, and promote the Content and Licensed Properties throughout the Territory for the Term. The Licensee may further sub-license these rights. The Licensor shall not assign, transfer, or encumber the Content during the Term.' },
                { title: 'ARTICLE 3 — CONTENT PROVISION & DISTRIBUTION', body: 'The Licensor shall deliver Content per the agreed delivery plan, ensuring it is reliable and conforms to specifications. The Licensee may modify, edit, recreate, or remix Content to meet platform requirements. The Licensor confirms it has cleared all third-party rights necessary for exploitation.' },
                { title: 'ARTICLE 4 — OBLIGATIONS OF LICENSEE', body: 'The Licensee shall use reasonable efforts to market and promote the Content. Revenue reports are provided on the following schedule: YouTube — after every 2 months; OTT and all other platforms — quarterly. The Licensor has 15 days to request clarifications after which the report is final and an invoice must be raised.' },
                { title: 'ARTICLE 5 — OBLIGATIONS OF THE LICENSOR', body: 'The Licensor shall make all Content available for exploitation, meet all Content specifications, create new Content as agreed, and provide support in resolving legal issues. The Licensor must also provide required OAuth token authorisations for linked channels.' },
                { title: 'ARTICLE 6 — REVENUE SHARE', body: 'The Licensee retains 20% of Net Revenue as a Distribution Fee and pays the Licensor the remaining 80% as Revenue Share. If the Licensor is found involved in any content infringement or copyright violation, the Licensee reserves the right to hold all revenue without prior notice. All payments are made in Indian Rupees within 30 days of receipt of a valid invoice. Invoices are raised by the Licensor after 2 months for YouTube content and quarterly for OTT/other platforms.' },
                { title: 'ARTICLE 7 — TERM, TERMINATION & CONSEQUENCES', body: 'The Agreement commences on the Effective Date and remains in effect for 3 years, auto-renewing thereafter. The first 12 months is a Lock-in Period during which the Licensor may not terminate (except for an Event of Default by the Licensee). After the Lock-in Period, the Licensor may terminate with 60 days\' notice; the Licensee may terminate with 30 days\' notice. Upon termination, all rights revert to the Licensor after a 3-month cool-off period.' },
                { title: 'ARTICLE 8 — EVENTS OF DEFAULT', body: 'Events of Default include insolvency, consistent failure to perform obligations, and fraud. If suspected of fraud or infringement, the Licensee may withhold payments and use them to cover legal costs. The Licensor shall fully indemnify the Licensee for losses arising from fraud or infringement.' },
                { title: 'ARTICLE 9 — INTELLECTUAL PROPERTY', body: 'The Licensor retains all rights, title, and interest in the Content and Licensed Properties. The Licensor warrants the Content does not infringe third-party rights. The Licensor shall indemnify the Licensee against any third-party claims arising from omissions or inaccuracies in data provided.' },
                { title: 'ARTICLE 9A — ARTIFICIAL INTELLIGENCE POLICY ⚠️', body: 'ZERO TOLERANCE: Western Beats does not accept, distribute, or monetise any AI-generated Content. All Content must be 100% human-created. The Licensee may not create synthetic/AI versions of any artist\'s voice, likeness, or persona without prior written approval. The Licensor must not deliver AI-generated Content without written disclosure — breach = immediate Event of Default, content removal, forfeiture of all revenue, and possible termination. Neither Party may use the other\'s Content to train generative AI models without prior written consent.' },
                { title: 'ARTICLE 10 — REPRESENTATIONS & WARRANTIES', body: 'Both Parties warrant they are duly authorised to execute this Agreement and that its execution does not conflict with other agreements. The Licensor warrants no Content infringes third-party rights and that no significant change of control/ownership will occur during the Term without consent.' },
                { title: 'ARTICLE 11 — INDEMNITY', body: 'The Licensor shall indemnify the Licensee against all claims, damages, and expenses arising from breach of this Agreement, copyright infringement, unauthorised use, negligence, or non-compliance with applicable laws. The Licensee shall indemnify the Licensor against claims arising from the Licensee\'s material breach or unauthorised use of Content.' },
                { title: 'ARTICLE 12 — CONFIDENTIALITY', body: 'Both Parties agree to keep confidential all information relating to the other Party\'s business and the terms of this Agreement, except as required by law or on a need-to-know basis to affiliates and professional advisors.' },
                { title: 'ARTICLE 13 — MISCELLANEOUS', body: 'Disputes shall be resolved by arbitration in Mumbai, India under the Arbitration and Conciliation Act, 1996. This Agreement is governed by Indian law and subject to Mumbai courts\' exclusive jurisdiction. The Agreement constitutes the entire understanding between the Parties and supersedes all prior communications. Amendments are valid only if in writing and signed by both Parties.' },
                { title: 'ANNEXURE A — CONTENT SPECIFICATIONS', body: 'The Licensor commits to providing 1–2 pieces of Content per month during the Term. All Content is mutually approved by both Parties. The Licensor shall include Western Beats branding as "DISTRIBUTION PARTNER" in all promotional materials and Content. All behind-the-scenes footage shall be filmed and delivered to the Licensee. The Licensor shall not execute any legal agreements related to the Content without the Licensee\'s prior written consent.' },
                { title: 'ANNEXURE B — YOUTUBE CHANNEL OBLIGATIONS', body: 'All Content uploaded to the Licensor\'s YouTube channel(s) shall be distributed by Western Beats throughout the Term. The Licensor must provide OAuth token authorisation for all linked channels. Any revocation of such access during the Term is a material breach. YouTube revenue is reported every 2 months; the Licensor shall raise invoices on a bi-monthly basis following confirmation of each revenue report.' },
              ].map(sec => (
                <div key={sec.title} style={{ marginBottom: 18 }}>
                  <div className="font-outfit font-bold text-white" style={{ fontSize: 13, marginBottom: 4 }}>{sec.title}</div>
                  <p className="font-inter" style={{ fontSize: 12, lineHeight: '1.75', color: '#8899AA', margin: 0 }}>{sec.body}</p>
                </div>
              ))}
              <div style={{ marginTop: 8, padding: '12px 14px', background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 10 }}>
                <p className="font-inter" style={{ fontSize: 12, color: '#8899AA', margin: 0 }}>
                  By submitting, you agree that Western Beats Private Limited (Licensee) may distribute your music on 150+ platforms worldwide. The Licensor retains 80% of Net Revenue. The agreement term is 3 years with a 12-month lock-in. Full terms at <Link href="/terms" target="_blank" style={{ color: '#5CB2DC' }}>westernbeats.com/terms</Link>.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', marginBottom: 14 }}>
                <input type="checkbox" checked={tncAgreed} onChange={e => setTncAgreed(e.target.checked)}
                  style={{ marginTop: 2, width: 16, height: 16, flexShrink: 0, accentColor: '#0A64C3' }} />
                <span className="font-inter" style={{ fontSize: 13, color: '#E2E8F0', lineHeight: '1.5' }}>
                  <strong style={{ color: '#fff' }}>I agree to submit my music</strong> under the Terms &amp; Conditions above and confirm that Western Beats may distribute my content as described.
                </span>
              </label>
              <div style={{ display: 'flex', gap: 10 }}>
                <button type="button" onClick={() => { setShowTnC(false); setPendingSubmit(false) }}
                  style={{ flex: 1, padding: '12px 0', borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#8899AA', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 600 }}>
                  Cancel
                </button>
                <button type="button"
                  disabled={!tncAgreed}
                  onClick={async () => {
                    if (!tncAgreed) return
                    setShowTnC(false)
                    setAgreedToTerms(true)
                    // Trigger actual submission
                    setReleaseDateError(''); setTermsError(''); setAiError(''); setInstagramError(''); setSpotifyError('')
                    setStatus('loading'); setErrorMsg('')
                    try {
                      setUploadProgress('Uploading audio & artwork...')
                      const [audio, artwork] = await Promise.all([
                        uploadFile(audioFile!, 'audio'),
                        uploadFile(artworkFile!, 'artwork'),
                      ])
                      const empty = { url: '', publicId: '' }
                      setUploadProgress('Uploading documents...')
                      const [panCard, aadhaarFront, aadhaarBack, gst, passport] = await Promise.all([
                        panCardFile    ? uploadFile(panCardFile, 'document')    : Promise.resolve(empty),
                        aadhaarFrontFile ? uploadFile(aadhaarFrontFile, 'document') : Promise.resolve(empty),
                        aadhaarBackFile  ? uploadFile(aadhaarBackFile, 'document')  : Promise.resolve(empty),
                        gstFile        ? uploadFile(gstFile, 'document')        : Promise.resolve(empty),
                        passportFile   ? uploadFile(passportFile, 'document')   : Promise.resolve(empty),
                      ])
                      setUploadProgress('Saving your submission...')
                      const res = await fetch('/api/submissions', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          ...fields,
                          acceptedTermsAt: new Date().toISOString(),
                          audioUrl: audio.url, audioPublicId: audio.publicId,
                          artworkUrl: artwork.url, artworkPublicId: artwork.publicId,
                          panCardUrl: panCard.url, panCardPublicId: panCard.publicId,
                          aadhaarFrontUrl: aadhaarFront.url, aadhaarFrontPublicId: aadhaarFront.publicId,
                          aadhaarBackUrl: aadhaarBack.url, aadhaarBackPublicId: aadhaarBack.publicId,
                          gstUrl: gst.url, gstPublicId: gst.publicId,
                          passportUrl: passport.url, passportPublicId: passport.publicId,
                        }),
                      })
                      const data = await res.json()
                      if (!res.ok) throw new Error(data.error || 'Submission failed')
                      setStatus('success')
                      setPendingSubmit(false)
                    } catch (err: unknown) {
                      const message = err instanceof Error ? err.message : 'Unknown error'
                      setErrorMsg(message)
                      setStatus('error')
                      setPendingSubmit(false)
                    } finally {
                      setUploadProgress('')
                    }
                  }}
                  style={{
                    flex: 2, padding: '12px 0', borderRadius: 12, background: tncAgreed ? '#0A64C3' : '#1a2a4a',
                    border: 'none', color: tncAgreed ? '#fff' : '#4A5568', cursor: tncAgreed ? 'pointer' : 'not-allowed',
                    fontFamily: 'inherit', fontSize: 14, fontWeight: 700, transition: 'all 0.2s',
                  }}>
                  Confirm &amp; Submit My Music
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
