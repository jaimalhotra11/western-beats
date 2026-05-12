// Real roster data extracted from westernbeats.com
export type Artist = {
  name: string
  image: string
  genre: string
  location: string
  experience: string
  followers: string
  description: string
  achievements: string[]
  hits: string[]
  instagram?: string
  youtube?: string
  spotify?: string
}

export const ARTISTS: Artist[] = [
  {
    name: 'Sapna Choudhary',
    image: '/artists/sapnachoudhary-DkPyzJGL.jpg',
    genre: 'Haryanvi / Folk Pop',
    location: 'Haryana, India',
    experience: '12+ Years',
    followers: '4.5M+',
    description:
      'Cultural icon who has revolutionized Haryanvi music with her powerful voice and contemporary approach.',
    achievements: ['Cultural Icon of Haryana', 'YouTube Sensation', 'Best Folk Artist Award'],
    hits: ['Chatak Matak', 'Jale 2', 'Fouji Fojan 2'],
    instagram: 'https://www.instagram.com/itssapnachoudhary',
    youtube: 'https://www.youtube.com/@_Sapna_Choudhary_official',
    spotify: 'https://open.spotify.com/artist/5WYVZzKOZMUn4pNY9gy2BM',
  },
  {
    name: 'Renuka Panwar',
    image: '/artists/renukapanwar-AsuFBi3-.jpg',
    genre: 'Haryanvi / Pop',
    location: 'Haryana, India',
    experience: '8+ Years',
    followers: '2.1M+',
    description:
      "Authentic Haryanvi pop voice bringing contemporary style to traditional folk music.",
    achievements: ['Pop Artist of the Year', 'Regional Music Award', 'Multi-Platinum'],
    hits: ['52 Gaj Ka Daman', 'Kabootar', 'Yanta'],
    instagram: 'https://www.instagram.com/renukapanwar',
    youtube: 'https://www.youtube.com/@RenukaPanwarSinger',
    spotify: 'https://open.spotify.com/artist/2wDTo0nO2ZKJN7VUeGmuyg',
  },
  {
    name: 'Aamin Barodi',
    image: '/artists/aaminbarodi-BLf279GV.jpg',
    genre: 'Punjabi / Folk',
    location: 'Punjab, India',
    experience: '10+ Years',
    followers: '2.5M+',
    description:
      'Soulful Punjabi folk artist whose traditional compositions have touched millions of hearts.',
    achievements: ['Folk Music Excellence', 'Punjabi Heritage Award', 'MTV Award Winner'],
    hits: ['Coca Cola', 'Ghunghroo Toot Jayega', 'Bandook'],
    instagram: 'https://www.instagram.com/aamin_barodi',
    youtube: 'https://www.youtube.com/@AaminBarodiofficial1',
    spotify: 'https://open.spotify.com/artist/4RLHUCnxxC1TRiRgZ4Lwvr',
  },
  {
    name: 'Arvind Jangid',
    image: '/artists/arvindjangid-Bud-MPE_.jpeg',
    genre: 'Rajasthani / Folk Fusion',
    location: 'Rajasthan, India',
    experience: '14+ Years',
    followers: '1.8M+',
    description:
      'Celebrated Rajasthani folk singer bringing the rich cultural heritage of Rajasthan to the world.',
    achievements: ['Rajasthani Cultural Award', 'Folk Heritage Award', 'Platinum Records'],
    hits: ['Sher Gelya Yaari', 'Lenguage Pyar Ki', 'Kesariya Balam'],
    instagram: 'https://www.instagram.com/arvindjangid_official',
    youtube: 'https://www.youtube.com/@ArvindJangidOfficial-x9h',
    spotify: 'https://open.spotify.com/artist/3S5qUEOkwo1UzAAdB6lUt4',
  },
  {
    name: 'Harsh Sandhu',
    image: '/artists/harshsandhu-CfMNV-ao.jpeg',
    genre: 'Punjabi / Hip-Hop',
    location: 'Punjab, India',
    experience: '6+ Years',
    followers: '3.2M+',
    description:
      'Contemporary Punjabi singer-songwriter blending modern sounds with traditional Punjabi music.',
    achievements: ['Contemporary Artist Award', 'Youth Icon Award', 'Diamond Records'],
    hits: ['Bandook', 'Gentleman 2', 'Chulla Nondh'],
    instagram: 'https://www.instagram.com/harshsandhuofficial',
    youtube: 'https://youtube.com/@harshsandhuoffical',
    spotify: 'https://open.spotify.com/artist/6ojAHTLwaSTS3DhFeajzft',
  },
  {
    name: 'RJ Spider',
    image: '/artists/rjspider-Hof4RhHx.jpg',
    genre: 'Hip-Hop / Electronic',
    location: 'Mumbai, India',
    experience: '7+ Years',
    followers: '1.9M+',
    description:
      'Dynamic hip-hop artist and radio jockey bringing urban culture to the forefront of Indian music.',
    achievements: ['Hip Hop Artist of the Year', 'Radio Excellence Award', 'Urban Music Pioneer'],
    hits: ['Shyano Ji', 'W.T.F', 'Tota Naffa'],
    instagram: 'https://www.instagram.com/r_j_spider',
    youtube: 'https://youtube.com/@rjspider',
    spotify: 'https://open.spotify.com/artist/3O7hlIVRhJerMH3QuYDAkZ',
  },
  {
    name: 'Kalakaar',
    image: '/artists/kalakaar-xIyvru5G.jpg',
    genre: 'Fusion / World',
    location: 'Delhi, India',
    experience: '9+ Years',
    followers: '1.1M+',
    description:
      'Versatile fusion artist masterfully blending traditional Indian music with contemporary global sounds.',
    achievements: ['Fusion Music Award', 'Cultural Innovation Award', 'Global Music Excellence'],
    hits: ['Bombay Paar', 'O Gori', 'Bhola Bhola Rakhe'],
    instagram: 'https://www.instagram.com/kalakaar_._._',
    youtube: 'https://youtube.com/@kalakaarofficial-1m',
    spotify: 'https://open.spotify.com/artist/4zuIuj8j9aOWqSyxcUilnA',
  },
  {
    name: 'Khotu Kharkhada',
    image: '/artists/khotukharkhada-Bt2vw7sN.jpg',
    genre: 'Haryanvi / Traditional Folk',
    location: 'Haryana, India',
    experience: '15+ Years',
    followers: '750K+',
    description:
      'Traditional Haryanvi folk artist preserving and promoting the authentic culture of Haryana.',
    achievements: ['Cultural Heritage Award', 'Folk Music Excellence', 'Regional Artist of the Year'],
    hits: ['Shyano Ji', 'Bombay Paar', 'Neeli Neeli Aankh'],
    instagram: 'https://www.instagram.com/khotu_kharkhada',
    spotify: 'https://open.spotify.com/artist/06fmZLGLQlgnlzyGqniuqZ',
  },
  {
    name: 'Nidhi Sharma',
    image: '/artists/nidhisharma-CGmPjw--.jpeg',
    genre: 'Bollywood / Pop',
    location: 'India',
    experience: '5+ Years',
    followers: '1.2M+',
    description:
      'Versatile Bollywood and pop vocalist with a modern melodic sensibility.',
    achievements: ['Playback Artist', 'Spotify Featured', 'Regional Hits'],
    hits: ['Featured Singles', 'Live Sessions', 'Collaborations'],
    instagram: 'https://www.instagram.com/nidhisharmaofficiall',
    youtube: 'https://youtube.com/@nidhisharmaofficial',
    spotify: 'https://open.spotify.com/artist/1oUC0FZ7PmdPnT6iax2fsC',
  },
  {
    name: 'Rahul Puthi',
    image: '/artists/rahulputhi-D22aKJrh.png',
    genre: 'Haryanvi / Folk',
    location: 'Haryana, India',
    experience: '7+ Years',
    followers: '850K+',
    description:
      'Haryanvi folk artist whose storytelling captures the spirit of rural life.',
    achievements: ['Regional Star', 'YouTube Hits', 'Live Performer'],
    hits: ['Featured Tracks', 'Folk Singles', 'Collaborations'],
    youtube: 'https://www.youtube.com/@RahulPuthi',
  },
]

export const PARTNERS = [
  { name: 'Warner Music India', logo: '/partners/warnermusicindia-3pJs86tg.png' },
  { name: 'JetSynthesys', logo: '/partners/jetsynthesys-E9Hauft9.png' },
  { name: 'Global Music Junction', logo: '/partners/globalmusicjunction-C0M0W2-z.png' },
  { name: 'Hukum Ka Ikka', logo: '/partners/hukumkaikka-Bk7fARKF.png' },
  { name: 'Jijaji', logo: '/partners/jijaji-BtxtngQx.png' },
  { name: 'Desi Geet', logo: '/partners/desigeet-D_cc94Pl.png' },
  { name: 'Urban Dhun', logo: '/partners/urbandhun-M9jPpjdA.png' },
  { name: 'Popfire', logo: '/partners/popfire-DpwGjsI8.jpeg' },
  { name: 'Barodia Ala', logo: '/partners/barodiaala-dhc61h0o.png' },
]
