import mongoose, { Schema, Document } from 'mongoose'

export interface ISubmission extends Document {
  // Artist info
  artistName: string
  trackName: string
  albumName: string
  email: string
  phone: string
  // Music details
  genre: string
  subGenre: string
  language: string
  releaseDate: string
  singer: string
  lyricWriter: string
  musicDirector: string
  musicArranger: string
  director: string
  mixer: string
  producer: string
  moods: string
  labelName: string
  upc: string
  isrc: string
  productCode: string
  youtubeLink: string
  instagramLink: string
  spotifyLink: string
  youtubeContentId: string
  songLyrics: string
  message: string
  // Cloudinary file URLs
  audioUrl: string
  audioPublicId: string
  artworkUrl: string
  artworkPublicId: string
  // Status tracking
  status: 'Submitted' | 'Under Review' | 'Approved' | 'Distributing' | 'Live' | 'Rejected'
  statusNote: string
  adminNote: string
  // Timestamps
  submittedAt: Date
  updatedAt: Date
}

const SubmissionSchema = new Schema<ISubmission>({
  artistName: { type: String, required: true },
  trackName: { type: String, required: true },
  albumName: { type: String, default: '' },
  email: { type: String, required: true, lowercase: true },
  phone: { type: String, default: '' },
  genre: { type: String, default: '' },
  subGenre: { type: String, default: '' },
  language: { type: String, default: '' },
  releaseDate: { type: String, default: '' },
  singer: { type: String, default: '' },
  lyricWriter: { type: String, default: '' },
  musicDirector: { type: String, default: '' },
  musicArranger: { type: String, default: '' },
  director: { type: String, default: '' },
  mixer: { type: String, default: '' },
  producer: { type: String, default: '' },
  moods: { type: String, default: '' },
  labelName: { type: String, default: '' },
  upc: { type: String, default: '' },
  isrc: { type: String, default: '' },
  productCode: { type: String, default: '' },
  youtubeLink: { type: String, default: '' },
  instagramLink: { type: String, default: '' },
  spotifyLink: { type: String, default: '' },
  youtubeContentId: { type: String, default: '' },
  songLyrics: { type: String, default: '' },
  message: { type: String, default: '' },
  audioUrl: { type: String, default: '' },
  audioPublicId: { type: String, default: '' },
  artworkUrl: { type: String, default: '' },
  artworkPublicId: { type: String, default: '' },
  status: {
    type: String,
    enum: ['Submitted', 'Under Review', 'Approved', 'Distributing', 'Live', 'Rejected'],
    default: 'Submitted',
  },
  statusNote: { type: String, default: '' },
  adminNote: { type: String, default: '' },
  submittedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const Submission = mongoose.models.Submission || mongoose.model<ISubmission>('Submission', SubmissionSchema)
