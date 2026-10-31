'use client'
import { useEffect, useRef, useState } from 'react'

// Proxy download — forces browser save-dialog instead of opening in same tab
function proxyDownload(url: string, name: string) {
  return `/api/download?url=${encodeURIComponent(url)}&name=${encodeURIComponent(name)}`
}

// Reusable button pair: Preview (new tab) + Download (via proxy)
function FileButtons({ url, label, color = '#0A64C3' }: { url: string; label: string; color?: string }) {
  const ext = url.split('.').pop()?.split('?')[0] || 'jpg'
  const filename = `${label.replace(/\s+/g, '-').toLowerCase()}.${ext}`
  const btn: React.CSSProperties = { padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700, border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }
  return (
    <span style={{ display: 'inline-flex', gap: 6 }}>
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ ...btn, background: color, color: '#fff' }}>
        🔍 Preview
      </a>
      <a href={proxyDownload(url, filename)} style={{ ...btn, background: 'rgba(255,255,255,0.08)', color: '#CBD5E0', border: '1px solid rgba(255,255,255,0.12)' }}>
        ⬇ Download
      </a>
    </span>
  )
}

const STATUSES = ['Submitted', 'Under Review', 'Approved', 'Distributing', 'Live', 'Rejected']
const AGREEMENT_STATUSES = ['Not Sent', 'In Process', 'B2B Sent', 'B2B Signed']

const PLACEHOLDER = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><rect width="52" height="52" rx="8" fill="#0A1535"/><text x="26" y="34" text-anchor="middle" font-size="22" fill="#4A5568">♪</text></svg>')}`

function isCloudinary(url?: string) { return !!url?.includes('cloudinary.com') }
function isS3(url?: string) { return !!url?.includes('amazonaws.com') }

const STATUS_COLOR: Record<string, string> = {
  'Submitted': '#F59E0B', 'Under Review': '#5CB2DC', 'Approved': '#34D399',
  'Distributing': '#0A64C3', 'Live': '#34D399', 'Rejected': '#F87171',
}
const AGREEMENT_COLOR: Record<string, string> = {
  'Not Sent': '#4A5568', 'In Process': '#5CB2DC', 'B2B Sent': '#F59E0B', 'B2B Signed': '#34D399',
}

interface Submission {
  _id: string; trackName: string; artistName: string; email: string; phone: string
  genre: string; language: string; releaseDate: string; status: string; statusNote: string
  artworkUrl: string; audioUrl: string; submittedAt: string; updatedAt: string
  singer: string; lyricWriter: string; musicDirector: string; producer: string
  labelName: string; moods: string; youtubeLink: string; instagramLink: string
  spotifyLink: string; createSpotify?: boolean; youtubeContentId: string; message: string
  legalName: string; address: string; clientType: string
  panCardUrl: string; aadhaarFrontUrl: string; aadhaarBackUrl: string; aadhaarVoterId: string; gstUrl: string; passportUrl: string
  agreementStatus?: string; agreementSentAt?: string; subGenre?: string; adminNote?: string
}

interface Track {
  trackNumber: number; title: string; featuring?: string; singer: string; lyricWriter: string
  musicDirector: string; musicArranger?: string; explicit?: boolean; isrc?: string
  audioUrl?: string; audioPublicId?: string
}

interface Release {
  _id: string; releaseType: 'EP' | 'Album'; albumTitle: string; artistName: string
  email: string; phone: string; genre: string; language: string; releaseDate: string
  status: string; statusNote: string; artworkUrl: string; submittedAt: string
  tracks: Track[]; labelName: string; upc?: string
  legalName: string; address: string; clientType: string
  panCardUrl: string; aadhaarFrontUrl: string; aadhaarBackUrl: string; gstUrl: string; passportUrl: string
  youtubeLink: string; instagramLink: string; spotifyLink: string; createSpotify?: boolean
  youtubeContentId: string; message: string
  agreementStatus?: string; agreementSentAt?: string; adminNote?: string
}

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)', padding: '24px' },
  card: { background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '20px' },
  input: { width: '100%', background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '10px 14px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' as const },
  btn: { background: '#0A64C3', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer' },
  label: { display: 'block', fontSize: 11, color: '#8899AA', marginBottom: 6, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' as const },
}

// ── Submissions Panel ─────────────────────────────────────────────────────────
function SubmissionsPanel({ password }: { password: string }) {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selected, setSelected] = useState<Submission | null>(null)
  const [newStatus, setNewStatus] = useState('')
  const [statusNote, setStatusNote] = useState('')
  const [updating, setUpdating] = useState(false)
  const [updateMsg, setUpdateMsg] = useState('')
  const [newAgreementStatus, setNewAgreementStatus] = useState('Not Sent')
  const [filterStatus, setFilterStatus] = useState('All')
  const [search, setSearch] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [sendingB2B, setSendingB2B] = useState(false)
  const [b2bMsg, setB2bMsg] = useState('')
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  async function load() {
    const res = await fetch('/api/submissions', { headers: { 'x-admin-password': password } })
    const data = await res.json()
    setSubmissions(data.submissions || [])
  }
  useEffect(() => { load() }, []) // eslint-disable-line

  function selectSub(sub: Submission) {
    if (selectedId === sub._id) { setSelectedId(null); setSelected(null); return }
    setSelectedId(sub._id); setSelected(sub)
    setNewStatus(sub.status); setStatusNote(sub.statusNote || '')
    setNewAgreementStatus(sub.agreementStatus || 'Not Sent'); setUpdateMsg('')
  }

  async function updateStatus() {
    if (!selected || !newStatus) return
    setUpdating(true); setUpdateMsg('')
    const res = await fetch(`/api/submissions/${selected._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ status: newStatus, statusNote, agreementStatus: newAgreementStatus }),
    })
    const data = await res.json()
    if (res.ok) {
      setUpdateMsg('✅ Status updated and artist notified by email.')
      setSelected(prev => prev ? { ...prev, status: newStatus, statusNote, agreementStatus: newAgreementStatus } : null)
      await load()
    } else { setUpdateMsg('❌ ' + (data.error || 'Failed')) }
    setUpdating(false)
  }

  async function sendB2BForm() {
    if (!selected) return
    setSendingB2B(true); setB2bMsg('')
    const res = await fetch('/api/send-b2b', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ submissionId: selected._id, email: selected.email, artistName: selected.artistName, trackName: selected.trackName }),
    })
    const data = await res.json()
    if (res.ok) {
      setB2bMsg('✅ B2B form link sent to ' + selected.email)
      setNewAgreementStatus('B2B Sent')
      setSelected(prev => prev ? { ...prev, agreementStatus: 'B2B Sent' } : null)
      await load()
    } else { setB2bMsg('❌ ' + (data.error || 'Failed to send')) }
    setSendingB2B(false)
  }

  async function confirmDelete(id: string) {
    setDeleting(true)
    await fetch(`/api/submissions/${id}`, { method: 'DELETE', headers: { 'x-admin-password': password } })
    setSubmissions(prev => prev.filter(s => s._id !== id))
    if (selectedId === id) { setSelectedId(null); setSelected(null) }
    setDeleteConfirm(null); setDeleting(false)
  }

  const filtered = submissions
    .filter(s => filterStatus === 'All' || s.status === filterStatus)
    .filter(s => !search || s.trackName.toLowerCase().includes(search.toLowerCase()) || s.artistName.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      {deleteConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(4px)' }}>
          <div style={{ ...S.card, maxWidth: 400, width: '90%', textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🗑️</div>
            <h2 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>Delete Submission?</h2>
            <p style={{ color: '#8899AA', fontSize: 14, margin: '0 0 24px', lineHeight: 1.6 }}>This will permanently delete the submission. This action cannot be undone.</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setDeleteConfirm(null)} style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => confirmDelete(deleteConfirm)} disabled={deleting} style={{ flex: 1, background: '#F87171', border: 'none', borderRadius: 10, padding: '12px', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>{deleting ? 'Deleting…' : 'Yes, Delete'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 12, marginBottom: 20 }}>
        {STATUSES.map(s => (
          <div key={s} style={{ ...S.card, textAlign: 'center', cursor: 'pointer', borderColor: filterStatus === s ? STATUS_COLOR[s] + '66' : 'rgba(255,255,255,0.08)' }} onClick={() => setFilterStatus(filterStatus === s ? 'All' : s)}>
            <p style={{ fontSize: 24, fontWeight: 900, color: STATUS_COLOR[s], margin: '0 0 4px' }}>{submissions.filter(sub => sub.status === s).length}</p>
            <p style={{ fontSize: 11, color: '#8899AA', margin: 0 }}>{s}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by track, artist or email…" style={{ ...S.input, maxWidth: 340 }} />
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ ...S.input, maxWidth: 180 }}>
          <option value="All">All Statuses</option>
          {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {filtered.length === 0 && <p style={{ color: '#8899AA' }}>No submissions found.</p>}
      {filtered.map(sub => (
        <div key={sub._id} ref={el => { rowRefs.current[sub._id] = el }}>
          <div onClick={() => selectSub(sub)} style={{ ...S.card, marginBottom: selectedId === sub._id ? 0 : 12, cursor: 'pointer', borderColor: selectedId === sub._id ? 'rgba(10,100,195,0.5)' : 'rgba(255,255,255,0.08)', borderBottomLeftRadius: selectedId === sub._id ? 0 : 16, borderBottomRightRadius: selectedId === sub._id ? 0 : 16, transition: 'border-color 0.2s' }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <img src={sub.artworkUrl || PLACEHOLDER} alt="" onError={e => { (e.currentTarget as HTMLImageElement).src = PLACEHOLDER }} style={{ width: 52, height: 52, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 15, fontWeight: 700, margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub.trackName}</p>
                <p style={{ fontSize: 13, color: '#8899AA', margin: '0 0 6px' }}>{sub.artistName} · {sub.email}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', background: STATUS_COLOR[sub.status] + '22', color: STATUS_COLOR[sub.status], borderRadius: 20, padding: '2px 10px', fontSize: 12, fontWeight: 700 }}>{sub.status}</span>
                  {sub.agreementStatus && sub.agreementStatus !== 'Not Sent' && (
                    <span style={{ display: 'inline-block', background: (AGREEMENT_COLOR[sub.agreementStatus] || '#4A5568') + '22', color: AGREEMENT_COLOR[sub.agreementStatus] || '#4A5568', borderRadius: 20, padding: '2px 10px', fontSize: 11, fontWeight: 700 }}>{sub.agreementStatus}</span>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                <span style={{ fontSize: 11, color: '#4A5568' }}>{new Date(sub.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                {sub.status === 'Rejected' && (
                  <button onClick={e => { e.stopPropagation(); setDeleteConfirm(sub._id) }} style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: 8, padding: '5px 10px', color: '#F87171', fontSize: 13, cursor: 'pointer', fontWeight: 700, lineHeight: 1 }}>🗑</button>
                )}
              </div>
            </div>
          </div>

          {selectedId === sub._id && selected && (
            <div style={{ ...S.card, marginBottom: 12, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderTop: '1px solid rgba(10,100,195,0.3)', borderColor: 'rgba(10,100,195,0.5)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 28 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, alignItems: 'flex-start' }}>
                    <h2 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>Submission Detail</h2>
                    <button onClick={() => { setSelectedId(null); setSelected(null) }} style={{ background: 'none', border: 'none', color: '#8899AA', cursor: 'pointer', fontSize: 18 }}>✕</button>
                  </div>

                  <div style={{ position: 'relative', marginBottom: 16 }}>
                    <img src={selected.artworkUrl || PLACEHOLDER} alt="artwork" onError={e => { (e.currentTarget as HTMLImageElement).src = PLACEHOLDER }} style={{ width: '100%', borderRadius: 12, maxHeight: 180, objectFit: 'cover', display: 'block' }} />
                    {selected.artworkUrl && isS3(selected.artworkUrl) && (
                      <span style={{ position: 'absolute', bottom: 8, right: 8 }}><FileButtons url={selected.artworkUrl} label="Artwork" /></span>
                    )}
                    {isCloudinary(selected.artworkUrl) && (
                      <span style={{ position: 'absolute', bottom: 8, left: 8, background: 'rgba(248,113,113,0.15)', color: '#F87171', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 6, padding: '3px 8px', fontSize: 11, fontWeight: 700 }}>⚠ Artwork unavailable</span>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
                    {[['Track', selected.trackName],['Artist', selected.artistName],['Email', selected.email],['Phone', selected.phone || '—'],['Genre', selected.genre || '—'],['Language', selected.language || '—'],['Release Date', selected.releaseDate || '—'],['Singer', selected.singer || '—'],['Lyric Writer', selected.lyricWriter || '—'],['Music Director', selected.musicDirector || '—'],['Producer', selected.producer || '—'],['Label', selected.labelName || '—'],['Moods', selected.moods || '—'],['YT Content ID', selected.youtubeContentId || '—']].map(([l, v]) => (
                      <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: 13 }}>
                        <span style={{ color: '#8899AA', flexShrink: 0, marginRight: 8 }}>{l}</span>
                        <span style={{ color: '#E2E8F0', fontWeight: 600, textAlign: 'right', wordBreak: 'break-word' }}>{v}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 14 }}>
                    <p style={S.label}>Audio File</p>
                    {selected.audioUrl && isS3(selected.audioUrl) ? (
                      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                        <a href={proxyDownload(selected.audioUrl, `${selected.artistName} - ${selected.trackName}.wav`)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.35)', color: '#5CB2DC', padding: '10px 16px', borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>⬇ Download WAV</a>
                        <button onClick={() => window.open(selected.audioUrl, '_blank', 'noopener')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#8899AA', padding: '10px 16px', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>🎵 Listen in New Tab</button>
                      </div>
                    ) : selected.audioUrl && isCloudinary(selected.audioUrl) ? (
                      <p style={{ color: '#F87171', fontSize: 13, margin: 0 }}>⚠ Audio unavailable — file was on Cloudinary (deactivated)</p>
                    ) : (
                      <p style={{ color: '#4A5568', fontSize: 13, margin: 0 }}>No audio file uploaded</p>
                    )}
                  </div>

                  {[['YouTube', selected.youtubeLink], ['Instagram', selected.instagramLink]].filter(([, v]) => v).map(([l, v]) => (
                    <div key={l} style={{ marginTop: 8 }}><a href={v} target="_blank" rel="noopener noreferrer" style={{ color: '#5CB2DC', fontSize: 13 }}>{l} →</a></div>
                  ))}
                  {selected.spotifyLink ? (
                    <div style={{ marginTop: 8 }}><a href={selected.spotifyLink} target="_blank" rel="noopener noreferrer" style={{ color: '#5CB2DC', fontSize: 13 }}>Spotify →</a></div>
                  ) : selected.createSpotify ? (
                    <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: 8, padding: '4px 10px' }}>
                      <span style={{ fontSize: 12, color: '#34D399', fontWeight: 700 }}>🎵 Create Spotify Profile Requested</span>
                    </div>
                  ) : null}

                  {(selected.legalName || selected.panCardUrl || selected.aadhaarFrontUrl || selected.aadhaarBackUrl || selected.aadhaarVoterId || selected.gstUrl || selected.passportUrl) && (
                    <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <p style={S.label}>KYC / Identity</p>
                      {selected.legalName && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 13 }}><span style={{ color: '#8899AA' }}>Legal Name</span><span style={{ color: '#E2E8F0', fontWeight: 600 }}>{selected.legalName}</span></div>}
                      {selected.address && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 13 }}><span style={{ color: '#8899AA' }}>Address</span><span style={{ color: '#E2E8F0', fontWeight: 600, maxWidth: '60%', textAlign: 'right', wordBreak: 'break-word' }}>{selected.address}</span></div>}
                      {selected.clientType && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 13 }}><span style={{ color: '#8899AA' }}>Client Type</span><span style={{ color: '#E2E8F0', fontWeight: 600 }}>{selected.clientType}</span></div>}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
                        {selected.panCardUrl && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>PAN Card</span><FileButtons url={selected.panCardUrl} label="PAN Card" color="#0A64C3" /></div>}
                        {selected.aadhaarFrontUrl && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>Aadhaar Front</span><FileButtons url={selected.aadhaarFrontUrl} label="Aadhaar Front" color="#5CB2DC" /></div>}
                        {selected.aadhaarBackUrl && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>Aadhaar Back</span><FileButtons url={selected.aadhaarBackUrl} label="Aadhaar Back" color="#5CB2DC" /></div>}
                        {selected.aadhaarVoterId && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>Aadhaar (old)</span><FileButtons url={selected.aadhaarVoterId} label="Aadhaar" color="#5CB2DC" /></div>}
                        {selected.gstUrl && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>GST</span><FileButtons url={selected.gstUrl} label="GST Certificate" color="#0A64C3" /></div>}
                        {selected.passportUrl && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>Passport</span><FileButtons url={selected.passportUrl} label="Passport" color="#0A64C3" /></div>}
                      </div>
                    </div>
                  )}

                  {selected.message && <p style={{ color: '#8899AA', fontSize: 13, margin: '14px 0 0', padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}>{selected.message}</p>}
                </div>

                <div>
                  <div style={{ background: '#0A1535', borderRadius: 12, padding: 20, border: '1px solid rgba(10,100,195,0.2)' }}>
                    <label style={S.label}>Update Status</label>
                    <select value={newStatus} onChange={e => setNewStatus(e.target.value)} style={{ ...S.input, marginBottom: 14 }}>
                      {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <label style={S.label}>Agreement Status</label>
                    <select value={newAgreementStatus} onChange={e => setNewAgreementStatus(e.target.value)} style={{ ...S.input, marginBottom: 14, color: newAgreementStatus === 'B2B Signed' ? '#34D399' : newAgreementStatus === 'B2B Sent' ? '#F59E0B' : newAgreementStatus === 'In Process' ? '#5CB2DC' : '#8899AA' }}>
                      {AGREEMENT_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <button onClick={sendB2BForm} disabled={sendingB2B} style={{ width: '100%', marginBottom: 14, background: sendingB2B ? '#1a2a4a' : 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: 10, padding: '10px', color: '#F59E0B', fontSize: 14, fontWeight: 700, cursor: sendingB2B ? 'not-allowed' : 'pointer' }}>
                      {sendingB2B ? 'Sending…' : '📋 Send B2B Agreement Form →'}
                    </button>
                    {b2bMsg && <p style={{ fontSize: 13, color: b2bMsg.startsWith('✅') ? '#34D399' : '#F87171', margin: '-8px 0 14px' }}>{b2bMsg}</p>}
                    <label style={S.label}>Note to Artist (optional)</label>
                    <textarea value={statusNote} onChange={e => setStatusNote(e.target.value)} placeholder="e.g. Your artwork resolution needs to be 3000×3000px…" rows={3} style={{ ...S.input, resize: 'vertical', marginBottom: 14 }} />
                    <button onClick={updateStatus} disabled={updating} style={{ ...S.btn, width: '100%' }}>{updating ? 'Updating…' : 'Update & Notify Artist →'}</button>
                    {updateMsg && <p style={{ fontSize: 13, color: updateMsg.startsWith('✅') ? '#34D399' : '#F87171', margin: '10px 0 0' }}>{updateMsg}</p>}
                    {selected.status === 'Rejected' && (
                      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <button onClick={() => setDeleteConfirm(selected._id)} style={{ width: '100%', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 10, padding: '10px', color: '#F87171', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>🗑 Delete Submission</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

// ── Releases Panel ─────────────────────────────────────────────────────────────
function ReleasesPanel({ password }: { password: string }) {
  const [releases, setReleases] = useState<Release[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selected, setSelected] = useState<Release | null>(null)
  const [newStatus, setNewStatus] = useState('')
  const [statusNote, setStatusNote] = useState('')
  const [updating, setUpdating] = useState(false)
  const [updateMsg, setUpdateMsg] = useState('')
  const [newAgreementStatus, setNewAgreementStatus] = useState('Not Sent')
  const [filterStatus, setFilterStatus] = useState('All')
  const [search, setSearch] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [expandedTracks, setExpandedTracks] = useState<string | null>(null)

  async function load() {
    const res = await fetch('/api/release', { headers: { 'x-admin-password': password } })
    const data = await res.json()
    setReleases(data.releases || [])
  }
  useEffect(() => { load() }, []) // eslint-disable-line

  function selectRel(rel: Release) {
    if (selectedId === rel._id) { setSelectedId(null); setSelected(null); return }
    setSelectedId(rel._id); setSelected(rel)
    setNewStatus(rel.status); setStatusNote(rel.statusNote || '')
    setNewAgreementStatus(rel.agreementStatus || 'Not Sent'); setUpdateMsg('')
  }

  async function updateStatus() {
    if (!selected || !newStatus) return
    setUpdating(true); setUpdateMsg('')
    const res = await fetch(`/api/release/${selected._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ status: newStatus, statusNote, agreementStatus: newAgreementStatus }),
    })
    const data = await res.json()
    if (res.ok) {
      setUpdateMsg('✅ Status updated and artist notified.')
      setSelected(prev => prev ? { ...prev, status: newStatus, statusNote, agreementStatus: newAgreementStatus } : null)
      await load()
    } else { setUpdateMsg('❌ ' + (data.error || 'Failed')) }
    setUpdating(false)
  }

  async function confirmDelete(id: string) {
    setDeleting(true)
    await fetch(`/api/release/${id}`, { method: 'DELETE', headers: { 'x-admin-password': password } })
    setReleases(prev => prev.filter(r => r._id !== id))
    if (selectedId === id) { setSelectedId(null); setSelected(null) }
    setDeleteConfirm(null); setDeleting(false)
  }

  const filtered = releases
    .filter(r => filterStatus === 'All' || r.status === filterStatus)
    .filter(r => !search || r.albumTitle.toLowerCase().includes(search.toLowerCase()) || r.artistName.toLowerCase().includes(search.toLowerCase()) || r.email.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      {deleteConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(4px)' }}>
          <div style={{ ...S.card, maxWidth: 400, width: '90%', textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🗑️</div>
            <h2 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>Delete Release?</h2>
            <p style={{ color: '#8899AA', fontSize: 14, margin: '0 0 24px' }}>This will permanently delete the release and all its tracks. Cannot be undone.</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setDeleteConfirm(null)} style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => confirmDelete(deleteConfirm)} disabled={deleting} style={{ flex: 1, background: '#F87171', border: 'none', borderRadius: 10, padding: '12px', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>{deleting ? 'Deleting…' : 'Yes, Delete'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 12, marginBottom: 20 }}>
        {STATUSES.map(s => (
          <div key={s} style={{ ...S.card, textAlign: 'center', cursor: 'pointer', borderColor: filterStatus === s ? STATUS_COLOR[s] + '66' : 'rgba(255,255,255,0.08)' }} onClick={() => setFilterStatus(filterStatus === s ? 'All' : s)}>
            <p style={{ fontSize: 24, fontWeight: 900, color: STATUS_COLOR[s], margin: '0 0 4px' }}>{releases.filter(r => r.status === s).length}</p>
            <p style={{ fontSize: 11, color: '#8899AA', margin: 0 }}>{s}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by album, artist or email…" style={{ ...S.input, maxWidth: 340 }} />
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ ...S.input, maxWidth: 180 }}>
          <option value="All">All Statuses</option>
          {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {filtered.length === 0 && <p style={{ color: '#8899AA' }}>No EP/Album releases found.</p>}
      {filtered.map(rel => (
        <div key={rel._id}>
          <div onClick={() => selectRel(rel)} style={{ ...S.card, marginBottom: selectedId === rel._id ? 0 : 12, cursor: 'pointer', borderColor: selectedId === rel._id ? 'rgba(10,100,195,0.5)' : 'rgba(255,255,255,0.08)', borderBottomLeftRadius: selectedId === rel._id ? 0 : 16, borderBottomRightRadius: selectedId === rel._id ? 0 : 16, transition: 'border-color 0.2s' }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <img src={rel.artworkUrl || PLACEHOLDER} alt="" onError={e => { (e.currentTarget as HTMLImageElement).src = PLACEHOLDER }} style={{ width: 52, height: 52, borderRadius: 8, objectFit: 'cover' }} />
                <span style={{ position: 'absolute', bottom: -4, right: -4, background: rel.releaseType === 'Album' ? '#C41230' : '#0A64C3', color: '#fff', fontSize: 9, fontWeight: 900, padding: '1px 5px', borderRadius: 4, letterSpacing: 0.5 }}>{rel.releaseType}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 15, fontWeight: 700, margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{rel.albumTitle}</p>
                <p style={{ fontSize: 13, color: '#8899AA', margin: '0 0 6px' }}>{rel.artistName} · {rel.email} · {rel.tracks?.length ?? 0} tracks</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', background: STATUS_COLOR[rel.status] + '22', color: STATUS_COLOR[rel.status], borderRadius: 20, padding: '2px 10px', fontSize: 12, fontWeight: 700 }}>{rel.status}</span>
                  {rel.agreementStatus && rel.agreementStatus !== 'Not Sent' && (
                    <span style={{ display: 'inline-block', background: (AGREEMENT_COLOR[rel.agreementStatus] || '#4A5568') + '22', color: AGREEMENT_COLOR[rel.agreementStatus] || '#4A5568', borderRadius: 20, padding: '2px 10px', fontSize: 11, fontWeight: 700 }}>{rel.agreementStatus}</span>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                <span style={{ fontSize: 11, color: '#4A5568' }}>{new Date(rel.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                {rel.status === 'Rejected' && (
                  <button onClick={e => { e.stopPropagation(); setDeleteConfirm(rel._id) }} style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: 8, padding: '5px 10px', color: '#F87171', fontSize: 13, cursor: 'pointer', fontWeight: 700 }}>🗑</button>
                )}
              </div>
            </div>
          </div>

          {selectedId === rel._id && selected && (
            <div style={{ ...S.card, marginBottom: 12, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderTop: '1px solid rgba(10,100,195,0.3)', borderColor: 'rgba(10,100,195,0.5)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 28 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, alignItems: 'flex-start' }}>
                    <h2 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>{selected.releaseType} Detail</h2>
                    <button onClick={() => { setSelectedId(null); setSelected(null) }} style={{ background: 'none', border: 'none', color: '#8899AA', cursor: 'pointer', fontSize: 18 }}>✕</button>
                  </div>

                  {/* Artwork */}
                  <div style={{ position: 'relative', marginBottom: 16 }}>
                    <img src={selected.artworkUrl || PLACEHOLDER} alt="artwork" onError={e => { (e.currentTarget as HTMLImageElement).src = PLACEHOLDER }} style={{ width: '100%', borderRadius: 12, maxHeight: 180, objectFit: 'cover', display: 'block' }} />
                    {selected.artworkUrl && isS3(selected.artworkUrl) && (
                      <span style={{ position: 'absolute', bottom: 8, right: 8 }}><FileButtons url={selected.artworkUrl} label="Cover Artwork" /></span>
                    )}
                  </div>

                  {/* Meta */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
                    {[['Title', selected.albumTitle],['Type', selected.releaseType],['Artist', selected.artistName],['Email', selected.email],['Phone', selected.phone || '—'],['Genre', selected.genre || '—'],['Language', selected.language || '—'],['Release Date', selected.releaseDate || '—'],['Label', selected.labelName || '—'],['UPC', selected.upc || '—'],['Tracks', selected.tracks?.length ?? 0]].map(([l, v]) => (
                      <div key={String(l)} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: 13 }}>
                        <span style={{ color: '#8899AA', flexShrink: 0, marginRight: 8 }}>{l}</span>
                        <span style={{ color: '#E2E8F0', fontWeight: 600, textAlign: 'right' }}>{String(v)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tracklist */}
                  <div style={{ marginTop: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <p style={S.label}>Tracklist ({selected.tracks?.length ?? 0} tracks)</p>
                      <button onClick={() => setExpandedTracks(expandedTracks === selected._id ? null : selected._id)}
                        style={{ background: 'none', border: 'none', color: '#5CB2DC', fontSize: 12, cursor: 'pointer', fontWeight: 700 }}>
                        {expandedTracks === selected._id ? '▲ Collapse' : '▼ Expand All'}
                      </button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {(selected.tracks || []).map((t, i) => (
                        <div key={i} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, overflow: 'hidden' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px' }}>
                            <span style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(10,100,195,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900, color: '#5CB2DC', flexShrink: 0 }}>{t.trackNumber}</span>
                            <span style={{ flex: 1, fontWeight: 700, fontSize: 14, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.title}{t.featuring ? ` ft. ${t.featuring}` : ''}</span>
                            {t.explicit && <span style={{ background: 'rgba(248,113,113,0.15)', color: '#F87171', fontSize: 10, fontWeight: 800, padding: '1px 6px', borderRadius: 4 }}>E</span>}
                            {t.audioUrl && isS3(t.audioUrl) && (
                              <div style={{ display: 'flex', gap: 6 }}>
                                <a href={proxyDownload(t.audioUrl, `${t.trackNumber}. ${t.title}.wav`)} style={{ background: 'rgba(10,100,195,0.15)', color: '#5CB2DC', padding: '4px 10px', borderRadius: 7, fontSize: 11, fontWeight: 700, textDecoration: 'none', border: '1px solid rgba(10,100,195,0.3)' }}>⬇ WAV</a>
                                <button onClick={() => window.open(t.audioUrl, '_blank', 'noopener')} style={{ background: 'rgba(255,255,255,0.05)', color: '#8899AA', padding: '4px 10px', borderRadius: 7, fontSize: 11, fontWeight: 700, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>🎵</button>
                              </div>
                            )}
                          </div>
                          {expandedTracks === selected._id && (
                            <div style={{ padding: '0 14px 10px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 16px', marginTop: 8 }}>
                                {[['Singer', t.singer],['Lyric Writer', t.lyricWriter],['Music Director', t.musicDirector],['ISRC', t.isrc || '—']].map(([l, v]) => (
                                  <div key={String(l)} style={{ display: 'flex', gap: 6, fontSize: 12 }}>
                                    <span style={{ color: '#4A5568', minWidth: 90 }}>{l}</span>
                                    <span style={{ color: '#E2E8F0', fontWeight: 600 }}>{String(v)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
                    {[['YouTube', selected.youtubeLink], ['Instagram', selected.instagramLink]].filter(([, v]) => v).map(([l, v]) => (
                      <a key={String(l)} href={String(v)} target="_blank" rel="noopener noreferrer" style={{ color: '#5CB2DC', fontSize: 13 }}>{l} →</a>
                    ))}
                    {selected.spotifyLink && <a href={selected.spotifyLink} target="_blank" rel="noopener noreferrer" style={{ color: '#5CB2DC', fontSize: 13 }}>Spotify →</a>}
                    {selected.createSpotify && <span style={{ fontSize: 12, color: '#34D399', fontWeight: 700 }}>🎵 Create Spotify Requested</span>}
                  </div>

                  {/* KYC */}
                  {(selected.panCardUrl || selected.aadhaarFrontUrl || selected.aadhaarBackUrl || selected.gstUrl || selected.passportUrl) && (
                    <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <p style={S.label}>KYC / Identity</p>
                      {selected.legalName && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 13 }}><span style={{ color: '#8899AA' }}>Legal Name</span><span style={{ color: '#E2E8F0', fontWeight: 600 }}>{selected.legalName}</span></div>}
                      {selected.address && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 13 }}><span style={{ color: '#8899AA' }}>Address</span><span style={{ color: '#E2E8F0', fontWeight: 600, maxWidth: '60%', textAlign: 'right', wordBreak: 'break-word' }}>{selected.address}</span></div>}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
                        {selected.panCardUrl && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>PAN Card</span><FileButtons url={selected.panCardUrl} label="PAN Card" color="#0A64C3" /></div>}
                        {selected.aadhaarFrontUrl && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>Aadhaar Front</span><FileButtons url={selected.aadhaarFrontUrl} label="Aadhaar Front" color="#5CB2DC" /></div>}
                        {selected.aadhaarBackUrl && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>Aadhaar Back</span><FileButtons url={selected.aadhaarBackUrl} label="Aadhaar Back" color="#5CB2DC" /></div>}
                        {selected.gstUrl && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>GST</span><FileButtons url={selected.gstUrl} label="GST Certificate" color="#0A64C3" /></div>}
                        {selected.passportUrl && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 12, color: '#8899AA', width: 100 }}>Passport</span><FileButtons url={selected.passportUrl} label="Passport" color="#0A64C3" /></div>}
                      </div>
                    </div>
                  )}

                  {selected.message && <p style={{ color: '#8899AA', fontSize: 13, margin: '14px 0 0', padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}>{selected.message}</p>}
                </div>

                {/* Right: controls */}
                <div>
                  <div style={{ background: '#0A1535', borderRadius: 12, padding: 20, border: '1px solid rgba(10,100,195,0.2)' }}>
                    <label style={S.label}>Update Status</label>
                    <select value={newStatus} onChange={e => setNewStatus(e.target.value)} style={{ ...S.input, marginBottom: 14 }}>
                      {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <label style={S.label}>Agreement Status</label>
                    <select value={newAgreementStatus} onChange={e => setNewAgreementStatus(e.target.value)} style={{ ...S.input, marginBottom: 14, color: newAgreementStatus === 'B2B Signed' ? '#34D399' : newAgreementStatus === 'B2B Sent' ? '#F59E0B' : '#8899AA' }}>
                      {AGREEMENT_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <label style={S.label}>Note to Artist (optional)</label>
                    <textarea value={statusNote} onChange={e => setStatusNote(e.target.value)} placeholder="Notes for the artist…" rows={3} style={{ ...S.input, resize: 'vertical', marginBottom: 14 }} />
                    <button onClick={updateStatus} disabled={updating} style={{ ...S.btn, width: '100%' }}>{updating ? 'Updating…' : 'Update & Notify Artist →'}</button>
                    {updateMsg && <p style={{ fontSize: 13, color: updateMsg.startsWith('✅') ? '#34D399' : '#F87171', margin: '10px 0 0' }}>{updateMsg}</p>}
                    {selected.status === 'Rejected' && (
                      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <button onClick={() => setDeleteConfirm(selected._id)} style={{ width: '100%', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 10, padding: '10px', color: '#F87171', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>🗑 Delete Release</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

// ── Main Admin Page ───────────────────────────────────────────────────────────
export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'singles' | 'releases'>('singles')

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/submissions', { headers: { 'x-admin-password': password } })
    if (res.status === 200) { setAuthed(true) }
    else { setAuthError('Wrong password.') }
    setLoading(false)
  }

  if (!authed) {
    return (
      <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ ...S.card, width: '100%', maxWidth: 400 }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, margin: '0 0 8px' }}>Western Beats Admin</h1>
          <p style={{ color: '#8899AA', fontSize: 14, margin: '0 0 24px' }}>Enter admin password to access submissions</p>
          <form onSubmit={login}>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Admin password" style={{ ...S.input, marginBottom: 16 }} />
            {authError && <p style={{ color: '#F87171', fontSize: 13, margin: '0 0 12px' }}>{authError}</p>}
            <button type="submit" style={{ ...S.btn, width: '100%' }} disabled={loading}>{loading ? 'Loading…' : 'Login →'}</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div style={S.page}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, margin: '0 0 4px' }}>Western Beats Admin</h1>
            <p style={{ color: '#8899AA', fontSize: 14, margin: 0 }}>Manage singles, EPs &amp; albums</p>
          </div>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 24, background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 4, width: 'fit-content' }}>
          <button onClick={() => setActiveTab('singles')}
            style={{ padding: '10px 24px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 700, transition: 'all 0.2s', background: activeTab === 'singles' ? '#0A64C3' : 'transparent', color: activeTab === 'singles' ? '#fff' : '#8899AA' }}>
            🎵 Singles
          </button>
          <button onClick={() => setActiveTab('releases')}
            style={{ padding: '10px 24px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 700, transition: 'all 0.2s', background: activeTab === 'releases' ? '#0A64C3' : 'transparent', color: activeTab === 'releases' ? '#fff' : '#8899AA' }}>
            💿 EP / Albums
          </button>
        </div>

        {activeTab === 'singles'
          ? <SubmissionsPanel password={password} />
          : <ReleasesPanel password={password} />
        }
      </div>
    </div>
  )
}
