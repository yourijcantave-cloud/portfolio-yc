import { ExperienceItem, GalleryType, Project, Skill } from './types';

export const INTRO_TAGLINE = "Where Technology Meets Imagination";

export const OVERVIEW_CHAPTERS = [
  { id: 'about', number: '', title: 'About Me' },
  { id: 'vision', number: '02', title: 'Philosophy' },
  { id: 'skills', number: '03', title: 'Expertise' },
  { id: 'achievements', number: '04', title: 'Achievements' },
  { id: 'process', number: '05', title: 'Methodology' },
  { id: 'experience', number: '06', title: 'Experience' },
  { id: 'featured-projects', number: '07', title: 'Featured Projects' },
  { id: 'portfolio', number: '08', title: 'Projects Gallery' },
  { id: 'testimonials', number: '09', title: 'Testimonials' },
  { id: 'contact', number: '10', title: 'Contact' },
];

export const EDUCATION = [
  { year: '2009', degree: 'AEC Multimedia & Video Production', institution: 'Collège Marsan' },
  { year: '2007', degree: 'AEC Pre-Press Graphic Design', institution: 'Cégep Ahuntsic' },
  { year: '2004', degree: 'Art Certificate', institution: 'Université du Québec à Montréal (UQAM)' },
];

export const VISION_TEXT = "I envision a world where creativity is accessible and celebrated, where thoughtful visuals can uplift, inform and inspire people across cultures and industries.";
export const PHILOSOPHY_TEXT = "Creativity to me is not just a skill, it’s a way of thinking and a mean to connect with the world. My philosophy is grounded in storytelling, emotion, and functionality. I believe that impactful designs stem from a strong narrative paired with visual clarity.";

export const SOFT_SKILLS = [
  "Positive attitude & strong interpersonal skills",
  "Dynamic, passionate, creative solutions",
  "Effective multidisciplinary teamwork",
  "Quick adaptation to change",
  "Time management",
  "Continuous learning & growth"
];

export const TECH_STACK: Skill[] = [
  { name: 'Adobe Creative Suite', level: 85, category: 'software' },
  { name: 'MS Office', level: 80, category: 'software' },
  { name: 'Google Workspace', level: 75, category: 'software' },
  { name: 'Affinity V3 / Canva', level: 80, category: 'software' },
  { name: 'Davinci Resolve', level: 75, category: 'software' },
  { name: 'Gen AI', level: 75, category: 'ai' },
];

export const ACHIEVEMENTS = [
  "Google AI Essentials Specialization Certificate",
  "Introduction to Generative AI Learning Path Specialization Certificate",
  "Google Prompting Essentials Specialization Certificate"
];

export const EXPERIENCE: ExperienceItem[] = [
  { role: 'Freelance Graphic Designer', company: 'Self-Employed', period: '2009 - Present', location: 'Home Office' },
  { role: 'Senior Designer & Coordinator', company: 'Caméléo Photo', period: '2013 - 2014', location: 'Ste-Julie, Qc.' },
  { role: 'Technical Support Specialist', company: 'Telus Telecommunications', period: '2015 - 2021', location: 'Montréal, Qc.' },
  { role: 'Technical Advisor', company: 'TC Transcontinental', period: '2022 - Present', location: 'Boucherville, Qc.' },
];

export const TESTIMONIALS = [
  { text: "Youri’s ability to simplify complex ideas is unmatched. He turned our vague concepts into a stunning visual identity.", author: "Startup Founder" },
  { text: "Professional, creative, and incredibly easy to work with. The branding overhaul was exactly what we needed.", author: "Small Business Owner" },
  { text: "His attention to detail in photo retouching is artistic wizardry. Highly recommended.", author: "Photography Client" }
];

// Helper to generate multiple placeholder pages for branding
const generateBrandingPages = (count: number, seed: string) => {
  return Array.from({ length: count }, (_, i) => `https://picsum.photos/seed/${seed}-${i}/1200/800`);
};

// Gallery Projects
export const PROJECTS: Project[] = [
  // --- PHOTO EDITING ---
  ...Array.from({ length: 16 }, (_, i) => {
    const n = i + 1;
    const thumbUrl = `https://storage.googleapis.com/ycp_portfolio-website/Photo%20Edits/Before%20%26%20After/Thumbnails%20Webp/Retouch%20${n}.1%20Thumbnail.webp`;
    const originalUrl = `https://storage.googleapis.com/ycp_portfolio-website/Photo%20Edits/Before%20%26%20After/Full%20Screen%20Webp/Retouch%20${n}.1.webp`;
    const editedUrl = `https://storage.googleapis.com/ycp_portfolio-website/Photo%20Edits/Before%20%26%20After/Full%20Screen%20Webp/Retouch%20${n}.2.webp`;
    
    return {
      id: `pe-r-${n}`, 
      category: GalleryType.PHOTO_EDITING, 
      subCategory: 'Retouches', 
      title: `Precision Retouching`,
      gridSpan: n === 16 ? 3 : undefined,
      thumbnail: thumbUrl,
      imageBefore: originalUrl, 
      imageAfter: editedUrl
    };
  }),

  // --- PHOTO EDITING: PHOTO MONTAGES (4 Projects) ---
  ...Array.from({ length: 4 }, (_, i) => {
    const n = i + 1;
    const thumbUrl = `https://storage.googleapis.com/ycp_portfolio-website/Photo%20Edits/Before%20%26%20After/Thumbnails%20Webp/Retouch%20${n + 16}.1%20Thumbnail.webp`;
    const imageBefore = `https://storage.googleapis.com/ycp_portfolio-website/Photo%20Edits/Before%20%26%20After/Full%20Screen%20Webp/Retouch%20${n + 16}.1.webp`;
    const imageAfter = `https://storage.googleapis.com/ycp_portfolio-website/Photo%20Edits/Before%20%26%20After/Full%20Screen%20Webp/Retouch%20${n + 16}.2.webp`;
    
    return {
      id: `pe-m-${n}`,
      category: GalleryType.PHOTO_EDITING,
      subCategory: 'Photo Montage',
      title: `Photo Montage`,
      thumbnail: thumbUrl,
      imageBefore: imageBefore,
      imageAfter: imageAfter
    };
  }),

  // --- PHOTO EDITING: COLOR ADJUSTMENTS (38 Projects) ---
  ...Array.from({ length: 38 }, (_, i) => {
    const n = i + 1;
    const thumbUrl = `https://storage.googleapis.com/ycp_portfolio-website/Photo%20Edits/Before%20%26%20After/Thumbnails%20Webp/Color%20Adjustments%20${n}.2%20Thumbnail.webp`;
    const imageBefore = `https://storage.googleapis.com/ycp_portfolio-website/Photo%20Edits/Before%20%26%20After/Full%20Screen%20Webp/Color%20Adjustments%20${n}.1.webp`;
    const imageAfter = `https://storage.googleapis.com/ycp_portfolio-website/Photo%20Edits/Before%20%26%20After/Full%20Screen%20Webp/Color%20Adjustments%20${n}.2.webp`;
    
    return {
      id: `pe-c-${n}`,
      category: GalleryType.PHOTO_EDITING,
      subCategory: 'Color Adjustments',
      title: `Color Adjustment`,
      thumbnail: thumbUrl,
      imageBefore: imageBefore,
      imageAfter: imageAfter
    };
  }),

  // --- VIDEO EDITING ---
  { 
    id: 've-2', 
    category: GalleryType.VIDEO_EDITING, 
    title: 'Cheeks Simon present Artist "Nixon"', 
    description: 'A compelling artist presentation featuring Nixon, directed and edited to highlight the artist\'s unique style and creative journey.',
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Video%20Edits/SAVALOUWE.webp', 
    videoUrl: 'https://www.youtube.com/embed/kVJG6EPSQsQ?si=VPNUvn5owcvHEGMs' 
  },
  { 
    id: 've-3', 
    category: GalleryType.VIDEO_EDITING, 
    title: 'The Human Journey', 
    subtitle: '(Part 1)',
    description: 'An introspective look into the human experience, utilizing cinematic storytelling and evocative imagery to explore profound themes.',
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Video%20Edits/The%20Human%20Journey.webp', 
    videoUrl: 'https://www.youtube.com/embed/xBq5gDDMgZw?si=9qIL6SRmohwIfT8u' 
  },
  { 
    id: 've-1', 
    category: GalleryType.VIDEO_EDITING, 
    title: 'B.O.D.B. Amber Rose Event Promo Reels', 
    description: 'A collection of high-energy event promo reels captured during the B.O.D.B. Amber Rose event, showcasing dynamic editing and vibrant atmosphere.',
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Video%20Edits/B.O.D.B.%20Amber%20Rose%20Event%20Promo%20Reel%2001.webp', 
    items: [
      { 
        title: 'Promo Reel 01', 
        thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Video%20Edits/B.O.D.B.%20Amber%20Rose%20Event%20Promo%20Reel%2001.webp', 
        videoUrl: 'https://www.youtube.com/embed/yqUk5LsTbE0?si=qyamtfH08en6Nda3' 
      },
      { 
        title: 'Promo Reel 02', 
        thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Video%20Edits/B.O.D.B.%20Amber%20Rose%20Event%20Promo%20Reel%2002.webp', 
        videoUrl: 'https://www.youtube.com/embed/NucQbG1o4Mg?si=diILjMEL1mNYffkN' 
      }
    ]
  },
  
  // --- BRANDING: BRAND GUIDES (Exactly 6 Projects) ---
  { 
    id: 'bd-g-1', 
    category: GalleryType.BRANDING, 
    subCategory: 'Brand Guides', 
    title: 'Blue Magic Entertainment', 
    description: 'This project details the creation of the Blue Magic Entertainment company logo and its various variants, designed to maintain a consistent and high-impact visual identity across all nightlife event planning platforms.', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Blue%20Magic%20Webp/Blue%20Magic%20Thumbnail.webp', 
    images: ['https://storage.googleapis.com/ycp_portfolio-website/Branding/Blue%20Magic%20Webp/Black%20and%20White%20Refined%20Elegant%20Household%20Brand%20Board.webp'] 
  },
  { 
    id: 'bd-g-2', 
    category: GalleryType.BRANDING, 
    subCategory: 'Brand Guides', 
    title: 'C.C.F.A.', 
    description: 'Visual language system for Montreal\'s iconic Carifiesta festival, celebrating vibrant Caribbean culture through bold color palettes and dynamic design elements.', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/C.C.F.A.%20Carifiesta/CCFA%20Main%20Logo%20Thumbnail%203.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/C.C.F.A.%20Carifiesta/CCFA%20Main%20Logo.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/C.C.F.A.%20Carifiesta/CCFA%20Brand%20Guide%2001.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/C.C.F.A.%20Carifiesta/CCFA%20Brand%20Guide%2002.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/C.C.F.A.%20Carifiesta/CCFA%20Brand%20Guide%2003.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/C.C.F.A.%20Carifiesta/CCFA%20Brand%20Guide%2004.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/C.C.F.A.%20Carifiesta/CCFA%20Brand%20Guide%2005.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/C.C.F.A.%20Carifiesta/CCFA%20Brand%20Guide%2006.webp'
    ] 
  },
  { 
    id: 'bd-g-3', 
    category: GalleryType.BRANDING, 
    subCategory: 'Brand Guides', 
    title: 'DJ Benz', 
    description: 'Sleek, modern identity for a professional audio engineer, focusing on technical precision and urban artistic flair.', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/DJ%20Benz/DJ%20Benz%20Icon%20Logo%20Thumbnail%201.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/DJ%20Benz/DJ%20Benz%20Main%20Logo.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/DJ%20Benz/DJ%20Benz%20Brand%20Guide%20Board.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/DJ%20Benz/DJ%20Benz%20Horizontal%20Logo.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/DJ%20Benz/DJ%20Benz%20Vertical%20Stacked%20Logo.webp'
    ] 
  },
  { 
    id: 'bd-g-4', 
    category: GalleryType.BRANDING, 
    subCategory: 'Brand Guides', 
    title: 'La 25e Image Production', 
    description: 'Elegant corporate branding for a cinematic production house, emphasizing visual storytelling and high-end production values.', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/La%2025e%20Image/La%2025e%20Image%20Icon%20Logo%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/La%2025e%20Image/La%2025e%20Image%20Main%20Logo.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/La%2025e%20Image/La%2025e%20Image%20Brand%20Guide%2001.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/La%2025e%20Image/La%2025e%20Image%20Brand%20Guide%2002.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/La%2025e%20Image/La%2025e%20Image%20Brand%20Guide%2003.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/La%2025e%20Image/La%2025e%20Image%20Brand%20Guide%2004.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/La%2025e%20Image/La%2025e%20Image%20Brand%20Guide%2005.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/La%2025e%20Image/La%2025e%20Image%20Brand%20Guide%2006.webp'
    ] 
  },
  { 
    id: 'bd-g-5', 
    category: GalleryType.BRANDING, 
    subCategory: 'Brand Guides', 
    title: 'Melodi Music', 
    description: 'A harmonious visual system for a recording studio that balances artistic expression with technical expertise.', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Melodi/Melodi%20Icon%20Logo%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Melodi/Melodi%20Main%20Logo.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Melodi/Melodi%20Brand%20Guidlines%2001.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Melodi/Melodi%20Brand%20Guidlines%2002.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Melodi/Melodi%20Brand%20Guidlines%2003.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Melodi/Melodi%20Brand%20Guidlines%2004.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Melodi/Melodi%20Brand%20Guidlines%2005.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Melodi/Melodi%20Brand%20Guidlines%2006.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Melodi/Melodi%20Brand%20Guidlines%2007.webp'
    ] 
  },
  { 
    id: 'bd-g-6', 
    category: GalleryType.BRANDING, 
    subCategory: 'Brand Guides', 
    title: 'Traxx Hair Salon', 
    description: 'Premium branding for an Afro-centric hair salon, blending traditional styles with modern luxury aesthetics.', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Salon%20Traxx/Traxx%20Logo%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Salon%20Traxx/Traxx%20Main%20Logo.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Salon%20Traxx/Traxx%20BSG%2001.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Salon%20Traxx/Traxx%20BSG%2002.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Salon%20Traxx/Traxx%20BSG%2003.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Salon%20Traxx/Traxx%20BSG%2004.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Salon%20Traxx/Traxx%20BSG%2005.webp'
    ] 
  },
  { 
    id: 'bd-g-7', 
    category: GalleryType.BRANDING, 
    subCategory: 'Brand Guides', 
    title: 'Images Kreyol', 
    description: 'A comprehensive visual identity for Haiti\'s leading school photography experts, specializing in green screen technology to deliver professional and creative student portraits.', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Images%20Kreyol/Ik%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Images%20Kreyol/1.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Images%20Kreyol/2.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Images%20Kreyol/3.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Images%20Kreyol/4.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Images%20Kreyol/5.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Images%20Kreyol/6.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Images%20Kreyol/7.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Images%20Kreyol/8.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Branding/Images%20Kreyol/9.webp'
    ] 
  },

  // --- BRANDING: BRAND LOGOS (12 Images) ---
  { id: 'bd-l-1', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 01', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2001%20Thumbnail.webp' },
  { id: 'bd-l-2', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 02', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2002%20Thumbnail.webp' },
  { id: 'bd-l-3', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 03', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2003%20Thumbnail_1.webp' },
  { id: 'bd-l-4', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 04', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2004%20Thumbnail%201.webp' },
  { id: 'bd-l-5', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 05', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2005%20Thumbnail.webp' },
  { id: 'bd-l-6', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 06', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2006%20Thumbnail.webp' },
  { id: 'bd-l-7', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 07', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2007%20Thumbnail.webp' },
  { id: 'bd-l-8', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 08', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2008%20Thumbnail.webp' },
  { id: 'bd-l-9', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 09', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2009%20Thumbnail.webp' },
  { id: 'bd-l-10', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 10', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2010%20Thumbnail.webp' },
  { id: 'bd-l-11', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 11', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2011%20Thumbnail.webp' },
  { id: 'bd-l-12', category: GalleryType.BRANDING, subCategory: 'Brand Logos', title: 'Signature Mark 12', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Branding/Brand%20Logos/Logo%2012%20Thumbnail.webp' },

  // --- ILLUSTRATIVE DESIGNS (Exactly 8 Projects) ---
  { 
    id: 'il-1', 
    category: GalleryType.ILLUSTRATIVE, 
    title: 'AI Studio Deployment Blueprint', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/AI%20Studio%20Deployment%20Blueprint/Project%201%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/AI%20Studio%20Deployment%20Blueprint/1.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/AI%20Studio%20Deployment%20Blueprint/2-3.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/AI%20Studio%20Deployment%20Blueprint/4-5.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/AI%20Studio%20Deployment%20Blueprint/6-7.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/AI%20Studio%20Deployment%20Blueprint/8-9.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/AI%20Studio%20Deployment%20Blueprint/10-11.webp'
    ]
  },
  { 
    id: 'il-2', 
    category: GalleryType.ILLUSTRATIVE, 
    title: 'Architecting Visual Authority', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Architecting%20Visual%20Authority/Project%202%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Architecting%20Visual%20Authority/1-2.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Architecting%20Visual%20Authority/3-4.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Architecting%20Visual%20Authority/5-6.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Architecting%20Visual%20Authority/7-8.webp'
    ]
  },
  { 
    id: 'il-3', 
    category: GalleryType.ILLUSTRATIVE, 
    title: 'B.O.D.B. Entertainment', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/BODB/Project%203%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/BODB/1.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/BODB/2.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/BODB/3.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/BODB/4.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/BODB/5.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/BODB/6.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/BODB/7.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/BODB/8.webp'
    ]
  },
  { 
    id: 'il-4', 
    category: GalleryType.ILLUSTRATIVE, 
    title: 'Caméléo Photo', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/Project%2004%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/1.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/2.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/3.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/4.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/5.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/6.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/7.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/8.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/9.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Cameleo%20Photo/10.webp'
    ]
  },
  { 
    id: 'il-5', 
    category: GalleryType.ILLUSTRATIVE, 
    title: 'Flyers / Posters', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Flyers/Project%2005%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Flyers/1.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Flyers/2.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Flyers/3.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Flyers/4.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Flyers/5.webp'
    ]
  },
  { 
    id: 'il-6', 
    category: GalleryType.ILLUSTRATIVE, 
    title: 'Social Growth Playbook', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Growth%20Playbook/Project%2006%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Growth%20Playbook/1.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Growth%20Playbook/2-3.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Growth%20Playbook/4-5.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Growth%20Playbook/6-7.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Growth%20Playbook/8-9.webp'
    ]
  },
  { 
    id: 'il-7', 
    category: GalleryType.ILLUSTRATIVE, 
    title: 'Social Strategy Playbook', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Strategy%20Playbook/Project%2007%20Thumbnail%202.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Strategy%20Playbook/1.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Strategy%20Playbook/2-3.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Strategy%20Playbook/4-5.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Strategy%20Playbook/6-7.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Strategy%20Playbook/8-9.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Strategy%20Playbook/10-11.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/Social%20Strategy%20Playbook/12-13.webp'
    ]
  },
  { 
    id: 'il-8', 
    category: GalleryType.ILLUSTRATIVE, 
    title: 'The Collaborative Social Model', 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/The%20Collaborative%20Social%20Model/Project%2008%20Thumbnail.webp', 
    images: [
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/The%20Collaborative%20Social%20Model/1.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/The%20Collaborative%20Social%20Model/2-3.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/The%20Collaborative%20Social%20Model/4-5.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/The%20Collaborative%20Social%20Model/6-7.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/The%20Collaborative%20Social%20Model/8-9.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/The%20Collaborative%20Social%20Model/10-11.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/The%20Collaborative%20Social%20Model/12-13.webp',
      'https://storage.googleapis.com/ycp_portfolio-website/Illustrations/The%20Collaborative%20Social%20Model/14-15.webp'
    ]
  },
  
  // Photography
  { id: 'ph-1', category: GalleryType.PHOTOGRAPHY, title: 'Urban Study', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Photography.png', imageAfter: 'https://storage.googleapis.com/ycp_portfolio-website/Photography.png' },
  { id: 'ph-2', category: GalleryType.PHOTOGRAPHY, title: 'Nature Texture', thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Photography.png', imageAfter: 'https://storage.googleapis.com/ycp_portfolio-website/Photography.png' },
  
  // Podcasts
  { 
    id: 'po-1', 
    category: GalleryType.PODCASTS, 
    title: "Cheeks & Polo React", 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Podcast.png', 
    videoUrl: 'https://storage.googleapis.com/ycp_portfolio-website/Podcast/Cheeks%20And%20Polo%20Podcast%202.mp4',
    description: 'Expertly directed and edited video podcast highlighting conversational depth through dynamic multi-camera cuts and professional color grading.'
  },
  { 
    id: 'po-2', 
    category: GalleryType.PODCASTS, 
    title: "Cheeks Simon & Invités", 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Podcast.png', 
    videoUrl: 'https://storage.googleapis.com/ycp_portfolio-website/Podcast/Cheeks%20et%20Invit%C3%A9s.mp4',
    description: 'A polished video production focusing on Diaspora discussions, where post-production management ensures clarity, pacing, and visual engagement.'
  },
  { 
    id: 'po-3', 
    category: GalleryType.PODCASTS, 
    title: "Le Son du Real", 
    thumbnail: 'https://storage.googleapis.com/ycp_portfolio-website/Podcast.png', 
    videoUrl: 'https://storage.googleapis.com/ycp_portfolio-website/Podcast/Polo%20Podcast%20Solo%202.mp4',
    description: 'High-impact video editing and direction, creating a professional atmosphere for meaningful dialogue.'
  }
];
