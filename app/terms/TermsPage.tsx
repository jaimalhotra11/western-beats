'use client'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect, useRef, useState } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'
import {
  FileText, Music2, DollarSign, Shield, Clock, AlertTriangle,
  Scale, Globe, Mail, ChevronDown, CheckCircle, XCircle, Info,
  Lock, Users, Gavel, ScrollText, Eye, Banknote, RefreshCw
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

const QUICK_FACTS = [
  { icon: DollarSign, color: '#0A64C3', title: 'Royalty Split',   value: '70% to You',   sub: 'WB retains 30% as Distribution Fee' },
  { icon: Shield,     color: '#C41230', title: 'IP Ownership',    value: '100% Yours',   sub: 'You own masters & copyright forever' },
  { icon: Globe,      color: '#5CB2DC', title: 'Platforms',       value: '150+',         sub: 'Worldwide distribution included' },
  { icon: Clock,      color: '#0A64C3', title: 'Initial Term',    value: '2 Years',      sub: 'Renewable by mutual agreement' },
  { icon: Lock,       color: '#C41230', title: 'Lock-In Period',  value: '12 Months',    sub: 'Artist cannot exit in first year' },
  { icon: Banknote,   color: '#5CB2DC', title: 'Payout',          value: '30 Days',      sub: 'After receipt of valid invoice' },
]

type Item = { heading?: string; body: string; type?: 'note' | 'warn' | 'check' }
type Section = { id: string; icon: typeof FileText; color: string; title: string; items: Item[] }

const SECTIONS: Section[] = [
  /* ─── 1. Parties & Agreement Overview ─────────────────────────────── */
  {
    id: 'overview',
    icon: ScrollText,
    color: '#0A64C3',
    title: '1. Parties & Agreement Overview',
    items: [
      {
        heading: 'Who We Are',
        body: 'This Content Licensing Agreement is between Western Beats Pvt Ltd ("WB" or "Licensee"), a company incorporated under the Companies Act 2013, bearing PAN AACCW9613Q, with its registered office at Sector-4A, H.No.357P, Dharuhera, Rewari, Haryana 123106 — and you, the content creator ("Licensor" or "Artist").',
      },
      {
        heading: 'What WB Does',
        body: 'WB is engaged in the business of content production, curation, collaboration, aggregation, acquisition, publishing, distribution, and monetisation across digital and physical media platforms worldwide.',
      },
      {
        heading: 'What the Agreement Covers',
        body: 'By using Western Beats, you agree to license your content to WB for distribution, promotion, monetisation, and marketing across 150+ digital platforms globally, subject to the terms below. These terms constitute a legally binding agreement governed by the laws of India.',
      },
      {
        type: 'note',
        body: 'This page is a plain-English summary of the key clauses in your Content Licensing Agreement. The full executed agreement you sign with WB takes legal precedence.',
      },
    ],
  },

  /* ─── 2. Definitions ───────────────────────────────────────────────── */
  {
    id: 'definitions',
    icon: FileText,
    color: '#5CB2DC',
    title: '2. Key Definitions',
    items: [
      {
        heading: 'Content',
        body: 'All music, audio, and visual entertainment content including songs, music videos, masters, compositions, cinematographic films, and related materials owned and/or aggregated by you during the Term. Also includes intellectual property in works delivered, plus any works uploaded to YouTube channels linked to WB\'s networks.',
      },
      {
        heading: 'Distribution Methods',
        body: 'Any and all formats, modes, or mediums — whether existing now or invented in the future — through which the Content can be broadcast, communicated to the public, or commercially exploited. This includes digital audio-visual files, real-time streaming, OTT apps, YouTube, mobile apps, and any other platform.',
      },
      {
        heading: 'Net Revenue',
        body: '• YouTube: All amounts generated from exploitation of the Content on YouTube as reported by the platform, net of applicable taxes and statutory levies.\n• All other platforms: All amounts received by WB from exploitation, marketing, and distribution via all other channels, net of applicable taxes, third-party costs, and statutory levies.',
      },
      {
        heading: 'Licensed Properties',
        body: 'Graphic representations, photographs, scenes, designs, video clips, metadata, audio clips, music clips, sound recordings, digital files, blog posts, wallpapers, screensavers, animation, names, signatures, likenesses, and other audio-visual material provided by you for WB\'s use.',
      },
      {
        heading: 'Territory',
        body: 'The entire world. Your content will be distributed and monetised globally.',
      },
    ],
  },

  /* ─── 3. Grant of Rights & Exclusivity ────────────────────────────── */
  {
    id: 'rights',
    icon: Globe,
    color: '#C41230',
    title: '3. Grant of Rights & Exclusivity',
    items: [
      {
        heading: 'Rights You Grant to WB',
        body: 'You grant WB a royalty-free right and licence to:\n• Distribute the Content and/or Licensed Properties to end users or potential end users via all Distribution Methods\n• Stream, sub-license, exploit, exhibit, show, market, synchronise, use, recreate, modify, edit, communicate to the public, transmit, display, advertise, and promote the Content at WB\'s sole discretion',
      },
      {
        heading: 'Sub-Licensing',
        body: 'WB has the right to further sub-license the rights granted by you to third parties (streaming platforms, aggregators, OTTs, etc.) and to collect revenues from such third parties on your behalf.',
      },
      {
        heading: 'Exclusive Rights During the Term',
        body: 'The rights granted to WB are EXCLUSIVE for the full Term. During the Term, you shall neither provide nor receive distribution or promotion services for the Content through any third party. You also undertake not to sell, transfer, assign, or create any encumbrance on the Content during the Term.',
      },
      {
        type: 'warn',
        body: 'IMPORTANT: During the Agreement Term you cannot distribute your licensed content through any other distributor, label, or platform independently. Doing so constitutes a material breach of this agreement.',
      },
      {
        heading: 'Attorney-in-Fact',
        body: 'You appoint WB as your attorney-in-fact with full power to execute and deliver any documents or instruments necessary to fully enforce and exploit the rights granted — including registering rights on platforms on your behalf. This appointment is irrevocable during the Term.',
      },
    ],
  },

  /* ─── 4. Distribution Services ────────────────────────────────────── */
  {
    id: 'distribution',
    icon: Music2,
    color: '#0A64C3',
    title: '4. Distribution Services',
    items: [
      {
        heading: 'What WB Delivers',
        body: 'WB distributes your Content to 150+ streaming and download platforms worldwide, including Spotify, Apple Music, JioSaavn, Gaana, YouTube Music, Amazon Music, Tidal, Deezer, and many more. Distribution is provided with no upfront fee required.',
      },
      {
        heading: 'Go-Live Timeline',
        body: 'Once your release is reviewed and approved, it will go live across all platforms within 48–72 hours. Music submitted on a Friday will typically go live on Monday. Indian public holidays may cause minor delays beyond the standard window.',
      },
      {
        heading: 'Content Modification',
        body: 'WB has the right to modify, edit, and/or refurbish your Content to suit required formats for the provision of services. Modifications include resizing and reformatting to meet the technical specifications of each Distribution Method.',
      },
      {
        heading: 'Advertising Rights',
        body: 'WB may advertise and promote your Content using any means or media, whether now known or hereafter devised. WB may also insert advertising (paid or otherwise) into the Content, and monetise the music used in the Content — including extracting it or offering it on a standalone basis.',
      },
      {
        heading: 'Promotional Materials',
        body: 'WB will provide you with its latest logos and trademarks to include in video and artwork as a "Distribution Partner" on all promotional materials and within the Content itself. Upon WB\'s request, you shall provide available promotional material for Licensed Properties free of charge.',
      },
      {
        type: 'note',
        body: 'WB does not guarantee playlist placement, editorial features, or specific algorithmic performance on any streaming platform.',
      },
    ],
  },

  /* ─── 5. Revenue & Payment Terms ──────────────────────────────────── */
  {
    id: 'royalties',
    icon: DollarSign,
    color: '#C41230',
    title: '5. Revenue Share & Payment',
    items: [
      {
        heading: 'The Revenue Split',
        body: 'WB retains 30% of Net Revenue as the Distribution Fee. You (the Artist/Licensor) receive 70% of Net Revenue after deduction of the Distribution Fee ("Revenue Share"). This fee covers distribution infrastructure, platform relationships, content management, ISRC/UPC generation, marketing support, and ongoing operations.',
      },
      {
        type: 'warn',
        body: 'IMPORTANT: When we refer to "100% Ownership" in our marketing, this refers exclusively to your intellectual property rights — you retain 100% copyright ownership of your masters and compositions. The revenue split is 70% to you / 30% to WB. These are two distinct and separate concepts.',
      },
      {
        heading: 'How Net Revenue Is Calculated',
        body: 'Net Revenue = Total platform earnings minus applicable taxes, duties, third-party costs, and statutory levies deducted at the platform level. WB does not add any additional deductions beyond our 30% Distribution Fee.',
      },
      {
        heading: 'Reporting Schedule',
        body: 'WB will provide you with summary and detailed reports showing computation of your Revenue Share:\n• YouTube — Reports issued after 2 months\n• OTT & All Other Platforms — Reports issued quarterly\n\nOnce a report is published or received, you have a 15-day window to request clarifications. After 15 days, the report is considered final.',
      },
      {
        heading: 'Invoice & Payment Cycle',
        body: 'After receiving and accepting the report:\n• You must raise and deliver a valid invoice to WB\n• YouTube: Invoice monthly\n• OTT / Other Platforms: Invoice quarterly\n\nWB will make payment within 30 days of receiving a valid, undisputed invoice. All payments are made in Indian Rupees to your registered bank account.',
      },
      {
        heading: 'Advances & Recoupment',
        body: 'WB may, at its discretion, extend advance payments to you against your future Revenue Share. Any advance paid shall be recouped at 100% from your Revenue Share before any overages are paid. If this Agreement is terminated due to Artist breach, any unrecouped advances must be repaid by you within 15 days of termination, plus 18% per annum interest.',
      },
      {
        heading: 'Revenue Withheld for Infringement',
        body: 'If you are found to be involved in any form of content infringement or copyright violation, WB reserves the right to hold all revenue without prior intimation. Withheld funds may be used to cover legal fees, settlements, or damages arising from your infringing activities.',
      },
      {
        type: 'check',
        body: 'There are no upfront fees, no annual subscription charges, and no hidden administrative fees. WB earns exclusively through the 30% Revenue Share on income your content generates.',
      },
    ],
  },

  /* ─── 6. Your Obligations (Artist) ────────────────────────────────── */
  {
    id: 'artist-obligations',
    icon: Users,
    color: '#5CB2DC',
    title: '6. Artist Obligations',
    items: [
      {
        heading: 'Content Delivery',
        body: 'You must deliver Content in accordance with the delivery schedule mutually agreed upon in writing. Content shall be reliable, conform to agreed specifications, and not violate any laws, regulations, or applicable codes.',
      },
      {
        heading: 'Quality Standards',
        body: 'You commit to providing 1–2 pieces of Content per month in the agreed language for the Term. All Content must be mutually approved by both Parties. All artist interviews or "bytes" shall be filmed by you for all OTT platforms, and all behind-the-scenes footage shall be filmed by you and delivered to WB.',
      },
      {
        heading: 'Ongoing Content Creation',
        body: 'You agree to create and contribute new Content on an ongoing basis as mutually agreed, in accordance with the Content delivery plan. All legal agreements and documentation related to the Content shall be executed only with WB\'s prior written consent.',
      },
      {
        heading: 'YouTube Token Authorisation',
        body: 'You must provide token authorisation of your linked YouTube channels to allow WB access to GMJ-YT-Studio (WB\'s CMS portal built on official YouTube APIs) for reporting and analytics. Revocation, expiry, or termination of these tokens during the Term constitutes a MATERIAL BREACH of this Agreement. WB may withhold Revenue Share payments until this breach is cured.',
      },
      {
        heading: 'Legal Dispute Support',
        body: 'You must provide all necessary support in resolving any legal issues that may arise in relation to the Content within the Territory, within the timelines specified in this Agreement.',
      },
      {
        type: 'warn',
        body: 'You represent and warrant that the exercise of all rights granted to WB — including distributing, monetising, or commercially using the music — will not impose upon WB any obligation to pay amounts to third parties, copyright societies, or collecting entities. All such third-party royalties are your sole responsibility.',
      },
    ],
  },

  /* ─── 7. IP & Ownership ────────────────────────────────────────────── */
  {
    id: 'ownership',
    icon: Shield,
    color: '#0A64C3',
    title: '7. Intellectual Property & Ownership',
    items: [
      {
        heading: 'You Own Your Music — Always',
        body: 'You and your licensors retain full ownership of all rights, title, and interest in the trademarks, copyrights, and all other intellectual property rights in the Content and Licensed Properties. WB does not acquire any ownership interest in your Content at any time — including after the Agreement ends.',
      },
      {
        heading: 'Third-Party Rights',
        body: 'You are solely responsible for procuring and maintaining all third-party rights and licences, including:\n(a) All record royalties due to artists, producers, and other persons involved in creating the Content\n(b) All payments required under collective bargaining agreements\n(c) All publishing licences and royalties, including physical and digital mechanical licences',
      },
      {
        heading: 'Copyright Infringement Notices',
        body: 'If WB or its distributors receive any copyright infringement notice related to your Content, WB will immediately forward it to you. You must respond within 72 hours with all necessary documentation. Failure to respond within 72 hours entitles WB to respond on your behalf, including disclosing your contact information.',
      },
      {
        heading: 'DMCA & Digital Notices',
        body: 'For any DMCA takedown, copyright infringement strike, or third-party content match on any platform, you must make all reasonable efforts to retract such notices within 72 hours. You authorise WB to counter such notices on your behalf. You must provide all relevant communication, contact details, and agreements within 72 hours of being notified.',
      },
      {
        heading: 'Your Warranties on Content',
        body: 'You represent and warrant that:\n• You own or fully control all rights in the submitted recordings\n• The Content does not infringe any third-party intellectual property, trademark, or moral rights\n• You have obtained all necessary licences for any samples, interpolations, or third-party elements\n• The Content does not violate any applicable laws or contain defamatory, obscene, or illegal material\n• You will not sell, create a lien, or transfer any significant stake or interest in your company that changes ownership or control without WB\'s knowledge',
      },
      {
        type: 'warn',
        body: 'Submitting content you do not own rights to is a serious breach. You shall indemnify WB against any third-party claims arising from any omission or inaccuracy in data you provide with the Content.',
      },
    ],
  },

  /* ─── 8. Content Standards ─────────────────────────────────────────── */
  {
    id: 'content',
    icon: AlertTriangle,
    color: '#5CB2DC',
    title: '8. Content Standards & Review',
    items: [
      {
        heading: 'Review Process',
        body: 'All submissions are reviewed by the Western Beats team. Content that meets our standards proceeds to distribution. Content that does not meet standards will be rejected with a reason communicated to you. You agree to ensure Content conforms to specifications agreed in your Content Licensing Agreement.',
      },
      {
        heading: 'Prohibited Content',
        body: 'WB will not distribute Content that:\n• Infringes third-party copyrights, trademarks, or rights of publicity\n• Contains fraudulently generated streams or engagement manipulation\n• Is spam, re-uploaded public domain content without transformation, or artificial "white noise"\n• Promotes violence, terrorism, hate speech, or illegal activity\n• Contains explicit material not properly flagged during submission\n• Brings WB into disrepute or infringes the privacy rights of any person',
      },
      {
        heading: 'Takedowns & Content Removal',
        body: 'WB reserves the right to remove Content from distribution at any time if it violates these terms, receives valid DMCA/copyright claims, or is flagged by streaming platforms. Where practicable, WB will notify you before removal.',
      },
    ],
  },

  /* ─── 9. Term, Lock-In & Termination ──────────────────────────────── */
  {
    id: 'termination',
    icon: Lock,
    color: '#C41230',
    title: '9. Term, Lock-In & Termination',
    items: [
      {
        heading: 'Initial Term',
        body: 'This Agreement commences on the Effective Date and remains in effect for 2 (two) years ("Initial Term"). After the Initial Term, it renews for additional periods as mutually agreed by both Parties.',
      },
      {
        heading: '12-Month Lock-In Period',
        body: 'The first 12 months from the Effective Date is a mandatory lock-in period. During this period, you waive your right to terminate this Agreement for any reason whatsoever — except in the event of an Event of Default by WB (i.e., WB fails to pay you for more than 3 continuous months).',
      },
      {
        type: 'warn',
        body: 'You CANNOT exit this Agreement in the first 12 months unless WB has defaulted on payments for more than 3 consecutive months. Please understand this commitment before signing.',
      },
      {
        heading: 'Termination by WB',
        body: 'WB may terminate this Agreement by providing 30 days\' advance written notice to you at any time.',
      },
      {
        heading: 'Termination for Cause (by WB)',
        body: 'WB may terminate immediately (after 15-day cure period) if you:\n• Fail to resolve any legal issue, copyright infringement, or breach\n• Engage in fraud, misrepresentation, or falsification of records\n• Become bankrupt, insolvent, or enter liquidation\n• Fail to make required token authorisation available',
      },
      {
        heading: 'Termination for WB Default',
        body: 'In an Event of Default by WB (non-payment for 3+ continuous months), WB shall be given a 90-day cure period to remedy the default, failing which the Agreement terminates.',
      },
      {
        heading: 'After Termination — Consequences',
        body: 'Upon termination or expiry:\n• All rights granted to WB revert to you immediately\n• WB has a 30-day cool-off period to remove Content from Distribution Methods\n• You and your licensors retain all rights, title, and interest in the Content and Licensed Properties in perpetuity\n• All accrued royalties owed to you will be paid per the regular schedule\n• Any unrecouped advances must be repaid by you within 15 days (+ 18% p.a. interest) if terminated due to your breach',
      },
    ],
  },

  /* ─── 10. Events of Default & Fraud ───────────────────────────────── */
  {
    id: 'default',
    icon: XCircle,
    color: '#0A64C3',
    title: '10. Events of Default & Fraud',
    items: [
      {
        heading: 'Events of Default',
        body: 'The following constitute Events of Default by either Party:\n• Bankruptcy, insolvency, or liquidation proceedings commenced against the Party\n• Consistent failure to perform obligations under this Agreement\n• Engaging in fraudulent activities, including misrepresentation, falsification of records, or deceptive practices',
      },
      {
        heading: 'Fraud by Artist',
        body: 'If you are suspected of fraud, infringement, or unlawful activity — or if any claim, investigation, or legal action arises related to such activity — WB has the immediate right to:\n• Suspend, withhold, or retain any payments due to you\n• Use withheld funds to cover legal fees, settlements, or damages\n• Terminate this Agreement immediately without a cure period\n• Seek full damages and reimbursement',
      },
      {
        heading: 'Fraudulent Streaming',
        body: 'Artificially inflating streams using bots, click farms, or other artificial means is strictly prohibited. Detection results in immediate account termination, forfeiture of affected royalties, and notification to all relevant streaming platforms.',
      },
      {
        heading: 'Indemnification by Artist',
        body: 'You shall fully indemnify, defend, and hold harmless WB against any claims, losses, damages, liabilities, and expenses (including legal fees) arising from:\n(a) Breach or alleged breach of this Agreement\n(b) Unauthorised use of Licensed Properties\n(c) Negligent act or omission by you\n(d) Your failure to comply with applicable laws\n(e) Any claim that WB\'s authorised use of your Content infringes third-party copyright\n(f) Any DMCA/copyright notices related to your Content',
      },
      {
        type: 'check',
        body: 'WB shall also indemnify you against material breach of this Agreement by WB and any unauthorised use by WB of your Licensed Properties or Content.',
      },
    ],
  },

  /* ─── 11. Limitation of Liability ──────────────────────────────────── */
  {
    id: 'liability',
    icon: Scale,
    color: '#5CB2DC',
    title: '11. Limitation of Liability',
    items: [
      {
        body: 'Western Beats Private Limited provides the Western Beats platform on an "as is" and "as available" basis. To the maximum extent permitted by applicable law, we disclaim all warranties, express or implied, regarding the platform.',
      },
      {
        body: 'WB shall not be liable for:\n• Indirect, incidental, special, punitive, or consequential damages\n• Loss of revenue, profits, or anticipated earnings\n• Delays caused by third-party streaming platforms\n• Playlist or algorithmic decisions made by streaming platforms\n• Temporary platform unavailability due to maintenance or technical issues\n• Platform-level penalties or bans beyond WB\'s control',
      },
      {
        body: 'Our total aggregate liability to you under these terms shall not exceed the total royalties paid to you in the six (6) months immediately preceding the event giving rise to the claim.',
      },
      {
        type: 'note',
        body: 'Force Majeure: Neither Party shall be liable for failure to perform due to Force Majeure events (acts of God, war, terrorism, epidemics, floods, government restrictions, etc.) that are beyond the reasonable control of the affected Party.',
      },
    ],
  },

  /* ─── 12. Confidentiality ───────────────────────────────────────────── */
  {
    id: 'confidentiality',
    icon: Eye,
    color: '#C41230',
    title: '12. Confidentiality',
    items: [
      {
        body: 'Both Parties undertake not to disclose to any person — other than affiliates and professional advisors on a need-to-know basis — any information relating to the other Party\'s business or the terms of this Agreement. All such information shall be treated as strictly confidential.',
      },
      {
        heading: 'Exceptions to Confidentiality',
        body: 'These restrictions do not apply to information that:\n• Enters the public domain other than through breach of this Agreement\n• Was lawfully obtained from a third party free to disclose it\n• Was already known to the recipient prior to disclosure\n• Was independently generated by the recipient\n• Is required to be disclosed by law or regulatory authority',
      },
    ],
  },

  /* ─── 13. Governing Law & Disputes ─────────────────────────────────── */
  {
    id: 'law',
    icon: Gavel,
    color: '#0A64C3',
    title: '13. Governing Law & Disputes',
    items: [
      {
        body: 'This Agreement is governed by and construed in accordance with the laws of India, without regard to conflict of law principles.',
      },
      {
        heading: 'Arbitration',
        body: 'Any dispute or difference that cannot be resolved amicably shall be referred to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitral tribunal shall comprise a sole arbitrator (by mutual agreement) or as appointed under the Act. The place of arbitration is Mumbai, India. The language of arbitration is English.',
      },
      {
        heading: 'Jurisdiction',
        body: 'Subject to arbitration, this Agreement is subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.',
      },
      {
        heading: 'Contact for Legal Notices',
        body: 'All legal notices to WB must be addressed to:\nThe Chief Legal Officer\nWestern Beats Private Limited\nSector-4A, H.No.357P, Dharuhera, Rewari, Haryana 123106\nEmail: sahil.sandhu@westernbeats.com\nCopy to: legal@globalmusicjunction.com',
      },
    ],
  },

  /* ─── 14. Miscellaneous ─────────────────────────────────────────────── */
  {
    id: 'miscellaneous',
    icon: RefreshCw,
    color: '#5CB2DC',
    title: '14. Miscellaneous',
    items: [
      {
        heading: 'Independent Contractor',
        body: 'WB acts as an independent contractor in distributing your Content. Nothing in this Agreement creates any agency, employment, or joint venture relationship between WB and you.',
      },
      {
        heading: 'Assignment',
        body: 'You shall not assign, transfer, or purport to assign this Agreement — in whole or in part — or any rights or obligations hereunder, without WB\'s prior written consent.',
      },
      {
        heading: 'Amendments',
        body: 'All changes and amendments to this Agreement are valid only if made in writing and signed by duly authorised representatives of both Parties.',
      },
      {
        heading: 'Severability',
        body: 'If any provision of this Agreement is found invalid, illegal, or unenforceable, that provision is ineffective only to the extent of such invalidity. The remaining provisions continue in full force and effect.',
      },
      {
        heading: 'Entire Agreement',
        body: 'This Agreement, along with all Annexures and Schedules, constitutes the final, complete, and exclusive written expression of the intentions of the Parties and supersedes all prior communications, MOUs, promises, or statements — oral or written.',
      },
      {
        heading: 'Changes to These Terms',
        body: 'WB reserves the right to modify these Terms & Conditions at any time. When material changes are made, registered artists will be notified via the email address on file at least 14 days before the changes take effect. Continued use of the platform constitutes acceptance of the revised terms.',
      },
      {
        type: 'note',
        body: 'The most current version of these terms is always available at westernbeats.com/terms. Last reviewed and updated: May 2025.',
      },
    ],
  },
]

/* ─── Callout component ─────────────────────────────────────────────── */
function Callout({ type, body }: { type?: 'note' | 'warn' | 'check'; body: string }) {
  if (!type) return (
    <p className="font-inter text-[14px] sm:text-[15px] leading-relaxed text-[#8fa3be] whitespace-pre-line">{body}</p>
  )
  const cfg = {
    note:  { bg: 'rgba(10,100,195,0.08)',  border: 'rgba(10,100,195,0.25)',  icon: Info,          color: '#5CB2DC', label: 'Note' },
    warn:  { bg: 'rgba(196,18,48,0.08)',   border: 'rgba(196,18,48,0.3)',    icon: AlertTriangle, color: '#f87171', label: 'Important' },
    check: { bg: 'rgba(34,197,94,0.07)',   border: 'rgba(34,197,94,0.25)',   icon: CheckCircle,   color: '#4ade80', label: 'Good to Know' },
  }[type]
  const Icon = cfg.icon
  return (
    <div className="rounded-xl p-4 sm:p-5 flex gap-3" style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
      <Icon size={18} style={{ color: cfg.color, flexShrink: 0, marginTop: 2 }} />
      <div>
        <div className="font-outfit font-bold text-[11px] tracking-[0.12em] uppercase mb-1.5" style={{ color: cfg.color }}>{cfg.label}</div>
        <p className="font-inter text-[13.5px] leading-relaxed whitespace-pre-line" style={{ color: '#b0c4d8' }}>{body}</p>
      </div>
    </div>
  )
}

/* ─── Accordion section ─────────────────────────────────────────────── */
function AccordionSection({ s, index }: { s: Section; index: number }) {
  const [open, setOpen] = useState(index < 3)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = s.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.03, ease: EASE }}
      id={s.id}
      className="rounded-2xl overflow-hidden"
      style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
            <Icon size={18} style={{ color: s.color }} />
          </div>
          <h2 className="font-outfit font-extrabold text-white text-[15px] sm:text-[17px] group-hover:text-[#5CB2DC] transition-colors duration-200">
            {s.title}
          </h2>
        </div>
        <ChevronDown
          size={18}
          className="text-mut transition-transform duration-300 flex-shrink-0 ml-4"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {open && (
        <div className="px-5 sm:px-6 pb-6 flex flex-col gap-5 border-t border-white/[0.06] pt-5">
          {s.items.map((item, j) => (
            <div key={j}>
              {item.heading && (
                <div className="font-outfit font-bold text-[13px] tracking-[0.06em] uppercase mb-2"
                  style={{ color: s.color }}>
                  {item.heading}
                </div>
              )}
              <Callout type={item.type} body={item.body} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

/* ─── Main page ─────────────────────────────────────────────────────── */
export default function TermsPage() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.page-hero-line', {
        y: 80, opacity: 0, skewY: 3, stagger: 0.12,
        duration: 1.0, ease: 'power4.out', delay: 0.1,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #0A64C3, #C41230, #0A64C3, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.1) 0%, transparent 70%)' }} />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Terms &amp; Conditions</li>
            </ol>
          </nav>

          <div className="platform-pill mb-6 inline-flex">Legal · Western Beats Private Limited</div>

          <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(42px, 7vw, 78px)' }}>
            <span className="page-hero-line block text-white">Terms &amp;</span>
            <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Conditions.</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="font-inter text-[13px] text-mut">Last updated: May 2025</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="font-inter text-[13px] text-mut">Western Beats Private Limited</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="font-inter text-[13px]" style={{ color: '#4ade80' }}>● Effective Immediately</span>
          </div>

          <p className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed max-w-2xl mb-4">
            These terms govern the Content Licensing Agreement between you (the Artist/Licensor) and{' '}
            <strong className="text-white">Western Beats Private Limited</strong> — covering distribution,
            revenue share, ownership, obligations, and your rights. Based on our official executed agreement.
          </p>

          {/* Company registration callout */}
          <div className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-inter text-[12px] text-mut"
            style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
            <Shield size={13} style={{ color: '#5CB2DC' }} />
            <span>Companies Act 2013 · PAN: AACCW9613Q · Dharuhera, Rewari, Haryana</span>
          </div>
        </div>
      </section>

      {/* ── Quick Reference Cards ──────────────────────────────────────── */}
      <section className="py-10 sm:py-14 relative">
        <div className="absolute inset-0" style={{ background: 'rgba(10,21,53,0.4)' }} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-8">
            <div className="font-outfit font-extrabold text-white text-[18px] sm:text-[20px] mb-1">Quick Reference</div>
            <div className="font-inter text-[13px] text-mut">The most important numbers at a glance. Full detail in the sections below.</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {QUICK_FACTS.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
                  className="rounded-xl p-4 flex flex-col"
                  style={{ background: '#0A1535', border: `1px solid ${f.color}25` }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${f.color}18` }}>
                    <Icon size={15} style={{ color: f.color }} />
                  </div>
                  <div className="font-inter text-[10px] text-mut tracking-[0.08em] uppercase mb-1">{f.title}</div>
                  <div className="font-outfit font-black text-[18px] sm:text-[20px] leading-none mb-1"
                    style={{ color: f.color }}>{f.value}</div>
                  <div className="font-inter text-[10px] text-mut leading-snug">{f.sub}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Key callout banners */}
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            {/* Revenue split */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="rounded-2xl p-5 sm:p-6 flex items-start gap-4"
              style={{ background: 'rgba(196,18,48,0.07)', border: '1px solid rgba(196,18,48,0.25)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(196,18,48,0.15)' }}>
                <DollarSign size={20} style={{ color: '#f87171' }} />
              </div>
              <div>
                <div className="font-outfit font-extrabold text-white text-[14px] sm:text-[15px] mb-1">
                  Revenue Split: <span style={{ color: '#f87171' }}>70% Artist · 30% Western Beats</span>
                </div>
                <div className="font-inter text-[12.5px] text-mut leading-relaxed">
                  &ldquo;100% ownership&rdquo; in our marketing refers to your{' '}
                  <strong className="text-white">intellectual property rights</strong>.
                  The streaming <strong className="text-white">revenue split is 70% you / 30% WB</strong>.
                  Full detail in Section 5.
                </div>
              </div>
            </motion.div>

            {/* Lock-in */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className="rounded-2xl p-5 sm:p-6 flex items-start gap-4"
              style={{ background: 'rgba(10,100,195,0.07)', border: '1px solid rgba(10,100,195,0.25)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(10,100,195,0.15)' }}>
                <Lock size={20} style={{ color: '#5CB2DC' }} />
              </div>
              <div>
                <div className="font-outfit font-extrabold text-white text-[14px] sm:text-[15px] mb-1">
                  12-Month Lock-In Period
                </div>
                <div className="font-inter text-[12.5px] text-mut leading-relaxed">
                  You cannot terminate this Agreement in the{' '}
                  <strong className="text-white">first 12 months</strong>, except in
                  an Event of Default by WB. Full detail in Section 9.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Table of Contents ──────────────────────────────────────────── */}
      <section className="pb-6 sm:pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl p-5 sm:p-6" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="font-outfit font-extrabold text-white text-[14px] mb-4 flex items-center gap-2">
              <FileText size={16} style={{ color: '#5CB2DC' }} /> Table of Contents
            </div>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {SECTIONS.map(s => (
                <a key={s.id} href={`#${s.id}`}
                  className="font-inter text-[13px] text-mut hover:text-white transition-colors duration-200 flex items-center gap-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Accordion Sections ─────────────────────────────────────────── */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-4">
          {SECTIONS.map((s, i) => (
            <AccordionSection key={s.id} s={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── Contact Bar ────────────────────────────────────────────────── */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(10,100,195,0.15)' }}>
                <Mail size={22} style={{ color: '#5CB2DC' }} />
              </div>
              <div>
                <div className="font-outfit font-extrabold text-white text-[16px] sm:text-[18px] mb-1">
                  Questions About These Terms?
                </div>
                <div className="font-inter text-[13px] text-mut">
                  Contact our legal team at{' '}
                  <a href="mailto:sahil.sandhu@westernbeats.com" className="text-sky hover:text-white transition-colors">
                    sahil.sandhu@westernbeats.com
                  </a>
                  {' '}or{' '}
                  <a href="mailto:legal@globalmusicjunction.com" className="text-sky hover:text-white transition-colors">
                    legal@globalmusicjunction.com
                  </a>
                  . We reply within 24 hours on business days.
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="mailto:sahil.sandhu@westernbeats.com"
                className="px-5 py-2.5 rounded-xl font-outfit font-bold text-[13px] text-white text-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#0A64C3' }}>
                Email Legal
              </a>
              <Link href="/contact"
                className="px-5 py-2.5 rounded-xl font-outfit font-bold text-[13px] text-white text-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                Contact Page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
