'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import { useState, FormEvent, useEffect, useRef } from 'react'
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
const LANGUAGES = [
  'Hindi','Punjabi','Haryanvi','English','Tamil','Telugu','Kannada',
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
  labelName: string; upc: string; isrc: string; productCode: string;
  youtubeLink: string; instagramLink: string; spotifyLink: string;
  songLyrics: string; youtubeContentId: string;
  driveLink: string; message: string;
  legalName: string; address: string; clientType: 'India' | 'International';
}
const EMPTY: FormFields = {
  artistName: '', trackName: '', albumName: '', email: '', phone: '',
  language: '', releaseDate: '',
  singer: '', lyricWriter: '', musicDirector: '', musicArranger: '',
  director: '', mixer: '', producer: '', moods: '',
  labelName: '', upc: '', isrc: '', productCode: '',
  youtubeLink: '', instagramLink: '', spotifyLink: '',
  songLyrics: '', youtubeContentId: 'No Action',
  driveLink: '', message: '',
  legalName: '', address: '', clientType: 'India',
}

export default function SubmitPage() {
  const [fields, setFields] = useState<FormFields>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [termsError, setTermsError] = useState('')
  const [releaseDateError, setReleaseDateError] = useState('')
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [artworkFile, setArtworkFile] = useState<File | null>(null)
  const [panCardFile, setPanCardFile] = useState<File | null>(null)
  const [aadhaarVoterFile, setAadhaarVoterFile] = useState<File | null>(null)
  const [gstFile, setGstFile] = useState<File | null>(null)
  const [passportFile, setPassportFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState('')
  const sectionRef = useRef<HTMLDivElement>(null)

  const todayISO = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)

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

  function checkArtworkDimensions(file: File): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file)
      const img = new window.Image() as HTMLImageElement
      img.onload = () => {
        URL.revokeObjectURL(url)
        if (img.width !== 3000 || img.height !== 3000) {
          reject(new Error(`Cover artwork must be exactly 3000×3000px. Your image is ${img.width}×${img.height}px. Please resize and re-upload.`))
        } else {
          resolve()
        }
      }
      img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Could not read image dimensions.')) }
      img.src = url
    })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setReleaseDateError(''); setTermsError('')
    if (fields.releaseDate < todayISO) { setReleaseDateError('Release Date cannot be in the past. Please choose today or a future date.'); return }
    if (!agreedToTerms) { setTermsError('You must agree to the Terms & Conditions before submitting.'); return }
    if (!audioFile) { setErrorMsg('Please upload your audio file.'); return }
    if (!artworkFile) { setErrorMsg('Please upload your cover artwork.'); return }
    if (fields.clientType === 'India' && !panCardFile) { setErrorMsg('Please upload your PAN card (JPG or PNG).'); return }
    if (fields.clientType === 'India' && !aadhaarVoterFile) { setErrorMsg('Please upload your Aadhaar Card or Voter ID (JPG or PNG).'); return }
    if (fields.clientType === 'International' && !passportFile) { setErrorMsg('Please upload your passport.'); return }

    setStatus('loading')
    setErrorMsg('')
    try {
      // Validate artwork dimensions before uploading
      setUploadProgress('Checking artwork dimensions...')
      await checkArtworkDimensions(artworkFile)

      // Upload audio + artwork in parallel
      setUploadProgress('Uploading audio & artwork...')
      const [audio, artwork] = await Promise.all([
        uploadFile(audioFile, 'audio'),
        uploadFile(artworkFile, 'artwork'),
      ])

      // Upload all documents in parallel
      const empty = { url: '', publicId: '' }
      setUploadProgress('Uploading documents...')
      const [panCard, aadhaarVoterCard, gst, passport] = await Promise.all([
        panCardFile    ? uploadFile(panCardFile, 'document')    : Promise.resolve(empty),
        aadhaarVoterFile ? uploadFile(aadhaarVoterFile, 'document') : Promise.resolve(empty),
        gstFile        ? uploadFile(gstFile, 'document')        : Promise.resolve(empty),
        passportFile   ? uploadFile(passportFile, 'document')   : Promise.resolve(empty),
      ])

      setUploadProgress('Saving your submission...')
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          audioUrl: audio.url,
          audioPublicId: audio.publicId,
          artworkUrl: artwork.url,
          artworkPublicId: artwork.publicId,
          panCardUrl: panCard.url,
          panCardPublicId: panCard.publicId,
          aadhaarVoterId: aadhaarVoterCard.url,
          aadhaarVoterIdPublicId: aadhaarVoterCard.publicId,
          gstUrl: gst.url,
          gstPublicId: gst.publicId,
          passportUrl: passport.url,
          passportPublicId: passport.publicId,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')
      setStatus('success')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      setErrorMsg(message)
      setStatus('error')
    } finally {
      setUploadProgress('')
    }
  }

  const inputCls = `w-full bg-[#060D1F] border border-white/[0.09] rounded-xl px-4 py-3 font-inter text-[14px] text-white placeholder:text-[#4A5568] focus:outline-none focus:border-[#0A64C3] focus:ring-1 focus:ring-[#0A64C3]/40 transition-all duration-200`
  const labelCls = `block font-outfit font-semibold text-[12px] text-[#8899AA] tracking-[0.08em] uppercase mb-1.5`


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
                    <button onClick={() => { setFields(EMPTY); setAgreedToTerms(false); setTermsError(''); setReleaseDateError(''); setStatus('idle'); setPanCardFile(null); setGstFile(null); setPassportFile(null); setAudioFile(null); setArtworkFile(null) }}
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
                      <label className={labelCls}>Music Arranger <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input value={fields.musicArranger} onChange={set('musicArranger')}
                        placeholder="ex: Quincy Jones" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Director <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input value={fields.director} onChange={set('director')}
                        placeholder="ex: Martin Scorsese" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 7: Mixer + Producer */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>Mixer <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input value={fields.mixer} onChange={set('mixer')}
                        placeholder="ex: Andrew Scheps" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Producer <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input value={fields.producer} onChange={set('producer')}
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

                  {/* ISRC + Product Code */}
                  <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>ISRC <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input type="text" value={fields.isrc} onChange={set('isrc')}
                        placeholder="ex: (ING642300741)" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Product Code <span className="text-mut normal-case tracking-normal font-normal">(optional)</span></label>
                      <input type="text" value={fields.productCode} onChange={set('productCode')}
                        placeholder="ex: (GMJ00001)" className={inputCls} />
                    </div>
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

                  {/* India KYC — PAN + Aadhaar/Voter ID + GST */}
                  {fields.clientType === 'India' && (
                    <>
                      <div className="gsap-card grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className={labelCls}>PAN Card * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(JPG or PNG only)</span></label>
                          <div onClick={() => document.getElementById('pan-upload')?.click()}
                            style={{ border: `1.5px dashed ${panCardFile ? '#34D399' : 'rgba(255,255,255,0.12)'}`, borderRadius: 12, padding: '14px 16px', cursor: 'pointer', background: '#060D1F', transition: 'border-color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = '#0A64C3')}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = panCardFile ? '#34D399' : 'rgba(255,255,255,0.12)')}>
                            <p className="font-inter text-[13px]" style={{ color: panCardFile ? '#34D399' : '#4A5568', margin: 0 }}>
                              {panCardFile ? `✓ ${panCardFile.name}` : '+ Upload PAN Card'}
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
                          <label className={labelCls}>Aadhaar Card / Voter ID * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(JPG or PNG only)</span></label>
                          <div onClick={() => document.getElementById('aadhaar-upload')?.click()}
                            style={{ border: `1.5px dashed ${aadhaarVoterFile ? '#34D399' : 'rgba(255,255,255,0.12)'}`, borderRadius: 12, padding: '14px 16px', cursor: 'pointer', background: '#060D1F', transition: 'border-color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = '#0A64C3')}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = aadhaarVoterFile ? '#34D399' : 'rgba(255,255,255,0.12)')}>
                            <p className="font-inter text-[13px]" style={{ color: aadhaarVoterFile ? '#34D399' : '#4A5568', margin: 0 }}>
                              {aadhaarVoterFile ? `✓ ${aadhaarVoterFile.name}` : '+ Upload Aadhaar or Voter ID'}
                            </p>
                            <p className="font-inter text-[11px]" style={{ color: '#4A5568', margin: '4px 0 0' }}>JPG or PNG · Front side of document</p>
                          </div>
                          <input id="aadhaar-upload" type="file" accept="image/jpeg,image/png,image/jpg" className="hidden"
                            onChange={e => {
                              const f = e.target.files?.[0] || null
                              if (f && !f.type.startsWith('image/')) { alert('Please upload JPG or PNG only — PDF is not accepted.'); return }
                              setAadhaarVoterFile(f)
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

                  {/* International KYC — Passport */}
                  {fields.clientType === 'International' && (
                    <div className="gsap-card mb-4">
                      <label className={labelCls}>Passport * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(Photo page — JPG/PNG/PDF)</span></label>
                      <div onClick={() => document.getElementById('passport-upload')?.click()}
                        style={{ border: '1.5px dashed rgba(255,255,255,0.12)', borderRadius: 12, padding: '14px 16px', cursor: 'pointer', background: '#060D1F', transition: 'border-color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = '#0A64C3')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}>
                        <p className="font-inter text-[13px]" style={{ color: passportFile ? '#34D399' : '#4A5568', margin: 0 }}>
                          {passportFile ? `✓ ${passportFile.name}` : '+ Upload Passport (photo page)'}
                        </p>
                      </div>
                      <input id="passport-upload" type="file" accept="image/*,application/pdf" className="hidden"
                        onChange={e => setPassportFile(e.target.files?.[0] || null)} />
                    </div>
                  )}

                  {/* Section divider — Upload */}
                  <div className="flex items-center gap-3 mb-4 mt-6">
                    <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase" style={{ color: '#4A5568' }}>Upload &amp; Links</span>
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  </div>

                  {/* Audio File Upload */}
                  <div className="mb-4">
                    <label className={labelCls}>Audio File * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(WAV preferred, MP3 320kbps min)</span></label>
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
                        accept="audio/*,.wav,.mp3,.flac,.aiff"
                        style={{ display: 'none' }}
                        onChange={e => setAudioFile(e.target.files?.[0] || null)}
                      />
                      {audioFile ? (
                        <p style={{ color: '#34D399', fontSize: 14, fontWeight: 600, margin: 0 }}>
                          ✓ {audioFile.name} ({(audioFile.size / 1024 / 1024).toFixed(1)} MB)
                        </p>
                      ) : (
                        <>
                          <p style={{ color: '#8899AA', fontSize: 14, margin: '0 0 4px' }}>🎵 Click to upload audio file</p>
                          <p style={{ color: '#4A5568', fontSize: 12, margin: 0 }}>WAV, MP3, FLAC or AIFF · Max 500MB</p>
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
                        accept="image/jpeg,image/png,image/jpg"
                        style={{ display: 'none' }}
                        onChange={e => setArtworkFile(e.target.files?.[0] || null)}
                      />
                      {artworkFile ? (
                        <p style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 600, margin: 0 }}>
                          ✓ {artworkFile.name} ({(artworkFile.size / 1024 / 1024).toFixed(1)} MB)
                        </p>
                      ) : (
                        <>
                          <p style={{ color: '#8899AA', fontSize: 14, margin: '0 0 4px' }}>🖼️ Click to upload cover artwork</p>
                          <p style={{ color: '#4A5568', fontSize: 12, margin: 0 }}>JPG or PNG · Square · Min 3000×3000px</p>
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
                      <input required type="url" value={fields.instagramLink} onChange={set('instagramLink')}
                        placeholder="https://www.instagram.com" className={inputCls} />
                    </div>
                  </div>

                  {/* Spotify */}
                  <div className="mb-4">
                    <label className={labelCls}>Spotify Profile Link *</label>
                    <input required type="url" value={fields.spotifyLink} onChange={set('spotifyLink')}
                      placeholder="https://open.spotify.com/artist/..." className={inputCls} />
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

                  {/* Terms & Conditions */}
                  <div className="mb-5">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        required
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={e => { setAgreedToTerms(e.target.checked); if (e.target.checked) setTermsError('') }}
                        className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#0A64C3]"
                      />
                      <span className="font-inter text-[13px] text-mut leading-relaxed">
                        I agree to the{' '}
                        <Link href="/terms" target="_blank" rel="noopener noreferrer"
                          className="font-semibold" style={{ color: '#5CB2DC' }}>
                          Terms &amp; Conditions
                        </Link>
                        {' '}*
                      </span>
                    </label>
                    {termsError && <p className="font-inter text-[11px] mt-1.5" style={{ color: '#f87171' }}>{termsError}</p>}
                  </div>

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

    </div>
  )
}
