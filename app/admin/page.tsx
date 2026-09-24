'use client'
import { useEffect, useRef, useState } from 'react'

const STATUSES = ['Submitted', 'Under Review', 'Approved', 'Distributing', 'Live', 'Rejected']
const AGREEMENT_STATUSES = ['Not Sent', 'In Process', 'B2B Sent', 'B2B Signed']

function downloadUrl(url: string): string {
  return url || ''
}

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

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)', padding: '24px' },
  card: { background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '20px' },
  input: { width: '100%', background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '10px 14px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' as const },
  btn: { background: '#0A64C3', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer' },
  label: { display: 'block', fontSize: 11, color: '#8899AA', marginBottom: 6, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' as const },
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState('')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(false)
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

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/submissions', { headers: { 'x-admin-password': password } })
    if (res.status === 200) {
      const data = await res.json()
      setSubmissions(data.submissions || [])
      setAuthed(true)
    } else {
      setAuthError('Wrong password.')
    }
    setLoading(false)
  }

  async function refresh() {
    const res = await fetch('/api/submissions', { headers: { 'x-admin-password': password } })
    const data = await res.json()
    setSubmissions(data.submissions || [])
  }

  function selectSub(sub: Submission) {
    if (selectedId === sub._id) {
      setSelectedId(null); setSelected(null); return
    }
    setSelectedId(sub._id)
    setSelected(sub)
    setNewStatus(sub.status)
    setStatusNote(sub.statusNote || '')
    setNewAgreementStatus(sub.agreementStatus || 'Not Sent')
    setUpdateMsg('')
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
      await refresh()
    } else {
      setUpdateMsg('❌ ' + (data.error || 'Failed'))
    }
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
      await refresh()
    } else {
      setB2bMsg('❌ ' + (data.error || 'Failed to send'))
    }
    setSendingB2B(false)
  }

  async function confirmDelete(id: string) {
    setDeleting(true)
    await fetch(`/api/submissions/${id}`, { method: 'DELETE', headers: { 'x-admin-password': password } })
    setSubmissions(prev => prev.filter(s => s._id !== id))
    if (selectedId === id) { setSelectedId(null); setSelected(null) }
    setDeleteConfirm(null)
    setDeleting(false)
  }

  const filtered = submissions
    .filter(s => filterStatus === 'All' || s.status === filterStatus)
    .filter(s => !search || s.trackName.toLowerCase().includes(search.toLowerCase()) || s.artistName.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase()))

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
      {/* Delete confirm popup */}
      {deleteConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(4px)' }}>
          <div style={{ ...S.card, maxWidth: 400, width: '90%', textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🗑️</div>
            <h2 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>Delete Submission?</h2>
            <p style={{ color: '#8899AA', fontSize: 14, margin: '0 0 24px', lineHeight: 1.6 }}>
              This will permanently delete the submission. This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setDeleteConfirm(null)} style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                Cancel
              </button>
              <button onClick={() => confirmDelete(deleteConfirm)} disabled={deleting} style={{ flex: 1, background: '#F87171', border: 'none', borderRadius: 10, padding: '12px', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                {deleting ? 'Deleting…' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap' as const, gap: 16 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, margin: '0 0 4px' }}>Submissions Admin</h1>
            <p style={{ color: '#8899AA', fontSize: 14, margin: 0 }}>{submissions.length} total submissions</p>
          </div>
          <button onClick={refresh} style={{ ...S.btn, background: 'rgba(10,100,195,0.2)', border: '1px solid rgba(10,100,195,0.3)', color: '#5CB2DC' }}>↻ Refresh</button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 12, marginBottom: 28 }}>
          {STATUSES.map(s => (
            <div key={s} style={{ ...S.card, textAlign: 'center' as const, cursor: 'pointer', borderColor: filterStatus === s ? STATUS_COLOR[s] + '66' : 'rgba(255,255,255,0.08)' }} onClick={() => setFilterStatus(filterStatus === s ? 'All' : s)}>
              <p style={{ fontSize: 24, fontWeight: 900, color: STATUS_COLOR[s], margin: '0 0 4px' }}>{submissions.filter(sub => sub.status === s).length}</p>
              <p style={{ fontSize: 11, color: '#8899AA', margin: 0 }}>{s}</p>
            </div>
          ))}
        </div>

        {/* Search + filter */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' as const }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by track, artist or email…" style={{ ...S.input, maxWidth: 340 }} />
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ ...S.input, maxWidth: 180 }}>
            <option value="All">All Statuses</option>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* List */}
        {filtered.length === 0 && <p style={{ color: '#8899AA' }}>No submissions found.</p>}
        {filtered.map(sub => (
          <div key={sub._id} ref={el => { rowRefs.current[sub._id] = el }}>
            {/* Card row */}
            <div
              onClick={() => selectSub(sub)}
              style={{ ...S.card, marginBottom: selectedId === sub._id ? 0 : 12, cursor: 'pointer', borderColor: selectedId === sub._id ? 'rgba(10,100,195,0.5)' : 'rgba(255,255,255,0.08)', borderBottomLeftRadius: selectedId === sub._id ? 0 : 16, borderBottomRightRadius: selectedId === sub._id ? 0 : 16, transition: 'border-color 0.2s' }}
            >
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <img
                  src={sub.artworkUrl || PLACEHOLDER}
                  alt=""
                  onError={e => { (e.currentTarget as HTMLImageElement).src = PLACEHOLDER }}
                  style={{ width: 52, height: 52, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 15, fontWeight: 700, margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{sub.trackName}</p>
                  <p style={{ fontSize: 13, color: '#8899AA', margin: '0 0 6px' }}>{sub.artistName} · {sub.email}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, alignItems: 'center' }}>
                    <span style={{ display: 'inline-block', background: STATUS_COLOR[sub.status] + '22', color: STATUS_COLOR[sub.status], borderRadius: 20, padding: '2px 10px', fontSize: 12, fontWeight: 700 }}>{sub.status}</span>
                    {sub.agreementStatus && sub.agreementStatus !== 'Not Sent' && (
                      <span style={{ display: 'inline-block', background: (AGREEMENT_COLOR[sub.agreementStatus] || '#4A5568') + '22', color: AGREEMENT_COLOR[sub.agreementStatus] || '#4A5568', borderRadius: 20, padding: '2px 10px', fontSize: 11, fontWeight: 700 }}>{sub.agreementStatus}</span>
                    )}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                  <span style={{ fontSize: 11, color: '#4A5568' }}>
                    {new Date(sub.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </span>
                  {sub.status === 'Rejected' && (
                    <button
                      onClick={e => { e.stopPropagation(); setDeleteConfirm(sub._id) }}
                      title="Delete submission"
                      style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: 8, padding: '5px 10px', color: '#F87171', fontSize: 13, cursor: 'pointer', fontWeight: 700, lineHeight: 1 }}
                    >
                      🗑
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Inline detail panel — opens directly below the clicked card */}
            {selectedId === sub._id && selected && (
              <div style={{ ...S.card, marginBottom: 12, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderTop: '1px solid rgba(10,100,195,0.3)', borderColor: 'rgba(10,100,195,0.5)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 28 }}>
                  {/* Left: info */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, alignItems: 'flex-start' }}>
                      <h2 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>Submission Detail</h2>
                      <button onClick={() => { setSelectedId(null); setSelected(null) }} style={{ background: 'none', border: 'none', color: '#8899AA', cursor: 'pointer', fontSize: 18 }}>✕</button>
                    </div>

                    <div style={{ position: 'relative', marginBottom: 16 }}>
                      <img
                        src={selected.artworkUrl || PLACEHOLDER}
                        alt="artwork"
                        onError={e => { (e.currentTarget as HTMLImageElement).src = PLACEHOLDER }}
                        style={{ width: '100%', borderRadius: 12, maxHeight: 180, objectFit: 'cover', display: 'block' }}
                      />
                      {selected.artworkUrl && isS3(selected.artworkUrl) && (
                        <a href={downloadUrl(selected.artworkUrl)} download style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.75)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>
                          ⬇ Download
                        </a>
                      )}
                      {isCloudinary(selected.artworkUrl) && (
                        <span style={{ position: 'absolute', bottom: 8, left: 8, background: 'rgba(248,113,113,0.15)', color: '#F87171', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 6, padding: '3px 8px', fontSize: 11, fontWeight: 700 }}>
                          ⚠ Artwork unavailable
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
                      {[
                        ['Track', selected.trackName], ['Artist', selected.artistName],
                        ['Email', selected.email], ['Phone', selected.phone || '—'],
                        ['Genre', selected.genre || '—'], ['Language', selected.language || '—'],
                        ['Release Date', selected.releaseDate || '—'], ['Singer', selected.singer || '—'],
                        ['Lyric Writer', selected.lyricWriter || '—'], ['Music Director', selected.musicDirector || '—'],
                        ['Producer', selected.producer || '—'], ['Label', selected.labelName || '—'],
                        ['Moods', selected.moods || '—'], ['YT Content ID', selected.youtubeContentId || '—'],
                      ].map(([l, v]) => (
                        <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: 13 }}>
                          <span style={{ color: '#8899AA', flexShrink: 0, marginRight: 8 }}>{l}</span>
                          <span style={{ color: '#E2E8F0', fontWeight: 600, textAlign: 'right' as const, wordBreak: 'break-word' as const }}>{v}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: 14 }}>
                      <p style={S.label}>Audio File</p>
                      {selected.audioUrl && isS3(selected.audioUrl) ? (
                        <div>
                          <audio controls src={selected.audioUrl} style={{ width: '100%', marginBottom: 6 }} />
                          <a href={selected.audioUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#5CB2DC', fontSize: 12 }}>⬇ Download WAV</a>
                        </div>
                      ) : selected.audioUrl && isCloudinary(selected.audioUrl) ? (
                        <p style={{ color: '#F87171', fontSize: 13, margin: 0 }}>⚠ Audio unavailable — file was on Cloudinary (deactivated)</p>
                      ) : (
                        <p style={{ color: '#4A5568', fontSize: 13, margin: 0 }}>No audio file uploaded</p>
                      )}
                    </div>

                    {[['YouTube', selected.youtubeLink], ['Instagram', selected.instagramLink]].filter(([, v]) => v).map(([l, v]) => (
                      <div key={l} style={{ marginTop: 8 }}>
                        <a href={v} target="_blank" rel="noopener noreferrer" style={{ color: '#5CB2DC', fontSize: 13 }}>{l} →</a>
                      </div>
                    ))}
                    {selected.spotifyLink ? (
                      <div style={{ marginTop: 8 }}>
                        <a href={selected.spotifyLink} target="_blank" rel="noopener noreferrer" style={{ color: '#5CB2DC', fontSize: 13 }}>Spotify →</a>
                      </div>
                    ) : selected.createSpotify ? (
                      <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: 8, padding: '4px 10px' }}>
                        <span style={{ fontSize: 12, color: '#34D399', fontWeight: 700 }}>🎵 Create Spotify Profile Requested</span>
                      </div>
                    ) : null}

                    {/* KYC */}
                    {(selected.legalName || selected.panCardUrl || selected.aadhaarFrontUrl || selected.aadhaarBackUrl || selected.aadhaarVoterId || selected.gstUrl || selected.passportUrl) && (
                      <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <p style={S.label}>KYC / Identity</p>
                        {selected.legalName && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 13 }}><span style={{ color: '#8899AA' }}>Legal Name</span><span style={{ color: '#E2E8F0', fontWeight: 600 }}>{selected.legalName}</span></div>}
                        {selected.address && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 13 }}><span style={{ color: '#8899AA' }}>Address</span><span style={{ color: '#E2E8F0', fontWeight: 600, maxWidth: '60%', textAlign: 'right' as const, wordBreak: 'break-word' as const }}>{selected.address}</span></div>}
                        {selected.clientType && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 13 }}><span style={{ color: '#8899AA' }}>Client Type</span><span style={{ color: '#E2E8F0', fontWeight: 600 }}>{selected.clientType}</span></div>}
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginTop: 8 }}>
                          {selected.panCardUrl && <a href={downloadUrl(selected.panCardUrl)} download style={{ background: '#0A64C3', color: '#fff', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>⬇ PAN Card</a>}
                          {selected.aadhaarFrontUrl && <a href={downloadUrl(selected.aadhaarFrontUrl)} download style={{ background: '#5CB2DC', color: '#fff', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>⬇ Aadhaar Front</a>}
                          {selected.aadhaarBackUrl && <a href={downloadUrl(selected.aadhaarBackUrl)} download style={{ background: '#5CB2DC', color: '#fff', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>⬇ Aadhaar Back</a>}
                          {selected.aadhaarVoterId && <a href={downloadUrl(selected.aadhaarVoterId)} download style={{ background: '#5CB2DC', color: '#fff', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>⬇ Aadhaar (old)</a>}
                          {selected.gstUrl && <a href={downloadUrl(selected.gstUrl)} download style={{ background: '#0A64C3', color: '#fff', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>⬇ GST Certificate</a>}
                          {selected.passportUrl && <a href={downloadUrl(selected.passportUrl)} download style={{ background: '#0A64C3', color: '#fff', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>⬇ Passport</a>}
                        </div>
                      </div>
                    )}

                    {selected.message && <p style={{ color: '#8899AA', fontSize: 13, margin: '14px 0 0', padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}>{selected.message}</p>}
                  </div>

                  {/* Right: update controls */}
                  <div>
                    <div style={{ background: '#0A1535', borderRadius: 12, padding: 20, border: '1px solid rgba(10,100,195,0.2)' }}>
                      <label style={S.label}>Update Status</label>
                      <select value={newStatus} onChange={e => setNewStatus(e.target.value)} style={{ ...S.input, marginBottom: 14 }}>
                        {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>

                      <label style={S.label}>Agreement Status</label>
                      <select value={newAgreementStatus} onChange={e => setNewAgreementStatus(e.target.value)} style={{ ...S.input, marginBottom: 14, borderColor: newAgreementStatus === 'B2B Signed' ? 'rgba(52,211,153,0.4)' : newAgreementStatus === 'B2B Sent' ? 'rgba(245,158,11,0.4)' : newAgreementStatus === 'In Process' ? 'rgba(92,178,220,0.4)' : undefined, color: newAgreementStatus === 'B2B Signed' ? '#34D399' : newAgreementStatus === 'B2B Sent' ? '#F59E0B' : newAgreementStatus === 'In Process' ? '#5CB2DC' : '#8899AA' }}>
                        {AGREEMENT_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>

                      <button
                        onClick={sendB2BForm}
                        disabled={sendingB2B}
                        style={{ width: '100%', marginBottom: 14, background: sendingB2B ? '#1a2a4a' : 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: 10, padding: '10px', color: '#F59E0B', fontSize: 14, fontWeight: 700, cursor: sendingB2B ? 'not-allowed' : 'pointer' }}
                      >
                        {sendingB2B ? 'Sending…' : '📋 Send B2B Agreement Form →'}
                      </button>
                      {b2bMsg && <p style={{ fontSize: 13, color: b2bMsg.startsWith('✅') ? '#34D399' : '#F87171', margin: '-8px 0 14px' }}>{b2bMsg}</p>}

                      <label style={S.label}>Note to Artist (optional)</label>
                      <textarea value={statusNote} onChange={e => setStatusNote(e.target.value)} placeholder="e.g. Your artwork resolution needs to be 3000x3000px…" rows={3} style={{ ...S.input, resize: 'vertical' as const, marginBottom: 14 }} />

                      <button onClick={updateStatus} disabled={updating} style={{ ...S.btn, width: '100%' }}>
                        {updating ? 'Updating…' : 'Update & Notify Artist →'}
                      </button>
                      {updateMsg && <p style={{ fontSize: 13, color: updateMsg.startsWith('✅') ? '#34D399' : '#F87171', margin: '10px 0 0' }}>{updateMsg}</p>}

                      {selected.status === 'Rejected' && (
                        <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                          <button onClick={() => setDeleteConfirm(selected._id)} style={{ width: '100%', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 10, padding: '10px', color: '#F87171', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                            🗑 Delete Submission
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
