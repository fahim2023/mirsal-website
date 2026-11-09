// All English text for the site lives here.
// To change wording, edit this file (and ar.ts for Arabic). The page layouts read from it.

export const en = {
  meta: {
    siteName: 'Mirsal',
    description:
      'Mirsal is a WhatsApp concierge for premium real estate agencies in Riyadh, Jeddah and Dubai: instant replies in Arabic and English, qualified buyers and viewings booked automatically.',
  },

  nav: {
    home: 'Mirsal home',
    services: 'Services',
    process: 'Process',
    sectors: 'Sectors',
    engagement: 'Engagement',
    about: 'About',
    book: 'Book a consultation',
    switchLabel: 'العربية',
    mainMenu: 'Main',
    openMenu: 'Menu',
  },

  footer: {
    line: 'WhatsApp concierge for distinguished real estate in Riyadh, Jeddah and Dubai.',
    company: 'Company',
    servicesTitle: 'Services',
    legal: 'Legal',
    system: 'The system',
    privacy: 'Privacy policy',
    cities: 'Riyadh · Jeddah · Dubai',
    rights: 'All rights reserved.',
  },

  contactInfo: {
    email: 'hello@mirsal.example',
    whatsappLabel: 'WhatsApp',
    whatsappNumber: '+966 00 000 0000',
    whatsappLink: 'https://wa.me/966000000000',
  },

  cta: {
    title: 'Your next buyer is messaging tonight.',
    text: 'Allow us to show you, with one of your own properties, how they will be received.',
    primary: 'Request a private demonstration',
    whatsapp: 'Message us on WhatsApp',
  },

  home: {
    title: 'Mirsal · WhatsApp concierge for distinguished real estate',
    kicker: 'WhatsApp concierge for distinguished real estate',
    h1: 'Every enquiry, answered with the care of your best agent.',
    text: 'A bespoke WhatsApp system for premium agencies in Riyadh, Jeddah and Dubai. Instant, gracious replies in Arabic or English, qualified buyers, and viewings arranged around your agents’ diaries.',
    cta1: 'Request a private demonstration',
    cta2: 'Discover the experience',
    points: ['Live in 1–2 weeks', 'Arabic &amp; English', 'You keep your number and your data'],
    heroImage: 'Photography · villa at dusk, Riyadh',
    card: { label: 'Viewing reserved', value: 'Thursday, 16:30', sub: 'Enquiry received · 23:42' },

    first: {
      eyebrow: 'The first reply wins',
      before: { label: 'Typical first reply', time: '08:10', sub: 'the next morning' },
      after: { label: 'With Mirsal', time: '23:42', sub: 'six seconds after the enquiry' },
      quote:
        'High-value buyers enquire with several agencies at once. The one that responds with grace and speed earns the viewing.',
    },

    experience: {
      eyebrow: 'The experience',
      title: 'Discreet. Immediate. Personal.',
      steps: [
        { t: 'Captured', d: 'The portal email or ad form is read the moment it arrives, and the client’s number is extracted.' },
        { t: 'Replied', d: 'A message goes out from your own business number, in the language the client wrote in.' },
        { t: 'Qualified', d: 'Buttons instead of typing, so answers arrive clean: buying or renting, budget, timing.' },
        { t: 'Logged', d: 'Saved to HubSpot, Zoho or a Google Sheet, with the source and a hot, warm or cold score.' },
        { t: 'Booked', d: 'The client picks a slot from the agent’s real calendar. A reminder goes out the day before.' },
        { t: 'Handed over', d: 'The agent receives a short summary and can take over the conversation at any point.' },
      ],
    },

    included: {
      eyebrow: 'What we provide',
      title: 'Built around how your agents already work.',
      text: 'No new app to learn. Your team keeps using WhatsApp and your CRM. Mirsal does the repetitive part in between.',
      image: 'Photography · interior, marble &amp; light',
      items: [
        { t: 'Arabic and English', d: 'Replies match the client’s language. Every Arabic message is checked by a native speaker before launch.' },
        { t: 'Replies at any hour', d: 'Nights, weekends and Fridays.' },
        { t: 'Lead scoring', d: 'Hot, warm or cold, so agents call the right people first.' },
        { t: 'CRM sync', d: 'HubSpot, Zoho or a simple Google Sheet. Your account, your data.' },
        { t: 'Viewing booking', d: 'Real calendar slots, plus reminders to reduce no-shows.' },
        { t: 'Follow-ups', d: 'Polite check-ins for clients who are “not yet ready”, and new-listing alerts.' },
        { t: 'Weekly report', d: 'Leads, reply times and viewings by source. See which advertising earns its budget.' },
        { t: 'Human takeover', d: 'Any agent can step into any conversation with one tap.' },
      ],
    },

    engagement: {
      eyebrow: 'Engagement',
      title: 'Tailored to your agency',
      text: 'Every system is designed around your listings, your team and your brand voice. Engagements begin with a private consultation.',
      from: 'From',
      setup: '[SAR 0,000] setup',
      monthly: '[SAR 000] monthly',
      rows: [
        { k: 'Lead sources', v: 'Up to 3' },
        { k: 'WhatsApp numbers', v: '1' },
        { k: 'CRM', v: 'HubSpot, Zoho or Google Sheets' },
        { k: 'Time to launch', v: '1–2 weeks' },
      ],
      note: 'Meta’s WhatsApp message fees and your CRM subscription are billed to you directly. We do not mark them up.',
      more: 'See full engagement details',
    },

    founder: {
      eyebrow: 'The founder',
      quote:
        'I’m Fahim, a software developer based in the UK. I build the systems, and [Partner name] in Riyadh reviews every Arabic message so it sounds like your agency, not a translation.',
      text: 'We keep the client list small on purpose. Each setup is built for one agency’s listings, team and way of working, and we look after it every month after launch.',
      name: 'Fahim Adam',
      role: 'Founder',
      photo: 'Photography · founder portrait',
    },

    faq: {
      eyebrow: 'Enquiries',
      title: 'Questions agencies ask us',
      items: [
        { q: 'Do I need the WhatsApp Business API?', a: 'For full automation, yes. We set it up on your business number and handle Meta verification and message templates with you.' },
        { q: 'Will my agents need to change anything?', a: 'No. They keep using WhatsApp. Serious clients simply arrive already answered, with a summary.' },
        { q: 'Does it really reply in Arabic?', a: 'Yes, in the language the client writes in. Every template is reviewed by a native speaker before going live.' },
        { q: 'Who owns the data?', a: 'You do. Leads live in your own CRM and accounts. We only access them to run and maintain the system.' },
        { q: 'Can I try it first?', a: 'On the call we set up a demonstration using one of your real listings, so you see exactly what a client would see.' },
        { q: 'What if I want to cancel?', a: 'Cancel the monthly plan with [30] days’ notice. Your number, data and CRM stay yours.' },
      ],
    },
  },

  chat: {
    toggleLabel: 'Demonstration language',
    clientName: '[Client] Real Estate',
    online: 'online',
  },

  services: {
    title: 'The system · Mirsal',
    eyebrow: 'The system',
    h1: 'Six parts, working as one.',
    text: 'Mirsal is not a chatbot. It is a complete concierge for your enquiries, from the first message to the viewing and beyond, built on WhatsApp and your own CRM.',
    modules: [
      {
        name: 'Capture', title: 'Every enquiry, from every source, in one place.',
        text: 'Portal lead emails, Meta lead ads, click-to-WhatsApp ads and your website forms are read the moment they arrive.',
        bullets: ['Bayut, Property Finder &amp; Aqar lead emails', 'Meta lead ads and click-to-WhatsApp', 'Website and landing-page forms', 'Duplicate leads merged automatically'],
        visual: 'sources',
      },
      {
        name: 'Reply', title: 'A gracious first reply, within seconds.',
        text: 'Sent from your own business number, in the language the client wrote in, about the exact property they asked for.',
        bullets: ['Arabic and English, checked by a native speaker', 'Photos, floor plan and price attached', 'Your agency’s tone of voice, not a robot’s', 'Replies at night, at weekends and on Fridays'],
        visual: 'reply',
      },
      {
        name: 'Qualify', title: 'The right questions, asked politely.',
        text: 'Simple buttons instead of typing, so answers arrive clean and agents know who to call first.',
        bullets: ['Buying or renting', 'Budget and preferred areas', 'Timeline and financing', 'Hot, warm or cold score'],
        visual: 'qualify',
      },
      {
        name: 'Record', title: 'Everything written down, nothing lost.',
        text: 'Each lead is saved to your CRM with the full conversation, source and score. Your account, your data.',
        bullets: ['HubSpot, Zoho or Google Sheets', 'Source tracked for every lead', 'Full chat history attached', 'No copies kept by us'],
        visual: 'record',
      },
      {
        name: 'Arrange', title: 'Viewings booked into real diaries.',
        text: 'Clients choose from your agents’ genuine availability. Reminders go out the day before, so fewer viewings are missed.',
        bullets: ['Synced with Google or Outlook calendars', 'Round-robin or by area', 'Reminders to client and agent', 'Easy rescheduling in the chat'],
        visual: 'calendar',
      },
      {
        name: 'Follow &amp; report', title: 'No lead forgotten. Every riyal accounted for.',
        text: 'Gentle follow-ups for clients who are “not ready yet”, and a weekly report showing which sources bring real viewings.',
        bullets: ['Follow-ups at 7, 30 and 90 days', 'New-listing alerts to matching clients', 'Weekly report by source and agent', 'Human takeover with one tap'],
        visual: 'report',
      },
    ],
    visuals: {
      sources: [['Bayut', '23:42'], ['Meta lead ad', '23:57'], ['Property Finder', '07:15'], ['Website form', '09:03']],
      replyClient: 'Good evening. Is the villa in Al Narjis still available?',
      replyUs: 'Good evening, Mr Khalid. Yes, it is. I have sent the photographs and floor plan.',
      replyNote: 'Reply sent in 6 seconds',
      chips: ['Buying', 'Renting', 'SAR 3–5m', 'Within 3 months', 'Cash'],
      score: 'Score', hot: 'Hot',
      record: [['Name', 'Khalid'], ['Interest', 'Villa · Al Narjis'], ['Budget', 'SAR 3–5m'], ['Source', 'Bayut'], ['Score', 'Hot']],
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
      booked: 'Thursday 16:30 · Sara',
      bars: ['Bayut', 'PF', 'Meta', 'Web'],
      example: 'Example report',
    },
  },

  process: {
    title: 'Process · Mirsal',
    eyebrow: 'Process',
    h1: 'From first conversation to first viewing in two weeks.',
    text: 'A calm, well-defined engagement. You will always know what happens next, and what we need from you.',
    stages: [
      { w: 'Week 0', t: 'Private consultation', d: 'A 20-minute call about your listings, lead sources, team and tools. We show you a demonstration built on one of your own properties.' },
      { w: 'Week 1', t: 'Design', d: 'We write your conversation scripts in your agency’s voice, in Arabic and English. Every Arabic message is reviewed by a native speaker. Nothing goes live without your approval.' },
      { w: 'Weeks 1–2', t: 'Build &amp; connect', d: 'We connect your lead sources, WhatsApp Business number, CRM and agents’ calendars, and test every path a client could take.' },
      { w: 'Week 2', t: 'Launch &amp; training', d: 'A short session with your agents: how leads arrive, how to take over a chat, how to read the weekly report.' },
      { w: 'Ongoing', t: 'Care', d: 'Hosting, monitoring, adjustments for new listings and seasons, and a monthly review of what is working.' },
    ],
    needEyebrow: 'What we need from you',
    needTitle: 'A short list, and we guide you through it.',
    need: [
      'A WhatsApp Business number (new or existing)',
      'Access to your Meta Business account',
      'Your portal lead-notification emails',
      'Your CRM, or we set up a simple one',
      'Agents’ calendars for viewing slots',
      'Your tone of voice and any brand guidelines',
    ],
    standardsEyebrow: 'Our standards',
    standardsTitle: 'Discretion is part of the service.',
    standards: [
      { t: 'Your data stays yours', d: 'Leads live in your own CRM and accounts. We access them only to run the system.' },
      { t: 'Nothing sent without approval', d: 'You sign off every message template before launch.' },
      { t: 'Native Arabic', d: 'Every Arabic message is written or reviewed by a native speaker.' },
      { t: 'No lock-in', d: 'Cancel with [30] days’ notice. Your number, data and CRM remain yours.' },
    ],
  },

  sectors: {
    title: 'Sectors · Mirsal',
    eyebrow: 'Sectors',
    h1: 'Wherever a sale begins with a message.',
    text: 'Mirsal was designed for real estate, and the same craft serves any business whose clients prefer to start on WhatsApp.',
    items: [
      {
        t: 'Real estate', k: 'Our specialism',
        d: 'Brokerages, developers and leasing teams handling enquiries from portals, advertising and walk-ins.',
        bullets: ['Instant replies to portal and advertising enquiries', 'Qualification by budget, area and timeline', 'Viewing booking into agents’ diaries', 'Off-plan launch registrations and reminders', 'Tenant renewals and new-listing alerts'],
        image: 'Photography · Riyadh skyline at night',
      },
      {
        t: 'Automotive', k: 'Showrooms &amp; dealers',
        d: 'Premium and pre-owned showrooms answering stock, price and finance questions around the clock.',
        bullets: ['Stock and price answers from your inventory', 'Test-drive booking', 'Finance and trade-in pre-qualification', 'Service reminders for existing owners'],
        image: 'Photography · showroom, polished car detail',
      },
      {
        t: 'Seasonal retail', k: 'Dates, perfume, gifting',
        d: 'Specialist shops where demand peaks around Ramadan, Eid and National Day.',
        bullets: ['Price lists and product answers', 'Pre-orders captured before the season', 'Seasonal reminders to past customers', 'Corporate gifting enquiries routed to staff'],
        image: 'Photography · dates and oud, gift box',
      },
    ],
    otherTitle: 'Another sector in mind?',
    otherCta: 'Tell us about it',
  },

  engagement: {
    title: 'Engagement · Mirsal',
    eyebrow: 'Engagement',
    h1: 'A clear investment, quoted plainly.',
    text: 'A one-off setup, then a single monthly fee for hosting, care and improvement. Third-party running costs are billed to you directly, at cost.',
    featuredBadge: 'Most agencies begin here',
    tiers: [
      {
        name: 'Signature', sub: 'For a single agency or team', priceLabel: 'From', price: '[SAR 0,000]', monthly: '+ [SAR 000] / month', featured: true,
        rows: [['Lead sources', 'Up to 3'], ['WhatsApp numbers', '1'], ['Agents', 'Up to [10]'], ['Languages', 'Arabic &amp; English'], ['Launch', 'Two weeks']],
      },
      {
        name: 'Bespoke', sub: 'For developers and multi-branch groups', priceLabel: 'Investment', price: 'By consultation', monthly: '', featured: false,
        rows: [['Lead sources', 'Unlimited'], ['WhatsApp numbers', 'Several teams or branches'], ['Agents', 'Unlimited'], ['Integrations', 'Custom, including your own systems'], ['Launch', 'Agreed together']],
      },
    ],
    button: 'Book a consultation',
    setupTitle: 'The setup includes',
    setup: ['Consultation and demonstration', 'Conversation design in Arabic and English', 'Native Arabic review', 'Connection of lead sources, WhatsApp, CRM and calendars', 'Testing and agent training'],
    monthlyTitle: 'Each month includes',
    monthlyItems: ['Hosting and monitoring', 'Adjustments for new listings and seasons', 'Weekly performance report', 'Monthly review call', 'Priority support on WhatsApp'],
    paidEyebrow: 'Paid directly by you',
    paidTitle: 'No hidden mark-ups.',
    paidText: 'Third-party costs are billed to your own accounts, so you always see exactly what you pay.',
    paid: [
      { t: 'WhatsApp message fees', d: 'Charged by Meta per message category, billed to your own account.' },
      { t: 'CRM subscription', d: 'HubSpot, Zoho or similar, if you use one. Google Sheets is free.' },
      { t: 'AI usage, if enabled', d: 'A few halalas per reply, at cost, with no mark-up.' },
    ],
    terms: 'Minimum term: [3] months. Cancel afterwards with [30] days’ notice. Prices exclude VAT.',
  },

  about: {
    title: 'About · Mirsal',
    eyebrow: 'About',
    h1: 'The messenger, reimagined.',
    text: 'In Khaleeji poetry and song, the mirsal is the trusted messenger who carries words between people with care. We built Mirsal to do the same for your clients.',
    founderEyebrow: 'The founder',
    quote: '“[A sentence in your own words about why you started Mirsal.]”',
    p1: 'I’m Fahim Adam, a software developer based in the United Kingdom. I design and build every Mirsal system. [Partner name] in Riyadh writes and reviews every Arabic conversation, so your clients hear your agency, not a translation.',
    p2: 'We keep our client list small by design. Each agency receives a system built around its own listings, team and way of working, and we look after it personally every month.',
    name: 'Fahim Adam',
    role: 'Founder',
    photo: 'Photography · founder portrait',
    principlesEyebrow: 'What we believe',
    principlesTitle: 'Three principles behind every system.',
    principles: [
      { t: 'Discretion', d: 'Our clients’ clients are often private people. We treat every conversation accordingly.' },
      { t: 'Speed with grace', d: 'Fast replies matter, but never at the expense of courtesy.' },
      { t: 'Craft', d: 'Every agency gets its own scripts, its own voice and a system built around its team.' },
    ],
    bridgeTitle: 'Between London and Riyadh.',
    bridgeText: 'Engineering in the UK, language and relationships in the Gulf. We work in your time zone, meet over video or in person when we visit, and answer on WhatsApp like everyone else here.',
  },

  contact: {
    title: 'Book a consultation · Mirsal',
    eyebrow: 'Private consultation',
    h1: 'Let us show you how your clients will be received.',
    text: 'Share a few details and we will arrange a 20-minute call at a time that suits you, in Arabic or English.',
    fields: {
      name: 'Full name', namePh: 'e.g. Khalid Al-Harbi',
      agency: 'Agency', agencyPh: 'Agency name',
      role: 'Your role', roles: ['Owner / Managing director', 'Sales manager', 'Marketing manager', 'Agent', 'Other'],
      city: 'City', cities: ['Riyadh', 'Jeddah', 'Dammam / Khobar', 'Dubai', 'Abu Dhabi', 'Other'],
      whatsapp: 'WhatsApp number', whatsappPh: '+966 …',
      email: 'Email', emailPh: 'you@agency.com',
      leads: 'Enquiries per month', leadOptions: ['Under 100', '100–300', '300–1,000', 'Over 1,000', 'Not sure'],
      language: 'Preferred language', languages: ['English', 'العربية'],
      message: 'Anything we should know', messagePh: 'Lead sources, CRM, team size…',
      consentBefore: 'I agree to Mirsal contacting me about this request, as described in the',
      consentLink: 'privacy policy',
      submit: 'Request a consultation',
      sending: 'Sending…',
      error: 'Something went wrong. Please try again, or message us on WhatsApp.',
    },
    side: {
      talkLabel: 'Prefer to talk now?',
      talkLink: 'WhatsApp us',
      talkHours: 'Usually within the hour, [9:00–21:00 KSA]',
      emailLabel: 'Email',
      nextLabel: 'What happens next',
      next: ['We reply within one working day to arrange a time.', 'A 20-minute video call about your enquiries.', 'A private demonstration using one of your listings.'],
    },
  },

  thanks: {
    title: 'Thank you · Mirsal',
    arabic: 'شكرًا لك',
    h1: 'Thank you. Your request has been received.',
    text: 'We will be in touch within one working day to arrange your consultation. If it is urgent, message us on WhatsApp and we will reply sooner.',
    primary: 'Message us on WhatsApp',
    secondary: 'Explore the system',
  },

  privacy: {
    title: 'Privacy policy · Mirsal',
    eyebrow: 'Legal',
    h1: 'Privacy policy',
    updated: 'Last updated: [DATE]',
    note: 'Template: replace every [bracket] and have it reviewed by a qualified adviser for the UK, Saudi Arabia and the UAE before publishing. Remove this note afterwards.',
    sections: [
      { t: 'Who we are', d: 'Mirsal is operated by [legal entity name], [registered address]. Contact: privacy@mirsal.example.' },
      { t: 'What we collect', d: 'Details you give us through this website or WhatsApp: name, agency, role, city, phone, email and your message. When we run a system for your agency, we process your clients’ enquiries on your behalf.' },
      { t: 'How we use it', d: 'To respond to your request, provide and support our services, and send service messages. We do not sell personal data or use it for unrelated marketing.' },
      { t: 'Client data we process for agencies', d: 'For enquiries handled by a Mirsal system, your agency is the controller and Mirsal acts as processor under a written agreement. Data is stored in your own CRM and accounts.' },
      { t: 'Where data is stored', d: '[Hosting provider and region]. Where data moves between the UK, Saudi Arabia and the UAE, we apply the safeguards required by applicable law.' },
      { t: 'How long we keep it', d: 'Enquiries that do not become clients: [12] months. Client records: for the engagement plus [24] months, unless the law requires longer.' },
      { t: 'Your rights', d: 'Depending on where you live, including under the UK GDPR, the Saudi Personal Data Protection Law and the UAE Personal Data Protection Law, you may request access, correction, deletion or restriction of your data, and withdraw consent. Write to privacy@mirsal.example.' },
      { t: 'Cookies', d: 'This website uses only essential cookies. [List any analytics cookies here, and ask for consent first.]' },
      { t: 'Changes', d: 'We will post any changes on this page with a new date.' },
    ],
  },

  notFound: {
    title: 'Page not found · Mirsal',
    h1: 'This page could not be found.',
    text: 'The link may be old, or the page may have moved.',
    home: 'Return home',
  },
};

export type Dict = typeof en;
