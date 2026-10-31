'use client'
import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import { useRouter } from 'next/navigation'
import { Loader2, Upload, Plus, Trash2, GripVertical, ChevronDown, ChevronUp, Music, CheckCircle, ArrowRight } from 'lucide-react'

// ── Types ────────────────────────────────────────────────────────────────────
interface Track {
  trackNumber: number
  title: string
  featuring: string
  singer: string
  lyricWriter: string
  musicDirector: string
  musicArranger: string
  director: string
  mixer: string
  producer: string
  isrc: string
  explicit: boolean
  audioFile: File | null
  expanded: boolean
}

const GENRES = [
  'Pop','Hip-Hop / Rap','R&B / Soul','Electronic / Dance','Rock','Indie','Jazz','Classical',
  'Folk','Country','Reggae','Blues','Metal','Punjabi','Bollywood','Devotional / Spiritual',
  'Sufi','Ghazal','Carnatic','Rajasthani','Other',
]
const LANGUAGES = ['Hindi','Punjabi','English','Tamil','Telugu','Kannada','Malayalam','Bengali','Marathi','Gujarati','Bhojpuri','Haryanvi','Rajasthani','Urdu','Other']
const YOUTUBE_CONTENT_ID_OPTIONS = ['No Action','Monetize','Block','Track']

function emptyTrack(n: number): Track {
  return {
    trackNumber: n, title: '', featuring: '', singer: '', lyricWriter: '',
    musicDirector: '', musicArranger: '', director: '', mixer: '', producer: '',
    isrc: '', explicit: false, audioFile: null, expanded: true,
  }
}

// ── Styles ───────────────────────────────────────────────────────────────────
const inputCls = `w-full bg-[#060D1F] border border-white/[0.09] rounded-xl px-4 py-3 font-inter text-[14px] text-white placeholder:text-[#4A5568] focus:outline-none focus:border-[#0A64C3] focus:ring-1 focus:ring-[#0A64C3]/40 transition-all duration-200`
const labelCls = `block font-outfit font-semibold text-[12px] text-[#8899AA] tracking-[0.08em] uppercase mb-1.5`
const sectionDivider = (label: string) => (
  <div className="flex items-center gap-3 mb-4 mt-6">
    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
    <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase" style={{ color: '#4A5568' }}>{label}</span>
    <div className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
  </div>
)

// ── FileDropZone ─────────────────────────────────────────────────────────────
function FileDropZone({ file, onFile, accept, icon, hint, color = '#34D399', inputId }: {
  file: File | null; onFile: (f: File | null) => void; accept: string
  icon: string; hint: string; color?: string; inputId: string
}) {
  const [drag, setDrag] = useState(false)
  return (
    <div>
      <div
        onClick={() => document.getElementById(inputId)?.click()}
        onDragOver={e => { e.preventDefault(); setDrag(true) }}
        onDragLeave={() => setDrag(false)}
        onDrop={e => {
          e.preventDefault(); setDrag(false)
          const f = e.dataTransfer.files[0]
          if (f) onFile(f)
        }}
        style={{
          border: `2px dashed ${file ? color : drag ? '#0A64C3' : 'rgba(255,255,255,0.12)'}`,
          borderRadius: 12, padding: '16px', cursor: 'pointer',
          background: file ? `${color}0A` : drag ? 'rgba(10,100,195,0.06)' : 'rgba(10,20,50,0.4)',
          textAlign: 'center', transition: 'all 0.2s',
        }}
      >
        <input id={inputId} type="file" accept={accept} style={{ display: 'none' }}
          onChange={e => onFile(e.target.files?.[0] || null)} />
        {file ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ color, fontSize: 14, fontWeight: 600 }}>✓ {file.name}</span>
            <span style={{ color: '#4A5568', fontSize: 12 }}>({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
            <button type="button" onClick={e => { e.stopPropagation(); onFile(null) }}
              style={{ background: 'rgba(248,113,113,0.15)', border: 'none', color: '#F87171', borderRadius: 6, padding: '2px 8px', fontSize: 12, cursor: 'pointer' }}>
              ✕
            </button>
          </div>
        ) : (
          <>
            <p style={{ color: '#8899AA', fontSize: 13, margin: '0 0 3px' }}>{icon} Click or drag to upload</p>
            <p style={{ color: '#4A5568', fontSize: 11, margin: 0 }}>{hint}</p>
          </>
        )}
      </div>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function ReleasePage() {
  const router = useRouter()

  // Release type
  const [releaseType, setReleaseType] = useState<'EP' | 'Album'>('EP')

  // Album-level fields
  const [albumTitle, setAlbumTitle] = useState('')
  const [artistName, setArtistName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [genre, setGenre] = useState('')
  const [subGenre, setSubGenre] = useState('')
  const [language, setLanguage] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [upc, setUpc] = useState('')
  const [labelName, setLabelName] = useState('')

  // Artwork
  const [artworkFile, setArtworkFile] = useState<File | null>(null)

  // Tracks
  const [tracks, setTracks] = useState<Track[]>([emptyTrack(1), emptyTrack(2)])

  // KYC
  const [clientType, setClientType] = useState<'India' | 'International'>('India')
  const [legalName, setLegalName] = useState('')
  const [address, setAddress] = useState('')
  const [panCardFile, setPanCardFile] = useState<File | null>(null)
  const [aadhaarFrontFile, setAadhaarFrontFile] = useState<File | null>(null)
  const [aadhaarBackFile, setAadhaarBackFile] = useState<File | null>(null)
  const [gstFile, setGstFile] = useState<File | null>(null)
  const [passportFile, setPassportFile] = useState<File | null>(null)

  // Links
  const [youtubeLink, setYoutubeLink] = useState('')
  const [instagramLink, setInstagramLink] = useState('')
  const [spotifyLink, setSpotifyLink] = useState('')
  const [createSpotify, setCreateSpotify] = useState(false)
  const [youtubeContentId, setYoutubeContentId] = useState('No Action')
  const [message, setMessage] = useState('')

  // Validation / submission
  const [confirmedNotAI, setConfirmedNotAI] = useState(false)
  const [showTnC, setShowTnC] = useState(false)
  const [tncAgreed, setTncAgreed] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [uploadProgress, setUploadProgress] = useState('')
  const [releaseDateError, setReleaseDateError] = useState('')

  const uploadedRef = useRef(new Map<File, { url: string; publicId: string }>())
  const todayISO = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)

  // ── Track helpers ──────────────────────────────────────────────────────────
  const addTrack = useCallback(() => {
    setTracks(prev => [...prev, emptyTrack(prev.length + 1)])
  }, [])

  const removeTrack = useCallback((idx: number) => {
    setTracks(prev => {
      const next = prev.filter((_, i) => i !== idx)
      return next.map((t, i) => ({ ...t, trackNumber: i + 1 }))
    })
  }, [])

  const updateTrack = useCallback((idx: number, key: keyof Track, value: Track[keyof Track]) => {
    setTracks(prev => prev.map((t, i) => i === idx ? { ...t, [key]: value } : t))
  }, [])

  const toggleExpand = useCallback((idx: number) => {
    setTracks(prev => prev.map((t, i) => i === idx ? { ...t, expanded: !t.expanded } : t))
  }, [])

  // ── Upload helpers ─────────────────────────────────────────────────────────
  async function uploadFile(file: File, type: 'audio' | 'artwork' | 'document', label: string) {
    const cached = uploadedRef.current.get(file)
    if (cached) return cached
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, contentType: file.type, fileName: file.name }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || `Could not upload ${label}`)
    const s3Res = await fetch(data.uploadUrl, {
      method: 'PUT', headers: { 'Content-Type': file.type }, body: file,
    })
    if (!s3Res.ok) throw new Error(`Failed to upload ${label} to storage`)
    const result = { url: data.secure_url as string, publicId: data.public_id as string }
    uploadedRef.current.set(file, result)
    return result
  }

  // ── Validation + submit gate ───────────────────────────────────────────────
  function validate() {
    if (!albumTitle.trim()) return 'Album title is required.'
    if (!artistName.trim()) return 'Artist name is required.'
    if (!email.trim()) return 'Email is required.'
    if (!phone.trim()) return 'Phone is required.'
    if (!genre) return 'Genre is required.'
    if (!language) return 'Language is required.'
    if (!releaseDate) return 'Release date is required.'
    if (releaseDate < todayISO) return 'Release date cannot be in the past.'
    if (!artworkFile) return 'Cover artwork is required.'
    if (tracks.length < 2) return 'Please add at least 2 tracks.'
    for (const [i, t] of tracks.entries()) {
      const n = `Track ${i + 1}`
      if (!t.title.trim()) return `${n}: title is required.`
      if (!t.singer.trim()) return `${n}: singer is required.`
      if (!t.lyricWriter.trim()) return `${n}: lyric writer is required.`
      if (!t.musicDirector.trim()) return `${n}: music director is required.`
      if (!t.audioFile) return `${n}: WAV file is required.`
    }
    if (!legalName.trim()) return 'Legal name is required.'
    if (!address.trim()) return 'Address is required.'
    if (clientType === 'India' && !panCardFile) return 'PAN Card is required.'
    if (clientType === 'India' && !aadhaarFrontFile) return 'Aadhaar front is required.'
    if (clientType === 'India' && !aadhaarBackFile) return 'Aadhaar back is required.'
    if (clientType === 'International' && !passportFile) return 'Passport is required.'
    if (!instagramLink.trim()) return 'Instagram link is required.'
    if (instagramLink && !instagramLink.includes('instagram.com')) return 'Only instagram.com links are allowed.'
    if (!confirmedNotAI) return 'Please confirm your release is 100% human-created.'
    return null
  }

  function handleSubmitClick(e: React.FormEvent) {
    e.preventDefault()
    const err = validate()
    if (err) { setErrorMsg(err); setStatus('error'); return }
    setErrorMsg(''); setStatus('idle')
    setShowTnC(true)
  }

  async function doSubmit() {
    setShowTnC(false)
    const meRes = await fetch('/api/auth/me')
    if (!meRes.ok) { router.push('/sign-up?next=/release'); return }

    setStatus('loading'); setErrorMsg('')
    try {
      setUploadProgress('Uploading cover artwork…')
      const artwork = await uploadFile(artworkFile!, 'artwork', 'cover artwork')

      setUploadProgress('Uploading KYC documents…')
      const empty = { url: '', publicId: '' }
      const [panCard, aadhaarFront, aadhaarBack, gst, passport] = await Promise.all([
        panCardFile      ? uploadFile(panCardFile, 'document', 'PAN card')           : Promise.resolve(empty),
        aadhaarFrontFile ? uploadFile(aadhaarFrontFile, 'document', 'Aadhaar front') : Promise.resolve(empty),
        aadhaarBackFile  ? uploadFile(aadhaarBackFile, 'document', 'Aadhaar back')   : Promise.resolve(empty),
        gstFile          ? uploadFile(gstFile, 'document', 'GST certificate')        : Promise.resolve(empty),
        passportFile     ? uploadFile(passportFile, 'document', 'passport')          : Promise.resolve(empty),
      ])

      const uploadedTracks = []
      for (const [i, t] of tracks.entries()) {
        setUploadProgress(`Uploading track ${i + 1} of ${tracks.length}: ${t.title || `Track ${i + 1}`}…`)
        const audio = await uploadFile(t.audioFile!, 'audio', `track ${i + 1}`)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { audioFile: _af, expanded: _ex, ...rest } = t
        uploadedTracks.push({ ...rest, audioUrl: audio.url, audioPublicId: audio.publicId })
      }

      setUploadProgress('Saving your release…')
      const res = await fetch('/api/release', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          releaseType, albumTitle, artistName, email, phone, genre, subGenre,
          language, releaseDate, upc, labelName,
          artworkUrl: artwork.url, artworkPublicId: artwork.publicId,
          tracks: uploadedTracks,
          legalName, address, clientType,
          panCardUrl: panCard.url, aadhaarFrontUrl: aadhaarFront.url,
          aadhaarBackUrl: aadhaarBack.url, gstUrl: gst.url, passportUrl: passport.url,
          youtubeLink, instagramLink,
          spotifyLink: createSpotify ? '' : spotifyLink,
          createSpotify, youtubeContentId, message,
          acceptedTermsAt: new Date().toISOString(),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')
      setStatus('success')
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    } finally {
      setUploadProgress('')
    }
  }

  // ── Success screen ─────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>
        <Nav />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '40px 24px' }}>
          <div style={{ background: '#0A1535', border: '1px solid rgba(52,211,153,0.25)', borderRadius: 24, padding: '48px 40px', maxWidth: 520, width: '100%', textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(52,211,153,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle size={32} style={{ color: '#34D399' }} />
            </div>
            <h2 className="font-outfit font-black text-white" style={{ fontSize: 26, marginBottom: 12 }}>
              {releaseType} Submitted! 🎉
            </h2>
            <p className="font-inter" style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>
              <strong style={{ color: '#fff' }}>{albumTitle}</strong> with {tracks.length} tracks has been received.
            </p>
            <p className="font-inter" style={{ color: '#5CB2DC', fontSize: 13, lineHeight: 1.7, marginBottom: 28 }}>
              Our team will review your {releaseType.toLowerCase()} within 24 hours. A confirmation email has been sent to {email}.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Link href="/my-submissions" style={{ background: '#0A64C3', color: '#fff', padding: '12px 24px', borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Track Status <ArrowRight size={14} />
              </Link>
              <Link href="/release" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '12px 24px', borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Submit Another
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Main form ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-10 sm:pt-36 sm:pb-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.1) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: '#4A5568' }}>
              <li><Link href="/" style={{ color: '#4A5568' }} className="hover:text-white transition-colors">Home</Link></li>
              <li>›</li>
              <li style={{ color: '#5CB2DC' }}>Release EP / Album</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5" style={{ background: 'rgba(10,100,195,0.12)', border: '1px solid rgba(10,100,195,0.25)' }}>
            <Music size={13} style={{ color: '#5CB2DC' }} />
            <span className="font-outfit font-bold text-[11px] tracking-[0.1em] uppercase" style={{ color: '#5CB2DC' }}>EP &amp; Album Distribution</span>
          </div>
          <h1 className="font-outfit font-black text-white tracking-[-0.03em] mb-3" style={{ fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.05 }}>
            Release Your EP<br />
            <span style={{ color: '#0A64C3' }}>or Full Album</span>
          </h1>
          <p className="font-inter" style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.7, maxWidth: 560 }}>
            Upload multiple tracks in one go. Each track gets its own WAV, metadata and ISRC. Your EP/Album goes live on 150+ platforms within 72 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmitClick}>

            {/* ── Release Type ── */}
            <div className="rounded-2xl p-7 mb-6" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h2 className="font-outfit font-black text-white text-[17px] mb-5">Release Type</h2>
              <div className="grid grid-cols-2 gap-4">
                {(['EP', 'Album'] as const).map(rt => (
                  <button key={rt} type="button" onClick={() => setReleaseType(rt)}
                    style={{
                      border: `2px solid ${releaseType === rt ? '#0A64C3' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: 16, padding: '20px 16px', cursor: 'pointer', textAlign: 'left',
                      background: releaseType === rt ? 'rgba(10,100,195,0.12)' : '#060C18',
                      transition: 'all 0.2s',
                    }}>
                    <div className="font-outfit font-black text-white text-[20px] mb-1">{rt}</div>
                    <div className="font-inter text-[12px]" style={{ color: '#8899AA' }}>
                      {rt === 'EP' ? '2–6 tracks · Extended Play' : '7+ tracks · Full Album'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Album Info ── */}
            <div className="rounded-2xl p-7 mb-6" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h2 className="font-outfit font-black text-white text-[17px] mb-5">{releaseType} Details</h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelCls}>{releaseType} Title *</label>
                  <input required value={albumTitle} onChange={e => setAlbumTitle(e.target.value)}
                    placeholder={`e.g. ${releaseType === 'EP' ? 'Heartbreak Vol. 1' : 'Infinite Skies'}`} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Artist Name *</label>
                  <input required value={artistName} onChange={e => setArtistName(e.target.value)}
                    placeholder="Your artist name" className={inputCls} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelCls}>Email Address *</label>
                  <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Phone / WhatsApp *</label>
                  <input required type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98765 43210" className={inputCls} />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={labelCls}>Genre *</label>
                  <select required value={genre} onChange={e => setGenre(e.target.value)} className={inputCls}>
                    <option value="" disabled>Select Genre</option>
                    {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Language *</label>
                  <select required value={language} onChange={e => setLanguage(e.target.value)} className={inputCls}>
                    <option value="" disabled>Select Language</option>
                    {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Release Date *</label>
                  <input required type="date" min={todayISO} value={releaseDate}
                    onChange={e => {
                      setReleaseDate(e.target.value)
                      setReleaseDateError(e.target.value < todayISO ? 'Cannot be in the past.' : '')
                    }}
                    className={inputCls}
                    style={{ borderColor: releaseDateError ? '#C41230' : undefined }} />
                  {releaseDateError && <p className="font-inter text-[11px] mt-1" style={{ color: '#F87171' }}>{releaseDateError}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelCls}>Label Name (P&amp;C Owner) *</label>
                  <input required value={labelName} onChange={e => setLabelName(e.target.value)}
                    placeholder="e.g. Western Beats, Self-Released" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>UPC <span className="normal-case tracking-normal font-normal text-[#4A5568]">(optional)</span></label>
                  <input value={upc} onChange={e => setUpc(e.target.value)}
                    placeholder="Universal Product Code" className={inputCls} />
                </div>
              </div>

              {/* Cover Artwork */}
              {sectionDivider('Cover Artwork')}
              <div>
                <label className={labelCls}>Cover Artwork * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(Square JPG/PNG, min 3000×3000px — shared across all tracks)</span></label>
                <FileDropZone
                  file={artworkFile} inputId="artwork-upload" accept="image/jpeg,image/png,image/jpg"
                  icon="🖼️" hint="JPG or PNG · 3000×3000px or 1500×1500px" color="#5CB2DC"
                  onFile={f => {
                    if (!f) { setArtworkFile(null); return }
                    if (!f.type.startsWith('image/')) { alert('Cover artwork must be JPG or PNG.'); return }
                    const url = URL.createObjectURL(f)
                    const img = new window.Image() as HTMLImageElement
                    img.onload = () => {
                      URL.revokeObjectURL(url)
                      if (!((img.width === 3000 && img.height === 3000) || (img.width === 1500 && img.height === 1500))) {
                        alert(`Artwork must be exactly 3000×3000 or 1500×1500px. Yours is ${img.width}×${img.height}px.`)
                        return
                      }
                      setArtworkFile(f)
                    }
                    img.onerror = () => { URL.revokeObjectURL(url); alert('Could not read image. Please try again.') }
                    img.src = url
                  }}
                />
              </div>
            </div>

            {/* ── Tracklist ── */}
            <div className="rounded-2xl p-7 mb-6" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h2 className="font-outfit font-black text-white text-[17px] mb-1">Tracklist</h2>
                  <p className="font-inter text-[12px]" style={{ color: '#8899AA' }}>{tracks.length} track{tracks.length !== 1 ? 's' : ''} · Each needs a WAV file + metadata</p>
                </div>
                <button type="button" onClick={addTrack}
                  style={{ background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', color: '#5CB2DC', padding: '8px 16px', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Plus size={15} /> Add Track
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {tracks.map((track, idx) => (
                  <div key={idx} style={{ background: '#060C18', border: `1px solid ${track.audioFile && track.title ? 'rgba(52,211,153,0.2)' : 'rgba(255,255,255,0.06)'}`, borderRadius: 14, overflow: 'hidden' }}>
                    {/* Track header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', cursor: 'pointer' }}
                      onClick={() => toggleExpand(idx)}>
                      <GripVertical size={16} style={{ color: '#4A5568', flexShrink: 0 }} />
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: track.audioFile && track.title ? 'rgba(52,211,153,0.12)' : 'rgba(10,100,195,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 700, color: track.audioFile && track.title ? '#34D399' : '#5CB2DC' }}>
                        {track.audioFile && track.title ? '✓' : track.trackNumber}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="font-outfit font-bold text-white text-[14px]" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {track.title || `Track ${track.trackNumber}`}
                        </div>
                        {track.audioFile && (
                          <div className="font-inter text-[11px]" style={{ color: '#34D399', marginTop: 1 }}>✓ {track.audioFile.name}</div>
                        )}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {tracks.length > 2 && (
                          <button type="button" onClick={e => { e.stopPropagation(); removeTrack(idx) }}
                            style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', color: '#F87171', borderRadius: 8, padding: '4px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <Trash2 size={13} />
                          </button>
                        )}
                        {track.expanded ? <ChevronUp size={16} style={{ color: '#4A5568' }} /> : <ChevronDown size={16} style={{ color: '#4A5568' }} />}
                      </div>
                    </div>

                    {/* Track fields */}
                    {track.expanded && (
                      <div style={{ padding: '0 16px 16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="pt-4 grid sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className={labelCls}>Track Title *</label>
                            <input required value={track.title}
                              onChange={e => updateTrack(idx, 'title', e.target.value)}
                              placeholder="Track title" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Featuring <span className="normal-case tracking-normal font-normal text-[#4A5568]">(optional)</span></label>
                            <input value={track.featuring}
                              onChange={e => updateTrack(idx, 'featuring', e.target.value)}
                              placeholder="ft. Artist Name" className={inputCls} />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className={labelCls}>Singer *</label>
                            <input required value={track.singer}
                              onChange={e => updateTrack(idx, 'singer', e.target.value)}
                              placeholder="Vocalist / Singer name" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Lyric Writer *</label>
                            <input required value={track.lyricWriter}
                              onChange={e => updateTrack(idx, 'lyricWriter', e.target.value)}
                              placeholder="Lyric writer name" className={inputCls} />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className={labelCls}>Music Director *</label>
                            <input required value={track.musicDirector}
                              onChange={e => updateTrack(idx, 'musicDirector', e.target.value)}
                              placeholder="Music director name" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Music Arranger *</label>
                            <input required value={track.musicArranger}
                              onChange={e => updateTrack(idx, 'musicArranger', e.target.value)}
                              placeholder="Music arranger name" className={inputCls} />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4 mb-4">
                          <div>
                            <label className={labelCls}>Director *</label>
                            <input required value={track.director}
                              onChange={e => updateTrack(idx, 'director', e.target.value)}
                              placeholder="Director" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Mixer *</label>
                            <input required value={track.mixer}
                              onChange={e => updateTrack(idx, 'mixer', e.target.value)}
                              placeholder="Mixer name" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Producer *</label>
                            <input required value={track.producer}
                              onChange={e => updateTrack(idx, 'producer', e.target.value)}
                              placeholder="Producer name" className={inputCls} />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className={labelCls}>ISRC <span className="normal-case tracking-normal font-normal text-[#4A5568]">(optional)</span></label>
                            <input value={track.isrc}
                              onChange={e => updateTrack(idx, 'isrc', e.target.value)}
                              placeholder="e.g. ING642300741" className={inputCls} />
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 2 }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                              <input type="checkbox" checked={track.explicit}
                                onChange={e => updateTrack(idx, 'explicit', e.target.checked)}
                                style={{ width: 16, height: 16, accentColor: '#F87171' }} />
                              <div>
                                <div className="font-outfit font-bold text-white text-[13px]">Explicit</div>
                                <div className="font-inter text-[11px]" style={{ color: '#8899AA' }}>Strong language / adult content</div>
                              </div>
                            </label>
                          </div>
                        </div>

                        {/* Audio file */}
                        <div>
                          <label className={labelCls}>Audio File * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(WAV only)</span></label>
                          <FileDropZone
                            file={track.audioFile}
                            inputId={`audio-upload-${idx}`}
                            accept=".wav,audio/wav,audio/x-wav"
                            icon="🎵" hint="WAV only · Max 500MB" color="#34D399"
                            onFile={f => {
                              if (!f) { updateTrack(idx, 'audioFile', null); return }
                              const isWav = f.type === 'audio/wav' || f.type === 'audio/x-wav' || f.name.toLowerCase().endsWith('.wav')
                              if (!isWav) { alert('Only WAV files are accepted for Track ' + track.trackNumber); return }
                              updateTrack(idx, 'audioFile', f)
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button type="button" onClick={addTrack}
                style={{ marginTop: 16, width: '100%', padding: '12px', border: '2px dashed rgba(10,100,195,0.3)', borderRadius: 14, background: 'rgba(10,100,195,0.04)', color: '#5CB2DC', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all 0.2s' }}>
                <Plus size={16} /> Add Another Track
              </button>
            </div>

            {/* ── KYC ── */}
            <div className="rounded-2xl p-7 mb-6" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h2 className="font-outfit font-black text-white text-[17px] mb-5">KYC &amp; Identity</h2>

              <div className="mb-4">
                <label className={labelCls}>Artist Location *</label>
                <div className="flex gap-3">
                  {(['India', 'International'] as const).map(t => (
                    <button key={t} type="button" onClick={() => setClientType(t)}
                      className={`flex-1 py-3 rounded-xl font-outfit font-bold text-[13px] border transition-all duration-200 ${clientType === t ? 'border-[#0A64C3] bg-[#0A64C3]/20 text-white' : 'border-white/10 bg-[#060D1F] text-[#8899AA]'}`}>
                      {t === 'India' ? '🇮🇳 India' : '🌍 International'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelCls}>Legal Name *</label>
                  <input required value={legalName} onChange={e => setLegalName(e.target.value)}
                    placeholder="Full legal name as per ID" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Full Address *</label>
                  <input required value={address} onChange={e => setAddress(e.target.value)}
                    placeholder="Street, City, State, PIN" className={inputCls} />
                </div>
              </div>

              {clientType === 'India' && (
                <>
                  <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: '12px 16px', marginBottom: 16 }}>
                    <p className="font-inter text-[13px]" style={{ color: '#F87171', margin: 0, fontWeight: 600 }}>⚠️ PAN Card and Aadhaar Card (front + back) are mandatory.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelCls}>PAN Card * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(JPG/PNG)</span></label>
                      <FileDropZone file={panCardFile} inputId="pan-upload" accept="image/jpeg,image/png,image/jpg"
                        icon="📄" hint="JPG or PNG · Colour scan" color="#F59E0B"
                        onFile={f => { if (f && !f.type.startsWith('image/')) { alert('JPG or PNG only'); return }; setPanCardFile(f) }} />
                    </div>
                    <div>
                      <label className={labelCls}>Aadhaar Front * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(JPG/PNG)</span></label>
                      <FileDropZone file={aadhaarFrontFile} inputId="aadhaar-front-upload" accept="image/jpeg,image/png,image/jpg"
                        icon="📄" hint="Front side with photo" color="#F59E0B"
                        onFile={f => { if (f && !f.type.startsWith('image/')) { alert('JPG or PNG only'); return }; setAadhaarFrontFile(f) }} />
                    </div>
                    <div>
                      <label className={labelCls}>Aadhaar Back * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(JPG/PNG)</span></label>
                      <FileDropZone file={aadhaarBackFile} inputId="aadhaar-back-upload" accept="image/jpeg,image/png,image/jpg"
                        icon="📄" hint="Back side with address" color="#F59E0B"
                        onFile={f => { if (f && !f.type.startsWith('image/')) { alert('JPG or PNG only'); return }; setAadhaarBackFile(f) }} />
                    </div>
                    <div>
                      <label className={labelCls}>GST Certificate <span className="normal-case tracking-normal font-normal text-[#4A5568]">(optional)</span></label>
                      <FileDropZone file={gstFile} inputId="gst-upload" accept="image/*,application/pdf"
                        icon="📄" hint="JPG, PNG or PDF" color="#34D399"
                        onFile={setGstFile} />
                    </div>
                  </div>
                </>
              )}

              {clientType === 'International' && (
                <>
                  <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: '12px 16px', marginBottom: 16 }}>
                    <p className="font-inter text-[13px]" style={{ color: '#F87171', margin: 0, fontWeight: 600 }}>⚠️ Passport is mandatory for international artists.</p>
                  </div>
                  <div>
                    <label className={labelCls}>Passport * <span className="normal-case tracking-normal font-normal text-[#4A5568]">(Photo page)</span></label>
                    <FileDropZone file={passportFile} inputId="passport-upload" accept="image/*,application/pdf"
                      icon="📄" hint="Photo page · JPG, PNG or PDF" color="#F59E0B"
                      onFile={setPassportFile} />
                  </div>
                </>
              )}
            </div>

            {/* ── Links ── */}
            <div className="rounded-2xl p-7 mb-6" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h2 className="font-outfit font-black text-white text-[17px] mb-5">Links &amp; Preferences</h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelCls}>YouTube Link <span className="normal-case tracking-normal font-normal text-[#4A5568]">(optional)</span></label>
                  <input type="url" value={youtubeLink} onChange={e => setYoutubeLink(e.target.value)}
                    placeholder="https://youtube.com/..." className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Instagram Link *</label>
                  <input required type="url" value={instagramLink} onChange={e => setInstagramLink(e.target.value)}
                    placeholder="https://www.instagram.com/yourprofile" className={inputCls} />
                </div>
              </div>

              <div className="mb-4">
                <label className={labelCls}>Spotify Profile <span className="normal-case tracking-normal font-normal text-[#4A5568]">(optional)</span></label>
                {!createSpotify && (
                  <input type="url" value={spotifyLink} onChange={e => setSpotifyLink(e.target.value)}
                    placeholder="https://open.spotify.com/artist/..." className={inputCls} />
                )}
                {createSpotify && (
                  <div className="mt-2 rounded-xl px-4 py-3 font-inter text-[13px]"
                    style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)', color: '#34D399' }}>
                    ✅ We'll create a Spotify artist profile on your behalf after approval.
                  </div>
                )}
                <label className="flex items-center gap-2.5 mt-3 cursor-pointer select-none w-fit">
                  <input type="checkbox" checked={createSpotify}
                    onChange={e => { setCreateSpotify(e.target.checked); if (e.target.checked) setSpotifyLink('') }}
                    className="w-4 h-4 rounded accent-blu cursor-pointer" />
                  <span className="font-inter text-[13px] text-ice">I don't have a Spotify profile — please create one for me</span>
                </label>
              </div>

              <div className="mb-4">
                <label className={labelCls}>YouTube Content ID</label>
                <select value={youtubeContentId} onChange={e => setYoutubeContentId(e.target.value)} className={inputCls}>
                  {YOUTUBE_CONTENT_ID_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className={labelCls}>Anything Else? <span className="normal-case tracking-normal font-normal text-[#4A5568]">(optional)</span></label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={3}
                  placeholder="Special instructions, event tie-ins, references…"
                  className={`${inputCls} resize-none`} />
              </div>
            </div>

            {/* ── AI Confirmation + Submit ── */}
            <div className="rounded-2xl p-7" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>

              {/* AI warning */}
              <div className="mb-5 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(196,18,48,0.5)', background: 'rgba(196,18,48,0.07)' }}>
                <div className="flex items-center gap-2 px-4 py-2" style={{ background: 'rgba(196,18,48,0.2)', borderBottom: '1px solid rgba(196,18,48,0.3)' }}>
                  <span style={{ fontSize: 15 }}>🚫</span>
                  <span className="font-outfit font-black text-[12px] tracking-[0.12em] uppercase" style={{ color: '#F87171' }}>AI-Generated Music Will Be Rejected</span>
                </div>
                <p className="font-inter text-[12px] leading-relaxed px-4 py-3" style={{ color: '#E2E8F0', margin: 0 }}>
                  All submitted tracks must be <strong style={{ color: '#fff' }}>100% human-created</strong>. AI-detected tracks will be <strong style={{ color: '#F87171' }}>immediately rejected</strong> with no refund.
                </p>
              </div>

              <div className="mb-5 rounded-xl px-4 py-3" style={{ background: 'rgba(196,18,48,0.06)', border: '1px solid rgba(196,18,48,0.25)' }}>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input type="checkbox" checked={confirmedNotAI}
                    onChange={e => setConfirmedNotAI(e.target.checked)}
                    className="mt-0.5 w-4 h-4 flex-shrink-0" style={{ accentColor: '#F87171' }} />
                  <span className="font-inter text-[13px] leading-relaxed" style={{ color: '#E2E8F0' }}>
                    <strong style={{ color: '#F87171' }}>I confirm</strong> all {tracks.length} tracks are <strong style={{ color: '#fff' }}>100% human-created</strong> with no AI-generated music, vocals, or beats. *
                  </span>
                </label>
              </div>

              {status === 'error' && errorMsg && (
                <div className="mb-5 rounded-xl px-4 py-3 font-inter text-[13px]"
                  style={{ background: 'rgba(196,18,48,0.1)', border: '1px solid rgba(196,18,48,0.25)', color: '#F87171' }}>
                  {errorMsg}
                </div>
              )}

              {status === 'loading' && uploadProgress && (
                <div className="mb-4 rounded-xl px-4 py-3 font-inter text-[13px]"
                  style={{ background: 'rgba(10,100,195,0.1)', border: '1px solid rgba(10,100,195,0.25)', color: '#5CB2DC' }}>
                  <Loader2 size={14} className="inline animate-spin mr-2" />{uploadProgress}
                </div>
              )}

              <p className="font-inter text-[12px] mb-4" style={{ color: '#4A5568' }}>
                By clicking Submit, you will be asked to review and accept our{' '}
                <Link href="/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#5CB2DC' }}>Terms &amp; Conditions</Link>.
              </p>

              <button type="submit" disabled={status === 'loading'}
                style={{ width: '100%', background: '#0A64C3', color: '#fff', border: 'none', borderRadius: 14, padding: '16px', fontSize: 16, fontWeight: 800, cursor: status === 'loading' ? 'not-allowed' : 'pointer', opacity: status === 'loading' ? 0.6 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, boxShadow: '0 8px 32px rgba(10,100,195,0.35)', transition: 'all 0.2s' }}>
                {status === 'loading'
                  ? <><Loader2 size={20} className="animate-spin" /> {uploadProgress ? 'Uploading…' : 'Submitting…'}</>
                  : <><Upload size={18} /> Submit {releaseType} ({tracks.length} tracks) <ArrowRight size={16} /></>
                }
              </button>

              <p className="font-inter text-[11px] text-center mt-4" style={{ color: '#4A5568' }}>
                Free forever · 100% ownership · 80% royalty share
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* T&C Modal */}
      {showTnC && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)' }}
            onClick={() => setShowTnC(false)} />
          <div style={{ position: 'relative', zIndex: 1, background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, width: '100%', maxWidth: 680, maxHeight: '88vh', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 80px rgba(0,0,0,0.7)' }}>
            <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)', flexShrink: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div className="font-outfit font-black text-white text-[17px]">Terms &amp; Conditions</div>
                <div className="font-inter text-[12px]" style={{ color: '#8899AA', marginTop: 2 }}>Western Beats Private Limited · Standard Distribution Agreement</div>
              </div>
              <button type="button" onClick={() => setShowTnC(false)}
                style={{ background: 'rgba(255,255,255,0.07)', border: 'none', borderRadius: 8, width: 32, height: 32, cursor: 'pointer', color: '#8899AA', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
            </div>
            <div style={{ overflowY: 'auto', padding: '20px 24px', flex: 1 }}>
              <p className="font-inter text-[13px] leading-relaxed" style={{ color: '#CBD5E0', marginBottom: 16 }}>
                By submitting your {releaseType}, you agree to Western Beats' Standard Distribution Agreement. Key terms: 80% royalty to artist, 3-year term with 12-month lock-in, worldwide distribution rights, zero tolerance for AI-generated content.
              </p>
              <p className="font-inter text-[12px]" style={{ color: '#4A5568' }}>
                Full terms available at <Link href="/terms" target="_blank" style={{ color: '#5CB2DC' }}>westernbeats.com/terms</Link>. By checking below, you confirm you have read and agree to all terms.
              </p>
            </div>
            <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', marginBottom: 14 }}>
                <input type="checkbox" checked={tncAgreed} onChange={e => setTncAgreed(e.target.checked)}
                  style={{ marginTop: 2, width: 16, height: 16, flexShrink: 0, accentColor: '#0A64C3' }} />
                <span className="font-inter" style={{ fontSize: 13, color: '#E2E8F0', lineHeight: 1.5 }}>
                  <strong style={{ color: '#fff' }}>I agree</strong> to distribute my {releaseType} under the Terms &amp; Conditions above.
                </span>
              </label>
              <div style={{ display: 'flex', gap: 10 }}>
                <button type="button" onClick={() => setShowTnC(false)}
                  style={{ flex: 1, padding: '12px 0', borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#8899AA', cursor: 'pointer', fontSize: 14, fontWeight: 600 }}>
                  Cancel
                </button>
                <button type="button" disabled={!tncAgreed} onClick={() => { if (tncAgreed) doSubmit() }}
                  style={{ flex: 2, padding: '12px 0', borderRadius: 12, background: tncAgreed ? '#0A64C3' : '#1a2a4a', border: 'none', color: tncAgreed ? '#fff' : '#4A5568', cursor: tncAgreed ? 'pointer' : 'not-allowed', fontSize: 14, fontWeight: 700, transition: 'all 0.2s' }}>
                  Confirm &amp; Submit {releaseType}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
