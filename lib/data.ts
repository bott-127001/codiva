export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  certifications: Array<{
    name: string;
    issuer: string;
    url?: string;
    icon?: string;
  }>;
  avatar: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: 'completed' | 'ongoing' | 'planned';
  category: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ServiceFeature {
  title?: string;
  description: string;
}

export interface SubscriptionService {
  id: string;
  name: string;
  tagline: string;
  whatItIs: string;
  problemSolved?: string;
  targetAudience: string;
  badge: string;
  status: 'active' | 'in-development' | 'beta';
  pricingModel: string;
  coreConcepts: ServiceFeature[];
  architectureDetails?: ServiceFeature[];
  techStack: string[];
  iconType: 'turf' | 'signals' | 'indicator' | 'ai-agent';
  actionLabel: string;
  actionUrl?: string;
  logo?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'prajwal',
    name: 'Prajwal Nangare',
    role: 'Founder & Full-Stack Developer (Frontend)',
    bio: 'Founder of Codiva leading product architecture, design systems, and frontend engineering. Experienced in building responsive web applications, intuitive UX, and autonomous agent workflows.',
    skills: ['Python', 'React', 'Next.js', 'Figma', 'NodeJS', 'TailwindCSS', 'MongoDB', 'AI Agents'],
    certifications: [
      {
        name: 'Google UX Design Professional Certificate',
        issuer: 'Google via Coursera',
        icon: '🎨'
      },
      {
        name: 'Modern Frontend Development (Sigma 6.0)',
        issuer: 'Apna College',
        icon: '💻'
      },
    ],
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 'you',
    name: 'Samarth Salgar',
    role: 'Co-Founder & Full-Stack Developer (Backend)',
    bio: 'Co-founder of Codiva leading backend architecture, database systems, API performance, and quantitative trading algorithms across subscription services.',
    skills: ['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'Python', 'FastAPI'],
    certifications: [
      {
        name: 'Python for Everybody Specialization',
        issuer: 'Coursera',
        icon: '🐍'
      },
      {
        name: 'Node.js Backend Developer Certification',
        issuer: 'OpenJS Foundation',
        icon: '🟩'
      }
    ],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  }
];

export const subscriptionServices: SubscriptionService[] = [
  {
    id: 'prosperia',
    name: 'Prosperia',
    tagline: 'AI Real Estate Lead & Revenue Recovery SaaS',
    whatItIs: 'An AI-powered customer acquisition, conversion, and pipeline management platform built specifically for real estate agencies, property managers, and developers.',
    problemSolved: 'Real estate leads go cold within minutes. Agents miss inquiries across WhatsApp, Facebook Ads, and property portals, leading to massive wasted ad spend and lost commissions.',
    targetAudience: 'Real Estate Agencies, Property Managers & Developers',
    badge: 'AI Lead & Revenue Recovery',
    status: 'active',
    pricingModel: 'Monthly SaaS + Agent Capacity',
    coreConcepts: [
      {
        title: 'AI Lead Capture & Qualification',
        description: 'Automatically ingests incoming buyer/tenant inquiries, parses intent, budget, and location preferences through conversational AI, and qualifies leads instantly.'
      },
      {
        title: 'Automated Multi-Channel Follow-Ups',
        description: 'Executes scheduled, context-aware follow-up sequences across WhatsApp and SMS to keep prospects warm.'
      },
      {
        title: 'Property Visit Scheduler',
        description: 'Handles interactive appointment booking for site visits, syncing calendars and sending automated reminders.'
      },
      {
        title: 'Missed-Opportunity Revenue Recovery',
        description: 'Re-engages dormant leads in the CRM database with targeted offers, resurrecting lost pipeline value.'
      }
    ],
    techStack: ['LLM Conversational Engine', 'WhatsApp Cloud API', 'FastAPI', 'Next.js 14', 'PostgreSQL', 'Vector DB'],
    iconType: 'ai-agent',
    actionLabel: 'Launch Prosperia App',
    actionUrl: 'https://real-estate-iota-six-59.vercel.app/',
    logo: '/images/services/prosperia.jpg'
  },
  {
    id: 'rvolx',
    name: 'RVOLX',
    tagline: 'Institutional Intraday Quantitative Signals Platform',
    whatItIs: 'A leveraged trading signals platform for NSE Nifty 50 cash equities, designed to strip emotion out of the volatile market opening.',
    targetAudience: 'NSE NIFTY 50 Cash & Intraday Traders',
    badge: 'Quantitative Intraday SaaS',
    status: 'active',
    pricingModel: 'Leveraged Subscription',
    coreConcepts: [
      {
        title: '',
        description: 'Math concepts to rule the emotions out for identifying trades.'
      },
      {
        title: '',
        description: 'Strict filters to get the best stocks for the day.'
      },
      {
        title: '',
        description: 'No need to sit the whole day watching charts—just get alerts on WhatsApp.'
      }
    ],
    architectureDetails: [
      {
        title: 'Air-Gapped Quant Engine',
        description: 'Connected via an HMAC-SHA256 authenticated & idempotent signal bridge (<15ms ingestion) into PostgreSQL 18.'
      },
      {
        title: '4 Next.js 14 Portals & RBAC',
        description: 'Portals (/, /dashboard, /admin, /owner/overview) governed by strict 3-tier RBAC.'
      },
      {
        title: 'Sub-450ms WhatsApp Trade Alerts',
        description: 'Upstox API v2 market data feeds, Razorpay webhooks, and decoupled Baileys WhatsApp worker delivering sub-450ms trade alerts.'
      }
    ],
    techStack: ['Next.js 14', 'PostgreSQL 18', 'Python Engine', 'HMAC-SHA256', 'Upstox v2 API', 'Baileys WhatsApp', 'Razorpay Webhooks'],
    iconType: 'signals',
    actionLabel: 'Launch RVOLX Terminal',
    actionUrl: 'https://rvolx.netlify.app/',
    logo: '/images/services/rvolx.jpg'
  },
  {
    id: 'turfflow',
    name: 'TurfFlow',
    tagline: 'Multi-Sport Arena SaaS & Omnichannel Booking Engine',
    whatItIs: 'A subscription-based B2B SaaS platform for multi-sport turf facilities (Football, Box Cricket, Badminton) designed for white-label deployment per venue to centralize day-to-day operations.',
    targetAudience: 'Football, Box Cricket & Badminton Turf Facilities',
    badge: 'Multi-Sport Arena SaaS',
    status: 'active',
    pricingModel: 'B2B White-Label Subscription',
    coreConcepts: [
      {
        title: 'Atomic Slot Locking (Redis Mechanism)',
        description: 'Solves double-booking race conditions through a 5-minute Redis-style distributed locking mechanism that holds selected slots during checkout and auto-releases them if payment expires.'
      },
      {
        title: 'Conversational WhatsApp Booking Agent',
        description: 'Integrates a Baileys + n8n automated assistant enabling users to check real-time slot availability, pick dates, and complete bookings via natural English/Hinglish chat.'
      },
      {
        title: 'Robust Payment & QR Gate Passes',
        description: 'Features Razorpay webhook idempotency with late-capture auto-refund protection and generates secure 4-digit QR Gate Passes upon confirmation.'
      },
      {
        title: 'Owner Operations Console',
        description: 'Automates dynamic peak/weekend/floodlight pricing, rainout bulk cancellations, a 3-strike no-show auto-blacklist, and monthly CSV/Excel owner financial ledger archives—backed by a 38-case edge-test suite.'
      }
    ],
    techStack: ['React 18', 'TypeScript', 'Vite 8', 'Tailwind CSS', 'Node.js', 'Express 4', 'PostgreSQL (Supabase)', 'Redis', 'Razorpay API', 'Baileys + n8n Engine'],
    iconType: 'turf',
    actionLabel: 'Launch TurfFlow App',
    actionUrl: 'https://turfflow-codiva.vercel.app/',
    logo: '/images/services/turfflow.jpg'
  },
  {
    id: 'aladin',
    name: 'Aladin',
    tagline: 'SMC-Based XAUUSD Forex Technical Indicator',
    whatItIs: 'A specialized, institutional-grade technical indicator engineered specifically for Forex trading, with deep optimization for XAUUSD (Gold / US Dollar) price action.',
    targetAudience: 'XAUUSD Gold & Forex Traders',
    badge: 'Under Active Development',
    status: 'in-development',
    pricingModel: 'Proprietary Quantitative License',
    coreConcepts: [
      {
        title: 'Structure Mapping (CHOCH Detection)',
        description: 'Automatically detects and plots structural market shifts, including CHOCH (Change of Character) to signal early trend reversals and breakouts.'
      },
      {
        title: 'Liquidity Zones (TJL Pools)',
        description: 'Identifies TJL (Trendline Liquidity / Trading Junction Liquidity) pools where stop-losses and resting institutional orders congregate, helping traders avoid false breakouts.'
      },
      {
        title: 'Trend & Reversal Confluence',
        description: 'Combines multi-timeframe trend bias with order-block mitigation zones to pinpoint high-probability entry and exit levels for gold volatility.'
      }
    ],
    techStack: ['PineScript v5', 'Smart Money Concepts', 'Python Backtesting', 'TradingView', 'MetaTrader'],
    iconType: 'indicator',
    actionLabel: 'Join Priority Waitlist',
    actionUrl: '#contact'
  }
];

export const projects: Project[] = [
  {
    id: 'portfolio-landing-page',
    title: 'Portfolio Landing Page',
    description: 'Modern, responsive portfolio landing page designed to showcase personal projects, certifications, and skills with elegant UI, smooth animations, and SEO optimization.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    status: 'completed',
    category: 'Portfolio & Agency',
    image: '/images/IMG-20250801-WA0016.jpg',
    demoUrl: 'https://theadsarchitect.netlify.app/',
    featured: true
  },
  {
    id: 'artista-salon-academy',
    title: 'Artista – Luxury Salon & House of Beauty',
    description: 'A performance-optimized web platform for a premium salon and academy, designed to streamline client bookings and course enrollments with dynamic service catalogs and integrated communication.',
    techStack: ['Next.js', 'Tailwind CSS', 'React', 'Framer Motion'],
    status: 'completed',
    category: 'Salon & Beauty',
    image: '/images/artista.png',
    demoUrl: 'https://artistabysupriya.com/',
    featured: true
  },
  {
    id: 'powerup-fitness-gym',
    title: 'PowerUp Fitness & Gym',
    description: 'High-energy web platform engineered for PowerUp Fitness (multi-branch fitness center in Bhukum & Mahalunge, Pune) featuring strength training, CrossFit, personal coaching programs, and membership inquiries.',
    techStack: ['Next.js', 'Tailwind CSS', 'React', 'Framer Motion'],
    status: 'completed',
    category: 'Fitness & Gym',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop',
    demoUrl: 'https://www.powerupfitness.co.in/',
    featured: true
  }
];
