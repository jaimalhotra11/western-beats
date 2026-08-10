'use client'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const ARTICLES = [
  {
    id: 'definitions',
    num: 'ARTICLE 1',
    title: 'DEFINITIONS',
    intro: 'For the purposes of this Agreement, the following terms shall have the meanings set forth below unless otherwise specified:',
    items: [
      { term: 'Agreement', def: 'shall mean the Principal Terms and these Standard Terms & Conditions, together with any and all schedules, annexures and exhibits attached hereto or incorporated by reference.' },
      { term: 'Content', def: 'shall mean all music, audio, and visual entertainment content, including, without limitation, all songs, music videos, masters, compositions, cinematographic films, underlying works, and related materials owned and/or aggregated by the Licensor during the Term. Such Content shall be delivered to the Licensee for display, broadcast, reproduction, advertising, and/or distribution pursuant to this Agreement in any format or medium, including but not limited to text, audio, video, and/or images (e.g., credits, timing, copyrights, graphics, title, and language), as per the specifications detailed in the Principal Terms. Content also includes the Intellectual Property in the works delivered pursuant to this Agreement, as well as works provided per the Principal Terms.' },
      { term: 'Distribution Methods', def: 'shall mean and include any and all formats, modes, or mediums, whether existing now or invented in the future, through which the Content can be broadcast, communicated to the public, or otherwise distributed and commercially exploited. This includes, but is not limited to, text, audio, video, and/or images (e.g., credits, timing, copyrights, graphics, title, and language), digital audio-visual video files, real-time streaming, "over-the-air" via wireless internet systems, mobile programs or applications designed to showcase the Content in any form, including but not limited to pictures, stills, wallpapers, screensavers, and themes, websites, mobile applications, OTT applications, YouTube, or any other platform used to exploit the Content, with or without commercial considerations.' },
      { term: 'End User', def: 'shall mean any individual who accesses, purchases/acquires the Content.' },
      { term: 'Event of Default', def: 'shall mean any event in which the Licensee has defaulted on payment to the Licensor for their share of the Net Revenues for a continuous period of more than three (3) months.' },
      { term: 'Force Majeure Event', def: 'shall mean any incident beyond the reasonable control of either Party that prevents it from performing in accordance with the terms and/or providing any deliverables as agreed under the Agreement. Major incidents may include but are not limited to, acts of God, insurrection or civil disorder, religious strife, war or military operations, terrorist acts, partial or total strikes (either internal or external), lockouts, epidemics, blockages of means of transport or supplies, national or local emergencies, earthquakes, fires, storms, floods, water damage, and governmental, regulatory, or legal restrictions, as well as acts or omissions of persons for whom the Party is not responsible.' },
      { term: 'Licensed Properties', def: 'shall mean certain graphic representations of the artists and depictions of the artists or other materials owned by or licensed to the Licensor, including, without limitation, photographs, scenes, designs, art, video clips, metadata, audio clips, music clips, sound recordings, digital files, blog postings, wallpapers, screensavers, themes, animation, comics, merchandise, family albums, names, signatures, likenesses, graphic or digital likenesses, other audio-visual material, games, sounds, still scenes, and other accompanying elements, including any updates or future material, provided by the Licensor for the Licensee\'s use, subject to the terms and conditions of this Agreement.' },
      { term: 'Net Revenue', def: 'shall mean: (a) For distribution through YouTube: all amounts generated from the exploitation of the Content through YouTube, as reported on the platform, less all applicable taxes, duties, and other statutory levies; and (b) For distribution through all other distribution methods: all amounts received by the Licensee from the exploitation, marketing, and distribution of the Content via all other distribution methods, less all applicable taxes, duties, third-party costs, and other statutory levies.' },
      { term: 'Territory', def: 'shall mean the territory of the World.' },
    ],
  },
  {
    id: 'grant-of-rights',
    num: 'ARTICLE 2',
    title: 'GRANT OF RIGHTS',
    paras: [
      'The Licensor hereby grants to the Licensee, during the Term, royalty-free right and license ("Rights") to: (a) distribute the Content and/or the Licensed Properties to End Users or potential End Users via the Distribution Methods; (b) publish, distribute, perform, stream, sub-license, exploit, exhibit, show, market, synchronise, use, republish, recreate, modify, edit, communicate to the public, transmit, display, advertise, and promote the Content and/or the Licensed Properties at its sole discretion ("Services").',
      'The Rights granted to the Licensee shall be applicable for the entire Term and throughout the Territory, solely for the provision of the Services.',
      'It is clarified that the Rights for publishing and distribution granted to the Licensee include the right for the Licensee to further sub-license the Rights granted by the Licensor to third parties and to collect revenues from such third parties for the Content.',
      'The Parties hereby agree that the Rights provided herein for the Content and/or the Licensed Properties are granted for the Term; hence, the Licensor shall neither provide nor receive Services for the Content and/or the Licensed Properties through the Distribution Methods from any third party during the Term. Further, for the avoidance of doubt, the Licensor hereby undertakes that during the Term of this Agreement, the Licensor shall not, in any manner whatsoever, assign, transfer, sell, or otherwise create any encumbrance on the Content or any part thereof.',
      'The Licensor hereby agrees that, pursuant to the Rights granted to the Licensee under this Agreement, the Licensor constitutes and appoints the Licensee as the Licensor\'s attorney-in-fact, with full power of substitution and re-substitution, to execute and deliver any documents or instruments necessary to fully enforce and exploit the Rights granted by the Licensor, as well as any documents the Licensor has agreed to execute and deliver hereunder. This appointment will be irrevocable and coupled with an interest, but only during the Term of this Agreement.',
    ],
  },
  {
    id: 'content-provision',
    num: 'ARTICLE 3',
    title: 'CONTENT PROVISION AND DISTRIBUTION',
    paras: [
      'The Licensor shall: (a) Deliver the Content in accordance with the delivery schedule as per the Content delivery plan mutually agreed upon by the Parties in writing (including email and digital messages) from time to time during the Term; and (b) Ensure that the Content is reliable, conforms to the specifications agreed upon and set out in the Principal Terms, and does not violate any laws, rules, regulations, advertisement codes, and/or any other applicable program codes.',
      'To facilitate the aforesaid, and in addition to the Rights granted to the Licensee, the Licensor further grants the following rights to the Licensee: (a) The advertising rights shall include, without limitation, the right to advertise and promote, utilising the Content or any part(s) thereof, using all means, methods, processes, devices, or media, whether now known or hereafter devised. (b) The right to insert advertising (paid or otherwise) into the Content and to have such advertising precede or follow the Content. In the case of YouTube, paid advertising must comply with YouTube policies and guidelines. (c) The right to monetize the music used in the Content, as well as to extract it and/or offer it on a standalone basis.',
      'The Licensee shall have the right to modify, edit, recreate, remix, and/or refurbish the Content provided by the Licensor to suit the required formats for the provision of the Services. Modifications shall include resizing and reformatting the Content to meet the specifications of the Distribution Method.',
      'The Licensor represents to the Licensee that the exercise of the Rights granted herein, including, without limitation, the right to publish, distribute, monetize, or otherwise commercially use the music used in the Content, extract it, or offer it in any manner whatsoever, will not give rise to or impose upon the Licensee any obligations to pay any amounts to third parties, including, without limitation, any copyright societies, artists, performing rights societies, or any other collecting entities.',
      'For the purpose of promoting the Content, the Licensee shall be entitled and authorized to use any part of the Content provided by the Licensor. In addition, upon the Licensee\'s request, the Licensor shall provide the Licensee, free of charge, with any available promotional material for the Licensed Properties. The Licensor represents that it has obtained clearance of all third-party rights necessary for the exploitation of such Content in part, as well as the promotional material provided to the Licensee for the promotion of the Licensed Properties.',
    ],
  },
  {
    id: 'obligations-licensee',
    num: 'ARTICLE 4',
    title: 'OBLIGATIONS OF LICENSEE',
    paras: [
      'In addition to any obligations of the Licensee contained in this Agreement, the Licensee hereby undertakes and agrees to the following:',
      'Subject to the provisions of this Clause, the Licensee shall use all reasonable efforts to advertise, market, and promote the Content as part of the Services in the Territory, as may be agreed between the Parties from time to time.',
      'The Licensee will provide the Licensor with summary and detailed reports showing the computation of the Licensor\'s Revenue Share, if any, in compliance with its established accounting procedures, as modified from time to time. The Licensee shall provide such reports within 30 (thirty) days following the end of each calendar quarter, beginning with the first full calendar quarter of the Term. Once a report is received by the Licensor or published online by the Licensee, the Licensor will have a 15-day period to request clarifications, after which the report will be considered final, and an invoice will be required to be raised and delivered to the Licensee.',
      'In good faith, the Licensee shall keep the Licensor informed about the clients/platform names where the Licensee will distribute/monetize the Licensed Content.',
    ],
  },
  {
    id: 'obligations-licensor',
    num: 'ARTICLE 5',
    title: 'OBLIGATIONS OF THE LICENSOR',
    paras: [
      'The Licensor hereby undertakes and agrees to the following:',
      'To make all Content and Licensed Properties available for exploitation by the Licensee or any authorised sublicensee (in accordance with Article 3) in the manner agreed upon under this Agreement.',
      'To ensure that all Content and Content specifications, as outlined in the Principal Terms attached hereto, are met and followed unless otherwise agreed in writing between the Parties.',
      'To create and contribute new Content on an ongoing basis, in the manner requested and mutually agreed upon by the Parties, in accordance with the Content delivery plan outlined in Clause 3.1.1, and any further production and delivery plans as mutually agreed between the Parties.',
      'To provide all necessary support in resolving any legal issues that may arise in relation to the Content within the defined Territory.',
      'To provide, from time to time, the required OAuth token authorisation for all linked channels, together with such necessary permissions, scopes, approvals and access rights as may be required by GMJ to pull channel details, metadata, reporting, analytics, revenue and other relevant information into its indigenous CMS portal, GMJ-YT-Studio, built using official and secured YouTube APIs. The Licensor understands and acknowledges that such OAuth authorisation and permissions are necessary for timely reporting, analytics, revenue reconciliation and administration of the linked channels. It is hereby agreed that any refusal, revocation, expiry, restriction, withdrawal or termination of such OAuth tokens, permissions, scopes or channel access during the Term shall be considered a material breach of this Agreement, and the Licensee shall have the right to withhold amounts due to the Licensor until such breach is cured.',
    ],
  },
  {
    id: 'revenue-share',
    num: 'ARTICLE 6',
    title: 'REVENUE SHARE',
    paras: [
      'In lieu of the Services provided by the Licensee, as per the Rights granted by the Licensor to the Licensee, the Parties agree that the Licensee shall retain 20% of Net Revenue as the "Distribution Fee" and shall pay the Licensor the remaining 80% of Net Revenue as the "Revenue Share".',
      'The Parties agree that, in the event that the Licensee shall pay the Licensor any advance amounts, at the time during the Term, ("Advance") any and all advance amounts, including without limitation any additional or specific advances paid to the Licensor, shall be referred to collectively as "Advances", shall be subject to recoupment at the rate of 100% from the Licensor\'s Revenue Share ("Recoupment Process"), further to which any payments of overages to the Licensor shall be payable by the Licensee only after the Recoupment Process has been fully completed.',
      'All payments shall be made to the Licensor in Indian Rupees in accordance with the payment timeline stated in the Principal Terms and subject to receipt of a valid and undisputed invoice from the Licensor.',
      'The Licensee shall be authorized and solely responsible for collecting all forms of revenue related to the Content, including but not limited to marketing, publishing, selling, and/or distribution.',
    ],
  },
  {
    id: 'term-termination',
    num: 'ARTICLE 7',
    title: 'TERM, TERMINATION AND CONSEQUENCES OF TERMINATION',
    paras: [
      'Term: Unless terminated earlier, this Agreement will commence as of the Effective Date and shall remain in effect for a period of 3 years, after which the Agreement shall automatically renew for the Renewal Term stated therein. The Initial Term and the Renewal Term shall collectively be referred to as the "Term".',
      'The Parties further agree that the period of 12 months from the Effective Date shall be the lock-in period (the "Lock-in Period"). During the pendency of the Lock-in Period, the Licensor waives its right to terminate this Agreement for any reason whatsoever, save and except termination due to an Event of Default by the Licensee.',
      'Termination: Each Party understands and intends that this Agreement is made to perform and fulfil obligations until the end of the Term.',
      'The Licensor may terminate this Agreement at any time after the Lock-in Period by providing the Licensee with advance notice (emails accepted) of 60 days. The Licensee may terminate this Agreement at any time without cause by giving the Licensor 30 days\' prior written notice (emails accepted).',
      'The Licensee may terminate this Agreement if the Licensor fails to resolve any legal issue, copyright infringement, breach, or Event of Default within the stipulated fifteen (15) day cure period, immediately after the expiration of such period.',
      'If either Party (i) admits in writing its inability to pay its debts as they become due; (ii) makes a general assignment for the benefit of creditors; (iii) institutes proceedings, or has proceedings instituted against it, seeking relief or reorganization under any bankruptcy or insolvency laws; or (iv) has a court of competent jurisdiction appoint a receiver, liquidator, or trustee over all or substantially all of such Party\'s property or provide for the liquidation of such Party\'s property or business affairs, the other Party may terminate this Agreement immediately.',
      'In an Event of Default by the Licensee, the Licensee shall be given a sixty (60) day cure period to remedy the Event of Default, failing which the Agreement shall terminate fifteen (15) days thereafter.',
      'If either Party, at any time during the Term, is found to have engaged in fraud, including but not limited to falsification of financial statements, misrepresentation of ownership rights, or intentional non-disclosure of material facts, the other Party shall have the right to terminate the Agreement immediately without a cure period and seek damages.',
      'Consequences of Termination/Expiry: In the case of early termination, all rights granted to the Licensee under or pursuant to this Agreement shall revert to the Licensor. However, a three (3) month cool-off period shall apply, during which the Licensee may remove the Content from the Distribution Methods in accordance with the terms of service of the Distribution Methods.',
      'In the event that this Agreement is terminated by the Licensee pursuant to Clause 7.2.2, the Licensor hereby acknowledges that the Licensee shall retain all rights to pursue any statutory, legal, tortious, or other remedies, including specific performance, interim injunctions, and other remedies available to the Licensee.',
      'In the case of early termination or expiry of this Agreement, the Licensor or its licensor(s) shall own and retain all rights, title, and interest to the trademarks, copyrights, and other intellectual property rights in the Content and the Licensed Properties in perpetuity, provided such rights were created and owned by the Licensor and existed prior to the Effective Date of this Agreement. In the event that this Agreement is terminated pursuant to Clause 7.2.2, any and all unrecouped advances shall be refunded by the Licensor within 15 (fifteen) days of the termination date, along with an 18% per annum interest.',
    ],
  },
  {
    id: 'events-of-default',
    num: 'ARTICLE 8',
    title: 'EVENTS OF DEFAULT',
    paras: [
      'The following shall be considered Events of Default by either Party:',
      'Either Party becomes bankrupt or insolvent, or proceedings for liquidation, insolvency, or bankruptcy are commenced against that Party, or it goes into liquidation, or a receiver or similar officer is appointed over any significant part of its undertaking or assets; OR',
      'Either Party consistently fails to perform its obligations under this Agreement for reasons not attributable to the other Party and within the control of the defaulting Party.',
      'Either Party engages in fraudulent activities, including but not limited to misrepresentation, falsification of records, or any attempt to deceive the other Party in connection with the execution or performance of this Agreement. If fraud is established, the non-defaulting Party shall have the right to immediately terminate the Agreement and seek appropriate remedies, including but not limited to legal action, damages, and reimbursement of losses incurred.',
      'Each Party warrants that it shall not engage in fraudulent conduct, including but not limited to falsification of records, misrepresentation of material facts, or deceptive practices in connection with this Agreement. Any such fraudulent activity shall constitute an immediate Event of Default, entitling the non-defaulting Party to terminate this Agreement without a cure period and to seek damages, including reimbursement of any funds lost due to such fraud.',
      'If the Licensor is suspected of engaging in fraud, infringement, or any unlawful activity, or if any claim, investigation, or legal action arises related to such activity, the Licensee shall have the immediate right to suspend, withhold, or retain any payments due to the Licensor, without liability or penalty.',
      'The Licensee may use the withheld funds to cover legal fees, settlements, damages, or any other costs incurred in defending against any claims, lawsuits, or regulatory actions arising from the Licensor\'s fraudulent or infringing activities.',
      'The Licensor shall fully indemnify, defend, and hold harmless the Licensee against any claims, losses, damages, liabilities, and expenses (including legal fees) arising from any fraud, infringement, or unlawful acts committed by the Licensor.',
      'The Licensee may, at its sole discretion, terminate this Agreement immediately if the Licensor is found or reasonably suspected to have engaged in fraudulent or infringing activities.',
    ],
  },
  {
    id: 'intellectual-property',
    num: 'ARTICLE 9',
    title: 'INTELLECTUAL PROPERTY',
    paras: [
      'The Licensor or its licensor(s) shall own and retain all rights, title, and interest in the trademarks, copyrights, and other intellectual property rights in the Content and the Licensed Properties.',
      'As between the Licensor and the Licensee, during the Term, the Licensor shall be responsible for procuring and maintaining all third-party rights and licenses that inure or may inure to the benefit of any third-party rights holders. The Licensor represents and warrants that the exercise by the Licensee of any and all rights granted hereunder will not violate or infringe upon any rights of any third parties, including, without limitation, any trademark, trade name, copyright, patent, literary, dramatic, artistic, personal, civil, or property right, right of privacy, or any other right or interest of any party, nor will it constitute libel, slander, defamation, invasion of privacy, moral rights, or unfair competition with respect to any party. The Licensor further represents and warrants that the Content complies with any applicable law, administrative regulation, or rule, including, without limitation, any advertising regulations and restrictions applicable thereto. In connection with the exploitation of the Content hereunder, the Licensor shall be solely responsible for: (a) all record royalties due to artists, producers, and other persons involved in the creation of the Content; (b) all payments required under collective bargaining agreements applicable to the Licensor and its affiliates; and (c) all publishing licenses and royalties, including, without limitation, physical and digital mechanical licenses.',
      'In the event that any notice of copyright infringement, shared copyright or any other intellectual property infringement related to the Content (the "Notice") is received by the Licensee or any of its distributors, the Licensee shall immediately forward such Notice to the Licensor. The Licensor shall take full responsibility and respond to the Notice within 48 hours of receipt, providing all necessary documentation and paperwork related to the alleged infringement to the Licensee. If the Licensor fails to respond to the Notice within 48 hours or does not provide the required documentation and paperwork to the Licensee, the Licensee shall have the right to respond to the Notice, including divulging the Licensor\'s contact information. The Licensor agrees and consents that, under such circumstances, the Licensee has the right to disclose the Licensor\'s contact information.',
      'Notwithstanding anything contained in this Agreement, in the event that the Licensor fails to act as required under the Notice within the stipulated time, the Licensor agrees to indemnify the Licensee for all losses incurred by the Licensee in defending against such Notice, including all costs and expenses. These costs and expenses shall be incurred by the Licensee in the manner specified in Section 9.2. It is further clarified that any amount spent on defending against a Notice shall be deducted from any sums payable to the Licensor as per the Recoupment Process outlined in Clause 6.3.',
      'The Licensor shall indemnify the Licensee against any third-party claims arising from any omission or inaccuracy in the data provided by the Licensor along with the Content.',
      'Nothing in this Agreement permits the Licensee to create or commercially exploit any synthetic, AI-generated, digitally replicated or digitally manipulated version of any artist\'s voice, likeness, image or persona embodied in the Content, except with the Licensor\'s prior written approval and subject to the Licensor having obtained all necessary artist and third-party consents. For the avoidance of doubt, standard editing, resizing, formatting, encoding, restoration, subtitling, dubbing, localisation, metadata processing, quality control, promotional editing and preparation of platform-compliant versions of the Content in accordance with this Agreement shall not be restricted.',
      'The Licensor shall not deliver any Content or Licensed Properties that are wholly or materially AI-generated, synthetically created, digitally replicated or digitally manipulated without prior written disclosure to and approval of the Licensee, and unless the Licensor has obtained all rights, permissions, releases and consents necessary for the distribution and exploitation of such Content or Licensed Properties under this Agreement.',
      'Neither Party shall use the other Party\'s Content, Licensed Properties, confidential information, proprietary materials or data to train, fine-tune or develop any generative artificial intelligence model without the other Party\'s prior written consent.',
    ],
  },
  {
    id: 'representations',
    num: 'ARTICLE 10',
    title: 'REPRESENTATIONS AND WARRANTIES',
    paras: [
      '10.1 Both Parties represent and warrant that each Party: (a) Is duly incorporated, organized, legally existing, validly existing, and in good standing to execute and perform this Agreement; (b) The execution and performance of this Agreement does not conflict with any other agreements of the warranting Party; (c) The execution and performance of this Agreement are within the power of the warranting Party and have been duly authorized by such Party.',
      '10.2.1 The Licensee warrants that: (a) it will use the Content strictly in accordance with the terms as set out in this Agreement; (b) The Licensee\'s distribution or reproduction of the Content, Licensed Properties, all promotional materials, and the performance of its obligations under this Agreement shall comply with all applicable laws.',
      '10.2.2 The Licensor warrants that: (a) it shall endeavour to ensure that no Content developed or provided by the Licensor could be construed as bringing the Licensee into disrepute or infringing the copyright or privacy rights of any person; (b) it shall obtain all third-party consents and approvals necessary for the development, display, production, and distribution of the Content, Licensed Properties, and promotional materials; (c) it hereby represents and warrants that, during the Term of this Agreement, the Licensor shall not sell, create a lien, encumbrance, or otherwise significantly transfer any stock, equity, stake, or interest in the Licensor company in any manner that changes the ownership, control of the board, or any shareholding in the Licensor company in any way.',
    ],
  },
  {
    id: 'indemnity',
    num: 'ARTICLE 11',
    title: 'INDEMNITY',
    paras: [
      '11.1 Notwithstanding anything contained in this Agreement, the Licensor shall indemnify, defend, and hold harmless the Licensee for content provided via any form of delivery to the Licensee, including any metadata lists and complete catalogue, with or without logos, deployed or not deployed by the Licensee, from and against all claims, demands, judgments, damages, losses, liabilities, and expenses of any nature (including reasonable legal fees and costs) arising out of actions brought by third parties in connection with or related, directly or indirectly, to: (a) any breach or alleged breach of this Agreement or any representations and warranties made herein; (b) any unauthorized use by the Licensor or any of its subcontractors of any Licensed Properties or any portion of the Content; (c) any negligent act or omission by the Licensor, its directors, officers, agents, employees, or subcontractors; and/or (d) the Licensor\'s failure to comply with applicable laws, ministerial guidance, or industry/association codes of conduct; and (e) any claim that the Licensee\'s use of the Licensed Properties and/or any material, digital or analogue, provided to the Licensee in the manner prescribed by, and as approved under, this Agreement, infringes the copyright of any third party.',
      '11.2 Notwithstanding anything contained in this Agreement, the Licensor shall indemnify, defend, and hold harmless the Licensee from and against all claims, demands, judgments, damages, losses, liabilities, and expenses of any nature (including reasonable legal fees and costs) arising out of actions brought by third parties in connection with or related, directly or indirectly, to the defence of any Notice.',
      '11.3 Notwithstanding anything contained in this Agreement, should there be any DMCA takedown, copyright infringement strikes, or third-party matches — collectively and individually referred to herein as "digital notice(s)" — on the Licensor\'s content on any platform, the Licensor will make all reasonable efforts to have such digital notice(s) retracted within 48 hours of being informed by the Licensee through direct communication with the issuing party of such notice(s). The Licensor authorizes the Licensee to counter such notice(s) on the Licensor\'s behalf, and the Licensor agrees to provide all communication, contact details, and agreements available to the Licensor with the issuing party or platform no later than 72 hours after the notice(s) are issued. Furthermore, the Licensor shall indemnify, defend, and hold harmless the Licensee from and against all claims, demands, judgments, damages, losses, liabilities, and expenses of any nature (including reasonable legal fees and costs) arising from such actions.',
      '11.4 The Licensee shall indemnify, defend, and hold harmless the Licensor from and against all claims, demands, judgments, damages, losses, liabilities, and expenses of any nature (including reasonable legal fees and expenses) arising out of actions brought by third parties in connection with or related, directly or indirectly, to: (a) any material breach or alleged breach of this Agreement or any representation made by the Licensee herein; and (b) any unauthorised use by the Licensee or any of its subcontractors of any Licensed Properties or any portion of the Content.',
      '11.5 The Licensor hereby agrees to execute any additional documents that the Licensee may require, at its sole discretion and as the Licensee deems necessary, to fully enforce and exploit the rights granted to the Licensee by the Licensor under this Agreement and with respect to the Content.',
    ],
  },
  {
    id: 'confidentiality',
    num: 'ARTICLE 12',
    title: 'CONFIDENTIALITY',
    paras: [
      '12.1 Each of the Parties undertakes not to disclose to any person, other than its affiliates and professional advisors, any information relating to the business of the other Party or the terms of this Agreement, except on a need-to-know basis. All such information shall be treated as strictly confidential and used only for the purposes of this Agreement.',
      '12.2 The restrictions contained in this clause shall not apply to information which: (a) Enters the public domain other than by breach of this Agreement; or (b) was lawfully obtained from a third party whom the receiving Party reasonably believed was free to divulge it; or (c) the recipient can demonstrate, to the reasonable satisfaction of the other Party, that the information was known to the recipient prior to its disclosure by the other Party and was not acquired, directly or indirectly, from that other Party or from any third party in breach of any obligation of confidentiality; or (d) is or has been independently generated by the recipient prior to receipt of such information; or (e) is required to be disclosed by law or other governmental authority or regulatory body, provided that the disclosing Party uses its best efforts to ensure that the recipient keeps the information confidential and does not use it except for the purposes for which the disclosure is made.',
    ],
  },
  {
    id: 'miscellaneous',
    num: 'ARTICLE 13',
    title: 'MISCELLANEOUS',
    paras: [
      '13.1 Severability: If any part or provision of this Agreement is or becomes illegal, invalid, or unenforceable, that part or provision shall be ineffective only to the extent of such invalidity or unenforceability, without affecting the validity or enforceability of the remaining parts of the provision or the remaining provisions of this Agreement.',
      '13.2 Relationship of Parties: It is understood and agreed that the Licensee is acting as an independent contractor in the distribution of the Content hereunder, and nothing in this Agreement shall be deemed to create any agency, employment, or joint venture relationship between the Licensee and the Licensor. This Agreement shall be considered a peer-to-peer agreement, and any change of control and/or ownership of the Licensor company shall give the Licensee the right, but not the obligation, to terminate this Agreement.',
      '13.3 Dispute Resolution: Any dispute or difference that cannot be resolved amicably shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitral tribunal shall comprise a sole arbitrator if the Parties agree; failing such agreement, the arbitrator shall be appointed in accordance with the Arbitration and Conciliation Act, 1996. The place of arbitration shall be Mumbai, India, and the language of arbitration shall be English.',
      '13.4 Jurisdiction: This Agreement shall be governed by and construed in accordance with the laws of India and shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.',
      '13.5 Notices: All notices required to be served by either Party upon the other shall be deemed duly served if delivered by hand, sent by courier service, or by Registered AD post to the addresses of the Parties mentioned in this Agreement, or on the date and time of receipt of an electronically transmitted email to the contact details provided in the Principal Terms.',
      '13.6 Execution of Documents: Each Party shall perform, execute, and deliver, or procure the performance, execution, and delivery of, all such further acts, deeds, and documents as may be necessary to give full effect to the terms of this Agreement.',
      '13.7 Counterparts: This Agreement may be executed in any number of counterparts, each of which, when executed and delivered, shall be considered an original, and all such counterparts together shall constitute one and the same instrument.',
      '13.8 Stamp Duty: The stamp duty payable on this Agreement shall be borne equally by both Parties.',
      '13.9 Assignment: The Licensor shall not have the right to assign, transfer, or purport to assign or transfer this Agreement, in whole or in part, or any rights or obligations hereunder, without the prior written consent of the Licensee.',
      '13.10 Amendments: All changes and amendments to this Agreement shall be valid only if made in writing and signed by the duly authorized representatives of both Parties.',
      '13.11 Waiver: Failure by Licensor or Licensee to promptly exercise any option or right granted, or to require strict performance of any obligation imposed herein, shall not be deemed a waiver of such rights.',
      '13.12 Force Majeure: In the event of any Force Majeure, neither Party shall be liable to the other for any delay or failure to perform its obligations under this Agreement, to the extent that such delay or failure is caused by a Force Majeure Event and is not attributable to any breach, act or omission of the affected Party. The affected Party shall promptly notify the other Party in writing upon becoming aware of a Force Majeure Event and use all reasonable endeavours to mitigate the effects of the Force Majeure Event as reasonably practicable. If a Force Majeure Event continues for a period exceeding 60 (sixty) consecutive days, this Agreement shall stand terminated, without liability to the other Party. However, if both the Parties agree on the terms and conditions, they may sign a new Agreement after the conclusion of an event of any Force Majeure.',
      '13.13 Entire Agreement: This Agreement, along with the Annexures/Schedules, constitutes the final, complete, and exclusive written expression of the intentions of the Parties and supersedes all prior communications, representations, agreements, MOUs, promises, or statements, whether oral or written, between the Parties. No supplement, modification, or amendment of this Agreement shall be binding unless executed in writing by both Parties.',
    ],
  },
]

const NAV_ITEMS = ARTICLES.map(a => ({ id: a.id, label: a.num.replace('ARTICLE ', 'Art. ') + ' — ' + a.title }))

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Terms &amp; Conditions</li>
            </ol>
          </nav>

          <div className="platform-pill mb-6 inline-flex">Legal Document</div>
          <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-4" style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
            <span className="block text-white">Standard Terms of</span>
            <span className="block" style={{ color: '#0A64C3' }}>Content Licensing &amp; Distribution</span>
          </h1>
          <p className="font-inter text-[14px] sm:text-[15px] leading-relaxed max-w-2xl" style={{ color: '#8899AA' }}>
            These Terms set out the terms on which Western Beats Private Limited (the "Licensee") provides content distribution services to the artist (the "Licensor"). Last updated: <strong className="text-white">1 August 2026.</strong>
          </p>

          {/* Quick facts bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Revenue Share', value: '80% to Artist' },
              { label: 'IP Ownership', value: '100% Artist' },
              { label: 'Term', value: '3 Years' },
              { label: 'Lock-in', value: '12 Months' },
            ].map(f => (
              <div key={f.label} className="rounded-xl px-4 py-3 text-center" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="font-inter text-[10px] tracking-[0.1em] uppercase mb-1" style={{ color: '#4A5568' }}>{f.label}</p>
                <p className="font-outfit font-black text-[14px] text-white">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Sticky TOC on large screens */}
          <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10 items-start">

            <aside className="hidden lg:block sticky top-24 self-start">
              <p className="font-outfit font-bold text-[11px] tracking-[0.12em] uppercase mb-3" style={{ color: '#4A5568' }}>Contents</p>
              <nav className="flex flex-col gap-0.5">
                {NAV_ITEMS.map(n => (
                  <a key={n.id} href={`#${n.id}`}
                    className="font-inter text-[11px] leading-relaxed py-1 px-2 rounded-lg transition-colors hover:text-white"
                    style={{ color: '#5A6A80' }}>
                    {n.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 rounded-xl p-4" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="font-inter text-[11px] leading-relaxed" style={{ color: '#5A6A80' }}>
                  Questions about these terms?<br />
                  <a href="mailto:legal@westernbeats.com" className="text-sky hover:text-white transition-colors">legal@westernbeats.com</a>
                </p>
              </div>
            </aside>

            {/* Articles */}
            <div className="mt-8 lg:mt-0 flex flex-col gap-10">
              {ARTICLES.map(article => (
                <div key={article.id} id={article.id}
                  className="rounded-2xl overflow-hidden"
                  style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)' }}>

                  {/* Article header */}
                  <div className="px-7 py-5" style={{ background: '#0A1535', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <p className="font-inter text-[10px] tracking-[0.15em] uppercase mb-1" style={{ color: '#0A64C3' }}>{article.num}</p>
                    <h2 className="font-outfit font-black text-white text-[17px] sm:text-[19px]">{article.title}</h2>
                  </div>

                  {/* Article body */}
                  <div className="px-7 py-6 flex flex-col gap-4">

                    {/* Definition-style article */}
                    {'items' in article && article.items && (
                      <>
                        {article.intro && (
                          <p className="font-inter text-[13px] leading-[1.75]" style={{ color: '#8899AA' }}>{article.intro}</p>
                        )}
                        <dl className="flex flex-col gap-4">
                          {article.items.map(item => (
                            <div key={item.term} className="rounded-xl p-4" style={{ background: '#040A14', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <dt className="font-outfit font-bold text-white text-[13px] mb-1.5">"{item.term}"</dt>
                              <dd className="font-inter text-[13px] leading-[1.75]" style={{ color: '#8899AA' }}>{item.def}</dd>
                            </div>
                          ))}
                        </dl>
                      </>
                    )}

                    {/* Paragraph-style article */}
                    {'paras' in article && article.paras && article.paras.map((p, i) => (
                      <p key={i} className="font-inter text-[13px] sm:text-[14px] leading-[1.8]" style={{ color: '#8899AA' }}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Signature block */}
              <div className="rounded-2xl px-7 py-6" style={{ background: '#0A1535', border: '1px solid rgba(10,100,195,0.25)' }}>
                <p className="font-outfit font-black text-white text-[15px] mb-2">IN WITNESS WHEREOF</p>
                <p className="font-inter text-[13px] leading-[1.75] mb-4" style={{ color: '#8899AA' }}>
                  The Parties to this Agreement, through their duly authorised representatives, have executed this Agreement on the day and year written below.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="rounded-xl p-4" style={{ background: '#040A14', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="font-outfit font-bold text-white text-[12px] mb-2">The Licensee</p>
                    <p className="font-inter text-[13px]" style={{ color: '#8899AA' }}>Western Beats Private Limited<br />Sector-4A, H.No.357P, Dharuhera<br />Rewari, Haryana 123106<br />PAN: AACCW9613Q</p>
                    <p className="font-inter text-[12px] mt-3"><a href="mailto:legal@westernbeats.com" className="text-sky hover:text-white transition-colors">legal@westernbeats.com</a></p>
                  </div>
                  <div className="rounded-xl p-4" style={{ background: '#040A14', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="font-outfit font-bold text-white text-[12px] mb-2">The Licensor (Artist)</p>
                    <p className="font-inter text-[13px]" style={{ color: '#8899AA' }}>As per the Principal Terms signed between the Parties.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
