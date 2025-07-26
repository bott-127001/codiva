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

export const teamMembers: TeamMember[] = [
  {
    id: 'you',
    name: 'Mr. Samarth Salgar',
    role: 'Full-Stack Developer (Backend)',
    bio: 'Passionate full-stack developer with a strong focus on backend systems. Leading backend architecture and API design at Codiva, while also contributing across the full stack.',
    skills: ['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'python'],
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
  },
  {
    id: 'prajwal',
    name: 'Mr. Prajwal Nangare',
    role: 'Full-Stack Developer (Frontend)',
    bio: 'Expert full-stack developer specializing in modern frontend frameworks and intuitive user experiences, with strong backend proficiency. Co-founding Codiva with a vision for sleek, performant, and innovative web solutions.',
    skills: ['Python', 'React', 'VueJS', 'Figma', 'NodeJS', 'TailwindCSS', 'MongoDB'],
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
    id: 'marketer',
    name: 'Mr. Om Laygude',
    role: 'Digital Marketing Specialist(SEO & Marketing)',
    bio: 'Strategic digital marketing expert driving growth through SEO, content marketing, and data-driven campaigns. Building brand presence.',
    skills: ['SEO', 'Content Marketing', 'Google Analytics', 'Social Media Management', 'PPC', 'Email Marketing', 'Ads campaign'],
    certifications: [
      {
        name: 'Google Analytics Certified',
        issuer: 'Google',
        icon: '📊'
      },
      {
        name: 'Advanced Web Analytics with GA4',
        issuer: 'Simplilearn',
        icon: '📊'
      }
    ],
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 'manager',
    name: 'Mr. Akshat Pande',
    role: 'Technical Manager & Lead',
    bio: 'Experienced technical leader overseeing project delivery and team coordination. Ensuring quality and timely delivery of all Codiva projects.',
    skills: ['Project Management', 'Agile', 'Team Leadership', 'Architecture Design', 'Quality Assurance'],
    certifications: [
      {
        name: 'PMP Certified',
        issuer: 'Project Management Institute',
        icon: '📋'
      },
      {
        name: 'Scrum Master Certification',
        issuer: 'Scrum Alliance',
        icon: '🏃'
      }
    ],
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
  }
];

export const projects: Project[] = [
  {
    id: 'portfolio-landing-page',
    title: 'Portfolio Landing Page',
    description: 'Modern, responsive portfolio landing page designed to showcase personal projects, certifications, and skills with elegant UI, smooth animations, and SEO optimization.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vercel'],
    status: 'completed',
    category: 'Frontend Project',
    image: '/landing_page_image.jpg',
    demoUrl: 'https://theadsarchitect.netlify.app/',
    featured: true
  },

  {
    id: 'astro-commerce-platform',
    title: 'Kaivalya Astrology – Astrological consultation & Gemstone E-Commerce Platform',
    description: 'A full-stack e-commerce platform built for astrology services, gemstone sales, and consultation bookings. It includes secure payment integration, product recommendation based on birth details, and admin dashboards for order and appointment management.',
    techStack: ['NodeJS', 'Tailwind CSS', 'Stripe/Razor', 'MongoDb Atlas', 'ReactJS', 'Whereby API'],
    status: 'completed',
    category: 'Web Application',
    image: '/kaivalya_homepage.png',
    demoUrl: 'https://kushal-15gt.onrender.com',
    featured: true
  },
  
  {
    id: 'quantum-engine',
    title: 'Quantum Engine – Personal Trading Analytics Platform',
    description: 'A personalized trading engine designed for real-time market tracking, analytics, and strategy execution. Built for a single user to monitor option flows, visualize indicators, and analyze trades with speed and clarity.',
    techStack: ['React', 'Tailwind CSS', 'Python', 'FastAPI', 'MongoDB Atlas'],
    status: 'ongoing',
    category: 'Trading Platform',
    image: '/logo.jpg',
    featured: true
  },
  
  {
    id: 'rudraksha-ecommerce',
    title: 'Rudraksha E-Commerce & Content Platform',
    description: 'A feature-rich web application for selling Rutraks, integrated with a dynamic blog, interactive quizzes, and secure checkout via Stripe/Razorpay. Built for high engagement and seamless product discovery.',
    techStack: ['React', 'Node.js', 'MongoDB Atlas', 'Express', 'Stripe/Razorpay'],
    status: 'planned',
    category: 'Web Application',
    image: '/logo.jpg',
    featured: false
  },
  {
    id: 'rudraksh-essence-platform',
    title: 'Rudraksh Essence – Rudraksha-Centric Learning & E-Commerce Platform',
    description: 'An evolving platform dedicated to spreading authentic knowledge about Rudraksha through interactive blogs, spiritual quizzes, and curated product offerings. The project combines learning, discovery, and commerce to help users explore the essence of Rudraksha deeply.',
    techStack: ['NextJS', 'Tailwind CSS', 'MongoDb Atlas', 'Stripe', 'React Query'],
    status: 'ongoing',
    category: 'Web Application',
    image: '/logo.jpg',
    demoUrl: 'https://rudraksh-essence-dev.onrender.com',
    featured: false
  }
  
  
];

console.log('Data loaded:', { teamMembers: teamMembers.length, projects: projects.length });