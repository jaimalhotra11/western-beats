import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "Apna Gana Kaise Release Kare 2026 — JioSaavn, Spotify Par Free Gana Kaise Daale",
  description: "अपना गाना JioSaavn, Spotify, Gaana, Apple Music और YouTube Music पर फ्री में कैसे रिलीज़ करें — ऑडियो, कवर आर्ट, ISRC कोड और डिस्ट्रीब्यूशन की पूरी जानकारी हिंदी में।",
  keywords: [
    "apna gana kaise release kare",
    "gana kaise release kare",
    "spotify par gana kaise daale",
    "jiosaavn par gana kaise upload kare",
    "free me gana kaise release kare",
    "song release kaise kare",
    "apna song online kaise daale",
    "गाना कैसे रिलीज़ करें",
    "स्पॉटिफाई पर गाना कैसे डालें",
    "music distribution hindi",
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/gana-kaise-release-kare' },
  openGraph: {
    title: "Apna Gana Kaise Release Kare 2026 — JioSaavn, Spotify Par Free Gana Kaise Daale | Western Beats",
    description: "अपना गाना 150+ प्लेटफ़ॉर्म पर फ्री में रिलीज़ करने की पूरी गाइड, हिंदी में।",
    url: 'https://www.westernbeats.com/blog/gana-kaise-release-kare',
    siteName: 'Western Beats', type: 'article', locale: 'hi_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: "Apna Gana Kaise Release Kare 2026 — JioSaavn, Spotify Par Free Gana Kaise Daale | Western Beats" },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "अपना गाना कैसे रिलीज़ करें? JioSaavn, Spotify पर फ्री में गाना डालने का तरीका (2026)",
  description: "अपना गाना 150+ प्लेटफ़ॉर्म पर फ्री में रिलीज़ करने की पूरी गाइड, हिंदी में।",
  inLanguage: 'hi-IN',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  datePublished: '2026-11-19',
  dateModified: '2026-11-19',
  url: 'https://www.westernbeats.com/blog/gana-kaise-release-kare',
  image: 'https://www.westernbeats.com/og-image.jpg',
  step: [
    { '@type': 'HowToStep', name: "गाने की फाइनल ऑडियो तैयार करें", text: "अपने गाने की मिक्स और मास्टर की हुई फाइल WAV फॉर्मेट में (44.1kHz, 16-bit या उससे ज़्यादा) एक्सपोर्ट करें। MP3 फाइल से क्वालिटी कम हो जाती है।" },
    { '@type': 'HowToStep', name: "कवर आर्ट बनाएं", text: "3000×3000 पिक्सल की स्क्वेयर इमेज (JPG या PNG) बनाएं। उस पर कोई वेबसाइट लिंक, सोशल मीडिया हैंडल या दूसरे प्लेटफ़ॉर्म का लोगो न डालें।" },
    { '@type': 'HowToStep', name: "गाने की पूरी जानकारी लिखें", text: "गाने का नाम, सिंगर, गीतकार, संगीतकार, प्रोड्यूसर, भाषा और जॉनर तैयार रखें। अगर गाने में गालियाँ हैं तो Parental Advisory (Explicit) ज़रूर चुनें।" },
    { '@type': 'HowToStep', name: "Western Beats पर फ्री में सबमिट करें", text: "westernbeats.com पर अकाउंट बनाएं और सबमिट पेज पर अपनी ऑडियो, कवर आर्ट और जानकारी डालें। एक से ज़्यादा गाने हैं तो EP / Album विकल्प चुनें।" },
    { '@type': 'HowToStep', name: "ISRC और UPC कोड पाएं", text: "हर गाने को ISRC कोड और हर रिलीज़ को UPC कोड मिलता है। Western Beats ये दोनों फ्री में देता है।" },
    { '@type': 'HowToStep', name: "रिलीज़ और प्रमोशन", text: "हमारी टीम 24 घंटे में सबमिशन रिव्यू करती है और मंज़ूरी के बाद आमतौर पर 72 घंटे में गाना लाइव हो जाता है। रिलीज़ के दिन Reels और Shorts बनाकर गाना शेयर करें।" },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "क्या मैं बिना लेबल के अपना गाना Spotify पर डाल सकता हूँ?",
      acceptedAnswer: { '@type': 'Answer', text: "हाँ। आपको किसी लेबल की ज़रूरत नहीं है। Western Beats जैसे डिस्ट्रीब्यूटर के ज़रिए आप अपना गाना सीधे Spotify, JioSaavn और 150+ प्लेटफ़ॉर्म पर रिलीज़ कर सकते हैं।" },
    },
    {
      '@type': 'Question',
      name: "गाना रिलीज़ करने में कितना खर्च आता है?",
      acceptedAnswer: { '@type': 'Answer', text: "Western Beats पर डिस्ट्रीब्यूशन बिल्कुल फ्री है — कोई अपफ्रंट या सालाना फीस नहीं। आपका खर्च सिर्फ गाने की रिकॉर्डिंग, प्रोडक्शन और प्रमोशन पर होता है।" },
    },
    {
      '@type': 'Question',
      name: "गाना कितने दिन में लाइव होता है?",
      acceptedAnswer: { '@type': 'Answer', text: "Western Beats 24 घंटे में सबमिशन रिव्यू करता है और मंज़ूरी के बाद आमतौर पर 72 घंटे में गाना लाइव हो जाता है। फिर भी रिलीज़ डेट से 2–3 हफ्ते पहले सबमिट करना बेहतर है।" },
    },
    {
      '@type': 'Question',
      name: "ISRC कोड क्या है और कहाँ से मिलेगा?",
      acceptedAnswer: { '@type': 'Answer', text: "ISRC हर गाने की एक यूनिक पहचान होती है जिससे स्ट्रीम और कमाई ट्रैक होती है। Western Beats से गाना रिलीज़ करने पर ISRC कोड फ्री में मिलता है।" },
    },
  ],
}

const STEPS = [
  { n: '01', t: "गाने की फाइनल ऑडियो तैयार करें", d: "अपने गाने की मिक्स और मास्टर की हुई फाइल WAV फॉर्मेट में (44.1kHz, 16-bit या उससे ज़्यादा) एक्सपोर्ट करें। MP3 फाइल से क्वालिटी कम हो जाती है।" },
  { n: '02', t: "कवर आर्ट बनाएं", d: "3000×3000 पिक्सल की स्क्वेयर इमेज (JPG या PNG) बनाएं। उस पर कोई वेबसाइट लिंक, सोशल मीडिया हैंडल या दूसरे प्लेटफ़ॉर्म का लोगो न डालें।" },
  { n: '03', t: "गाने की पूरी जानकारी लिखें", d: "गाने का नाम, सिंगर, गीतकार, संगीतकार, प्रोड्यूसर, भाषा और जॉनर तैयार रखें। अगर गाने में गालियाँ हैं तो Parental Advisory (Explicit) ज़रूर चुनें।" },
  { n: '04', t: "Western Beats पर फ्री में सबमिट करें", d: "westernbeats.com पर अकाउंट बनाएं और सबमिट पेज पर अपनी ऑडियो, कवर आर्ट और जानकारी डालें। एक से ज़्यादा गाने हैं तो EP / Album विकल्प चुनें।" },
  { n: '05', t: "ISRC और UPC कोड पाएं", d: "हर गाने को ISRC कोड और हर रिलीज़ को UPC कोड मिलता है। Western Beats ये दोनों फ्री में देता है।" },
  { n: '06', t: "रिलीज़ और प्रमोशन", d: "हमारी टीम 24 घंटे में सबमिशन रिव्यू करती है और मंज़ूरी के बाद आमतौर पर 72 घंटे में गाना लाइव हो जाता है। रिलीज़ के दिन Reels और Shorts बनाकर गाना शेयर करें।" },
]

const CARDS = [
  { title: "₹0 अपफ्रंट खर्च", desc: "कोई सालाना फीस नहीं, कोई प्रति-रिलीज़ फीस नहीं।" },
  { title: "150+ प्लेटफ़ॉर्म", desc: "JioSaavn, Gaana, Spotify, Apple Music, YouTube Music, Amazon Music, Wynk और भी बहुत कुछ।" },
  { title: "कॉलर ट्यून", desc: "Jio और Airtel कॉलर ट्यून डिस्ट्रीब्यूशन भी शामिल है।" },
  { title: "Warner Music India पार्टनर", desc: "Western Beats, Warner Music India का आधिकारिक पार्टनर है।" },
]

const TIPS = [
  "रिलीज़ डेट कम से कम 2–3 हफ्ते बाद की रखें ताकि प्रमोशन का समय मिले",
  "हर रिलीज़ में आर्टिस्ट का नाम एक जैसा लिखें, वरना प्रोफ़ाइल अलग-अलग बन सकती है",
  "किसी और का बीट या सैंपल बिना लिखित अनुमति के इस्तेमाल न करें",
  "AI से बना गाना सबमिट न करें — ऐसे गाने रिजेक्ट कर दिए जाते हैं",
  "शुक्रवार को रिलीज़ करें — ज़्यादातर प्लेटफ़ॉर्म शुक्रवार को नई प्लेलिस्ट अपडेट करते हैं",
  "रिलीज़ के बाद हर कुछ दिन में गाने से जुड़ा नया कंटेंट पोस्ट करते रहें",
]

const RELATED = [
  { label: "गाना सबमिट करें", href: "/submit" },
  { label: "Hindi Music Distribution", href: "/hindi-music-distribution" },
  { label: "Music Distribution Guide (Hindi)", href: "/blog/music-distribution-guide-hindi" },
  { label: "Free ISRC Codes", href: "/blog/free-isrc-upc-code-india" },
  { label: "All Blog Posts", href: "/blog" },
]

export default function GanaKaiseReleaseKare() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }} lang="hi">

        <section className="pt-32 pb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#FF9933' }} />
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">{"गाना कैसे रिलीज़ करें"}</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(255,153,51,0.1)', border: '1px solid rgba(255,153,51,0.25)', color: '#FF9933' }}>
              {"🇮🇳 हिंदी गाइड"}
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {"अपना गाना कैसे रिलीज़ करें? JioSaavn, Spotify पर फ्री में गाना डालने का तरीका (2026)"}
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              {"अब किसी लेबल के बिना भी आप अपना गाना JioSaavn, Spotify, Gaana, Apple Music और YouTube Music पर रिलीज़ कर सकते हैं — और वो भी बिना किसी अपफ्रंट खर्च के। यहाँ पूरा तरीका आसान भाषा में दिया गया है।"}
            </p>
            <div className="flex items-center gap-3 text-[12px] text-[#8899AA] font-inter">
              <span>{"Western Beats द्वारा"}</span>
              <span>·</span>
              <span>{"19 नवंबर 2026"}</span>
              <span>·</span>
              <span>{"6 मिनट"}</span>
            </div>
          </div>
        </section>

        <article className="pb-20">
          <div className="max-w-3xl mx-auto px-6">

            <h2 className="font-outfit font-black text-white text-[24px] mb-6 mt-10">{"स्टेप बाय स्टेप: अपना गाना रिलीज़ करें"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-black text-[18px] w-10 flex-shrink-0" style={{ color: '#FF9933' }}>{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[15px] mb-1">{s.t}</div>
                    <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Western Beats से गाना रिलीज़ करने के फायदे"}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CARDS.map(card => (
                <div key={card.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{card.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"गाना रिलीज़ करने से पहले ये बातें ध्यान रखें"}</h2>
            <ul className="flex flex-col gap-2 mb-8">
              {TIPS.map(tip => (
                <li key={tip} className="flex gap-3 items-start font-inter text-[14px] text-[#8899AA]">
                  <span className="mt-0.5" style={{ color: '#FF9933' }}>✓</span>
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">{"अपना गाना फ्री में रिलीज़ करें"}</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                {"Western Beats आपका गाना JioSaavn, Spotify, Apple Music, Gaana, YouTube Music और 150+ प्लेटफ़ॉर्म पर बिना किसी अपफ्रंट फीस के पहुँचाता है, फ्री ISRC कोड के साथ।"}
              </p>
              <Link href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white"
                style={{ background: '#0A64C3' }}>
                {"अभी गाना सबमिट करें →"}
              </Link>
            </div>

            <h2 className="font-outfit font-black text-white text-[22px] mb-6">{"अक्सर पूछे जाने वाले सवाल"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {FAQ_SCHEMA.mainEntity.map(q => (
                <div key={q.name} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{q.name}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{q.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {RELATED.map(l => (
                <Link key={l.href} href={l.href}
                  className="px-4 py-2 rounded-lg font-inter text-[12px] text-[#8899AA] hover:text-white transition-colors"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
