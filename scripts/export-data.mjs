import { MongoClient } from 'mongodb'
import * as XLSX from 'xlsx'
import path from 'path'
import { fileURLToPath } from 'url'

const MONGODB_URI = 'mongodb+srv://contactwesternbeats_db_user:663bR7qQKYWdmwg3@cluster0.ik3hfhc.mongodb.net/westernbeats?appName=Cluster0'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const client = new MongoClient(MONGODB_URI)
await client.connect()
const db = client.db('westernbeats')

// --- SUBMISSIONS ---
const submissions = await db.collection('submissions').find({}).sort({ submittedAt: -1 }).toArray()

const submissionRows = submissions.map((s, i) => ({
  '#': i + 1,
  'Submitted At': s.submittedAt ? new Date(s.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : '',
  'Artist Name': s.artistName || '',
  'Track Name': s.trackName || '',
  'Album Name': s.albumName || '',
  'Email': s.email || '',
  'Phone': s.phone || '',
  'Status': s.status || '',
  'Agreement Status': s.agreementStatus || '',
  'Client Type': s.clientType || '',
  'Legal Name': s.legalName || '',
  'Genre': s.genre || '',
  'Language': s.language || '',
  'Release Date': s.releaseDate || '',
  'Singer': s.singer || '',
  'Lyric Writer': s.lyricWriter || '',
  'Music Director': s.musicDirector || '',
  'Music Arranger': s.musicArranger || '',
  'Director': s.director || '',
  'Mixer': s.mixer || '',
  'Producer': s.producer || '',
  'Label Name': s.labelName || '',
  'UPC': s.upc || '',
  'ISRC': s.isrc || '',
  'YouTube Link': s.youtubeLink || '',
  'Instagram Link': s.instagramLink || '',
  'Spotify Link': s.spotifyLink || '',
  'YouTube Content ID': s.youtubeContentId || '',
  'Address': s.address || '',
  'Admin Note': s.adminNote || '',
  'Status Note': s.statusNote || '',
  'PAN Card': s.panCardUrl ? 'Yes' : 'No',
  'Aadhaar Front': s.aadhaarFrontUrl ? 'Yes' : 'No',
  'Aadhaar Back': s.aadhaarBackUrl ? 'Yes' : 'No',
  'Aadhaar (Old)': s.aadhaarVoterId ? 'Yes' : 'No',
  'GST': s.gstUrl ? 'Yes' : 'No',
  'Passport': s.passportUrl ? 'Yes' : 'No',
  'Audio File': s.audioUrl ? 'Yes' : 'No',
  'Artwork': s.artworkUrl ? 'Yes' : 'No',
  'Agreement Sent At': s.agreementSentAt ? new Date(s.agreementSentAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : '',
}))

// --- USERS / SIGNUPS ---
const users = await db.collection('users').find({}).sort({ createdAt: -1 }).toArray()

const userRows = users.map((u, i) => ({
  '#': i + 1,
  'Signed Up At': u.createdAt ? new Date(u.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : '',
  'Artist Name': u.artistName || u.name || '',
  'Email': u.email || '',
  'Phone': u.phone || '',
  'Verified': u.isVerified ? 'Yes' : 'No',
  'Role': u.role || 'artist',
}))

await client.close()

// --- BUILD WORKBOOK ---
const wb = XLSX.utils.book_new()

const wsSubmissions = XLSX.utils.json_to_sheet(submissionRows)
// Column widths
wsSubmissions['!cols'] = [
  { wch: 4 }, { wch: 22 }, { wch: 22 }, { wch: 28 }, { wch: 18 }, { wch: 30 }, { wch: 14 },
  { wch: 14 }, { wch: 18 }, { wch: 14 }, { wch: 22 }, { wch: 14 }, { wch: 14 }, { wch: 14 },
]
XLSX.utils.book_append_sheet(wb, wsSubmissions, 'Submissions')

const wsUsers = XLSX.utils.json_to_sheet(userRows)
wsUsers['!cols'] = [{ wch: 4 }, { wch: 22 }, { wch: 24 }, { wch: 30 }, { wch: 14 }, { wch: 10 }, { wch: 10 }]
XLSX.utils.book_append_sheet(wb, wsUsers, 'Sign Ups')

const outPath = path.join(__dirname, '../Western-Beats-Data.xlsx')
XLSX.writeFile(wb, outPath)

console.log(`✅ Done!`)
console.log(`   Submissions: ${submissions.length}`)
console.log(`   Sign-ups:    ${users.length}`)
console.log(`   Saved to:    ${outPath}`)
