import {
  SiSpotify, SiApplemusic, SiYoutubemusic,
  SiTidal, SiSoundcloud, SiPandora, SiAudiomack, SiNapster,
} from 'react-icons/si'
import { Music2 } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

export type Platform = {
  name: string
  tag: string
  color: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

// Generic music note for brands not in simple-icons (JioSaavn, Gaana, Amazon Music, Deezer, Hungama, Boomplay)
const GenericMusic = Music2 as unknown as ComponentType<SVGProps<SVGSVGElement>>

export const PLATFORMS: Platform[] = [
  { name: 'JioSaavn',      tag: 'India #1',         color: '#1ECCB0', Icon: GenericMusic },
  { name: 'Gaana',         tag: "India's Largest",  color: '#E72C30', Icon: GenericMusic },
  { name: 'Spotify',       tag: 'Global Leader',    color: '#1DB954', Icon: SiSpotify as ComponentType<SVGProps<SVGSVGElement>> },
  { name: 'Apple Music',   tag: 'Premium Global',   color: '#FA57C1', Icon: SiApplemusic as ComponentType<SVGProps<SVGSVGElement>> },
  { name: 'YouTube Music', tag: 'Largest Video',    color: '#FF0000', Icon: SiYoutubemusic as ComponentType<SVGProps<SVGSVGElement>> },
  { name: 'Amazon Music',  tag: 'Prime Listeners',  color: '#00A8E0', Icon: GenericMusic },
  { name: 'Tidal',         tag: 'Hi-Fi Quality',    color: '#FFFFFF', Icon: SiTidal as ComponentType<SVGProps<SVGSVGElement>> },
  { name: 'Deezer',        tag: 'Global Platform',  color: '#A238FF', Icon: GenericMusic },
  { name: 'Hungama',       tag: 'South Asian',      color: '#FF5B00', Icon: GenericMusic },
  { name: 'SoundCloud',    tag: 'Creator Hub',      color: '#FF5500', Icon: SiSoundcloud as ComponentType<SVGProps<SVGSVGElement>> },
  { name: 'Boomplay',      tag: 'Africa #1',        color: '#FF1493', Icon: GenericMusic },
  { name: 'Pandora',       tag: 'US Radio',         color: '#005483', Icon: SiPandora as ComponentType<SVGProps<SVGSVGElement>> },
  { name: 'Audiomack',     tag: 'Hip-Hop Hub',      color: '#FFA200', Icon: SiAudiomack as ComponentType<SVGProps<SVGSVGElement>> },
  { name: 'Napster',       tag: 'Classic',          color: '#0066CC', Icon: SiNapster as ComponentType<SVGProps<SVGSVGElement>> },
]
