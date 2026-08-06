export type Demo = {
  id: string;
  title: string;
  client: string;
  category: string;
  blurb: string;
  url: string;
  stack: string[];
  year: string;
  featured?: boolean;
  /** true = we don't have real data yet, card renders a "coming soon" state */
  placeholder?: boolean;
};

export const demos: Demo[] = [
  {
    id: "artista",
    title: "Artista by Supriya",
    client: "Artista by Supriya",
    category: "Salon & Beauty",
    blurb:
      "Luxury salon, makeup & beauty studio in Pune — bridal makeovers, hair styling, skin treatments & beauty services.",
    url: "https://artistabysupriya.com/",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2025",
    featured: true,
  },
  {
    id: "ads-architect",
    title: "The Ads Architects",
    client: "The Ads Architects",
    category: "Portfolio & Agency",
    blurb:
      "Conversion-focused performance ad agency portfolio — high-ROI campaign management, PPC, social ads, and funnel optimization.",
    url: "https://theadsarchitect.netlify.app/",
    stack: ["React", "Tailwind CSS", "Netlify"],
    year: "2025",
    featured: true,
  },
  {
    id: "cafe-kathaa",
    title: "Café Kathaa",
    client: "Café Kathaa",
    category: "Café & Dining",
    blurb:
      "Pune's iconic heritage bungalow café on FC Road — books, plants, community events, coffee & continental plates.",
    url: "https://kathaa-cafe.vercel.app/",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    featured: true,
  },
  {
    id: "729-grams",
    title: "729 Grams Coffee",
    client: "729 Grams Coffee Roasters",
    category: "Café & Dining",
    blurb:
      "Third-wave specialty coffee roastery & café in Koregaon Park, Pune — Indian single origins, barrel-aged brews and sourdough bakes.",
    url: "https://729gramscoffee.vercel.app/",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    featured: true,
  },
  {
    id: "the-voyage",
    title: "The Voyage",
    client: "The Voyage Cafe & Hostel",
    category: "Café & Dining",
    blurb:
      "A nautical-inspired co-working cafe, backpacker haven & pet-friendly community sanctuary in Koregaon Park, Pune.",
    url: "https://thevoyage-nu.vercel.app/",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
  },
  {
    id: "flying-gypsys",
    title: "Cafe Flying Gypsys",
    client: "Cafe Flying Gypsys",
    category: "Café & Dining",
    blurb:
      "24/7 station for brews, bites & cues near FC Road, Pune — pool & snooker lounge, late-night Maggi, and pet-friendly vibes.",
    url: "https://cafe-flying-gypsys.vercel.app/",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
  },
  {
    id: "mauji-cafe",
    title: "Mauji — The Time Cafe",
    client: "Mauji Spaces",
    category: "Café & Dining",
    blurb:
      "India's first time cafe in Bhoslenagar, Pune & Nagpur — pay for time, not coffee, with unlimited complimentary brews & creator studio.",
    url: "https://mauji-cafe-delta.vercel.app/",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
  },
  {
    id: "raise-the-bar",
    title: "Raise The Bar Fitness",
    client: "Raise The Bar Fitness Center",
    category: "Fitness & Gym",
    blurb:
      "Strength, HIIT, functional turf & personal training in Wanowrie, Pune — premium cardio, iron rack & recovery zone.",
    url: "https://gym-demo-red.vercel.app/",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
  },
  {
    id: "raise-the-bar-green",
    title: "Raise The Bar (Green Edition)",
    client: "Raise The Bar Fitness Center",
    category: "Fitness & Gym",
    blurb:
      "Premier strength & athletic training center in Wanowrie, Pune — turf track, steam bath & certified personal coaches.",
    url: "https://gym-demo-green-seven.vercel.app/",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
  },
  {
    id: "hustle-gym",
    title: "Hustle Gym Kharadi",
    client: "Hustle Gym",
    category: "Fitness & Gym",
    blurb:
      "7,000+ sq ft bold fitness floor in Kharadi, Pune — strength racks, free weights, cardio zone & personal coaching.",
    url: "https://hustle-gym-seven.vercel.app/",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
  },
  {
    id: "power-up-fitness",
    title: "Power Up Fitness",
    client: "Power Up Fitness",
    category: "Fitness & Gym",
    blurb:
      "Multi-branch fitness center in Bhukum & Mahalunge, Pune — weight training, CrossFit, yoga, Zumba & personalized coaching.",
    url: "https://powerup-gym.vercel.app/",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
  },
  {
    id: "power-up-3d",
    title: "Power Up 3D Gym",
    client: "Power Up Fitness",
    category: "Fitness & Gym",
    blurb:
      "3D interactive experience & motion landing page for Power Up Fitness — multi-branch gym in Pune with custom canvas animation.",
    url: "https://power-up-iota.vercel.app/",
    stack: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    featured: true,
  },
];

export const categories = ["All", ...Array.from(new Set(demos.map((d) => d.category)))];
