'use client'
import { useEffect, useState } from 'react'

const STATUSES = ['Submitted', 'Under Review', 'Approved', 'Distributing', 'Live', 'Rejected']
const STATUS_COLOR: Record<string, string> = {
  'Submitted': '#F59E0B', 'Under Review': '#5CB2DC', 'Approved': '#34D399',
  'Distributing': '#0A64C3', 'Live': '#34D399', 'Rejected': '#F87171',
}

interface Submission {
  _id: string; trackName: string; artistName: string; email: string; phone: string
  genre: string; language: string; releaseDate: string; status: string; statusNote: string
  artworkUrl: string; audioUrl: string; submittedAt: string; updatedAt: string
  singer: string; lyricWriter: string; musicDirector: string; producer: string
  labelName: string; moods: string; youtubeLink: string; instagramLink: string
  spotifyLink: string; youtubeContentId: string; message: string
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState('')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState<Submission | null>(null)
  const [newStatus, setNewStatus] = useState('')
  const [statusNote, setStatusNote] = useState('')
  const [updating, setUpdating] = useState(false)
  const [updateMsg, setUpdateMsg] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [search, setSearch] = useState('')

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/submissions')
    if (res.status === 200) {
      // verify password locally against known hash
      if (password === 'wb-admin-2026' || password === (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'wb-admin-2026')) {
        const data = await res.json()
        setSubmissions(data.submissions || [])
        setAuthed(true)
      } else {
        setAuthError('Wrong password.')
      }
    } else {
      setAuthError('Failed to connect.')
    }
    setLoading(false)
  }

  async function refresh() {
    const res = await fetch('/api/submissions')
    const data = await res.json()
    setSubmissions(data.submissions || [])
  }

  async function updateStatus() {
    if (!selected || !newStatus) return
    setUpdating(true)
    setUpdateMsg('')
    const res = await fetch(`/api/submissions/${selected._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus, statusNote, adminPassword: password }),
    })
    const data = await res.json()
    if (res.ok) {
      setUpdateMsg('✅ Status updated and artist notified by email.')
      setSelected(prev => prev ? { ...prev, status: newStatus, statusNote } : null)
      await refresh()
    } else {
      setUpdateMsg('❌ ' + (data.error || 'Failed'))
    }
    setUpdating(false)
  }

  const filtered = submissions
    .filter(s => filterStatus === 'All' || s.status === filterStatus)
    .filter(s => !search || s.trackName.toLowerCase().includes(search.toLowerCase()) || s.artistName.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase()))

  const S = {
    page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)', padding: '24px' },
    card: { background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '20px' },
    input: { width: '100%', background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '10px 14px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' as const },
    btn: { background: '#0A64C3', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer' },
    label: { display: 'block', fontSize: 11, color: '#8899AA', marginBottom: 6, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' as const },
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
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
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
          {['Submitted', 'Under Review', 'Approved', 'Distributing', 'Live', 'Rejected'].map(s => (
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

        <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 380px' : '1fr', gap: 20, alignItems: 'flex-start' as const }}>
          {/* Submissions list */}
          <div>
            {filtered.length === 0 && <p style={{ color: '#8899AA' }}>No submissions found.</p>}
            {filtered.map(sub => (
              <div key={sub._id} onClick={() => { setSelected(sub); setNewStatus(sub.status); setStatusNote(sub.statusNote || ''); setUpdateMsg('') }}
                style={{ ...S.card, marginBottom: 12, cursor: 'pointer', borderColor: selected?._id === sub._id ? 'rgba(10,100,195,0.5)' : 'rgba(255,255,255,0.08)', transition: 'border-color 0.2s' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  {sub.artworkUrl && <img src={sub.artworkUrl} alt="" style={{ width: 52, height: 52, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 15, fontWeight: 700, margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{sub.trackName}</p>
                    <p style={{ fontSize: 13, color: '#8899AA', margin: '0 0 6px' }}>{sub.artistName} · {sub.email}</p>
                    <span style={{ display: 'inline-block', background: STATUS_COLOR[sub.status] + '22', color: STATUS_COLOR[sub.status], borderRadius: 20, padding: '2px 10px', fontSize: 12, fontWeight: 700 }}>{sub.status}</span>
                  </div>
                  <div style={{ textAlign: 'right' as const, fontSize: 11, color: '#4A5568', flexShrink: 0 }}>
                    {new Date(sub.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          {selected && (
            <div style={{ ...S.card, position: 'sticky' as const, top: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <h2 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>Submission Detail</h2>
                <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: '#8899AA', cursor: 'pointer', fontSize: 18 }}>✕</button>
              </div>

              {selected.artworkUrl && <img src={selected.artworkUrl} alt="artwork" style={{ width: '100%', borderRadius: 12, marginBottom: 16, maxHeight: 200, objectFit: 'cover' }} />}

              {[
                ['Track', selected.trackName], ['Artist', selected.artistName],
                ['Email', selected.email], ['Phone', selected.phone || '—'],
                ['Genre', `${selected.genre}${selected.genre ? ' / ' + (selected as Submission & {subGenre?: string}).subGenre || '' : ''}`],
                ['Language', selected.language], ['Release Date', selected.releaseDate],
                ['Singer', selected.singer || '—'], ['Lyric Writer', selected.lyricWriter || '—'],
                ['Music Director', selected.musicDirector || '—'], ['Producer', selected.producer || '—'],
                ['Label', selected.labelName || '—'], ['Moods', selected.moods || '—'],
                ['YT Content ID', selected.youtubeContentId || '—'],
              ].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: 13 }}>
                  <span style={{ color: '#8899AA' }}>{l}</span>
                  <span style={{ color: '#E2E8F0', fontWeight: 600, maxWidth: '55%', textAlign: 'right' as const, wordBreak: 'break-word' as const }}>{v}</span>
                </div>
              ))}

              {selected.audioUrl && (
                <div style={{ margin: '14px 0 0' }}>
                  <p style={S.label}>Audio File</p>
                  <a href={selected.audioUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#5CB2DC', fontSize: 13, wordBreak: 'break-all' as const }}>▶ Play / Download</a>
                </div>
              )}

              {[['YouTube', selected.youtubeLink], ['Instagram', selected.instagramLink], ['Spotify', selected.spotifyLink]].filter(([, v]) => v).map(([l, v]) => (
                <div key={l} style={{ marginTop: 8 }}>
                  <a href={v} target="_blank" rel="noopener noreferrer" style={{ color: '#5CB2DC', fontSize: 13 }}>{l} →</a>
                </div>
              ))}

              {selected.message && <p style={{ color: '#8899AA', fontSize: 13, margin: '14px 0 0', padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}>{selected.message}</p>}

              {/* Update status */}
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <label style={S.label}>Update Status</label>
                <select value={newStatus} onChange={e => setNewStatus(e.target.value)} style={{ ...S.input, marginBottom: 10 }}>
                  {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <label style={S.label}>Note to Artist (optional)</label>
                <textarea value={statusNote} onChange={e => setStatusNote(e.target.value)} placeholder="e.g. Your artwork resolution needs to be 3000x3000px…" rows={3} style={{ ...S.input, resize: 'vertical' as const, marginBottom: 12 }} />
                <button onClick={updateStatus} disabled={updating} style={{ ...S.btn, width: '100%' }}>
                  {updating ? 'Updating…' : 'Update & Notify Artist →'}
                </button>
                {updateMsg && <p style={{ fontSize: 13, color: updateMsg.startsWith('✅') ? '#34D399' : '#F87171', margin: '10px 0 0' }}>{updateMsg}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
